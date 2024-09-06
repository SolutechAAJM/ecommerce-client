"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Login from "../(auth)/login/page";
import Signup from "../(auth)/signup/page";

import SidebarC from "@/components/Sidebar";

export const HomePage = () => {
  const router = useRouter();

  const ongo = () => {
    router.push("/login");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    {
      name: 'login',
      url: '/login',
    },
    {
      name: 'Users',
      url: '/signup',
      subitems: [
        { name: 'Add User', url: '/users/add' },
        { name: 'List Users', url: '/users/list' },
      ],
    },
    {
      name: 'Settings',
      url: '/settings',
    },
  ];

  return (
    <div className="app-container">
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      <SidebarC isOpen={isSidebarOpen} items={sidebarItems} />

      <div className="content">
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );

};

export default HomePage;
