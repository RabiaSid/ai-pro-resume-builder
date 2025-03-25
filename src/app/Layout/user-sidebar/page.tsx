import Link from "next/link";
import React from "react";
import { MdWbCloudy } from "react-icons/md";

type sidebarItem = {
  name: string;
  icon: React.ReactNode;
  onClick?: () => void;
  badge?: string | null;
};

const sidebarItems: sidebarItem[] = [
  { name: "Dashboard", icon: <MdWbCloudy size={24} /> },
  { name: "Kanban", icon: <MdWbCloudy size={24} />, badge: "Pro" },
  { name: "Inbox", icon: <MdWbCloudy size={24} />, badge: "3" },
  { name: "Users", icon: <MdWbCloudy size={24} /> },
  { name: "Products", icon: <MdWbCloudy size={24} /> },
  { name: "Sign In", icon: <MdWbCloudy size={24} /> },
  { name: "Sign Up", icon: <MdWbCloudy size={24} /> },
];

export default function UserSideBar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
      >
        <span className="sr-only">Open sidebar</span>
        {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg> */}
      </button>

      <div className="z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r">
        <div className="h-full px-3 py-8 overflow-y-auto bg-white ">
          <ul className="space-y-4 font-medium">
            {sidebarItems?.map((item, index) => (
              <li key={index} className="flex justify-center">
                <button
                  onClick={item.onClick}
                  className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  {item.icon}
                  {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d={IconMap[item.icon]} />
                                    </svg> */}
                  {/* <span className="ms-3 flex-1 whitespace-nowrap">{item.name}</span>
                                    {item.badge && (
                                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                                            {item.badge}
                                        </span>
                                    )} */}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
