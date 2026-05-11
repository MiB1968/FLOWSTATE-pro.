/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SlideContent from './components/SlideContent';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden relative">
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block absolute md:relative z-20 h-full w-full md:w-64`}>
           <Sidebar />
        </div>
        <SlideContent />
      </div>
      <Footer />
    </div>
  );
}
