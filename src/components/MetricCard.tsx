import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  color = 'red'
}) => {
  const changeColor = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-gray-400'
  }[changeType];

  const iconBgColor = {
    red: 'bg-red-900 text-red-400',
    blue: 'bg-blue-900 text-blue-400',
    green: 'bg-green-900 text-green-400',
    purple: 'bg-purple-900 text-purple-400',
  }[color];

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-white mb-2">{value}</p>
          <p className={`text-sm font-medium ${changeColor}`}>
            {change}
          </p>
        </div>
        <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;