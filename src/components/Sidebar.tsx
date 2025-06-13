import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  DollarSign, 
  Search,
  Calendar
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow-y-auto border-r border-gray-800">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Adobe Stock</h1>
            <p className="text-gray-400 text-sm">Analytics</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;