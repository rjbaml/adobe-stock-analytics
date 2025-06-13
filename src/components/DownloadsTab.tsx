import React, { useState } from 'react';
import MetricCard from './MetricCard';
import Chart from './Chart';
import { Download, TrendingUp, Calendar, Leaf, PartyPopper, Snowflake, Eye, DollarSign, Star, Filter, Search, Clock, Users, Target } from 'lucide-react';

const DownloadsTab: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState('evergreen');
  const [timeFilter, setTimeFilter] = useState('30d');

  const downloadTrends = [
    { label: 'Week 1', value: 125000 },
    { label: 'Week 2', value: 138000 },
    { label: 'Week 3', value: 142000 },
    { label: 'Week 4', value: 156000 },
  ];

  const categoryPerformance = [
    { label: 'Business', value: 89000 },
    { label: 'Technology', value: 76000 },
    { label: 'Lifestyle', value: 68000 },
    { label: 'Nature', value: 54000 },
    { label: 'Abstract', value: 42000 },
  ];

  const evergreenContent = [
    {
      id: 1,
      title: 'Business Team Meeting',
      category: 'Business',
      downloads: 45680,
      revenue: '$91,360',
      growth: '+23%',
      rating: 4.9,
      tags: ['teamwork', 'corporate', 'meeting', 'professional'],
      type: 'Photo',
      demand: 'Very High',
      cpc: '$2.45'
    },
    {
      id: 2,
      title: 'AI Technology Abstract',
      category: 'Technology',
      downloads: 38920,
      revenue: '$77,840',
      growth: '+189%',
      rating: 4.8,
      tags: ['artificial intelligence', 'tech', 'future', 'digital'],
      type: 'Vector',
      demand: 'Extremely High',
      cpc: '$3.21'
    },
    {
      id: 3,
      title: 'Remote Work Setup',
      category: 'Lifestyle',
      downloads: 34560,
      revenue: '$69,120',
      growth: '+156%',
      rating: 4.9,
      tags: ['home office', 'remote work', 'productivity', 'workspace'],
      type: 'Photo',
      demand: 'Very High',
      cpc: '$2.89'
    },
    {
      id: 4,
      title: 'Sustainable Energy Concept',
      category: 'Environment',
      downloads: 29840,
      revenue: '$59,680',
      growth: '+134%',
      rating: 4.7,
      tags: ['green energy', 'sustainability', 'renewable', 'eco'],
      type: 'Illustration',
      demand: 'High',
      cpc: '$2.12'
    },
    {
      id: 5,
      title: 'Mental Health Wellness',
      category: 'Health',
      downloads: 27320,
      revenue: '$54,640',
      growth: '+98%',
      rating: 4.8,
      tags: ['wellness', 'mental health', 'meditation', 'self care'],
      type: 'Photo',
      demand: 'High',
      cpc: '$1.67'
    }
  ];

  const eventContent = [
    {
      id: 1,
      title: 'Black Friday Sale Banner',
      category: 'Marketing',
      downloads: 67890,
      revenue: '$135,780',
      growth: '+245%',
      rating: 4.9,
      tags: ['black friday', 'sale', 'discount', 'shopping'],
      type: 'Vector',
      demand: 'Peak Season',
      cpc: '$4.56',
      event: 'Black Friday 2024'
    },
    {
      id: 2,
      title: 'New Year Celebration',
      category: 'Events',
      downloads: 54320,
      revenue: '$108,640',
      growth: '+198%',
      rating: 4.8,
      tags: ['new year', 'celebration', 'party', 'fireworks'],
      type: 'Photo',
      demand: 'Seasonal Peak',
      cpc: '$3.89',
      event: 'New Year 2025'
    },
    {
      id: 3,
      title: 'Valentine\'s Day Romance',
      category: 'Romance',
      downloads: 43210,
      revenue: '$86,420',
      growth: '+167%',
      rating: 4.7,
      tags: ['valentine', 'love', 'romance', 'hearts'],
      type: 'Illustration',
      demand: 'High',
      cpc: '$2.34',
      event: 'Valentine\'s Day'
    },
    {
      id: 4,
      title: 'Back to School Supplies',
      category: 'Education',
      downloads: 38950,
      revenue: '$77,900',
      growth: '+145%',
      rating: 4.6,
      tags: ['school', 'education', 'supplies', 'students'],
      type: 'Photo',
      demand: 'Seasonal',
      cpc: '$1.98',
      event: 'Back to School'
    },
    {
      id: 5,
      title: 'Summer Vacation Beach',
      category: 'Travel',
      downloads: 35670,
      revenue: '$71,340',
      growth: '+123%',
      rating: 4.8,
      tags: ['summer', 'beach', 'vacation', 'travel'],
      type: 'Photo',
      demand: 'Seasonal',
      cpc: '$2.67',
      event: 'Summer Season'
    }
  ];

  const seasonalContent = [
    {
      id: 1,
      title: 'Winter Holiday Decorations',
      category: 'Holidays',
      downloads: 78940,
      revenue: '$157,880',
      growth: '+289%',
      rating: 4.9,
      tags: ['christmas', 'winter', 'holidays', 'decorations'],
      type: 'Photo',
      demand: 'Peak Season',
      cpc: '$5.23',
      season: 'Winter 2024'
    },
    {
      id: 2,
      title: 'Spring Flower Bloom',
      category: 'Nature',
      downloads: 56780,
      revenue: '$113,560',
      growth: '+178%',
      rating: 4.8,
      tags: ['spring', 'flowers', 'bloom', 'nature'],
      type: 'Photo',
      demand: 'Seasonal High',
      cpc: '$2.89',
      season: 'Spring'
    },
    {
      id: 3,
      title: 'Autumn Leaves Collection',
      category: 'Nature',
      downloads: 45620,
      revenue: '$91,240',
      growth: '+156%',
      rating: 4.7,
      tags: ['autumn', 'fall', 'leaves', 'seasonal'],
      type: 'Vector',
      demand: 'High',
      cpc: '$2.45',
      season: 'Autumn'
    },
    {
      id: 4,
      title: 'Halloween Spooky Elements',
      category: 'Holidays',
      downloads: 42350,
      revenue: '$84,700',
      growth: '$134%',
      rating: 4.6,
      tags: ['halloween', 'spooky', 'october', 'scary'],
      type: 'Illustration',
      demand: 'Seasonal Peak',
      cpc: '$3.67',
      season: 'Halloween'
    },
    {
      id: 5,
      title: 'Summer Beach Activities',
      category: 'Recreation',
      downloads: 39870,
      revenue: '$79,740',
      growth: '+112%',
      rating: 4.8,
      tags: ['summer', 'beach', 'activities', 'fun'],
      type: 'Photo',
      demand: 'Seasonal',
      cpc: '$2.12',
      season: 'Summer'
    }
  ];

  const getCurrentContent = () => {
    switch (activeTheme) {
      case 'evergreen': return evergreenContent;
      case 'event': return eventContent;
      case 'seasonal': return seasonalContent;
      default: return evergreenContent;
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Extremely High': return 'bg-red-900 text-red-400 border-red-800';
      case 'Very High': return 'bg-orange-900 text-orange-400 border-orange-800';
      case 'Peak Season': return 'bg-purple-900 text-purple-400 border-purple-800';
      case 'Seasonal Peak': return 'bg-pink-900 text-pink-400 border-pink-800';
      case 'Seasonal High': return 'bg-blue-900 text-blue-400 border-blue-800';
      case 'High': return 'bg-green-900 text-green-400 border-green-800';
      case 'Seasonal': return 'bg-yellow-900 text-yellow-400 border-yellow-800';
      default: return 'bg-gray-900 text-gray-400 border-gray-800';
    }
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'evergreen': return <Leaf className="w-5 h-5" />;
      case 'event': return <PartyPopper className="w-5 h-5" />;
      case 'seasonal': return <Snowflake className="w-5 h-5" />;
      default: return <Leaf className="w-5 h-5" />;
    }
  };

  const getThemeDescription = (theme: string) => {
    switch (theme) {
      case 'evergreen': return 'Timeless content with consistent demand year-round';
      case 'event': return 'Event-driven content for specific occasions and holidays';
      case 'seasonal': return 'Weather and season-specific content with cyclical demand';
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Download Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Downloads"
          value="2.4M"
          change="+18.5% this month"
          changeType="positive"
          icon={Download}
          color="blue"
        />
        <MetricCard
          title="High Demand Assets"
          value="1,247"
          change="+156 new this week"
          changeType="positive"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Peak Download Time"
          value="2-4 PM"
          change="Consistent pattern"
          changeType="neutral"
          icon={Clock}
          color="purple"
        />
        <MetricCard
          title="Conversion Rate"
          value="12.3%"
          change="+2.1% improvement"
          changeType="positive"
          icon={Target}
          color="red"
        />
      </div>

      {/* Theme Selection */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Content Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'evergreen', name: 'Evergreen', color: 'green', icon: Leaf },
            { id: 'event', name: 'Event-Based', color: 'purple', icon: PartyPopper },
            { id: 'seasonal', name: 'Seasonal', color: 'blue', icon: Snowflake }
          ].map((theme) => {
            const Icon = theme.icon;
            const isActive = activeTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  isActive
                    ? `border-${theme.color}-500 bg-${theme.color}-900 bg-opacity-20`
                    : 'border-gray-600 hover:border-gray-500 bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isActive ? `bg-${theme.color}-500 text-white` : `bg-${theme.color}-900 text-${theme.color}-400`
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-semibold ${isActive ? `text-${theme.color}-400` : 'text-white'}`}>
                      {theme.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {getThemeDescription(theme.id)}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="Download Trends"
          data={downloadTrends}
          type="line"
          color="blue"
        />
        <Chart
          title="Category Performance"
          data={categoryPerformance}
          type="bar"
          color="green"
        />
      </div>

      {/* High Demand Content Table */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {getThemeIcon(activeTheme)}
            <div>
              <h3 className="text-lg font-semibold text-white">
                High Demand {activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)} Content
              </h3>
              <p className="text-sm text-gray-400">{getThemeDescription(activeTheme)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <select 
                value={timeFilter} 
                onChange={(e) => setTimeFilter(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Asset</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Growth</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Demand</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">CPC</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Rating</th>
              </tr>
            </thead>
            <tbody>
              {getCurrentContent().map((item, index) => (
                <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.category}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-700 text-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-400">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-white">{item.downloads.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-green-400">{item.revenue}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {item.growth}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDemandColor(item.demand)}`}>
                      {item.demand}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-white">{item.cpc}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-white">{item.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Content Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-900 text-green-400 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Evergreen Winners</h4>
              <p className="text-sm text-gray-400">Consistent performers</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Business Content</span>
              <span className="font-semibold text-white">89K downloads</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">AI Technology</span>
              <span className="font-semibold text-white">76K downloads</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Remote Work</span>
              <span className="font-semibold text-white">68K downloads</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-900 text-purple-400 rounded-lg flex items-center justify-center">
              <PartyPopper className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Event Peaks</h4>
              <p className="text-sm text-gray-400">Seasonal spikes</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Black Friday</span>
              <span className="font-semibold text-purple-400">+245%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">New Year</span>
              <span className="font-semibold text-purple-400">+198%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Valentine's Day</span>
              <span className="font-semibold text-purple-400">+167%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Seasonal Trends</h4>
              <p className="text-sm text-gray-400">Cyclical patterns</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Winter Holidays</span>
              <span className="font-semibold text-blue-400">+289%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Spring Flowers</span>
              <span className="font-semibold text-blue-400">+178%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Autumn Leaves</span>
              <span className="font-semibold text-blue-400">+156%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Opportunities */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Content Opportunities</h3>
            <p className="text-blue-100 mb-4">High-demand content gaps ready to be filled</p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-2xl font-bold">234</p>
                <p className="text-blue-100 text-sm">Evergreen Gaps</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">89</p>
                <p className="text-blue-100 text-sm">Event Opportunities</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">156</p>
                <p className="text-blue-100 text-sm">Seasonal Needs</p>
              </div>
            </div>
          </div>
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Download className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsTab;