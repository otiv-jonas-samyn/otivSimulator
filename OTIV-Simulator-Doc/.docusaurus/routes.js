import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/otivSimulator/blog',
    component: ComponentCreator('/otivSimulator/blog', 'b0c'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/archive',
    component: ComponentCreator('/otivSimulator/blog/archive', 'f48'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/first-blog-post',
    component: ComponentCreator('/otivSimulator/blog/first-blog-post', 'b7b'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/long-blog-post',
    component: ComponentCreator('/otivSimulator/blog/long-blog-post', '7e9'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/mdx-blog-post',
    component: ComponentCreator('/otivSimulator/blog/mdx-blog-post', '0ee'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/tags',
    component: ComponentCreator('/otivSimulator/blog/tags', '55a'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/tags/docusaurus',
    component: ComponentCreator('/otivSimulator/blog/tags/docusaurus', 'cfc'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/tags/facebook',
    component: ComponentCreator('/otivSimulator/blog/tags/facebook', 'c46'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/tags/hello',
    component: ComponentCreator('/otivSimulator/blog/tags/hello', '902'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/tags/hola',
    component: ComponentCreator('/otivSimulator/blog/tags/hola', '719'),
    exact: true
  },
  {
    path: '/otivSimulator/blog/welcome',
    component: ComponentCreator('/otivSimulator/blog/welcome', '254'),
    exact: true
  },
  {
    path: '/otivSimulator/markdown-page',
    component: ComponentCreator('/otivSimulator/markdown-page', '084'),
    exact: true
  },
  {
    path: '/otivSimulator/docs',
    component: ComponentCreator('/otivSimulator/docs', '1b4'),
    routes: [
      {
        path: '/otivSimulator/docs',
        component: ComponentCreator('/otivSimulator/docs', '5f2'),
        routes: [
          {
            path: '/otivSimulator/docs',
            component: ComponentCreator('/otivSimulator/docs', 'e8a'),
            routes: [
              {
                path: '/otivSimulator/docs/Airsim',
                component: ComponentCreator('/otivSimulator/docs/Airsim', '34c'),
                exact: true
              },
              {
                path: '/otivSimulator/docs/Airsim/InstanceSegmentation',
                component: ComponentCreator('/otivSimulator/docs/Airsim/InstanceSegmentation', 'cce'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/Airsim/Python',
                component: ComponentCreator('/otivSimulator/docs/Airsim/Python', '689'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/CityGeneration',
                component: ComponentCreator('/otivSimulator/docs/CityGeneration', '069'),
                exact: true
              },
              {
                path: '/otivSimulator/docs/CityGeneration/Houdini',
                component: ComponentCreator('/otivSimulator/docs/CityGeneration/Houdini', 'd84'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/CityGeneration/UnrealEngine',
                component: ComponentCreator('/otivSimulator/docs/CityGeneration/UnrealEngine', 'c65'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/intro',
                component: ComponentCreator('/otivSimulator/docs/intro', 'bb9'),
                exact: true
              },
              {
                path: '/otivSimulator/docs/Simulator',
                component: ComponentCreator('/otivSimulator/docs/Simulator', 'd69'),
                exact: true
              },
              {
                path: '/otivSimulator/docs/Simulator/Output',
                component: ComponentCreator('/otivSimulator/docs/Simulator/Output', 'cce'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/Simulator/Settings',
                component: ComponentCreator('/otivSimulator/docs/Simulator/Settings', '553'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/Simulator/Usage',
                component: ComponentCreator('/otivSimulator/docs/Simulator/Usage', '863'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/TrafficPlugin',
                component: ComponentCreator('/otivSimulator/docs/TrafficPlugin', '5f7'),
                exact: true
              },
              {
                path: '/otivSimulator/docs/TrafficPlugin/Pedestrians',
                component: ComponentCreator('/otivSimulator/docs/TrafficPlugin/Pedestrians', 'd20'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/TrafficPlugin/Vehicles',
                component: ComponentCreator('/otivSimulator/docs/TrafficPlugin/Vehicles', '020'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/TramPlugin',
                component: ComponentCreator('/otivSimulator/docs/TramPlugin', 'e07'),
                exact: true
              },
              {
                path: '/otivSimulator/docs/TramPlugin/Settings',
                component: ComponentCreator('/otivSimulator/docs/TramPlugin/Settings', '650'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/otivSimulator/docs/TramPlugin/Tracks',
                component: ComponentCreator('/otivSimulator/docs/TramPlugin/Tracks', '223'),
                exact: true,
                sidebar: "documentationSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/otivSimulator/',
    component: ComponentCreator('/otivSimulator/', '287'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
