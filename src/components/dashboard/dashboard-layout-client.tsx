"use client";

import React from "react";
import Aside from "@/components/dashboard/aside";
import { useAuth } from "@/context/auth-context";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const pathname = usePathname();
  const isLoginPage = pathname === "/dashboard/login";

  // Close sidebar on navigation
  React.useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#368BC6] border-t-transparent"></div>
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50/50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop always visible, Mobile hidden by default */}
      <div className={`fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Aside onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Mobile Header */}
        {!isLoginPage && (
          <header className="h-16 flex items-center justify-between px-4 bg-white border-b border-gray-100 lg:hidden shrink-0">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Menu size={24} />
            </button>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
              Shumbola
            </span>
            <div className="w-9" /> {/* Placeholder for balance */}
          </header>
        )}

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
