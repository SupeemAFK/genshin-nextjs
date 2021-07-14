import React, { useState } from 'react';
import '../styles/globals.css'

//components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <div>
      <Navbar openSidebar={openSidebar} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
