// import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";


// const sidebarLinks = [
//   { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
//   {
//     name: "Management",
//     icon: <ManageIcon />,
//     children: [
//       { name: "Users", path: "/management/users" },
//       { name: "Roles", path: "/management/roles" },
//       { name: "Permissions", path: "/management/permissions" },
//     ],
//   },
//   { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
// ];
// export default function Sidebar({ collapsed, }) {
//   const location = useLocation();
//   const [openFolder, setOpenFolder] = useState(null);

//   const toggleFolder = (name) => {
//     setOpenFolder(openFolder === name ? null : name);
//   };

//   return (
//     <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
//       {sidebarLinks.map((link) => (
//         <div key={link.name}>
//           {link.children ? (
//             <div>
//               {/* Folder Header */}
//               <div
//                 className="flex items-center p-3 cursor-pointer hover:bg-gray-700"
//                 onClick={() => toggleFolder(link.name)}
//               >
//                 <span className="mr-3">{link.icon}</span>
//                 {!collapsed && <span>{openFolder && location.pathname.startsWith(link.children[0].path) ? getCurrentPageName(location.pathname, link.children) : link.name}</span>}
//               </div>

//               {/* Nested Links */}
//               {openFolder === link.name && !collapsed && (
//                 <div className="ml-8 flex flex-col">
//                   {link.children.map((child) => (
//                     <NavLink
//                       key={child.name}
//                       to={child.path}
//                       className={({ isActive }) =>
//                         `p-2 hover:bg-gray-700 rounded ${isActive ? "bg-gray-800" : ""}`
//                       }
//                     >
//                       {child.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <NavLink
//               to={link.path}
//               className={({ isActive }) =>
//                 `flex items-center p-3 hover:bg-gray-700 rounded ${isActive ? "bg-gray-800" : ""}`
//               }
//             >
//               <span className="mr-3">{link.icon}</span>
//               {!collapsed && <span>{link.name}</span>}
//             </NavLink>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// // Helper function
// function getCurrentPageName(pathname, children) {
//   const page = children.find((c) => pathname.startsWith(c.path));
//   return page ? page.name : "";
// }