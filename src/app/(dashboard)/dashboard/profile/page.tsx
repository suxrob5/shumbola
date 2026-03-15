"use client";

import React, { useState, useEffect } from "react";
import { User, Lock, Save, Loader2, ShieldCheck, Camera, Upload } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { db, updateDocument } from "@/backend/firebase";
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
  const { user, loginManual } = useAuth();
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user && (user as any).name) {
      setName((user as any).name);
    }
    if (user && (user as any).image) {
      setImage((user as any).image);
    }
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Rasm hajmi juda katta (maksimum 2MB)");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !(user as any).docId) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    if (!db) {
      setError("Xatolik: Ma'lumotlar bazasi bilan aloqa yo'q. Iltimos environment o'zgaruvchilarini tekshiring.");
      setLoading(false);
      return;
    }

    try {
      // Fetch current user data from Firestore to verify old password
      const userRef = doc(db, "users", (user as any).docId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        setError("Foydalanuvchi ma'lumotlari topilmadi.");
        setLoading(false);
        return;
      }

      const currentData = userSnap.data();

      // Verify old password
      if (currentData.password !== oldPassword) {
        setError("Eski parol noto'g'ri.");
        setLoading(false);
        return;
      }

      const updates: any = { name, image };
      if (password) {
        updates.password = password;
      }

      const result = await updateDocument("users", (user as any).docId, updates);

      if (result.success) {
        setSuccess(true);
        // Update local session
        loginManual({
          ...(user as any),
          name: name,
          image: image
        });
        setPassword(""); // Clear password field
        setOldPassword(""); // Clear old password field
      } else {
        setError("Xatolik yuz berdi. Iltimos qaytadan urining.");
      }
    } catch (error) {
      console.error("Update error:", error);
      setError("Xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Profil sozlamalari
        </h1>
        <p className="text-gray-500">
          Shaxsiy ma'lumotlaringiz va parolingizni o'zgartiring.
        </p>
      </div>

      <div className="max-w-2xl">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
          <div className="flex flex-col items-center gap-6 pb-6 border-b border-gray-100">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="relative w-32 h-32 group cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold text-4xl overflow-hidden border-2 border-white shadow-sm transition-all group-hover:shadow-md">
                {image ? (
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <span>{name[0]?.toUpperCase() || "A"}</span>
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="text-white w-8 h-8" />
              </div>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">{name || "Admin User"}</h3>
              <p className="text-sm text-gray-500">Profil rasmingizni o'zgartirish uchun rasm ustiga bosing</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Xavfsizlik</h2>
              <p className="text-sm text-gray-500">Loginingiz va parolingizni bu yerda yangilashingiz mumkin.</p>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User size={16} className="text-gray-400" />
                Login (Yangi ism)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Loginingizni kiriting"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock size={16} className="text-gray-400" />
                Eski parol
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                placeholder="Hozirgi parolingizni kiriting"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock size={16} className="text-gray-400" />
                Yangi parol
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Yangi parolni kiriting (ixtiyoriy)"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
              <p className="text-xs text-gray-400 italic">* Agar parolni o'zgartirmoqchi bo'lmasangiz, bo'sh qoldiring.</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-bold animate-in fade-in">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm font-bold animate-in fade-in">
                Ma'lumotlar muvaffaqiyatli saqlandi!
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <>
                  <Save size={20} />
                  O'zgarishlarni saqlash
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
