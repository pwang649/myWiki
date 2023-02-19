---
id: Communication Protocols - CAN
title: CAN
sidebar_position: 4
---

CAN (Controller Area Network) is a multi-master serial communication bus. The basic design specification requires a high bit rate, high immunity to electromagnetic interference, and the ability to detect any errors that occur. When the signal transmission distance reaches 10 km, CAN-bus can still provide a data transmission rate of up to 5Kbps.

### Data Frame Format

![](/img/Others/CAN_1.png)

- **SOF**: The single dominant start of frame (SOF) bit marks the start of a message and is used to synchronize the nodes on a bus after being idle.
- **Identifier**: The Standard CAN 11-bit identifier establishes the priority of the message. The lower the binary value, the higher its priority.
- **RTR**: The single remote transmission request (RTR) bit is dominant when information is required from another node. All nodes receive the request, but the identifier - determines the specified node. The responding data is also received by all nodes and used by any node interested. In this way, all data being used in a system is uniform.
- **IDE**: A dominant single identifier extension (IDE) bit means that a standard CAN identifier with no extension is being transmitted.
- **r0**: Reserved bit (for possible use by future standard amendment).
- **DLC**: The 4-bit data length code (DLC) contains the number of bytes of data being transmitted.
- **Data**: Up to 64 bits of application data may be transmitted.
- **CRC**: The 16-bit (15 bits plus delimiter) cyclic redundancy check (CRC) contains the checksum (number of bits transmitted) of the preceding application data for error - detection.
- **ACK**: Every node receiving an accurate message overwrites this recessive bit in the original message with a dominate bit, indicating an error-free message has been sent.
- **EOF**: This end-of-frame (EOF), 7-bit field marks the end of a CAN frame (message) and disables bitstuffing, indicating a stuffing error when dominant. When 5 bits of the same logic level occur in succession during normal operation, a bit of the opposite logic level is stuffed into the data.
- **IFS**: This 7-bit interframe space (IFS) contains the time required by the controller to move a correctly received frame to its proper position in a message buffer area.

### CAN Bus

![](/img/Others/CAN_2.png)

### Reference and Acknowledgement

- [Introduction to the Controller Area Network (CAN)](https://www.ti.com/lit/an/sloa101b/sloa101b.pdf)