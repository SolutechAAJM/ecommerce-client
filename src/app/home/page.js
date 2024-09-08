"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Login from "../(auth)/login/page";
import Signup from "../(auth)/signup/page";

import SidebarC from "@/components/Sidebar";
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const HomePage = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  const handleScrollToSection = () => {
    if (sidebarRef.current) {
      sidebarRef.current.top('section-id'); // Reemplaza 'section-id' con el ID del elemento al que quieres desplazarte
    }
  };

  return (
    <div className="app">
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      <SidebarC
        ref={sidebarRef}
        open={isSidebarOpen}
        onClose={handleClose}
        fullScreen={false}
        className="custom-sidebar"
        title="Sidebar Title"
      >
        <div id="section-id">
          <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>
          <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>  <h2>Section Content</h2>
          <p>This is the content of the section you can scroll to.</p>
  
        </div>
      </SidebarC>

    </div>
  );


};

export default HomePage;
