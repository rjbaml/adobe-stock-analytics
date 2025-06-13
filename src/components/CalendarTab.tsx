import React, { useState } from 'react';
import { Calendar, Clock, Globe, TrendingUp, Search, Tag, Star, Download, DollarSign, Eye, Filter, ChevronRight } from 'lucide-react';

const CalendarTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const globalHolidays = [
    // January
    {
      date: '2025-01-01',
      name: 'New Year\'s Day',
      type: 'Global',
      category: 'celebration',
      region: 'Worldwide',
      demand: 'Very High',
      keywords: ['new year', 'celebration', 'fireworks', 'party', 'resolution', 'countdown', 'champagne', 'confetti', 'midnight', 'fresh start'],
      searchVolume: 2450000,
      cpc: '$3.45',
      competition: 'High'
    },
    {
      date: '2025-01-07',
      name: 'Orthodox Christmas',
      type: 'Religious',
      category: 'religious',
      region: 'Eastern Europe, Russia',
      demand: 'High',
      keywords: ['orthodox christmas', 'eastern christmas', 'religious celebration', 'orthodox church', 'nativity', 'christmas tree', 'winter holiday'],
      searchVolume: 890000,
      cpc: '$2.12',
      competition: 'Medium'
    },
    {
      date: '2025-01-20',
      name: 'Martin Luther King Jr. Day',
      type: 'National',
      category: 'commemoration',
      region: 'United States',
      demand: 'Medium',
      keywords: ['martin luther king', 'civil rights', 'equality', 'freedom', 'justice', 'african american', 'dream speech', 'unity', 'peace'],
      searchVolume: 1200000,
      cpc: '$1.89',
      competition: 'Low'
    },
    {
      date: '2025-01-25',
      name: 'Chinese New Year',
      type: 'Cultural',
      category: 'cultural',
      region: 'China, Asia',
      demand: 'Very High',
      keywords: ['chinese new year', 'lunar new year', 'dragon', 'red lantern', 'zodiac', 'fortune', 'prosperity', 'family reunion', 'fireworks', 'traditional'],
      searchVolume: 3200000,
      cpc: '$4.23',
      competition: 'Very High'
    },

    // February
    {
      date: '2025-02-14',
      name: 'Valentine\'s Day',
      type: 'Commercial',
      category: 'romance',
      region: 'Worldwide',
      demand: 'Extremely High',
      keywords: ['valentine', 'love', 'romance', 'heart', 'couple', 'roses', 'gift', 'romantic dinner', 'wedding', 'engagement'],
      searchVolume: 4500000,
      cpc: '$5.67',
      competition: 'Extremely High'
    },
    {
      date: '2025-02-17',
      name: 'Presidents\' Day',
      type: 'National',
      category: 'commemoration',
      region: 'United States',
      demand: 'Medium',
      keywords: ['presidents day', 'american flag', 'patriotic', 'washington', 'lincoln', 'government', 'democracy', 'leadership'],
      searchVolume: 780000,
      cpc: '$1.45',
      competition: 'Low'
    },

    // March
    {
      date: '2025-03-08',
      name: 'International Women\'s Day',
      type: 'International',
      category: 'social',
      region: 'Worldwide',
      demand: 'High',
      keywords: ['women\'s day', 'female empowerment', 'gender equality', 'strong women', 'feminism', 'workplace equality', 'women rights', 'leadership'],
      searchVolume: 2100000,
      cpc: '$2.89',
      competition: 'High'
    },
    {
      date: '2025-03-17',
      name: 'St. Patrick\'s Day',
      type: 'Cultural',
      category: 'celebration',
      region: 'Ireland, US, UK',
      demand: 'High',
      keywords: ['st patrick\'s day', 'irish', 'green', 'shamrock', 'leprechaun', 'beer', 'parade', 'clover', 'luck', 'celtic'],
      searchVolume: 1800000,
      cpc: '$3.12',
      competition: 'High'
    },
    {
      date: '2025-03-20',
      name: 'Spring Equinox',
      type: 'Seasonal',
      category: 'seasonal',
      region: 'Northern Hemisphere',
      demand: 'Medium',
      keywords: ['spring', 'equinox', 'flowers', 'bloom', 'nature', 'renewal', 'fresh start', 'garden', 'growth', 'season change'],
      searchVolume: 950000,
      cpc: '$2.34',
      competition: 'Medium'
    },

    // April
    {
      date: '2025-04-01',
      name: 'April Fools\' Day',
      type: 'Cultural',
      category: 'humor',
      region: 'Worldwide',
      demand: 'Medium',
      keywords: ['april fools', 'prank', 'joke', 'humor', 'funny', 'trick', 'laughter', 'comedy', 'surprise', 'playful'],
      searchVolume: 1100000,
      cpc: '$1.78',
      competition: 'Medium'
    },
    {
      date: '2025-04-22',
      name: 'Earth Day',
      type: 'Environmental',
      category: 'environmental',
      region: 'Worldwide',
      demand: 'High',
      keywords: ['earth day', 'environment', 'sustainability', 'green energy', 'climate change', 'recycling', 'nature conservation', 'eco friendly'],
      searchVolume: 1900000,
      cpc: '$3.45',
      competition: 'High'
    },

    // May
    {
      date: '2025-05-01',
      name: 'Labor Day / May Day',
      type: 'International',
      category: 'social',
      region: 'Worldwide (except US)',
      demand: 'Medium',
      keywords: ['labor day', 'workers rights', 'may day', 'international workers', 'union', 'employment', 'workplace', 'solidarity'],
      searchVolume: 850000,
      cpc: '$1.89',
      competition: 'Low'
    },
    {
      date: '2025-05-11',
      name: 'Mother\'s Day',
      type: 'Commercial',
      category: 'family',
      region: 'US, Canada, Australia',
      demand: 'Very High',
      keywords: ['mother\'s day', 'mom', 'family', 'maternal love', 'flowers', 'gift', 'appreciation', 'motherhood', 'caring', 'nurturing'],
      searchVolume: 3800000,
      cpc: '$4.89',
      competition: 'Very High'
    },

    // June
    {
      date: '2025-06-15',
      name: 'Father\'s Day',
      type: 'Commercial',
      category: 'family',
      region: 'US, UK, Canada',
      demand: 'High',
      keywords: ['father\'s day', 'dad', 'paternal', 'family', 'fatherhood', 'gift', 'appreciation', 'masculine', 'parenting', 'role model'],
      searchVolume: 2200000,
      cpc: '$3.67',
      competition: 'High'
    },
    {
      date: '2025-06-21',
      name: 'Summer Solstice',
      type: 'Seasonal',
      category: 'seasonal',
      region: 'Northern Hemisphere',
      demand: 'Medium',
      keywords: ['summer solstice', 'longest day', 'summer', 'sun', 'vacation', 'beach', 'outdoor', 'sunshine', 'warmth', 'festival'],
      searchVolume: 780000,
      cpc: '$2.45',
      competition: 'Medium'
    },

    // July
    {
      date: '2025-07-04',
      name: 'Independence Day',
      type: 'National',
      category: 'patriotic',
      region: 'United States',
      demand: 'Very High',
      keywords: ['independence day', '4th of july', 'american flag', 'fireworks', 'patriotic', 'freedom', 'liberty', 'barbecue', 'celebration'],
      searchVolume: 2800000,
      cpc: '$4.12',
      competition: 'Very High'
    },

    // August
    {
      date: '2025-08-15',
      name: 'Back to School Season',
      type: 'Commercial',
      category: 'education',
      region: 'Worldwide',
      demand: 'Very High',
      keywords: ['back to school', 'education', 'students', 'learning', 'classroom', 'books', 'supplies', 'teacher', 'knowledge', 'academic'],
      searchVolume: 3500000,
      cpc: '$3.89',
      competition: 'Very High'
    },

    // September
    {
      date: '2025-09-22',
      name: 'Autumn Equinox',
      type: 'Seasonal',
      category: 'seasonal',
      region: 'Northern Hemisphere',
      demand: 'High',
      keywords: ['autumn', 'fall', 'leaves', 'harvest', 'pumpkin', 'cozy', 'warm colors', 'season change', 'thanksgiving prep'],
      searchVolume: 1600000,
      cpc: '$2.78',
      competition: 'High'
    },

    // October
    {
      date: '2025-10-31',
      name: 'Halloween',
      type: 'Cultural',
      category: 'spooky',
      region: 'US, UK, Canada',
      demand: 'Extremely High',
      keywords: ['halloween', 'spooky', 'scary', 'costume', 'pumpkin', 'ghost', 'witch', 'trick or treat', 'horror', 'october'],
      searchVolume: 4200000,
      cpc: '$5.23',
      competition: 'Extremely High'
    },

    // November
    {
      date: '2025-11-27',
      name: 'Thanksgiving',
      type: 'National',
      category: 'gratitude',
      region: 'United States',
      demand: 'Very High',
      keywords: ['thanksgiving', 'gratitude', 'turkey', 'family dinner', 'harvest', 'thankful', 'autumn', 'feast', 'tradition', 'blessing'],
      searchVolume: 3100000,
      cpc: '$4.45',
      competition: 'Very High'
    },
    {
      date: '2025-11-28',
      name: 'Black Friday',
      type: 'Commercial',
      category: 'shopping',
      region: 'Worldwide',
      demand: 'Extremely High',
      keywords: ['black friday', 'sale', 'discount', 'shopping', 'deals', 'bargain', 'retail', 'promotion', 'consumer', 'savings'],
      searchVolume: 5200000,
      cpc: '$6.78',
      competition: 'Extremely High'
    },

    // December
    {
      date: '2025-12-25',
      name: 'Christmas',
      type: 'Religious/Commercial',
      category: 'christmas',
      region: 'Worldwide',
      demand: 'Extremely High',
      keywords: ['christmas', 'holiday', 'santa', 'gift', 'tree', 'decoration', 'family', 'winter', 'festive', 'celebration'],
      searchVolume: 6800000,
      cpc: '$7.89',
      competition: 'Extremely High'
    },
    {
      date: '2025-12-31',
      name: 'New Year\'s Eve',
      type: 'Global',
      category: 'celebration',
      region: 'Worldwide',
      demand: 'Very High',
      keywords: ['new year\'s eve', 'party', 'countdown', 'midnight', 'celebration', 'fireworks', 'resolution', 'champagne', 'festive'],
      searchVolume: 2900000,
      cpc: '$4.56',
      competition: 'Very High'
    }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    { id: 'all', name: 'All Categories', color: 'gray' },
    { id: 'celebration', name: 'Celebrations', color: 'red' },
    { id: 'religious', name: 'Religious', color: 'blue' },
    { id: 'cultural', name: 'Cultural', color: 'purple' },
    { id: 'seasonal', name: 'Seasonal', color: 'green' },
    { id: 'commercial', name: 'Commercial', color: 'orange' },
    { id: 'family', name: 'Family', color: 'pink' },
    { id: 'environmental', name: 'Environmental', color: 'emerald' }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Extremely High': return 'bg-red-900 text-red-400 border-red-800';
      case 'Very High': return 'bg-orange-900 text-orange-400 border-orange-800';
      case 'High': return 'bg-yellow-900 text-yellow-400 border-yellow-800';
      case 'Medium': return 'bg-blue-900 text-blue-400 border-blue-800';
      case 'Low': return 'bg-green-900 text-green-400 border-green-800';
      default: return 'bg-gray-900 text-gray-400 border-gray-800';
    }
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'Extremely High': return 'text-red-400';
      case 'Very High': return 'text-orange-400';
      case 'High': return 'text-yellow-400';
      case 'Medium': return 'text-blue-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const filteredHolidays = globalHolidays.filter(holiday => {
    const holidayMonth = new Date(holiday.date).getMonth();
    const categoryMatch = selectedCategory === 'all' || holiday.category === selectedCategory;
    const monthMatch = holidayMonth === selectedMonth;
    return categoryMatch && monthMatch;
  });

  const getUpcomingHolidays = () => {
    const today = new Date();
    return globalHolidays
      .filter(holiday => new Date(holiday.date) >= today)
      .slice(0, 5)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getTopKeywordsByDemand = () => {
    return globalHolidays
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .slice(0, 10);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Global Holiday Calendar</h2>
            </div>
            <p className="text-purple-100">Discover high-demand keywords for global holidays and events</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{globalHolidays.length}</div>
            <p className="text-purple-100 text-sm">Global Events</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-300">Filters:</span>
          </div>
          
          <select 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category.id
                    ? `bg-${category.color}-500 text-white`
                    : `bg-${category.color}-900 text-${category.color}-400 hover:bg-${category.color}-800`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-900 text-red-400 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{filteredHolidays.length}</p>
              <p className="text-sm text-gray-400">Events in {months[selectedMonth]}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-900 text-green-400 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {Math.max(...filteredHolidays.map(h => h.searchVolume)).toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">Peak Search Volume</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                ${Math.max(...filteredHolidays.map(h => parseFloat(h.cpc.replace('$', '')))).toFixed(2)}
              </p>
              <p className="text-sm text-gray-400">Highest CPC</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-900 text-purple-400 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {[...new Set(filteredHolidays.map(h => h.region))].length}
              </p>
              <p className="text-sm text-gray-400">Regions Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-orange-900 text-orange-400 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Upcoming High-Demand Events</h3>
            <p className="text-sm text-gray-400">Next 5 major holidays with keyword opportunities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {getUpcomingHolidays().map((holiday, index) => (
            <div key={index} className="border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {new Date(holiday.date).getDate()}
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{holiday.name}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDemandColor(holiday.demand)}`}>
                  {holiday.demand}
                </span>
                <div className="mt-2 text-xs text-gray-400">
                  <div className="flex items-center justify-center space-x-1">
                    <Search className="w-3 h-3" />
                    <span>{(holiday.searchVolume / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Holiday Details Table */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">
            {months[selectedMonth]} Events & Keywords
          </h3>
          <div className="text-sm text-gray-400">
            {filteredHolidays.length} events found
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Event</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Region</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Demand</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Search Volume</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">CPC</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Keywords</th>
              </tr>
            </thead>
            <tbody>
              {filteredHolidays.map((holiday, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">
                        {new Date(holiday.date).getDate()}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-white">{holiday.name}</p>
                      <p className="text-sm text-gray-400">{holiday.type}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-300">{holiday.region}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDemandColor(holiday.demand)}`}>
                      {holiday.demand}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-white">
                        {(holiday.searchVolume / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className={`font-semibold ${getCompetitionColor(holiday.competition)}`}>
                        {holiday.cpc}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {holiday.keywords.slice(0, 3).map((keyword, keyIndex) => (
                        <span key={keyIndex} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-900 text-purple-400">
                          {keyword}
                        </span>
                      ))}
                      {holiday.keywords.length > 3 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-700 text-gray-400">
                          +{holiday.keywords.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Keywords by Search Volume */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-red-900 text-red-400 rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Top Holiday Keywords by Search Volume</h3>
            <p className="text-sm text-gray-400">Highest potential keywords across all holidays</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getTopKeywordsByDemand().slice(0, 10).map((holiday, index) => (
            <div key={index} className="border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{holiday.name}</h4>
                    <p className="text-sm text-gray-400">{new Date(holiday.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">
                    {(holiday.searchVolume / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-400">searches</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {holiday.keywords.slice(0, 5).map((keyword, keyIndex) => (
                  <span key={keyIndex} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-600 text-gray-300">
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getDemandColor(holiday.demand)}`}>
                  {holiday.demand}
                </span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">CPC: <span className="font-semibold text-white">{holiday.cpc}</span></span>
                  <span className={`font-semibold ${getCompetitionColor(holiday.competition)}`}>
                    {holiday.competition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Strategy Recommendations */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Content Strategy Recommendations</h3>
            <p className="text-green-100 mb-4">Optimize your content calendar for maximum impact</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Plan Ahead</h4>
                <p className="text-green-100 text-sm">Create content 2-3 months before major holidays for better ranking</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Focus on High CPC</h4>
                <p className="text-green-100 text-sm">Target holidays with CPC above $3.00 for maximum revenue potential</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regional Targeting</h4>
                <p className="text-green-100 text-sm">Create region-specific content for cultural holidays</p>
              </div>
            </div>
          </div>
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Calendar className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTab;