import React from 'react';
import SalesChart from '@/components/dashboard/SalesChart';
import { 
  TrendingUp, 
  Users, 
  Package, 
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: "Umumiy Daromad",
    value: "14,500,000 UZS",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    title: "Faol Xaridorlar",
    value: "2,450",
    change: "+5.2%",
    trend: "up",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Yangi Buyurtmalar",
    value: "148",
    change: "-2.4%",
    trend: "down",
    icon: ShoppingCart,
    color: "bg-orange-500",
  },
  {
    title: "Jami Mahsulotlar",
    value: "854",
    change: "+1.2%",
    trend: "up",
    icon: Package,
    color: "bg-purple-500",
  },
];

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500">
          Xush kelibsiz! Bugungi ko'rsatkichlar bilan tanishing.
        </p>
      </div>

      {/* Stats Grid: 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 md:gap-4 transition-transform hover:-translate-y-0.5 duration-300"
          >
            <div className="flex justify-between items-start">
              <div className={`p-2 md:p-3 rounded-xl text-white ${stat.color}`}>
                <stat.icon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className={`flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full ${
                stat.trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
              }`}>
                {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            
            <div className="space-y-0.5">
              <h3 className="text-gray-500 text-xs font-medium">{stat.title}</h3>
              <p className="text-base md:text-2xl font-bold text-gray-900 leading-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts: stack on mobile, side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[280px] md:min-h-[400px] flex flex-col">
          <h2 className="text-sm md:text-lg font-bold text-gray-900 mb-4">Sotuvlar Statistikasi</h2>
          <div className="flex-1">
            <SalesChart />
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-sm md:text-lg font-bold text-gray-900 mb-4">So'nggi Xaridlar</h2>
          <div className="flex flex-col gap-3">
            {[350000, 180000, 520000].map((amount, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900">Buyurtma #{1024 + i}</h4>
                  <p className="text-xs text-gray-500">2 daqiqa oldin</p>
                </div>
                <div className="text-xs font-semibold text-gray-900 shrink-0">
                  {amount.toLocaleString()} UZS
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;