import{j as t}from"./app-C2kOsLng.js";const s=({contacts:e})=>t.jsxs("div",{className:"mt-4 flex justify-between",children:[t.jsx("button",{disabled:!e.links.prev,onClick:()=>e.links.prev&&visit(e.links.prev),className:`px-3 py-1 text-sm font-medium rounded-md focus:outline-none ${e.links.prev?"text-gray-700 dark:text-gray-300":"text-gray-400 dark:text-gray-600"}`,children:"« Previous"}),t.jsx("div",{className:"flex",children:Object.entries(e.links.pages).map(([i,r])=>t.jsx("button",{onClick:()=>visit(r),className:`px-3 py-1 ml-2 text-sm font-medium rounded-md focus:outline-none ${e.current_page==i?"text-gray-700 dark:text-gray-300":"text-gray-400 dark:text-gray-600"}`,children:i},i))}),t.jsx("button",{disabled:!e.links.next,onClick:()=>e.links.next&&visit(e.links.next),className:`px-3 py-1 text-sm font-medium rounded-md focus:outline-none ${e.links.next?"text-gray-700 dark:text-gray-300":"text-gray-400 dark:text-gray-600"}`,children:"Next »"})]});export{s as default};