---
id: InstanceSegmentation
title: Instance Segmentation
sidebar_label: Instance Segmentation
---

# Instance Segmentation

One of the custom improvements we made was the addition of Instance Segmentation.

## What is Instance Segmentation?

Instance segmentation is a computer vision task that not only detects objects within an image but also delineates the precise boundaries of each object. Unlike semantic segmentation, which classifies each pixel into a category without differentiating between object instances, instance segmentation identifies each individual object within a category. This is particularly useful in scenarios where distinguishing between multiple objects of the same type is necessary.

Instance segmentation provides detailed and accurate labeling of objects, enabling advanced analysis and applications in various fields such as autonomous driving, robotics, and more.

By implementing instance segmentation, we enhanced the simulator's ability to produce high-quality, detailed data that can be used for training and evaluating complex machine learning models.

**RGB Value Meaning:**
- **R:** classID
- **G & B:** InstanceID (counter)

## How It Works in Our Simulator

Our implementation of instance segmentation in the simulator involves customizing both the Airsim plugin and the Unreal Engine environment to accurately label and track individual objects, such as trams, vehicles, and pedestrians. This allows for precise data collection and improved performance in tasks requiring detailed object differentiation.

In our simulator, instance segmentation works with tags. Each object can be attached to a tag from the following list:

| Tag Name                     | Tag Value |
|------------------------------|-----------|
| OBJECT_AIRSIM_TAG_NONE       | 0         |
| OBJECT_AIRSIM_TAG_TRAM       | 1         |
| OBJECT_AIRSIM_TAG_TRAMTRACKS | 2         |
| OBJECT_AIRSIM_TAG_PEDESTRIANS| 3         |
| OBJECT_AIRSIM_TAG_CARS       | 4         |
| OBJECT_AIRSIM_TAG_TRUCKS     | 5         |
| OBJECT_AIRSIM_TAG_TRAILERS   | 6         |
| OBJECT_AIRSIM_TAG_BUSSES     | 7         |
| OBJECT_AIRSIM_TAG_BICYCLES   | 8         |
| OBJECT_AIRSIM_TAG_SCOOTERS   | 9         |
| OBJECT_AIRSIM_TAG_MOTORCYCLES| 10        |
| OBJECT_AIRSIM_TAG_BUILDINGS  | 11        |
| OBJECT_AIRSIM_TAG_SIGNS_POLE | 12        |
| OBJECT_AIRSIM_TAG_SIGNS_MAIN | 13        |

The numbers represent the value of the tag, which is crucial for setting the tag type.

There are two parts to our implementation: the Unreal Engine side and the Python side.

### Unreal Engine

In Unreal Engine, you can determine what object will be attached to which tag. By default, every object in the scene gets the "none" tag and will not be segmented. To add an object, such as a car, to the `OBJECT_AIRSIM_TAG_CARS` tag, you need to set its tag. This can be done by adding the `ObjectAirsimTagComponent`, an actor component that you can attach to your actor. When attached, you can set its Tag int either through code or via the blueprint. If added through the blueprint, you can set the tag number in the details panel under the Object Airsim Tag tab, corresponding to the desired tag.

### Python

The Python script is used to set the classID of the object. This can be done using the following command:

```python
client.simSetSegmentationClassID(1, 2)
```

Here, 1 is the tag you want to change, and 2 is the classID you want to attach to that tag. You can set multiple objects to the same classID, but keep in mind that all objects with those tags will get the same R value.
