import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Target, MessageSquare, ArrowUp, ArrowDown, AlertCircle } from 'lucide-react';

export default function CSATDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [dateRange, setDateRange] = useState('1m');
  const [loading, setLoading] = useState(false);

  const [metrics, setMetrics] = useState({
    currentCSAT: 87.5,
    previousCSAT: 84.2,
    ratedTickets: 1247,
    totalTickets: 1829,
    responseRate: 68.2,
    satisfied: 1088,
    unsatisfied: 47
  });

  // Sample data - replace with actual Snowflake API calls
  const trendData = [
    { week: 'Week 1', csat: 82, tickets: 120 },
    { week: 'Week 2', csat: 85, tickets: 135 },
    { week: 'Week 3', csat: 86, tickets: 142 },
    { week: 'Week 4', csat: 89, tickets: 156 },
    { week: 'Week 5', csat: 87, tickets: 148 },
    { week: 'Week 6', csat: 88, tickets: 152 }
  ];

  const teamData = [
    { name: 'NA Onboarding', csat: 92, tickets: 285, satisfied: 262 },
    { name: 'Integration Support', csat: 88, tickets: 198, satisfied: 174 },
    { name: 'Account Management', csat: 85, tickets: 156, satisfied: 133 },
    { name: 'Technical Support', csat: 83, tickets: 142, satisfied: 118 },
    { name: 'Billing Support', csat: 80, tickets: 98, satisfied: 78 },
    { name: 'Customer Success', csat: 89, tickets: 124, satisfied: 110 }
  ];

  const agentData = [
    { name: 'Maria Garcia', csat: 94, tickets: 45, satisfied: 42 },
    { name: 'John Smith', csat: 91, tickets: 38, satisfied: 35 },
    { name: 'Sarah Johnson', csat: 88, tickets: 52, satisfied: 46 },
    { name: 'Alex Chen', csat: 85, tickets: 41, satisfied: 35 },
    { name: 'Emma Wilson', csat: 82, tickets: 35, satisfied: 29 }
  ];

  const ratingDistribution = [
    { name: 'Satisfied', value: 1088, percentage: 87.2, color: '#10b981' },
    { name: 'Neutral', value: 112, percentage: 9.0, color: '#f59e0b' },
    { name: 'Unsatisfied', value: 47, percentage: 3.8, color: '#ef4444' }
  ];

  // Fetch data from API - uncomment when API is ready
  /*
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const metricsRes = await fetch(`/api/csat/metrics?range=${dateRange}`);
        const trendsRes = await fetch(`/api/csat/trends?range=${dateRange}`);

        const metricsData = await metricsRes.json();
        const trendsData = await trendsRes.json();

        setMetrics(metricsData);
        setTrendData(trendsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange]);
  */

  const csatChange = metrics.currentCSAT - metrics.previousCSAT;
  const isPositive = csatChange >= 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">CSAT Dashboard</h1>
            <p className="text-slate-400">Customer Satisfaction Metrics from Zendesk</p>
          </div>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 transition"
          >
            <option value="1w">Last Week</option>
            <option value="1m">Last Month</option>
            <option value="3m">Last 3 Months</option>
            <option value="6m">Last 6 Months</option>
          </select>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-8">
        {/* Current CSAT */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-4 md:p-6 hover:border-slate-500 transition">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-slate-400 text-xs md:text-sm mb-2">Current CSAT Score</p>
              <p className="text-2xl md:text-4xl font-bold">{metrics.currentCSAT}%</p>
            </div>
            <div className="bg-emerald-500/20 p-2 md:p-3 rounded-lg">
              <Target className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            {isPositive ? (
              <>
                <ArrowUp className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                <span className="text-emerald-400">+{csatChange.toFixed(1)}%</span>
              </>
            ) : (
              <>
                <ArrowDown className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                <span className="text-red-400">{csatChange.toFixed(1)}%</span>
              </>
            )}
            <span className="text-slate-400">vs last month</span>
          </div>
        </div>

        {/* Rated Tickets */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-4 md:p-6 hover:border-slate-500 transition">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-slate-400 text-xs md:text-sm mb-2">Rated Tickets</p>
              <p className="text-2xl md:text-3xl font-bold">{metrics.ratedTickets.toLocaleString()}</p>
            </div>
            <div className="bg-blue-500/20 p-2 md:p-3 rounded-lg">
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400">of {metrics.totalTickets.toLocaleString()} total</p>
        </div>

        {/* Response Rate */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-4 md:p-6 hover:border-slate-500 transition">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-slate-400 text-xs md:text-sm mb-2">Response Rate</p>
              <p className="text-2xl md:text-3xl font-bold">{metrics.responseRate}%</p>
            </div>
            <div className="bg-purple-500/20 p-2 md:p-3 rounded-lg">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400">customers responded</p>
        </div>

        {/* Satisfied Tickets */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-4 md:p-6 hover:border-slate-500 transition">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-slate-400 text-xs md:text-sm mb-2">Satisfied</p>
              <p className="text-2xl md:text-3xl font-bold">{metrics.satisfied.toLocaleString()}</p>
            </div>
            <div className="bg-green-500/20 p-2 md:p-3 rounded-lg">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400">87.2% satisfaction</p>
        </div>

        {/* Unsatisfied */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-4 md:p-6 hover:border-slate-500 transition">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-slate-400 text-xs md:text-sm mb-2">Unsatisfied</p>
              <p className="text-2xl md:text-3xl font-bold">{metrics.unsatisfied}</p>
            </div>
            <div className="bg-red-500/20 p-2 md:p-3 rounded-lg">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400">3.8% dissatisfaction</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-8 border-b border-slate-700 overflow-x-auto">
        {['overview', 'trends', 'teams', 'agents'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-3 md:px-4 py-3 font-medium transition whitespace-nowrap ${
              selectedTab === tab
                ? 'text-white border-b-2 border-emerald-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {selectedTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CSAT Distribution */}
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ratingDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ratingDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} tickets`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* CSAT Trend */}
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">CSAT Trend (6 Weeks)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[70, 95]} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Line type="monotone" dataKey="csat" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} name="CSAT %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {selectedTab === 'trends' && (
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">CSAT & Ticket Volume Trends</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis yAxisId="left" stroke="#94a3b8" />
              <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="csat" stroke="#10b981" strokeWidth={2} name="CSAT %" />
              <Line yAxisId="right" type="monotone" dataKey="tickets" stroke="#3b82f6" strokeWidth={2} name="Tickets" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {selectedTab === 'teams' && (
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">CSAT by Team</h3>
          <div className="overflow-x-auto mb-6">
            <ResponsiveContainer width="100%" height={400} minWidth={400}>
              <BarChart data={teamData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="name" stroke="#94a3b8" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#94a3b8" domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Bar dataKey="csat" fill="#10b981" name="CSAT %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Team Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="px-3 md:px-4 py-3 text-left text-slate-300">Team</th>
                  <th className="px-3 md:px-4 py-3 text-right text-slate-300">CSAT</th>
                  <th className="px-3 md:px-4 py-3 text-right text-slate-300">Tickets</th>
                  <th className="px-3 md:px-4 py-3 text-right text-slate-300">Satisfied</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((team, idx) => (
                  <tr key={idx} className="border-b border-slate-700 hover:bg-slate-600/50 transition">
                    <td className="px-3 md:px-4 py-3">{team.name}</td>
                    <td className="px-3 md:px-4 py-3 text-right font-semibold text-emerald-400">{team.csat}%</td>
                    <td className="px-3 md:px-4 py-3 text-right">{team.tickets}</td>
                    <td className="px-3 md:px-4 py-3 text-right">{team.satisfied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedTab === 'agents' && (
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Top Agents by CSAT</h3>
          <div className="overflow-x-auto mb-6">
            <ResponsiveContainer width="100%" height={300} minWidth={400}>
              <BarChart data={agentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis type="number" stroke="#94a3b8" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={120} stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Bar dataKey="csat" fill="#10b981" name="CSAT %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Agent Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="px-3 md:px-4 py-3 text-left text-slate-300">Agent</th>
                  <th className="px-3 md:px-4 py-3 text-right text-slate-300">CSAT</th>
                  <th className="px-3 md:px-4 py-3 text-right text-slate-300">Tickets</th>
                  <th className="px-3 md:px-4 py-3 text-right text-slate-300">Satisfied</th>
                </tr>
              </thead>
              <tbody>
                {agentData.map((agent, idx) => (
                  <tr key={idx} className="border-b border-slate-700 hover:bg-slate-600/50 transition">
                    <td className="px-3 md:px-4 py-3">{agent.name}</td>
                    <td className="px-3 md:px-4 py-3 text-right font-semibold text-emerald-400">{agent.csat}%</td>
                    <td className="px-3 md:px-4 py-3 text-right">{agent.tickets}</td>
                    <td className="px-3 md:px-4 py-3 text-right">{agent.satisfied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-center text-slate-400 text-xs md:text-sm">
        <p>Data from Zendesk EU Snowflake • Updated every 6 hours</p>
      </div>
    </div>
  );
}