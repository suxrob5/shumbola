"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";
import { auth, db } from "@/backend/firebase";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Lock, User, Loader2, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import BannerImg from "@/assets/images/admin.png";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginManual } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!db) {
      setError("Xatolik: Ma'lumotlar bazasi bilan aloqa yo'q. Iltimos environment o'zgaruvchilarini tekshiring.");
      setLoading(false);
      return;
    }

    try {
      // Query Firestore 'users' collection for the provided login (name)
      const q = query(collection(db, "users"), where("name", "==", login));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Login yoki parol noto'g'ri.");
        setLoading(false);
        return;
      }

      const userData = querySnapshot.docs[0].data();

      // Verify password from Firestore (plain text comparison)
      if (userData.password === password) {
        // Success! Use loginManual to set session and redirect
        loginManual({
          docId: querySnapshot.docs[0].id,
          id: userData.id,
          name: userData.name,
          type: userData.type
        });
      } else {
        setError("Login yoki parol noto'g'ri.");
      }


    } catch (err: any) {
      console.error("Login error:", err);
      setError("Xatolik yuz berdi. Iltimos qaytadan urining.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side - Visual */}
      <div className="hidden md:flex md:w-1/2 bg-[#E8F1F9] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#368BC6] blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#368BC6] blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="relative w-full max-w-md aspect-square mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl skew-y-3 -rotate-3">
            <Image
              src={BannerImg}
              alt="Shumbola Banner"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-[#368BC6] mb-4">Shumbola Admin</h1>
          <p className="text-gray-600 text-lg max-w-sm mx-auto">
            Barcha mahsulotlar va buyurtmalarni boshqarish markazi.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-20 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10 block md:hidden text-center">
            <h1 className="text-3xl font-bold text-[#368BC6]">Shumbola</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Xush kelibsiz!</h2>
            <p className="text-gray-500 text-lg">Dashboardga kirish uchun malumotlaringizni kiriting.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Login</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#368BC6] transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value.trim())}
                  required
                  placeholder="Loginni kiriting"
                  className="block w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#368BC6] outline-none transition-all text-gray-900 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Parol</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#368BC6] transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value.trim())}
                  required
                  placeholder="••••••••"
                  className="block w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#368BC6] outline-none transition-all text-gray-900 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#368BC6] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-bold animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#368BC6] hover:bg-[#2d76a7] active:scale-[0.98] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#368BC6]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Kirilmoqda...
                </>
              ) : (
                "Dashboardga kirish"
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Shumbola. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
