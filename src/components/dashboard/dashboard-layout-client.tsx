"use client";

import React from "react";
import Aside from "@/components/dashboard/aside";
import { useAuth } from "@/context/auth-context";
import { usePathname } from "next/navigation";

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();
  const pathname = usePathname();
  const isLoginPage = pathname === "/dashboard/login";

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
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50/50">
        {children}
      </main>
    </div>
  );
}
