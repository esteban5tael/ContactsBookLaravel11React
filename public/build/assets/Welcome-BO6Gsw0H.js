import{j as e,Y as l,a as r}from"./app-C2kOsLng.js";function n({auth:a,contacts:i}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[e.jsx(l,{title:"My Simple Contacts Book"}),e.jsx("header",{className:"bg-gray-900 text-white flex justify-end p-4",children:e.jsx("nav",{className:"flex gap-2",children:a.user?e.jsx(r,{href:route("dashboard"),className:"rounded-md px-2 py-1 transition hover:text-gray-300 focus:outline-none focus-visible:ring-[#FF2D20]",children:"Dashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(r,{href:route("login"),className:"rounded-md px-2 py-1 transition hover:text-gray-300 focus:outline-none focus-visible:ring-[#FF2D20]",children:"Log in"}),e.jsx(r,{href:route("register"),className:"rounded-md px-2 py-1 transition hover:text-gray-300 focus:outline-none focus-visible:ring-[#FF2D20]",children:"Register"})]})})}),e.jsx("main",{className:"bg-gray-100 dark:bg-gray-900 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:i.map(s=>e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-lg font-semibold mb-2",children:s.name}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:s.email}),s.avatar?e.jsx("img",{src:`storage/${s.avatar}`,alt:"Avatar",className:" rounded-full"}):e.jsx("div",{className:"w-full h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-300 mb-4",children:"No avatar"})]})},s.id))})})]})})}export{n as default};