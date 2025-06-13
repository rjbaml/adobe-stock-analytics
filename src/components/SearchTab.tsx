import React, { useState } from 'react';
import MetricCard from './MetricCard';
import Chart from './Chart';
import { Search, TrendingUp, Hash, Eye, Download, DollarSign, Target, Zap, Filter, Calendar } from 'lucide-react';

const SearchTab: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('7d');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const trendingKeywords = [
    {
      keyword: 'AI artificial intelligence',
      searches: 245680,
      growth: '+189%',
      difficulty: 'High',
      cpc: '$2.45',
      downloads: 89420,
      revenue: '$178,840',
      category: 'Technology',
      trend: 'rising'
    },
    {
      keyword: 'remote work home office',
      searches: 198750,
      growth: '+156%',
      difficulty: 'Medium',
      cpc: '$1.89',
      downloads: 76340,
      revenue: '$152,680',
      category: 'Business',
      trend: 'rising'
    },
    {
      keyword: 'sustainable green energy',
      searches: 167890,
      growth: '+134%',
      difficulty: 'Medium',
      cpc: '$2.12',
      downloads: 62180,
      revenue: '$124,360',
      category: 'Environment',
      trend: 'rising'
    },
    {
      keyword: 'mental health wellness',
      searches: 145620,
      growth: '+98%',
      difficulty: 'Low',
      cpc: '$1.67',
      downloads: 58940,
      revenue: '$117,880',
      category: 'Health',
      trend: 'stable'
    },
    {
      keyword: 'cryptocurrency blockchain',
      searches: 134580,
      growth: '+87%',
      difficulty: 'High',
      cpc: '$3.21',
      downloads: 45670,
      revenue: '$91,340',
      category: 'Finance',
      trend: 'rising'
    },
    {
      keyword: 'electric vehicle EV',
      searches: 128940,
      growth: '+76%',
      difficulty: 'Medium',
      cpc: '$2.78',
      downloads: 41230,
      revenue: '$82,460',
      category: 'Automotive',
      trend: 'rising'
    },
    {
      keyword: 'diversity inclusion team',
      searches: 112350,
      growth: '+65%',
      difficulty: 'Low',
      cpc: '$1.45',
      downloads: 48920,
      revenue: '$97,840',
      category: 'Business',
      trend: 'stable'
    },
    {
      keyword: 'metaverse virtual reality',
      searches: 98760,
      growth: '+54%',
      difficulty: 'High',
      cpc: '$2.89',
      downloads: 32180,
      revenue: '$64,360',
      category: 'Technology',
      trend: 'declining'
    }
  ];

  const keywordTrends = [
    { label: 'Mon', value: 12500 },
    { label: 'Tue', value: 15800 },
    { label: 'Wed', value: 18200 },
    { label: 'Thu', value: 21400 },
    { label: 'Fri', value: 19600 },
    { label: 'Sat', value: 16800 },
    { label: 'Sun', value: 14200 },
  ];

  const categoryPerformance = [
    { label: 'Technology', value: 89 },
    { label: 'Business', value: 76 },
    { label: 'Health', value: 68 },
    { label: 'Environment', value: 54 },
    { label: 'Finance', value: 42 },
  ];

  const emergingKeywords = [
    { keyword: 'AI generated art', growth: '+245%', searches: 45680 },
    { keyword: 'carbon neutral business', growth: '+198%', searches: 32140 },
    { keyword: 'hybrid work model', growth: '+167%', searches: 28950 },
    { keyword: 'quantum computing', growth: '+145%', searches: 21340 },
    { keyword: 'plant based lifestyle', growth: '+134%', searches: 19870 },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low': return 'bg-green-900 text-green-400 border-green-800';
      case 'Medium': return 'bg-yellow-900 text-yellow-400 border-yellow-800';
      case 'High': return 'bg-red-900 text-red-400 border-red-800';
      default: return 'bg-gray-900 text-gray-400 border-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'stable': return <Target className="w-4 h-4 text-blue-500" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <Target className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Analytics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Searches"
          value="2.4M"
          change="+34.5% this week"
          changeType="positive"
          icon={Search}
          color="blue"
        />
        <MetricCard
          title="Trending Keywords"
          value="1,247"
          change="+89 new this week"
          changeType="positive"
          icon={Hash}
          color="green"
        />
        <MetricCard
          title="Avg. Search Volume"
          value="156K"
          change="+23.1% from last week"
          changeType="positive"
          icon={Eye}
          color="purple"
        />
        <MetricCard
          title="Conversion Rate"
          value="4.2%"
          change="+0.8% improvement"
          changeType="positive"
          icon={Target}
          color="red"
        />
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select 
              value={timeFilter} 
              onChange={(e) => setTimeFilter(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
            >
              <option value="all">All Categories</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="environment">Environment</option>
              <option value="finance">Finance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="Search Volume Trends"
          data={keywordTrends}
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

      {/* Trending Keywords Table */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">High Demand Keywords</h3>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-400">Real-time data</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Keyword</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Searches</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Growth</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Difficulty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">CPC</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Trend</th>
              </tr>
            </thead>
            <tbody>
              {trendingKeywords.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.keyword}</p>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-white">{item.searches.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {item.growth}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-white">{item.cpc}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-purple-500" />
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
                    {getTrendIcon(item.trend)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emerging Keywords */}
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-yellow-900 text-yellow-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Emerging Keywords</h4>
              <p className="text-sm text-gray-400">Fastest growing this week</p>
            </div>
          </div>
          <div className="space-y-4">
            {emergingKeywords.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">{item.keyword}</p>
                  <p className="text-sm text-gray-400">{item.searches.toLocaleString()} searches</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400">
                  {item.growth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Insights */}
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Search Insights</h4>
              <p className="text-sm text-gray-400">Key performance indicators</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
              <span className="text-gray-300">Peak Search Time</span>
              <span className="font-semibold text-white">2:00 PM - 4:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
              <span className="text-gray-300">Avg. Session Duration</span>
              <span className="font-semibold text-white">4m 32s</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
              <span className="text-gray-300">Search Success Rate</span>
              <span className="font-semibold text-green-400">87.3%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
              <span className="text-gray-300">Mobile vs Desktop</span>
              <span className="font-semibold text-white">62% / 38%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Opportunities */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Keyword Opportunities</h3>
            <p className="text-red-100 mb-4">Discover untapped keywords with high potential</p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-2xl font-bold">156</p>
                <p className="text-red-100 text-sm">Low Competition</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">89</p>
                <p className="text-red-100 text-sm">High Volume</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">$2.1M</p>
                <p className="text-red-100 text-sm">Revenue Potential</p>
              </div>
            </div>
          </div>
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;