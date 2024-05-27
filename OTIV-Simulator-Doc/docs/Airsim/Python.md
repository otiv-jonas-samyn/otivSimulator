---
id: Python
title: Python
sidebar_label: Python
---

# Python

This document covers the Python integration in Airsim.

## Useful API Functions

Airsim provides a variety of useful API functions to interact with the simulator using Python. Here are a few key functions:

- **`client = airsim.CarClient()`**: Receives Airsim API client to use command on.
- **`client.confirmConnection()`**: Makes sure an connection has been set between Unreal Engine and the python API.
- **`client.getRecordingFolder()`**: Receives the folder where data will be stored.
- **`client.simPause(True/False)`**: Pauses or unpauses the simulation.

Refer to the [Airsim Python API documentation](https://microsoft.github.io/AirSim/apis/) for a comprehensive list of available functions.

## Connection Component

Airsim allows you to connect your Unreal Engine project to their Python API. To achieve this, you need to send a success message to Python so that it knows when the simulator is ready to connect. This involves adding an actor component to one actor, preferably the player character (tram). You can configure this component with the desired settings.

### AirPythonConnecter Component

The component you need to add is called the `AirPythonConnecter`. This component sets up a UDP connection for Python to receive. You can configure the different network settings on the component:

- **Repeat**: It is recommended to leave this set to `true`. This ensures the component continuously sends success messages, allowing the connection to be reestablished if lost.

- **Networking**:
  - **UDPListen Port**: The port Unreal Engine will use to listen for messages from Python.
  - **UDPSend Port**: The port Unreal Engine will use to send messages to Python.
  - **SuccesMessage**: The message that will be sent once the Unreal Engine project is ready to connect to Python.
  - **IPString**: The IP address that will be used to send the message.

### Configuration Example

When configuring the `AirPythonConnecter` component, be aware that changes to these settings may also require changes in your Python setup. The `UDPListen/Send` ports are crucial for the communication between Unreal Engine and Python. The `SuccesMessage` ensures Python knows when the simulator is ready. The `IPString` defines the target IP address for the connection.

Example configuration in Unreal Engine:

```plaintext
Repeat: true
UDPListen Port: 999
UDPSend Port: 9988
SuccesMessage: "LOAD_SUCCES"
IPString: "127.0.0.1"
```

### Python Functions
To manage the connection between Python and Unreal Engine, you can use the following functions:

```python
import socket

def send_to_unreal(message, ipAddress, port):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:  # SOCK_DGRAM for UDP
            s.sendto(message.encode(), (ipAddress, port))
    except:
        print("Unable to send message to Unreal. Ensure Unreal is listening.")

def receive_from_unreal(event, succesMessage, ipAddress, port):
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as server_socket:
        server_socket.bind((ipAddress, port))  # Binding to another port for receiving
        while True:
            message, address = server_socket.recvfrom(1024)
            decodedMessage = message.decode() # decode byte string
            if decodedMessage == succesMessage:
                event.set()
            else:
                print(f"Received message from UE: {decodedMessage}")
```

In Python, you have two functions related to the connection: `send_to_unreal` and `receive_from_unreal`. Both functions need access to the ipAddress and their respective ports, so ensure these are the same as those set in Unreal Engine. The `receive_from_unreal` function also needs to have the succesMessage, which must match the message in Unreal Engine for proper recognition.

By following these steps and configurations, you can effectively set up and maintain a connection between your Unreal Engine project and the Airsim Python API.