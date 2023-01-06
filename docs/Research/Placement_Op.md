---
id: Research - Placement Optimization
title: Placement Optmization
sidebar_position: 1
---

### Introduction

- The current method useed to find a desirable placement for an object is to use an approach similar to the CNN with 16 different rotational degrees and 160 x 89 descretization of the workspace.

- Using this method, the results show significant improvement over those using the method of uniform sampling.

    ```
    Using template-based sampling, we have 1228 valid samples from 2840 tires.
    Using template-based sampling, we have 113 valid probs from 142 probs
    Using template-based sampling, type failures: 1: 466 2: 0 3: 734 4: 815 5: 139 6: 12
    Using uniform sampling, we have 104 valid samples from 2840 tires.
    Using uniform sampling, we have 41 valid probs from 142 probs
    Using uniform sampling, type failures: 1: 2314 2: 0 3: 1435 4: 1793 5: 1091 6: 629
    ```

### Problem

However, observing the results, we can see failure reason 1 (collision with fixed and movable obstacles) is around 600 / 2840 samples and failure reason 5 (collsion with future moved objects) is around 200 / 2840 samples. These failures can be solved using a filter with better precision so that we can get even better results.

### Methods

#### I. Image based approach algorithm

1. Checks whether the placement returned from the first stage CNN method is collision free with fixed, movable, and future obstacles.
    ```python
    # in evaluate_template_based_sampling_new.py
    if any(pairwise_collision(obj_pid2obj[place_movable].pid, obst.pid) for obst in
                    obstacle_objects + fixed_obstacles) or if_collides_fut_moved_objects(fut_vols,
                                                                                            obj_pid2obj[place_movable]):
    ```

2. If the above conditino is true, the function `optimize_placement_pose()` is called to get a finer placement using the current placement info.

3. In `optimize_placement_pose()` function, it first generates a scaled up image representation of the workspace and add a white padding surronding the workspace.
    ```python
    # In template_based_sampling_new.py
    img = create_initial_img(obj_pose_pairs, finer_steps)

    x_in_img_without_rot, y_in_img_without_rot, rot, x_in_sim, y_in_sim, pitch, x_in_img_with_rot, y_in_img_with_rot, rot_degree_in_img = curr_placement

    margin = to_place_obj_h_in_img * 0.5
    img = np.pad(img, math.ceil(margin * finer_steps), constant_values=1)
    ```

4. Then, the img will be clipped into a smaller image surronding the perposed object placement with window size twice as big as the object.
    ```python
    up_clip = int((y_in_img_without_rot - top_pad_size_rot0 + margin - to_place_obj_h_in_img/2 - margin) * finer_steps)
    down_clip = int(up_clip + to_place_obj_h_in_img * finer_steps + 2 * margin * finer_steps)
    left_clip = int((x_in_img_without_rot - left_pad_size_rot0 + margin - to_place_obj_w_in_img/2 - margin) * finer_steps)
    right_clip = int(left_clip + to_place_obj_h_in_img * finer_steps + 2 * margin * finer_steps)
    clipped_img = img[up_clip:down_clip, left_clip:right_clip]
    ```

5. Create images with various rotations of the to-place object given the number of angles and original rotation.

    ```python
    # Return a list of degree differences given the parent and child number of angles
    degree_diff_lst = get_finer_degrees_diff_list(num_angles, finer_num_angles)
    rotated_imgs = np.zeros((finer_num_angles, clipped_img.shape[0], clipped_img.shape[1]))

    # Draw bowl with different degrees
    for index, rot_degree in enumerate(degree_diff_lst):
        x_center = clipped_img.shape[1] / 2
        y_center = clipped_img.shape[0] / 2

        # compute 4 corner points, assuming the obj has no rotation
        x1_in_img = x_center - finer_steps * to_place_obj_w_in_img / 2 - finer_steps / 10 # pixel coordinates
        y1_in_img = y_center - finer_steps * to_place_obj_h_in_img / 2 - finer_steps / 10

        x2_in_img = x1_in_img + to_place_obj_w_in_img * finer_steps + finer_steps / 10
        y2_in_img = y1_in_img

        x3_in_img = x2_in_img
        y3_in_img = y1_in_img + to_place_obj_h_in_img * finer_steps + finer_steps / 10

        x4_in_img = x1_in_img
        y4_in_img = y3_in_img

        # rotate the corner points around the center of the object
        x1p, y1p = rotate_on_2d(x1_in_img, y1_in_img, x_center, y_center, rot_degree + rot)
        x2p, y2p = rotate_on_2d(x2_in_img, y2_in_img, x_center, y_center, rot_degree + rot)
        x3p, y3p = rotate_on_2d(x3_in_img, y3_in_img, x_center, y_center, rot_degree + rot)
        x4p, y4p = rotate_on_2d(x4_in_img, y4_in_img, x_center, y_center, rot_degree + rot)

        r = np.array([y1p, y2p, y3p, y4p])
        c = np.array([x1p, x2p, x3p, x4p])

        rr, cc = draw.polygon(r, c, shape=img.shape)
        rotated_imgs[index][rr, cc] = 1
    ```

6. Multiply the original clipped image with each rotated image and sum each cell of the resulting matrix.
    ```python
    # Multiply each with the original image
    rotated_imgs_tensor = torch.from_numpy(rotated_imgs).float().to(device)
    clipped_img_tensor = torch.from_numpy(clipped_img).float().to(device)
    values = []
    for i in range(finer_num_angles):
        values.append(torch.multiply(clipped_img_tensor, rotated_imgs_tensor[i]).sum())
    ```

7. Return the best rotation (smallest value). If there exists multiple smallest values, we pick one randomly.
    ```python
    smallest = min(values)
    rand_choices = []
    for i, v in enumerate(values):
        if v == smallest:
            rand_choices.append(i)
    rot_id = random.choice(rand_choices)
    new_rot = rot_degree_in_img + degree_diff_lst[rot_id]
    rot_degree_in_sim = - new_rot / 180 * np.pi
    
    return x_in_img_without_rot, y_in_img_without_rot, new_rot, x_in_sim, y_in_sim, rot_degree_in_sim, x_in_img_with_rot, y_in_img_with_rot, new_rot
    ```

8. Finally, we update the position using the new returned placement.

#### II. Pybullet-based repetitive checking (rotation-based)

Following step 1 in the previous method, this method rotates the object little by little in the Pybullet simulation until there exists a collision free degree or every degree has been tried.

```python
for i in get_finer_degrees_diff_list(num_angles, 20):
    subsample_cont_placement_pose = recover_placement_pose((x_in_img_without_rot, y_in_img_without_rot,
                                                            rot, x, y, - (rot + i) / 180 * np.pi,
                                                            x_in_img_with_rot, y_in_img_with_rot,
                                                            rot_degree_in_img),
                                                            tamp_prob, place_movable, target_container)
    set_pose(place_movable, subsample_cont_placement_pose)
    if not (any(pairwise_collision(obj_pid2obj[place_movable].pid, obst.pid) for obst in
                obstacle_objects + fixed_obstacles) or if_collides_fut_moved_objects(fut_vols,
                                                                                        obj_pid2obj[
                                                                                            place_movable])):
        break
```
#### III. Pybullet-based repetitive checking (rotation-and-position-based)

Similar to method 2, this method not only checks for various rotations, but it also tries fine adjustments in position.

```python
h_interval = stride_h / scale
w_interval = stride_w / scale
x_lower = x - w_interval / 2
y_lower = y - h_interval / 2
smaller_w_step_size = w_interval / 5
smaller_h_step_size = h_interval / 5
for i in get_finer_degrees_diff_list(num_angles, 20):
    for dx in [x_lower + (j * smaller_w_step_size) for j in range(0, 5)]:
        for dy in [y_lower + (k * smaller_h_step_size) for k in range(0, 5)]:
            subsample_cont_placement_pose = recover_placement_pose((x_in_img_without_rot, y_in_img_without_rot, rot, dx, dy, - (rot + i) / 180 * np.pi, x_in_img_with_rot, y_in_img_with_rot, rot_degree_in_img),
                                                                    tamp_prob, place_movable, target_container)
            set_pose(place_movable, subsample_cont_placement_pose)
            if not (any(pairwise_collision(obj_pid2obj[place_movable].pid, obst.pid) for obst in obstacle_objects + fixed_obstacles) or if_collides_fut_moved_objects(fut_vols, obj_pid2obj[place_movable])):
                break
        else:
            continue
        break
    else:
        continue
    break
```

### Results

#### I. First method

Using 20 sub-angles and enlarging by a factor of 8.
```
Using template-based sampling, we have 1373 valid samples from 2840 tires.
Using template-based sampling, we have 125 valid probs from 142 probs
Using template-based sampling, type failures: 1: 283 2: 0 3: 688 4: 837 5: 76 6: 15
```

#### II. Second method

Similar result using 20 sub-angles.
```
Using template-based sampling, we have 1361 valid samples from 2840 tires.
Using template-based sampling, we have 125 valid probs from 142 probs
Using template-based sampling, type failures: 1: 250 2: 0 3: 684 4: 858 5: 96 6: 23
```

#### III. Third method

Using 20 sub-angles and 5x5 sub-stride size, we have a little more valid samples and fewer failure reason 1 and 5.
```
Using template-based sampling, we have 1493 valid samples from 2840 tires.
Using template-based sampling, we have 125 valid probs from 142 probs
Using template-based sampling, type failures: 1: 149 2: 0 3: 659 4: 814 5: 43 6: 40
```