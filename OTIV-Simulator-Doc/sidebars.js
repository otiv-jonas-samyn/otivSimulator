/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentationSidebar: [
    {
      type: 'category',
      label: 'Documentation',
      items: [
        {
          type: 'category',
          label: 'Simulator',
          items: [
            'Simulator/Simulator',
            'Simulator/Settings',
            'Simulator/Usage',
          ],
        },
        {
          type: 'category',
          label: 'Airsim',
          items: [
            'Airsim/Airsim',
            'Airsim/Settings',
            'Airsim/Recording',
            'Airsim/InstanceSegmentation',
            'Airsim/Python',
            // Add more items for Airsim as needed
          ],
        },
        {
          type: 'category',
          label: 'Traffic Plugin',
          items: [
            'TrafficPlugin/Vehicles',
            'TrafficPlugin/Pedestrians',
            // Add more items for Traffic Plugin as needed
          ],
        },
        {
          type: 'category',
          label: 'Tram Plugin',
          items: [
            'TramPlugin/Settings',
            'TramPlugin/Tracks',
            // Add more items for Team Plugin as needed
          ],
        },
        {
          type: 'category',
          label: 'City Generation',
          items: [
            'CityGeneration/CityGeneration',
            'CityGeneration/OSM',
            'CityGeneration/Houdini',
            'CityGeneration/UnrealEngine',
            'CityGeneration/Packaging',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
