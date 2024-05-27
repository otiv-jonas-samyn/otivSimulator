"use strict";(self.webpackChunkotiv_simulator_doc=self.webpackChunkotiv_simulator_doc||[]).push([[8296],{4205:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(4848),a=n(8453);const s={id:"Packaging",title:"Packaging",sidebar_label:"Packaging"},o="Package the Simulator",r={id:"CityGeneration/Packaging",title:"Packaging",description:"This is the last step, it will package the simulator so you can start gathering data.",source:"@site/docs/CityGeneration/Packaging.md",sourceDirName:"CityGeneration",slug:"/CityGeneration/Packaging",permalink:"/otivSimulator/docs/CityGeneration/Packaging",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CityGeneration/Packaging.md",tags:[],version:"current",frontMatter:{id:"Packaging",title:"Packaging",sidebar_label:"Packaging"},sidebar:"documentationSidebar",previous:{title:"Unreal Engine",permalink:"/otivSimulator/docs/CityGeneration/UnrealEngine"}},c={},l=[{value:"Saving and Testing the City",id:"saving-and-testing-the-city",level:2},{value:"How to Build the Simulator",id:"how-to-build-the-simulator",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"package-the-simulator",children:"Package the Simulator"}),"\n",(0,i.jsx)(e.p,{children:"This is the last step, it will package the simulator so you can start gathering data."}),"\n",(0,i.jsx)(e.h2,{id:"saving-and-testing-the-city",children:"Saving and Testing the City"}),"\n",(0,i.jsx)(e.p,{children:"After putting the whole city in Unreal Engine, first of all, you want to save it. After saving, it is also important to test it. You can press play by pressing this button on the top:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Play Button",src:n(4760).A+"",width:"1528",height:"157"})}),"\n",(0,i.jsx)(e.p,{children:"It can take a while to load everything in, so just wait for a bit. After a while, you should see the tram and vehicles appear:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Tram View",src:n(8737).A+"",width:"1525",height:"763"})}),"\n",(0,i.jsx)(e.p,{children:"If you wait a bit longer, the tram should start driving. If you see this, great job! Everything went well, and you can start building the simulator."}),"\n",(0,i.jsx)(e.h2,{id:"how-to-build-the-simulator",children:"How to Build the Simulator"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Save the Level"}),": Make sure the level is saved. If the name of the level has a \u201c*\u201d after it, it is not saved."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Set the Level as Startup Level"}),": This should be done in the project settings. These can be found under Edit \u2192 Project Settings..."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Edit Menu",src:n(3488).A+"",width:"911",height:"518"})}),"\n",(0,i.jsx)(e.p,{children:"It should open up another window. Navigate to Maps & Modes:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Project Settings",src:n(628).A+"",width:"1752",height:"1078"})}),"\n",(0,i.jsxs)(e.p,{children:["Change the Game Default Map to your current map (e.g., ",(0,i.jsx)(e.code,{children:"L_Rotterdam"}),"). The Editor Startup Map is not important for the build but can be useful if it is a map you later want to continue working on. Setting a map there makes it the first map Unreal Engine loads when you start up your project."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Package the Project"}),":"]}),"\n",(0,i.jsx)(e.p,{children:"a. Go to Platforms \u2192 Windows \u2192 Package Project..."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Windows Package Project",src:n(8933).A+"",width:"1015",height:"734"})}),"\n",(0,i.jsx)(e.p,{children:"b. When you click on it, you will have to set a location where you want to save the package. Make sure you put it into a location that you will remember."}),"\n",(0,i.jsx)(e.p,{children:"c. After confirming the location, it will start packaging. Now, you just wait for it to finish."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Copy Necessary Files"}),": Once it is done packaging, press the CPYBLD buttons in Unreal Engine:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Python Copy Button",src:n(3900).A+"",width:"1249",height:"145"})}),"\n",(0,i.jsx)(e.p,{children:"This will copy all extra files necessary for the simulator to run."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"That's it for the packaging!"})]})}function d(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},3488:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/edit_menu-98c6062e0f9735f421c31d6b5fb074be.png"},4760:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/play_button-1f60cdd51b510a1ce875a83e50b920a5.png"},628:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/project_settings-df760716129401bd0cfaccd11d9e62ee.png"},3900:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/python_copy_button-0ae641d789ac98f53ed045e3a5286ec6.png"},8737:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/tram_view-7f7e5305ee7aa09a40ddec8c201e09d8.png"},8933:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/windows_package_project-463f550b19f2d61146aea94a4ec1451d.png"},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>r});var i=n(6540);const a={},s=i.createContext(a);function o(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);