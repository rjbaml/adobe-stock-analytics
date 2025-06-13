import React from 'react';
import MetricCard from './MetricCard';
import Chart from './Chart';
import { DollarSign, TrendingUp, CreditCard, Banknote } from 'lucide-react';

const RevenueTab: React.FC = () => {
  const monthlyRevenue = [
    { label: 'Jan', value: 180000 },
    { label: 'Feb', value: 195000 },
    { label: 'Mar', value: 220000 },
    { label: 'Apr', value: 205000 },
    { label: 'May', value: 240000 },
    { label: 'Jun', value: 235000 },
  ];

  const revenueByCategory = [
    { label: 'Photos', value: 125000 },
    { label: 'Videos', value: 85000 },
    { label: 'Vectors', value: 72000 },
    { label: 'Illustrations', value: 48000 },
    { label: '3D Assets', value: 35000 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$1.2M"
          change="+18.5% from last month"
          changeType="positive"
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Average Order Value"
          value="$24.50"
          change="+5.2% from last month"
          changeType="positive"
          icon={CreditCard}
          color="blue"
        />
        <MetricCard
          title="Revenue per Download"
          value="$1.89"
          change="+2.1% from last month"
          changeType="positive"
          icon={Banknote}
          color="purple"
        />
        <MetricCard
          title="Growth Rate"
          value="12.3%"
          change="+3.1% from last month"
          changeType="positive"
          icon={TrendingUp}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="Monthly Revenue Trend"
          data={monthlyRevenue}
          type="line"
          color="green"
        />
        <Chart
          title="Revenue by Category"
          data={revenueByCategory}
          type="bar"
          color="blue"
        />
      </div>

      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Revenue Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900 text-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">$365K</h4>
            <p className="text-gray-400">Subscription Revenue</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-900 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">$198K</h4>
            <p className="text-gray-400">One-time Purchases</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-900 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <Banknote className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">$87K</h4>
            <p className="text-gray-400">Premium Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueTab;