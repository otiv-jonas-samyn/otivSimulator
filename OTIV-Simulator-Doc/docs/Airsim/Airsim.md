---
id: Airsim
title: Airsim
sidebar_label: Airsim
---

# Airsim

As mentioned before, the simulator uses Airsim. Airsim is a plugin developed by Microsoft that can be used to collect real-life-like data from cameras, LiDARs, IMUs, and other sensors in an Unreal Engine environment. Originally running on Unreal Engine 4.27, which did not meet our graphical needs, we adapted a fork called Colosseum. Colosseum runs on Unreal Engine 5.2 but still had some missing features which we added ourselves.

Airsim has its own documentation, which contains a lot of useful information about how to use it and the Python API. You can find it here: [Airsim Documentation](https://microsoft.github.io/AirSim/). Below, you'll find some useful information about our additions and other helpful tips.

Airsim consists of two important parts:
- **The Plugin**: Integrates into Unreal Engine.
- **Python API**: Communicates with the plugin.

Both of these have been adjusted to meet our needs. You can find our custom plugin here: [Custom Airsim GitHub](https://github.com/otiv-jonas-samyn/OTIV-Airsim).
