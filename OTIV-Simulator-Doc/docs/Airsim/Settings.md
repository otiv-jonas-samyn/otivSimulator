---
id: Settings
title: Settings
sidebar_label: Settings
---

# Settings

Airsim has a lot of settings you can change, many of which can be modified without having to touch Unreal Engine. This can be done through a JSON file called `settings.json`.

It looks something like this:

## JSON

```json
{
  "SeeDocsAt": "https://github.com/Microsoft/AirSim/blob/main/docs/settings.md",
  "SettingsVersion": 1.2,
  "SimMode": "Car",
  "ViewMode": "Fpv",
  "ClockSpeed": 0.85,
  "LogMessagesVisible": false,
  "SpeedUnitFactor": 3.6,  
  "SpeedUnitLabel": "km/h",
  "OriginGeopoint": {
    "Latitude": 51.0543,
    "Longitude": 3.7174,
    "Altitude": 9
  },
  "CameraDirector": {
    "FollowDistance": -25,
    "X": 0, "Y": 0, "Z": 0,
    "Pitch": 0, "Roll": 0, "Yaw": 0
  }, 
  "SegmentationSettings": {
    "InitMethod": "None",
    "MeshNamingMethod": "",
    "OverrideExisting": true
  },
  "DefaultSensors": {
    "LidarSensor1": {
      "SensorType": 6,
      "Enabled" : true,
      "NumberOfChannels": 16,
      "RotationsPerSecond": 10,
      "PointsPerSecond": 10000,
      "X": 2, "Y": 0, "Z": -4,
      "Roll": 0, "Pitch": 0, "Yaw" : 0,
      "VerticalFOVUpper": -15,
      "VerticalFOVLower": -25,
      "HorizontalFOVStart": -20,
      "HorizontalFOVEnd": 20,
      "DrawDebugPoints": false,
      "DataFrame": "SensorLocalFrame"
    },
    "LidarSensor2": {
     "SensorType": 6,
      "Enabled" : true,
      "NumberOfChannels": 4,
      "RotationsPerSecond": 30,
      "PointsPerSecond": 10000,
      "X": 2, "Y": -2, "Z": -4,
      "Roll": 0, "Pitch": 0, "Yaw" : 0,
      "VerticalFOVUpper": -15,
      "VerticalFOVLower": -25,
      "DrawDebugPoints": false,
      "DataFrame": "SensorLocalFrame"
    },
    "LidarSensor3": {
    "SensorType": 6,
     "Enabled" : true,
     "NumberOfChannels": 4,
     "RotationsPerSecond": 30,
     "PointsPerSecond": 10000,
     "X": 2, "Y": 2, "Z": -4,
     "Roll": 0, "Pitch": 0, "Yaw" : 0,
     "VerticalFOVUpper": -15,
     "VerticalFOVLower": -25,
     "DrawDebugPoints": false,
     "DataFrame": "SensorLocalFrame"
    },
    "Imu": {
      "SensorType": 2,
      "Enabled" : true,
      "AngularRandomWalk": 0.3,
      "GyroBiasStabilityTau": 500,
      "GyroBiasStability": 4.6,
      "VelocityRandomWalk": 0.24,
      "AccelBiasStabilityTau": 800,
      "AccelBiasStability": 36
    },
    "Gps": {
        "SensorType": 3,
        "Enabled" : true,
        "EphTimeConstant": 0.9,
        "EpvTimeConstant": 0.9,
        "EphInitial": 25,
        "EpvInitial": 25,
        "EphFinal": 0.1,
        "EpvFinal": 0.1,
        "EphMin3d": 3,
        "EphMin2d": 4,
        "UpdateLatency": 0.2,
        "UpdateFrequency": 50,
        "StartupDelay": 1
    }
  },
  "PawnPaths": {
    "BP_Pawn_Tram": { "PawnBP": "Class'/Game/_Otiv/Blueprints/BP_Pawn_Tram.BP_Pawn_Tram_C'" },
    "BP_Pawn_Cart": { "PawnBP": "Class'/Game/_Otiv/Blueprints/BP_Tram_Cart_Airsim.BP_Tram_Cart_Airsim_C'" }
  },
  "Vehicles":{
    "MyVehicle":{
      "VehicleType": "PhysXCar",
      "PawnPath": "BP_Pawn_Cart",
      "DefaultVehicleState": "",
      "AutoCreate": true,
      "EngineSound": false,
      "EnableCollisions": true,
      "X": 0, "Y": 0, "Z": -0.5,
      "Pitch": 0, "Roll": 0, "Yaw": 0,
      "Cameras": {
        "CameraLeft": {
          "CaptureSettings": [
            {
              "ImageType": 0,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.5,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            },
            {
              "ImageType": 2,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.0,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            },
			{
              "ImageType": 3,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.0,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            },
			{
              "ImageType": 5,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.0,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            }
          ],
          "NoiseSettings": [
            {
              "Enabled": false,
              "ImageType": 0,
      
              "RandContrib": 0.2,
              "RandSpeed": 100000.0,
              "RandSize": 500.0,
              "RandDensity": 2,
      
              "HorzWaveContrib":0.03,
              "HorzWaveStrength": 0.08,
              "HorzWaveVertSize": 1.0,
              "HorzWaveScreenSize": 1.0,
      
              "HorzNoiseLinesContrib": 1.0,
              "HorzNoiseLinesDensityY": 0.01,
              "HorzNoiseLinesDensityXY": 0.5,
      
              "HorzDistortionContrib": 1.0,
              "HorzDistortionStrength": 0.002
            }
          ],
          "Gimbal": {
            "Stabilization": 0,
            "Pitch": 0, "Roll": 0, "Yaw": 0
          },
          "X": 1.75, "Y": -2, "Z": -4,
		  "RangeOffset_X": 0.25, "RangeOffset_Y": 0.25, "RangeOffset_Z": 0,
          "Pitch": 0, "Roll": 0, "Yaw": 0,
          "UnrealEngine": {
            "PixelFormatOverride": [
              {
                "ImageType": 0,
                "PixelFormat": 0
              }
            ]
          }
        },
        "CameraMiddle": {
          "CaptureSettings": [
            {
              "ImageType": 0,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.5,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            },
            {
              "ImageType": 2,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.0,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            },
			{
              "ImageType": 3,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.0,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            },
			{
              "ImageType": 5,
              "Width": 1920,
              "Height": 1080,
              "FOV_Degrees": 90,
              "AutoExposureSpeed": 10000,
              "AutoExposureBias": 0,
              "AutoExposureMaxBrightness": 1.0,
              "AutoExposureMinBrightness": 1.0,
              "MotionBlurAmount": 0,
              "TargetGamma": 1.0,
              "ProjectionMode": "",
              "OrthoWidth": 5.12
            }
          ],
          "NoiseSettings": [
            {
              "Enabled": false,
              "ImageType": 0,
      
              "RandContrib": 0.2,
              "RandSpeed": 100000.0,
              "RandSize": 500.0,
              "RandDensity": 2,
      
              "HorzWaveContrib":0.03,
              "HorzWaveStrength": 0.08,
              "HorzWaveVertSize": 1.0,
              "HorzWaveScreenSize": 1.0,
      
              "HorzNoiseLinesContrib": 1.0,
              "HorzNoiseLinesDensityY": 0.01,
              "HorzNoiseLinesDensityXY": 0.5,
      
              "HorzDistortionContrib": 1.0,
              "HorzDistortionStrength": 0.002
            }
          ],
          "Gimbal": {
            "Stabilization": 0,
            "Pitch": 0, "Roll": 0, "Yaw": 0
          },
          "X": 1.75, "Y": 0, "Z": -4,
		  "RangeOffset_X": 0.25, "RangeOffset_Y": 0.25, "RangeOffset_Z": 0,
          "Pitch": 0, "Roll": 0, "Yaw": 0,
          "UnrealEngine": {
            "PixelFormatOverride": [
              {
                "ImageType": 0,
                "PixelFormat": 0
              }
            ]
          }
        }
      }
    }
  },
  "SubWindows": [
    {"WindowID": 0, "ImageType": 5, "CameraName": "CameraMiddle", "Visible": false},
    {"WindowID": 1, "ImageType": 0, "CameraName": "CameraMiddle", "Visible": false},
    {"WindowID": 2, "ImageType": 3, "CameraName": "CameraMiddle", "Visible": false}
  ],
  "Recording": {
    "RecordOnMove": false,
    "RecordInterval": 0.01,
    "Folder": "D:/",
    "Enabled": false,
    "Cameras": [
        { "CameraName": "CameraMiddle", "ImageType": 3, "PixelsAsFloat": true,  "VehicleName": "MyVehicle", "Compress": false }
    ]
  }
}
```


There are many different settings available, which you can find in the [Airsim Settings Documentation](https://microsoft.github.io/AirSim/settings/). However, some changes have been made which I will explain here.

## Random Offset

You can set a random offset range. The cameras will use this range to pick a random offset from their start position every time the simulator launches.
