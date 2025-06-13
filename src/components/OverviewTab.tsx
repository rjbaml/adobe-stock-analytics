import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import Chart from './Chart';
import { Download, DollarSign, Users, TrendingUp, Eye, Image, Zap, Clock, Globe, AlertCircle, Activity, Target } from 'lucide-react';

const OverviewTab: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveMetrics, setLiveMetrics] = useState({
    downloads: 847234,
    revenue: 234567,
    activeUsers: 156789,
    conversionRate: 3.4
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time data updates
      setLiveMetrics(prev => ({
        downloads: prev.downloads + Math.floor(Math.random() * 50),
        revenue: prev.revenue + Math.floor(Math.random() * 100),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20) - 10,
        conversionRate: Math.max(0, prev.conversionRate + (Math.random() - 0.5) * 0.1)
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const realTimeDownloads = [
    { label: '12:00', value: 1250 },
    { label: '13:00', value: 1890 },
    { label: '14:00', value: 2100 },
    { label: '15:00', value: 2400 },
    { label: '16:00', value: 2200 },
    { label: '17:00', value: 1800 },
    { label: 'Now', value: 2150 },
  ];

  const liveCategories = [
    { label: 'AI/Tech', value: 52000, change: '+23%' },
    { label: 'Business', value: 48000, change: '+18%' },
    { label: 'Lifestyle', value: 35000, change: '+15%' },
    { label: 'Nature', value: 28000, change: '+12%' },
    { label: 'Abstract', value: 22000, change: '+8%' },
  ];

  const trendingAssets = [
    { 
      id: 1, 
      title: 'AI Robot Working on Laptop', 
      downloads: 3840, 
      revenue: '$7,680',
      growth: '+189%',
      category: 'Technology',
      timeAgo: '2 min ago',
      status: 'trending'
    },
    { 
      id: 2, 
      title: 'Remote Team Video Call', 
      downloads: 3156, 
      revenue: '$6,312',
      growth: '+156%',
      category: 'Business',
      timeAgo: '5 min ago',
      status: 'hot'
    },
    { 
      id: 3, 
      title: 'Sustainable Energy Concept', 
      downloads: 2967, 
      revenue: '$5,934',
      growth: '+134%',
      category: 'Environment',
      timeAgo: '8 min ago',
      status: 'rising'
    },
    { 
      id: 4, 
      title: 'Mental Health Meditation', 
      downloads: 2823, 
      revenue: '$5,646',
      growth: '+98%',
      category: 'Health',
      timeAgo: '12 min ago',
      status: 'stable'
    },
    { 
      id: 5, 
      title: 'Cryptocurrency Trading', 
      downloads: 2654, 
      revenue: '$5,308',
      growth: '+87%',
      category: 'Finance',
      timeAgo: '15 min ago',
      status: 'rising'
    },
  ];

  const liveAlerts = [
    {
      id: 1,
      type: 'spike',
      message: 'AI content downloads spiked 189% in last hour',
      time: '2 min ago',
      severity: 'high'
    },
    {
      id: 2,
      type: 'trend',
      message: 'New trending keyword: "sustainable technology"',
      time: '8 min ago',
      severity: 'medium'
    },
    {
      id: 3,
      type: 'milestone',
      message: 'Daily revenue target achieved (102%)',
      time: '15 min ago',
      severity: 'success'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'trending': return 'bg-red-900 text-red-400 border-red-800';
      case 'hot': return 'bg-orange-900 text-orange-400 border-orange-800';
      case 'rising': return 'bg-green-900 text-green-400 border-green-800';
      case 'stable': return 'bg-blue-900 text-blue-400 border-blue-800';
      default: return 'bg-gray-900 text-gray-400 border-gray-800';
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-l-red-500 bg-red-900 bg-opacity-20';
      case 'medium': return 'border-l-yellow-500 bg-yellow-900 bg-opacity-20';
      case 'success': return 'border-l-green-500 bg-green-900 bg-opacity-20';
      default: return 'border-l-gray-500 bg-gray-900 bg-opacity-20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold">Live Analytics Dashboard</h2>
            </div>
            <p className="text-red-100">Real-time Adobe Stock performance data</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-semibold">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
            <p className="text-red-100 text-sm">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Live Downloads"
          value={liveMetrics.downloads.toLocaleString()}
          change="+12.5% from yesterday"
          changeType="positive"
          icon={Download}
          color="red"
        />
        <MetricCard
          title="Live Revenue"
          value={`$${liveMetrics.revenue.toLocaleString()}`}
          change="+8.2% from yesterday"
          changeType="positive"
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Active Users Now"
          value={liveMetrics.activeUsers.toLocaleString()}
          change="+15.3% from yesterday"
          changeType="positive"
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Live Conversion"
          value={`${liveMetrics.conversionRate.toFixed(1)}%`}
          change="-0.3% from yesterday"
          changeType="negative"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Live Alerts */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-yellow-900 text-yellow-400 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Live Alerts & Notifications</h3>
            <p className="text-sm text-gray-400">Real-time performance insights</p>
          </div>
        </div>
        <div className="space-y-3">
          {liveAlerts.map((alert) => (
            <div key={alert.id} className={`border-l-4 p-4 rounded-r-lg ${getAlertColor(alert.severity)}`}>
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{alert.message}</p>
                <span className="text-sm text-gray-400">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Hourly Downloads (Live)</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>
          <Chart
            title=""
            data={realTimeDownloads}
            type="line"
            color="red"
          />
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Live Category Performance</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-400">Updated now</span>
            </div>
          </div>
          <div className="space-y-4">
            {liveCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="font-medium text-white">{category.label}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-white">{category.value.toLocaleString()}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400">
                    {category.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Assets (Real-time) */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-900 text-red-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Trending Assets (Live)</h3>
              <p className="text-sm text-gray-400">Most downloaded in the last hour</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Live updates</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Rank</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Asset</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Growth</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {trendingAssets.map((asset, index) => (
                <tr key={asset.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-white">#{index + 1}</span>
                      {index === 0 && <Zap className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Image className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium">{asset.title}</span>
                        <p className="text-sm text-gray-400">{asset.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-white">{asset.downloads.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-green-400">{asset.revenue}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {asset.growth}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{asset.timeAgo}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-time Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-900 text-green-400 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Today's Goals</h4>
              <p className="text-sm text-gray-400">Progress tracking</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Downloads Target</span>
              <span className="font-semibold text-green-400">102% ✓</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Revenue Target</span>
              <span className="font-semibold text-green-400">98% ↗</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">User Engagement</span>
              <span className="font-semibold text-green-400">115% ✓</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Global Activity</h4>
              <p className="text-sm text-gray-400">Live worldwide stats</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Countries</span>
              <span className="font-semibold text-white">127</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Peak Region</span>
              <span className="font-semibold text-white">North America</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Time Zone Spread</span>
              <span className="font-semibold text-white">24/7 Active</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-900 text-purple-400 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">System Health</h4>
              <p className="text-sm text-gray-400">Platform status</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">API Response</span>
              <span className="font-semibold text-green-400">98ms ✓</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Uptime</span>
              <span className="font-semibold text-green-400">99.9% ✓</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Data Sync</span>
              <span className="font-semibold text-green-400">Real-time ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;