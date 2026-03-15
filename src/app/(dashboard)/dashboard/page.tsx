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
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Dashboard Overview
        </h1>
        <p className="text-gray-500">
          Xush kelibsiz! Bugungi ko'rsatkichlar bilan tanishing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl text-white ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
                stat.trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
              }`}>
                {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Sotuvlar Statistikasi</h2>
          <div className="flex-1">
            <SalesChart />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 mb-4">So'nggi Xaridlar</h2>
          <div className="flex-1 flex flex-col gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Buyurtma #{1024 + i}</h4>
                  <p className="text-xs text-gray-500">2 daqiqa oldin</p>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {(Math.random() * 500 + 100).toFixed(0)},000 UZS
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