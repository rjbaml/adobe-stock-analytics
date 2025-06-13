import React from 'react';

interface ChartProps {
  title: string;
  data: { label: string; value: number }[];
  type: 'bar' | 'line';
  color?: string;
}

const Chart: React.FC<ChartProps> = ({ title, data, type, color = 'red' }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const colorClasses = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  }[color];

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      
      {type === 'bar' && (
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-16 text-sm text-gray-400 font-medium">
                {item.label}
              </div>
              <div className="flex-1 bg-gray-700 rounded-full h-2 relative overflow-hidden">
                <div
                  className={`h-full ${colorClasses} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
              <div className="w-16 text-sm text-white font-semibold text-right">
                {item.value.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {type === 'line' && (
        <div className="h-48 flex items-end space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`w-full ${colorClasses} rounded-t transition-all duration-1000 ease-out`}
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
              <p className="text-xs text-gray-400 mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chart;