import React from 'react';
import OverviewTab from './OverviewTab';
import RevenueTab from './RevenueTab';
import TrendingTab from './TrendingTab';
import SearchTab from './SearchTab';
import DownloadsTab from './DownloadsTab';
import CalendarTab from './CalendarTab';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'revenue':
        return <RevenueTab />;
      case 'trending':
        return <TrendingTab />;
      case 'search':
        return <SearchTab />;
      case 'downloads':
        return <DownloadsTab />;
      case 'calendar':
        return <CalendarTab />;
      default:
        return <OverviewTab />;
    }
  };

  return <div className="p-6">{renderTabContent()}</div>;
};

export default TabContent;