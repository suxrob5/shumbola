"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, onAuthChanged, User, logOut } from "@/backend/firebase";
import { useRouter, usePathname } from "next/navigation";

interface UserData {
  docId: string;
  id: number;
  name: string;
  type: string;
  image?: string;
}

interface AuthContextType {
  user: User | UserData | null;
  loading: boolean;
  logout: () => Promise<void>;
  loginManual: (data: UserData) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
  loginManual: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check localStorage for manual session first
    const savedUser = localStorage.getItem("shumbola_admin_session");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (!auth) {
      console.warn("Firebase Auth not initialized. Session tracking disabled.");
      setLoading(false);
      return;
    }

    try {
      const unsubscribe = onAuthChanged(auth, (firebaseUser: User | null) => {
        if (firebaseUser) {
          setUser(firebaseUser);
        } else {
          // Only clear if there isn't a manual session
          const manualSession = localStorage.getItem("shumbola_admin_session");
          if (!manualSession) {
            setUser(null);
          }
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.error("onAuthChanged error:", err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) return;

    const isDashboard = pathname.startsWith("/dashboard");
    const isLoginPage = pathname === "/dashboard/login";

    if (!user && isDashboard && !isLoginPage) {
      router.push("/dashboard/login");
    } else if (user && isLoginPage) {
      router.push("/dashboard");
    }
  }, [user, pathname, loading, router]);

  const loginManual = (data: UserData) => {
    setUser(data);
    localStorage.setItem("shumbola_admin_session", JSON.stringify(data));
    router.push("/dashboard");
  };

  const logout = async () => {
    try {
      if (auth) {
        await logOut(auth);
      }
      localStorage.removeItem("shumbola_admin_session");
      setUser(null);
      router.push("/dashboard/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, loginManual }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
