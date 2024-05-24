"use strict";(self.webpackChunkotiv_simulator_doc=self.webpackChunkotiv_simulator_doc||[]).push([[7987],{5815:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=e(4848),i=e(8453);const o={id:"Settings",title:"Settings",sidebar_label:"Settings"},a="Settings",s={id:"Airsim/Settings",title:"Settings",description:"Airsim has a lot of settings you can change, many of which can be modified without having to touch Unreal Engine. This can be done through a JSON file called settings.json.",source:"@site/docs/Airsim/Settings.md",sourceDirName:"Airsim",slug:"/Airsim/Settings",permalink:"/otivSimulator/docs/Airsim/Settings",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Airsim/Settings.md",tags:[],version:"current",frontMatter:{id:"Settings",title:"Settings",sidebar_label:"Settings"},sidebar:"documentationSidebar",previous:{title:"Airsim",permalink:"/otivSimulator/docs/Airsim/"},next:{title:"Recording",permalink:"/otivSimulator/docs/Airsim/Recording"}},l={},u=[{value:"Random Offset",id:"random-offset",level:2}];function d(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"settings",children:"Settings"}),"\n",(0,t.jsxs)(r.p,{children:["Airsim has a lot of settings you can change, many of which can be modified without having to touch Unreal Engine. This can be done through a JSON file called ",(0,t.jsx)(r.code,{children:"settings.json"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"It looks something like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n  "SeeDocsAt": "https://github.com/Microsoft/AirSim/blob/main/docs/settings.md",\r\n  "SettingsVersion": 1.2,\r\n  "SimMode": "Car",\r\n  "ViewMode": "Fpv",\r\n  "ClockSpeed": 0.85,\r\n  "LogMessagesVisible": false,\r\n  "SpeedUnitFactor": 3.6,  \r\n  "SpeedUnitLabel": "km/h",\r\n  "OriginGeopoint": {\r\n    "Latitude": 51.0543,\r\n    "Longitude": 3.7174,\r\n    "Altitude": 9\r\n  },\r\n  "CameraDirector": {\r\n    "FollowDistance": -25,\r\n    "X": 0, "Y": 0, "Z": 0,\r\n    "Pitch": 0, "Roll": 0, "Yaw": 0\r\n  }, \r\n  "SegmentationSettings": {\r\n    "InitMethod": "None",\r\n    "MeshNamingMethod": "",\r\n    "OverrideExisting": true\r\n  },\r\n  "DefaultSensors": {\r\n    "LidarSensor1": {\r\n      "SensorType": 6,\r\n      "Enabled" : true,\r\n      "NumberOfChannels": 16,\r\n      "RotationsPerSecond": 10,\r\n      "PointsPerSecond": 10000,\r\n      "X": 2, "Y": 0, "Z": -4,\r\n      "Roll": 0, "Pitch": 0, "Yaw" : 0,\r\n      "VerticalFOVUpper": -15,\r\n      "VerticalFOVLower": -25,\r\n      "HorizontalFOVStart": -20,\r\n      "HorizontalFOVEnd": 20,\r\n      "DrawDebugPoints": false,\r\n      "DataFrame": "SensorLocalFrame"\r\n    },\r\n    "LidarSensor2": {\r\n     "SensorType": 6,\r\n      "Enabled" : true,\r\n      "NumberOfChannels": 4,\r\n      "RotationsPerSecond": 30,\r\n      "PointsPerSecond": 10000,\r\n      "X": 2, "Y": -2, "Z": -4,\r\n      "Roll": 0, "Pitch": 0, "Yaw" : 0,\r\n      "VerticalFOVUpper": -15,\r\n      "VerticalFOVLower": -25,\r\n      "DrawDebugPoints": false,\r\n      "DataFrame": "SensorLocalFrame"\r\n    },\r\n    "LidarSensor3": {\r\n    "SensorType": 6,\r\n     "Enabled" : true,\r\n     "NumberOfChannels": 4,\r\n     "RotationsPerSecond": 30,\r\n     "PointsPerSecond": 10000,\r\n     "X": 2, "Y": 2, "Z": -4,\r\n     "Roll": 0, "Pitch": 0, "Yaw" : 0,\r\n     "VerticalFOVUpper": -15,\r\n     "VerticalFOVLower": -25,\r\n     "DrawDebugPoints": false,\r\n     "DataFrame": "SensorLocalFrame"\r\n    },\r\n    "Imu": {\r\n      "SensorType": 2,\r\n      "Enabled" : true,\r\n      "AngularRandomWalk": 0.3,\r\n      "GyroBiasStabilityTau": 500,\r\n      "GyroBiasStability": 4.6,\r\n      "VelocityRandomWalk": 0.24,\r\n      "AccelBiasStabilityTau": 800,\r\n      "AccelBiasStability": 36\r\n    },\r\n    "Gps": {\r\n        "SensorType": 3,\r\n        "Enabled" : true,\r\n        "EphTimeConstant": 0.9,\r\n        "EpvTimeConstant": 0.9,\r\n        "EphInitial": 25,\r\n        "EpvInitial": 25,\r\n        "EphFinal": 0.1,\r\n        "EpvFinal": 0.1,\r\n        "EphMin3d": 3,\r\n        "EphMin2d": 4,\r\n        "UpdateLatency": 0.2,\r\n        "UpdateFrequency": 50,\r\n        "StartupDelay": 1\r\n    }\r\n  },\r\n  "PawnPaths": {\r\n    "BP_Pawn_Tram": { "PawnBP": "Class\'/Game/_Otiv/Blueprints/BP_Pawn_Tram.BP_Pawn_Tram_C\'" },\r\n    "BP_Pawn_Cart": { "PawnBP": "Class\'/Game/_Otiv/Blueprints/BP_Tram_Cart_Airsim.BP_Tram_Cart_Airsim_C\'" }\r\n  },\r\n  "Vehicles":{\r\n    "MyVehicle":{\r\n      "VehicleType": "PhysXCar",\r\n      "PawnPath": "BP_Pawn_Cart",\r\n      "DefaultVehicleState": "",\r\n      "AutoCreate": true,\r\n      "EngineSound": false,\r\n      "EnableCollisions": true,\r\n      "X": 0, "Y": 0, "Z": -0.5,\r\n      "Pitch": 0, "Roll": 0, "Yaw": 0,\r\n      "Cameras": {\r\n        "CameraLeft": {\r\n          "CaptureSettings": [\r\n            {\r\n              "ImageType": 0,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.5,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            },\r\n            {\r\n              "ImageType": 2,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.0,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            },\r\n\t\t\t{\r\n              "ImageType": 3,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.0,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            },\r\n\t\t\t{\r\n              "ImageType": 5,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.0,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            }\r\n          ],\r\n          "NoiseSettings": [\r\n            {\r\n              "Enabled": false,\r\n              "ImageType": 0,\r\n      \r\n              "RandContrib": 0.2,\r\n              "RandSpeed": 100000.0,\r\n              "RandSize": 500.0,\r\n              "RandDensity": 2,\r\n      \r\n              "HorzWaveContrib":0.03,\r\n              "HorzWaveStrength": 0.08,\r\n              "HorzWaveVertSize": 1.0,\r\n              "HorzWaveScreenSize": 1.0,\r\n      \r\n              "HorzNoiseLinesContrib": 1.0,\r\n              "HorzNoiseLinesDensityY": 0.01,\r\n              "HorzNoiseLinesDensityXY": 0.5,\r\n      \r\n              "HorzDistortionContrib": 1.0,\r\n              "HorzDistortionStrength": 0.002\r\n            }\r\n          ],\r\n          "Gimbal": {\r\n            "Stabilization": 0,\r\n            "Pitch": 0, "Roll": 0, "Yaw": 0\r\n          },\r\n          "X": 1.75, "Y": -2, "Z": -4,\r\n\t\t  "RangeOffset_X": 0.25, "RangeOffset_Y": 0.25, "RangeOffset_Z": 0,\r\n          "Pitch": 0, "Roll": 0, "Yaw": 0,\r\n          "UnrealEngine": {\r\n            "PixelFormatOverride": [\r\n              {\r\n                "ImageType": 0,\r\n                "PixelFormat": 0\r\n              }\r\n            ]\r\n          }\r\n        },\r\n        "CameraMiddle": {\r\n          "CaptureSettings": [\r\n            {\r\n              "ImageType": 0,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.5,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            },\r\n            {\r\n              "ImageType": 2,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.0,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            },\r\n\t\t\t{\r\n              "ImageType": 3,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.0,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            },\r\n\t\t\t{\r\n              "ImageType": 5,\r\n              "Width": 1920,\r\n              "Height": 1080,\r\n              "FOV_Degrees": 90,\r\n              "AutoExposureSpeed": 10000,\r\n              "AutoExposureBias": 0,\r\n              "AutoExposureMaxBrightness": 1.0,\r\n              "AutoExposureMinBrightness": 1.0,\r\n              "MotionBlurAmount": 0,\r\n              "TargetGamma": 1.0,\r\n              "ProjectionMode": "",\r\n              "OrthoWidth": 5.12\r\n            }\r\n          ],\r\n          "NoiseSettings": [\r\n            {\r\n              "Enabled": false,\r\n              "ImageType": 0,\r\n      \r\n              "RandContrib": 0.2,\r\n              "RandSpeed": 100000.0,\r\n              "RandSize": 500.0,\r\n              "RandDensity": 2,\r\n      \r\n              "HorzWaveContrib":0.03,\r\n              "HorzWaveStrength": 0.08,\r\n              "HorzWaveVertSize": 1.0,\r\n              "HorzWaveScreenSize": 1.0,\r\n      \r\n              "HorzNoiseLinesContrib": 1.0,\r\n              "HorzNoiseLinesDensityY": 0.01,\r\n              "HorzNoiseLinesDensityXY": 0.5,\r\n      \r\n              "HorzDistortionContrib": 1.0,\r\n              "HorzDistortionStrength": 0.002\r\n            }\r\n          ],\r\n          "Gimbal": {\r\n            "Stabilization": 0,\r\n            "Pitch": 0, "Roll": 0, "Yaw": 0\r\n          },\r\n          "X": 1.75, "Y": 0, "Z": -4,\r\n\t\t  "RangeOffset_X": 0.25, "RangeOffset_Y": 0.25, "RangeOffset_Z": 0,\r\n          "Pitch": 0, "Roll": 0, "Yaw": 0,\r\n          "UnrealEngine": {\r\n            "PixelFormatOverride": [\r\n              {\r\n                "ImageType": 0,\r\n                "PixelFormat": 0\r\n              }\r\n            ]\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\r\n  "SubWindows": [\r\n    {"WindowID": 0, "ImageType": 5, "CameraName": "CameraMiddle", "Visible": false},\r\n    {"WindowID": 1, "ImageType": 0, "CameraName": "CameraMiddle", "Visible": false},\r\n    {"WindowID": 2, "ImageType": 3, "CameraName": "CameraMiddle", "Visible": false}\r\n  ],\r\n  "Recording": {\r\n    "RecordOnMove": false,\r\n    "RecordInterval": 0.01,\r\n    "Folder": "D:/",\r\n    "Enabled": false,\r\n    "Cameras": [\r\n        { "CameraName": "CameraMiddle", "ImageType": 3, "PixelsAsFloat": true,  "VehicleName": "MyVehicle", "Compress": false }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["There are many different settings available, which you can find in the ",(0,t.jsx)(r.a,{href:"https://microsoft.github.io/AirSim/settings/",children:"Airsim Settings Documentation"}),". However, some changes have been made which I will explain here."]}),"\n",(0,t.jsx)(r.h2,{id:"random-offset",children:"Random Offset"}),"\n",(0,t.jsx)(r.p,{children:"You can set a random offset range. The cameras will use this range to pick a random offset from their start position every time the simulator launches."})]})}function m(n={}){const{wrapper:r}={...(0,i.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>a,x:()=>s});var t=e(6540);const i={},o=t.createContext(i);function a(n){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function s(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(o.Provider,{value:r},n.children)}}}]);