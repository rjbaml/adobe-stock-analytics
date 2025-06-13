import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TabContent from './components/TabContent';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-900">
          <TabContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
}

export default App;