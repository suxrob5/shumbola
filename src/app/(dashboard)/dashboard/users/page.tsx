"use client";

import React, { useState, useEffect } from "react";
import { Users, UserPlus, Trash2, Shield, Loader2, Camera, Upload, Edit2 } from "lucide-react";
import { getDocuments, addDocument, deleteDocument, updateDocument } from "@/backend/firebase";

interface AdminUser {
  docId: string;
  name: string;
  password?: string;
  type: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newType, setNewType] = useState("admin");
  const [newImage, setNewImage] = useState("");
  const [addingUser, setAddingUser] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getDocuments("users");
    setUsers(data as AdminUser[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user: AdminUser) => {
    setEditingUser(user);
    setNewName(user.name);
    setNewPassword(user.password || "");
    setNewType(user.type);
    setNewImage((user as any).image || "");
    setShowAddForm(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Rasm hajmi juda katta (maksimum 2MB)");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingUser(true);

    const userData = {
      name: newName,
      password: newPassword,
      type: newType,
      image: newImage,
    };

    let result;
    if (editingUser) {
        result = await updateDocument("users", editingUser.docId, userData);
    } else {
        // Find the max ID to increment it
        const maxId = users.reduce((max, user) => Math.max(max, (user as any).id || 0), 0);
        result = await addDocument("users", {
            ...userData,
            id: maxId + 1,
        });
    }

    if (result.success) {
      setNewName("");
      setNewPassword("");
      setNewImage("");
      setEditingUser(null);
      setShowAddForm(false);
      fetchUsers();
    } else {
      alert("Xatolik yuz berdi");
    }
    setAddingUser(false);
  };

  const handleDelete = async (docId: string) => {
    if (window.confirm("Haqiqatan ham ushbu foydalanuvchini o'chirib tashlamoqchimisiz?")) {
      const result = await deleteDocument("users", docId);
      if (result.success) {
        fetchUsers();
      } else {
        alert("Xatolik yuz berdi");
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
            Foydalanuvchilar
          </h1>
          <p className="text-gray-500">
            Tizim adminlari va ularning kirish ma'lumotlari (Firestore).
          </p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95 cursor-pointer"
        >
          <UserPlus size={20} />
          <span>Yangi qo'shish</span>
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-top-4">
          <h2 className="text-lg font-bold mb-4">
            {editingUser ? "Foydalanuvchini tahrirlash" : "Yangi foydalanuvchi qo'shish"}
          </h2>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Login (Name)</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 outline-none" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Parol (Password)</label>
                <input 
                  type="text" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 outline-none" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Turi (Type)</label>
                <input 
                  type="text" 
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 outline-none" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Profil rasmi</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group relative border-2 border-dashed border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer overflow-hidden min-h-[120px]"
              >
                {newImage ? (
                  <>
                    <img src={newImage} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Upload className="w-6 h-6 text-white" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <Camera className="w-6 h-6 text-gray-400 group-hover:text-blue-500" />
                    </div>
                    <p className="text-xs font-semibold text-gray-500 text-center">Rasm tanlash</p>
                  </>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <button 
                type="button" 
                onClick={() => {
                   setShowAddForm(false);
                   setEditingUser(null);
                   setNewName("");
                   setNewPassword("");
                   setNewImage("");
                }}
                className="px-6 py-2 rounded-xl text-gray-500 font-medium hover:bg-gray-50 transition-colors"
              >
                Bekor qilish
              </button>
              <button 
                type="submit"
                disabled={addingUser}
                className="bg-blue-600 text-white px-8 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {addingUser && <Loader2 size={18} className="animate-spin" />}
                {editingUser ? "Saqlash" : "Qo'shish"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50/50">
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Login (Name)</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Parol</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Turi</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {users.map((user) => (
                  <tr key={user.docId} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden shrink-0">
                          {(user as any).image ? (
                            <img src={(user as any).image} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span>{user.name[0].toUpperCase()}</span>
                          )}
                        </div>
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{user.password}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                        <Shield className="w-3.5 h-3.5" />
                        {user.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 text-right">
                        <button 
                            onClick={() => handleEdit(user)}
                            className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                        >
                            <Edit2 size={18} />
                        </button>
                        <button 
                            onClick={() => handleDelete(user.docId)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                            <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                      Foydalanuvchilar topilmadi.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
