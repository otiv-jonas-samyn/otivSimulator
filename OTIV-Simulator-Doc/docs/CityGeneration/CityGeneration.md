---
id: CityGeneration
title: City Generation
sidebar_label: City Generation
---

# City Generation

The simulator runs on Unreal Engine, and we wanted the cities where the tram drives to be as realistic as possible. That is why we decided to use OpenStreetMap (OSM) data as the source for the cities in the simulator.

## What is OpenStreetMap (OSM)?

OpenStreetMap (OSM) is a collaborative project that creates a free, editable map of the world. It is built by a community of mappers who contribute and maintain data about roads, trails, cafés, railway stations, and much more, all over the globe.

We use OSM data to generate the streets and navigational data for the traffic. However, it takes some preparation and work to add new cities to the simulator. Below, we explain the process of going from nothing to a complete city where the tram can drive in Unreal Engine. The process is as follows:

### OSM Export

To begin, you need to export the relevant OSM data for the city you want to add to the simulator. This data includes information about streets, buildings, and other geographical features.

[Link to OSM Export Page](./OSM.md)

### Houdini Generation

Next, use Houdini to process the OSM data. Houdini is a powerful 3D animation and visual effects software that can generate procedural content. In this step, you will convert the OSM data into a format suitable for Unreal Engine.

[Link to Houdini Generation Page](./Houdini.md)

### Unreal Engine Importing and Adjusting

Once you have the processed data from Houdini, import it into Unreal Engine. Here, you can adjust the placement and properties of objects to ensure they fit well within the simulation environment. This step may involve tweaking navigation meshes, adjusting building heights, and ensuring tram tracks align correctly.

[Link to Unreal Engine Importing and Adjusting Page](./UnrealEngine.md)

### Packaging

After importing and adjusting the city data in Unreal Engine, package the project. Packaging involves compiling the Unreal Engine project into a standalone executable that can be run on various platforms.

[Link to Packaging Page](./Packaging.md)

### Finished

Once the project is packaged, you have a complete, realistic city environment in which the tram can drive. The simulator is now ready to use with the new city.

By following these steps, you can create highly realistic city environments for the tram simulator using OSM data and Unreal Engine.




