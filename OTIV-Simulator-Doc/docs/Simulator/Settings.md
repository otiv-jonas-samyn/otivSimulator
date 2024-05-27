---
id: Settings
title: Settings
sidebar_label: Settings
---

# Settings

The simulator contains two JSON files, one of which configures various aspects of the simulator's operation, named `settings_tram_sim.json`. Here are the settings available in this file:

```json
{
  "seed": 23852,
  "trackSegmentationDistance": "85",
  "vehiclesDangerLevel": "0.0f",
  "pedestriansDangerLevel": "0.0f",
  "tramCollision": true,
  "dataCollectionMode": true,
  "automatedDriving": true,
  "tramMass": 39500,
  "tramMaxSpeed": 35,
  "enginePower": 590,
  "brakingForce": 2400,
  "pedestriansCount": 2000,
  "vehiclesCount": 2000,
  "weatherType": "ClearSkies",
  "dynamicSeasons": true,
  "dateTime": "2022-07-07 9:30:00"
}
```

## Settings Details

### SEED
- **Type:** int
- **Description:** Determines the random variables in the simulator. Setting the seed to a specific number ensures that the same random events occur each time the simulator runs. For example, if a car randomly drives in front of the tram after 2 minutes of simulation, it will consistently do so upon every launch with the same seed.

### TrackSegmentationDistance
- **Type:** int
- **Description:** Important for the segmentation of Airsim. The tram tracks have an invisible mesh used for segmentation. This setting ensures that the segmentation mask only shows these invisible meshes up to a certain distance, keeping them hidden in normal camera views but visible in segmentation masks.

### DANGER LEVELS
These settings control the recklessness of vehicles and pedestrians in traffic.

- **vehiclesDangerLevel**
  - **Type:** float (0-1)
  - **Description:** Controls how recklessly vehicles behave.
- **pedestriansDangerLevel**
  - **Type:** float (0-1)
  - **Description:** Controls how recklessly pedestrians behave, such as randomly crossing streets without crosswalks. Each AI spawns with a random danger level, but these settings influence the likelihood of high or low danger levels.

### TRAM
Settings specific to the tram's behavior and physics.

- **tramCollision**
  - **Type:** boolean
  - **Description:** Controls whether the tram can collide with other objects. If disabled, vehicles can drive through the tram.
- **automatedDriving**
  - **Type:** boolean
  - **Description:** Enables or disables automated driving. If enabled, the tram drives automatically without stopping. If disabled, the tram can be controlled via Python.

#### Physics Settings
These settings control the physical properties and performance of the tram.

- **tramMass**
  - **Type:** int
  - **Description:** Mass of the tram.
- **tramMaxSpeed**
  - **Type:** int
  - **Description:** Maximum speed of the tram.
- **enginePower**
  - **Type:** int
  - **Description:** Power of the tram's engine.
- **brakingForce**
  - **Type:** int
  - **Description:** Braking force of the tram.

### TRAFFIC
- **pedestriansCount**
  - **Type:** int
  - **Description:** Number of pedestrians in the simulation world.
- **vehiclesCount**
  - **Type:** int
  - **Description:** Number of vehicles in the simulation world.

### Weather
- **weatherType**
  - **Type:** string
  - **Description:** Type of weather in the simulation. Example: "ClearSkies".
- **dynamicSeasons**
  - **Type:** boolean
  - **Description:** Enables or disables dynamic seasons in the simulation.
- **dateTime**
  - **Type:** string (datetime)
  - **Description:** Sets the simulation's date and time. Example: "2022-07-07 9:30:00".




