# Comparison of AirSim and CARLA Sim

## Overview

### AirSim
- **Developer:** Microsoft
- **Purpose:** Open-source simulator for drones and autonomous vehicles
- **Programming Languages:** C++, Python
- **Platforms:** Windows, Linux, Unreal Engine
- **Key Features:**
  - Supports both drone and car simulations
  - Highly customizable with APIs
  - Realistic physics and environment
  - Sensor suite including cameras, LIDAR, GPS, IMU
  - Multi-agent support

### CARLA
- **Developer:** CARLA Team
- **Purpose:** Open-source simulator for autonomous driving research
- **Programming Languages:** Python, C++
- **Platforms:** Windows, Linux, Unreal Engine
- **Key Features:**
  - Focused on car simulations
  - Realistic urban environments
  - Extensive sensor suite including cameras, LIDAR, GPS, IMU
  - Traffic manager and pedestrian simulation
  - Supports multiple weather conditions and time of day settings

## Comparison Table

| Feature                    | AirSim                                 | CARLA                                  |
|----------------------------|----------------------------------------|----------------------------------------|
| **Developer**              | Microsoft                              | CARLA Team                             |
| **Primary Focus**          | Drones and autonomous vehicles         | Autonomous driving research            |
| **Programming Languages**  | C++, Python                            | Python, C++                            |
| **Platforms**              | Windows, Linux, Unreal Engine          | Windows, Linux, Unreal Engine          |
| **Simulation Focus**       | Drones and cars                        | Cars                                   |
| **Customization**          | Minimal, with simple APIs              | High, with extensive APIs              |
| **Physics and Environment**| Realistic                              | Realistic                              |
| **Sensor Suite**           | Cameras, LIDAR, GPS, IMU               | Cameras, LIDAR, GPS, IMU               |
| **Traffic Simulation**     | Limited                                | Comprehensive traffic manager          |
| **Pedestrian Simulation**  | Limited                                | Realistic pedestrian simulation        |
| **Weather Conditions**     | Basic                                  | Multiple, including various weather types |
| **Multi-Agent Support**    | Yes                                    | Yes                                    |
| **Community and Support**  | Non-Active, little community support       | Active, strong community support       |

## Features Comparison

| FEATURE                 | OUR SIMULATOR | CARLA SIMULATOR |
|-------------------------|---------------|-----------------|
| Tram implementation     | ✓             | ✗               |
| OSM city generation     | ✓             | -               |
| Traffic system          | ✓             | ✓               |
| Weather system          | ✓             | ✓               |
| RGB camera              | ✓             | ✓               |
| Instance segmentation   | ✓             | ✓               |
| Depth view              | ✓             | ✓               |
| LIDAR                   | ✓             | ✓               |

## Advanced Features

| FEATURE                | OUR SIMULATOR | CARLA SIMULATOR |
|------------------------|---------------|-----------------|
| SUMO                   | ✗             | ✓               |
| Bounding boxes         | -             | ✓               |
| Replay system          | ✗             | ✓               |

## Python API Differences

| FEATURE                   | OUR SIMULATOR | CARLA SIMULATOR |
|---------------------------|---------------|-----------------|
| Simple actor spawning     | ✓             | ✓               |
| Actor manipulations       | ✗             | ✓               |
| Traffic system control    | ✗             | ✓               |
| Real-time Visualization   | ✗             | ✓               |
| Change map                | ✗             | ✓               |

## Sensor Overview

### Visual Sensors
| Sensor                 | Overview                                                                 |
|------------------------|--------------------------------------------------------------------------|
| Depth                 | Renders the depth of the elements in the field of view in a gray-scale map. |
| RGB                   | Provides clear vision of the surroundings. Looks like a normal photo of the scene. |
| Optical Flow          | Renders the motion of every pixel from the camera.                         |
| Semantic segmentation | Renders elements in the field of view with a specific color according to their tags. |
| Instance segmentation | Renders elements in the field of view with a specific color according to their tags and a unique object ID. |
| DVS                   | Measures changes of brightness intensity asynchronously as an event stream. |

### Other Sensors
| Sensor               | Overview                                                                            |
|----------------------|-------------------------------------------------------------------------------------|
| GNSS                 | Retrieves the geolocation of the sensor.                                            |
| IMU                  | Comprises an accelerometer, a gyroscope, and a compass.                             |
| LIDAR                | A rotating LIDAR. Generates a 4D point cloud with coordinates and intensity per point to model the surroundings. |
| Radar                | 2D point map modeling elements in sight and their movement regarding the sensor.    |
| RSS                  | Modifies the controller applied to a vehicle according to safety checks. This sensor works in a different manner than the rest, and there is specific RSS documentation. |
| Semantic LIDAR       | A rotating LIDAR. Generates a 3D point cloud with extra information regarding instance and semantic segmentation. |

## Pros and Cons

### OTIV Simulator

| Pros                                                                                          | Cons                                                |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **API Knowledge**<br/>- Good knowledge about API<br/>- Good knowledge about different systems | **Sensors**<br/>- Minimal sensors<br/>- Hard to add sensors |
| **Visual Quality**<br/>- Visually appealing (UE 5)                                            | **Control**<br/>- Minimal control through Python API |
| **Customization**<br/>- Custom map generator                                                  | **System Complexity**<br/>- Simple traffic system<br/>- Slow data collection |

### CARLA Simulator

| Pros                                                                                          | Cons                                                |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **API Control**<br/>- Amazing control through Python API<br/>- Python connection very fast    | **Tram Support**<br/>- No native support for tram   |
| **Sensors**<br/>- A lot of sensor types                                                       | **Visual Quality**<br/>- Currently visual downgrade (UE 4.26) (update coming in summer) |
| **Development**<br/>- Active development                                                     | **Setup and Learning**<br/>- Time consuming<br/>- Converting our maps<br/>- Fully setting up the tram to work with all systems<br/>- Overall knowledge is low – learning takes time |
| **Features**<br/>- Replay system<br/>- Realistic traffic simulation through external tools (SUMO)<br/>- Map generator tool |                                                     |


## Conclusion

Both AirSim and CARLA are powerful simulation tools with unique strengths. AirSim is versatile with support for both drones and cars, making it suitable for a broader range of applications. CARLA, on the other hand, excels in simulating urban driving environments with detailed traffic and pedestrian dynamics, making it ideal for autonomous driving research.

For developers and researchers, the choice between AirSim and CARLA will depend on the specific requirements of their projects, such as the type of vehicles they are focusing on and the complexity of the environment they need to simulate.
