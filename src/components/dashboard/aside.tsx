"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  Bell
} from 'lucide-react';

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Mahsulotlar",
    icon: Package,
    href: "/dashboard/products",
  },
  {
    label: "Buyurtmalar",
    icon: ShoppingCart,
    href: "/dashboard/orders",
  },
  {
    label: "Xaridorlar",
    icon: Users,
    href: "/dashboard/customers",
  },
  {
    label: "Sozlamalar",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

const Aside = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-100 flex flex-col transition-all duration-300">
      {/* Brand & Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
            Shumbola
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-3 flex flex-col gap-1 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 mb-2 px-3 uppercase tracking-wider">
          Asosiy
        </div>
        
        {routes.map((route) => {
          const isActive = route.href === "/dashboard" 
            ? pathname === route.href 
            : pathname === route.href || pathname?.startsWith(`${route.href}/`);
          
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <route.icon 
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                }`} 
              />
              <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>
                {route.label}
              </span>
              
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom User Area */}
      <div className="p-4 border-t border-gray-100 m-3 rounded-2xl bg-gray-50/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-100 to-blue-200 flex shrink-0 items-center justify-center text-blue-600 font-bold">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">Admin User</span>
            <span className="text-xs text-gray-500">admin@shumbola.uz</span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 w-full px-3 py-2 rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          <span>Chiqish</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;