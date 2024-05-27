---
id: UnrealEngine
title: Unreal Engine
sidebar_label: Unreal Engine
---

# Unreal Engine City Import

For questions about Unreal Engine you can go to this information page:

[What is Unreal Engine?](https://otiv-jonas-samyn.github.io/otivSimulator/docs/CityGeneration/UnrealEngine)

## Creating a New Level

When you launch Unreal Engine, you will see something like this:

![Unreal Engine Load](../images/UnrealEngine/UE_Load.png)

You could be in a different start level, but that is fine. To start working on a new map, you want to create a new level. Here is how you do that:

1. On the top of your screen, hover over “**File**” and select “**New Level**”:

    ![New Level](../images/UnrealEngine/UE_new_level.png)

2. Select the `Otiv City Template` and click the **Create** button. You should now load up a new level with some elements already in it:

    ![Otiv City Template Load](../images/UnrealEngine/ue_otiv_city_template_load.png)

## Saving the Level

Start by saving the level. You can press either **ctrl+s** or go to File → Save Current Level. A window will pop up asking where you want to save the level. It is recommended to stay with the previously made structure and save it under:

_Otiv → Levels → Cities_

1. Right-click on the empty space and create a new folder, naming it after the exported city (e.g., Rotterdam).
2. Enter the folder, name your level using the `L_` prefix (e.g., `L_Rotterdam`), and save it:

    ![Save Level](../images/UnrealEngine/ue_level_saving.png)

Your level should now be saved under the chosen name. To check, you can look at the top of the viewport where the name of the level should be:

![Level Name Check](../images/UnrealEngine/ue_level_name_check.png)

## Importing City Parts

To import the city parts, go to the content browser and navigate to the folder where you saved your city. Add a new folder by right-clicking in the content browser, and name it “**Import**”:

![Import Folder](../images/UnrealEngine/ue_folder_import.png)

Inside this folder, create three other folders named “**Geometry**”, “**Instances**”, and “**Navigation**”:

![Folder Structure](../images/UnrealEngine/ue_folder_structure.png)

## Activating the Houdini Engine Plugin

Before importing the Houdini files, you need to activate the Houdini Engine plugin. Navigate to the top of your screen and open the “**Houdini Engine**” tab, then click the “**Create session**” button:

![Houdini Sessions](../images/UnrealEngine/ue_houdini_sessions.png)

You are now connected to Houdini.

## Importing Geometry Files

1. Go into the “**Geometry**” folder. Open your file explorer and navigate to where you exported your city from Houdini. The folder should contain **Geo**, **Instances**, and **Nav** folders.
2. Go into the **Geo** folder, select all `.bgeo` geometry files, and drag and drop them into Unreal Engine.

    ![Importing Geometry](../images/UnrealEngine/ue_geo_dropping.png)

Importing can take a while, so just wait. After a while, you should see all the files in Unreal Engine. There should be both Blueprints and Static meshes. We only care about the blueprints.

3. Drag and drop the blueprints into your level. Depending on the size of the exported city, you may want to place each file separately or all at once.

4. In the Outliner, select all the BP_???_Geo files, group them into a folder, and name it **Geometry**:

    ![Outliner Folder](../images/UnrealEngine/ue_geo_outliner.png)

5. Reselect all your geometry objects, and in the details panel, reset their transforms (Location and Rotation should be 0, Scale should be 1):

    ![Reset Transforms](../images/UnrealEngine/ue_geo_details.png)

## Importing Instances

Repeat the process for importing geometry, but now for the instances. Importing instances can be heavier than geometry, so be cautious when placing them into the level.

Group them into a folder in the Outliner, name it **Instances**, and reset their transforms.

After this is done, your level should look something like this:

![Zoomed Geometry](../images/UnrealEngine/ue_geo_check.png)

## Removing Blockout

If you see an error with the buildings, this is because we imported both the instances and the blockout. Remove the blockout from your level. It should be under your geometry folder in the Outliner:

![Delete Blockout](../images/UnrealEngine/ue_blockout_delete.png)

After deletion, your level should look something like this:

![Zoomed Geometry](../images/UnrealEngine/ue_geo_zoom.png)

## Importing Navigation Meshes

We use two types of imports for navigation meshes: `.bgeo` files for pedestrians and tram tracks, and `.json` files for vehicle navigation meshes.

### Tram Track Navigation

1. Import the `.bgeo` files from the **Nav** folder into the **Navigation** folder in Unreal Engine.
2. Drag and drop the railway blueprint into the level and reset its transform. Enter the BP_TramTrack_Nav blueprint, select the `Spline` component, and change its type to `curve`. Add a tag named `TramTrack`.

![Tram Track Nav](../images/UnrealEngine/ue_railway_import.png)

### Pedestrian zoneshapes

Open the pedestrian blueprint and change its tag to `pedestrians`.

![Pedestrian Tagging](../images/UnrealEngine/ue_pedestrian_tagging_pedestrian.png)

Place the blueprint into your level and reset its transform.

## Using the ZoneShapeBuilder Widget

You need to use the `EUW_ZoneShapeBuilder` widget to create zoneshapes. This can be found under All → Content → _Otiv → Widgets. It should contain three items:

![Widgets Folder](../images/UnrealEngine/ue_widgets_folder.png)

Run the `UEW_ZoneShapeBuilder` by right-clicking it and pressing the run button:

![Run Widget](../images/UnrealEngine/ue_widgets_running.png)

This will open a new window like this:

![Build Zoneshapes](../images/UnrealEngine/ue_widgets_building_zoneshapes.png)

Press the **Build Zoneshapes** button. This will add many pedestrian ZoneShape actors into the Outliner:

![Zoneshapes Exports](../images/UnrealEngine/ue_widget_zoneshapes_exports.png)

Group these into a folder in the Outliner.

## Vehicle Zoneshapes

1. Navigate to the BP_CityGenerator in the Outliner.
2. Move the Houdini exported `.json` file into the project’s JSON folder and rename it appropriately (e.g., `Rotterdam_OSM_Data.json`).
3. In Unreal Engine, select BP_CityGenerator, change the JSON path to your file, and press the “**Generate City from JSON event**” button:

![City Generator](../images/UnrealEngine/ue_city_generator_buttons.png)

4. Select all zoneshapes in the Outliner, move them slightly to connect them, and build them using the `Build ZoneGraph` button:

![Zoneshapes Building](../images/UnrealEngine/ue_zoneshapes_building.png)

Once done, you should see both ZoneShapes and traffic lights in your level:

![Finished City](../images/UnrealEngine/ue_city_generator_finsihed.png)

# Manual Fixing

While in an ideal world you would now be done, there is still a lot of manual work left to fix the whole city up.

We will start off by fixing the zoneshapes. This is where most of your time will go into.

[What are Zoneshapes?](https://otiv-jonas-samyn.github.io/otivSimulator/docs/CityGeneration/UnrealEngine)

There are 2 main things that you want to fix:

- Intersections
- Dead-Ends

Then there are the not needed but still recommended fixes:

- Combine overlapping roads
- Move zoneshapes that are weirdly placed

## Fixing Intersections

We will start with the intersections as this is the most important fix. Let's zoom into this intersection as an example:

![Random Intersection](../images/ManualFixing/mf_random_intersection.png)

When zoomed in, it looks something like this:

![Zoomed Intersection](../images/ManualFixing/mf_random_intersection_zoomed.png)

You can already see that it doesn’t look that good. That's what we are going to fix...

In this intersection, the generation made two separate intersections, but they are fairly close to each other, so I recommend combining them into one big intersection.

1. Start off by removing one of the intersections. You can do this by clicking on it through the viewport and pressing delete on your keyboard.

    ![Removed Intersection](../images/ManualFixing/mf_random_intersection_removed.png)

2. In this example, there is a small street that connected the intersections. We don’t need it anymore, so you can also delete this one.

    ![Removed Connection](../images/ManualFixing/mf_random_intersection_removed_connection.png)

3. Before moving on, I recommend decreasing some streets so they are a bit further away from the intersection middle. You can do this by selecting the zoneShape and simply removing points until you are happy. I find the cross roads to be a good indicator as to how far to move them. It now looks something like this:

    ![Streets Adjusted](../images/ManualFixing/mf_random_intersection_streets.png)

4. Next step is connecting the intersection to streets. When you select the intersection, you see that it contains points:

    ![Connecting Points](../images/ManualFixing/mf_random_intersection_connecting.png)

These points need to be connected to the streets. When you select a point, you can see it contains some information in the details panel:

![Intersection Point Details](../images/ManualFixing/mf_random_intersection_details.png)

You want to pay attention to this LaneProfile variable:

![Lane Profile](../images/ManualFixing/mf_random_intersection_lane_profile.png)

This indicates what type of street it can connect to. When you click on a street and check the details panel, you should see a similar variable:

![Street Check](../images/ManualFixing/mf_random_intersection_street_check.png)

If these two are the same, the intersection point can connect to that street. Let's connect these two by simply dragging the intersection point to that of the zoneshape, like this:

![Street Connection](../images/ManualFixing/mf_random_intersection_street_connection.png)

You may see some red lines already appearing, which is good. It means it is connected correctly. To clean it up even more, I recommend rotating the intersection points so it aligns correctly with the zoneshape. You can switch to the rotate tool by clicking on it on the top of your viewport or by pressing **R**. After doing that, it should look something like this:

![Point Rotation](../images/ManualFixing/mf_random_intersection_point_rotation.png)

When connecting the zoneshapes, you may see some arrows on the points of the intersection. If you want to know if the rotation is correct, you can use these. If they are correct, it should look something like this:

![Point Zoomed](../images/ManualFixing/mf_random_intersection_point_zoomed.png)

If you did this correctly, it means that these two are connected properly. Well done! We now want to repeat this for all the other streets as well.

After connecting them, it should look something like this:

![Connected Points](../images/ManualFixing/mf_random_intersection_points.png)

As you will notice, one of the intersection points can’t be connected anymore and a lot of streets aren’t yet. This is normal; we will need to add and change some points of the intersection.

5. Start off by removing the redundant point from the removed street:

    ![Remove Redundant Point](../images/ManualFixing/mf_random_intersection_order.png)

6. Now let's add some more nodes. To do this, you need to select a point from the intersection. When you do this, simply drag out a new point by holding down **LEFT MOUSE BUTTON** and **LEFT ALT**. You should now see a new point appear. 

While it technically doesn’t matter for the functionality of the intersection, it looks better when you drag from the correct point. This is what it looks like when it isn’t the correct one:

![Incorrect Point](../images/ManualFixing/mf_random_intersection_point_addition.png)

You can see that there are lines intersecting, so we will need to drag from another point:

![Dragging Point](../images/ManualFixing/mf_random_intersection_point_dragging.png)

7. Repeat this step for every street. As you will notice, none of the streets connect correctly to the intersection:

![All Points](../images/ManualFixing/mf_random_intersection_all_points.png)

This is normal. We will need to change the settings so they are the same as the street you want to connect to.

Let's start with the first one. If you check the details panel, you will notice that the lane profiles are actually the same:

![Lane Profile Check](../images/ManualFixing/mf_intersection_lane_profile_check.png)

But there is another reason why these don’t connect. When you check the arrows, they seem to not line up. This is because these streets are one-way roads and the direction of the intersection needs to be changed to match up. This can be done with the Reverse Lane Profile checkmark on the intersection point.

Once you have done that, you will see that the intersection does line up:

![Correct Point](../images/ManualFixing/mf_intersection_point_zoomed.png)

For the next street, you will need to change the Lane Profile. You can check the street to know what lane profile it should be:

![Lane Profile Change](../images/ManualFixing/mf_intersection_lane_profile_change.png)

It should be Vehicle (2 arrows up) 400, so go to the connecting intersection point and change it to be the same.

Make sure to change the correct Lane Profile variable. You want to change this one; the other one won’t do anything:

![Correct Lane Profile](../images/ManualFixing/mf_intersection_details_lane_profile.png)

In our example, we also need to reverse the Lane Profile again to make the intersection point connect.

It should result in something like this:

![Lane Profile Result](../images/ManualFixing/mf_intersection_lane_profile_result.png)

Now repeat these steps for all the remaining streets.

In this intersection's case, there is something weird going on. You may see something like this happening:

![Double Intersection](../images/ManualFixing/mf_intersection_double_intersection.png)

This is because there is an intersection zoneshape that isn’t rotated correctly. You can solve this by rotating the points of that intersection as well.

The result should look something like this:

![Intersection Rotation](../images/ManualFixing/mf_intersection_rotation.png)

After moving and replacing some points, you want to also move the traffic lights. These should be placed where a street enters the intersection, so where the arrows point towards the intersection.

In this intersection's case, the result should look something like this:

![Intersection Result](../images/ManualFixing/mf_intersection_result.png)

This is good enough and could function as a fully working intersection. But there are still some improvements that can be made. For example, as you can see, the 3-lane zoneshape is overlapping with a 2-lane zoneshape. This is probably because there is some information missing. While it would still work by not changing it, it could lead to some weird artifacts where cars go through each other, so I recommend combining them into one big zoneshape. This will give some more work but will result in a better outcome.

The way you can do it for this example is the following:
1. Select the 3-lane road and change the lane profile to that of a 4-lane road. It will now look like this:

    ![Zoneshape Cleanup](../images/ManualFixing/mf_intersection_zoneshape_cleanup.png)

2. Now remove the 2-lane road that is overlapping. After doing that, you may want to also move the 4-lane zoneshape a bit. You can move it as a whole by clicking on it and using the arrows, or by using the details panel. But if you can’t see the arrows (because of import reasons), you could also move each point of that zoneshape one by one. While this is not ideal, I found it works the best.

In the case of this zoneshape, you could even remove some points as it doesn’t need to make corners, and that makes it easier to move.

Remember to also edit the intersection so it works with the new road.

This is the result after combining one street:

![Street Combining](../images/ManualFixing/mf_street_combining.png)

You will also want to do it for the other streets.

So you can repeat the process of making your intersections look nice. This can take quite some time, but the result is better traffic, so it is worth it 🙂.

## Extra Information

There are some extras that could improve traffic flow even more. These can be found on the intersections. When you select an intersection and go to its details panel, there is this variable:

![Connection Restrictions](../images/ManualFixing/mf_intersection_connection_restrictions.png)

With this variable, you can set per point restrictions. For example, if you don’t want cars to have the ability to take a left or right turn, you can play around with these to improve traffic flow even more.

After manually fixing all streets, [you can start packaging the project...](./Packaging.md)
