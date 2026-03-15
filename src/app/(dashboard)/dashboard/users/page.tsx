"use client";

import React, { useState, useEffect } from "react";
import { Users, UserPlus, Trash2, Shield, Loader2 } from "lucide-react";
import { getDocuments, addDocument, deleteDocument } from "@/backend/firebase";

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
  const [addingUser, setAddingUser] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getDocuments("users");
    setUsers(data as AdminUser[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingUser(true);
    
    // Find the max ID to increment it
    const maxId = users.reduce((max, user) => Math.max(max, (user as any).id || 0), 0);

    const result = await addDocument("users", {
      id: maxId + 1,
      name: newName,
      password: newPassword,
      type: newType,
    });

    if (result.success) {
      setNewName("");
      setNewPassword("");
      setShowAddForm(false);
      fetchUsers();
    } else {
      alert("Xatolik yuz berdi");
    }
    setAddingUser(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Haqiqatan ham ushbu foydalanuvchini o'chirib tashlamoqchimisiz?")) {
      const result = await deleteDocument("users", id);
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
          <h2 className="text-lg font-bold mb-4">Yangi foydalanuvchi qo'shish</h2>
          <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <div className="md:col-span-3 flex justify-end gap-3 mt-2">
              <button 
                type="button" 
                onClick={() => setShowAddForm(false)}
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
                Qo'shish
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
                    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-gray-500">{user.password}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                        <Shield className="w-3.5 h-3.5" />
                        {user.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDelete(user.docId)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
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
