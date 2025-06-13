import React from 'react';
import MetricCard from './MetricCard';
import Chart from './Chart';
import { TrendingUp, Users, Award, Star, Eye, Download, DollarSign, Camera } from 'lucide-react';

const TrendingTab: React.FC = () => {
  const trendingContributors = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'SC',
      specialty: 'Photography',
      downloads: 45680,
      revenue: '$91,360',
      growth: '+127%',
      rating: 4.9,
      assets: 1240,
      country: 'Singapore',
      badge: 'Top Contributor'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      avatar: 'MR',
      specialty: 'Vector Art',
      downloads: 38920,
      revenue: '$77,840',
      growth: '+98%',
      rating: 4.8,
      assets: 890,
      country: 'Spain',
      badge: 'Rising Star'
    },
    {
      id: 3,
      name: 'Yuki Tanaka',
      avatar: 'YT',
      specialty: 'Illustrations',
      downloads: 34560,
      revenue: '$69,120',
      growth: '+85%',
      rating: 4.9,
      assets: 756,
      country: 'Japan',
      badge: 'Featured Artist'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      avatar: 'ET',
      specialty: 'Stock Photos',
      downloads: 29840,
      revenue: '$59,680',
      growth: '+72%',
      rating: 4.7,
      assets: 2100,
      country: 'UK',
      badge: 'Exclusive'
    },
    {
      id: 5,
      name: 'Alex Petrov',
      avatar: 'AP',
      specialty: '3D Renders',
      downloads: 27320,
      revenue: '$54,640',
      growth: '+68%',
      rating: 4.8,
      assets: 445,
      country: 'Russia',
      badge: 'Premium'
    }
  ];

  const contributorGrowth = [
    { label: 'Week 1', value: 12 },
    { label: 'Week 2', value: 18 },
    { label: 'Week 3', value: 25 },
    { label: 'Week 4', value: 31 },
    { label: 'Week 5', value: 28 },
    { label: 'Week 6', value: 35 },
  ];

  const categoryTrends = [
    { label: 'AI/Tech', value: 89 },
    { label: 'Business', value: 76 },
    { label: 'Lifestyle', value: 68 },
    { label: 'Nature', value: 54 },
    { label: 'Abstract', value: 42 },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Top Contributor': return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'Rising Star': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'Featured Artist': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Exclusive': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Premium': return 'bg-gradient-to-r from-red-500 to-rose-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Trending Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="New Contributors"
          value="1,247"
          change="+23.5% this month"
          changeType="positive"
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Top Performer Growth"
          value="127%"
          change="Sarah Chen leading"
          changeType="positive"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Average Rating"
          value="4.8"
          change="+0.2 from last month"
          changeType="positive"
          icon={Star}
          color="purple"
        />
        <MetricCard
          title="Featured Contributors"
          value="89"
          change="+12 this week"
          changeType="positive"
          icon={Award}
          color="red"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="New Contributors Growth"
          data={contributorGrowth}
          type="line"
          color="blue"
        />
        <Chart
          title="Trending Categories"
          data={categoryTrends}
          type="bar"
          color="purple"
        />
      </div>

      {/* Trending Contributors Table */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Top Trending Contributors</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Sorted by growth rate</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Rank</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Contributor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Specialty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Growth</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Rating</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {trendingContributors.map((contributor, index) => (
                <tr key={contributor.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-white">#{index + 1}</span>
                      {index === 0 && <Award className="w-4 h-4 text-yellow-500 ml-2" />}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {contributor.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{contributor.name}</p>
                        <p className="text-sm text-gray-400">{contributor.country}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Camera className="w-4 h-4 text-gray-500" />
                      <span className="text-white">{contributor.specialty}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-white">{contributor.downloads.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-green-400">{contributor.revenue}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {contributor.growth}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-white">{contributor.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(contributor.badge)}`}>
                      {contributor.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contributor Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Most Viewed</h4>
              <p className="text-sm text-gray-400">This week</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Sarah Chen</span>
              <span className="font-semibold text-white">2.4M views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Marcus Rodriguez</span>
              <span className="font-semibold text-white">1.8M views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Yuki Tanaka</span>
              <span className="font-semibold text-white">1.5M views</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-900 text-green-400 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Top Earners</h4>
              <p className="text-sm text-gray-400">This month</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Sarah Chen</span>
              <span className="font-semibold text-green-400">$91,360</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Marcus Rodriguez</span>
              <span className="font-semibold text-green-400">$77,840</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Yuki Tanaka</span>
              <span className="font-semibold text-green-400">$69,120</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-900 text-purple-400 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Highest Rated</h4>
              <p className="text-sm text-gray-400">All time</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Sarah Chen</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold text-white">4.9</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Yuki Tanaka</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold text-white">4.9</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Alex Petrov</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold text-white">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTab;