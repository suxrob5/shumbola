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
  Bell,
  User
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';

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
    label: "Foydalanuvchilar",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    label: "Profil",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    label: "Sozlamalar",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

const Aside = () => {
  const pathname = usePathname();
  const { logout, user } = useAuth();

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-100 flex flex-col transition-all duration-300">
      {/* Brand & Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">SH</span>
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
        <Link href="/dashboard/profile" className="flex items-center gap-3 mb-4 p-2 hover:bg-white rounded-xl transition-all group">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-100 to-blue-200 flex shrink-0 items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform overflow-hidden">
            {(user as any)?.image ? (
              <img src={(user as any).image} alt={(user as any).name} className="w-full h-full object-cover" />
            ) : (
              <span>{(user as any)?.name?.[0].toUpperCase() || (user as any)?.email?.[0].toUpperCase() || "A"}</span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">{(user as any)?.name || "Admin User"}</span>
            <span className="text-xs text-gray-500 truncate max-w-[140px]">{(user as any)?.email || (user as any)?.name || "admin@shumbola.uz"}</span>
          </div>
        </Link>
        <button 
          onClick={logout}
          className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 w-full px-3 py-2 rounded-lg transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Chiqish</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;