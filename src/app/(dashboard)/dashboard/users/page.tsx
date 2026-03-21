"use client";

import React, { useState, useEffect } from "react";
import { Users, UserPlus, Trash2, Shield, Loader2, Camera, Upload, Edit2, Lock, EyeOff, Eye } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);

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
      const maxId = users.reduce((max, user) => Math.max(max, (user as any).id || 0), 0);
      result = await addDocument("users", { ...userData, id: maxId + 1 });
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
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
            Foydalanuvchilar
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Tizim adminlari va ularning kirish ma'lumotlari.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingUser(null);
            setNewName("");
            setNewPassword("");
            setNewImage("");
            setShowAddForm(!showAddForm);
          }}
          className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <UserPlus size={18} />
          <span>Yangi qo'shish</span>
        </button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-top-4">
          <h2 className="text-lg font-bold mb-4">
            {editingUser ? "Foydalanuvchini tahrirlash" : "Yangi foydalanuvchi qo'shish"}
          </h2>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Login (Name)</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Parol</label>

                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#368BC6] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <input
                  type="text"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Turi</label>
                <input
                  type="text"
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Profil rasmi</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="group relative border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer overflow-hidden min-h-[100px]"
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
                      <Camera className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    </div>
                    <p className="text-xs font-semibold text-gray-500">Rasm tanlash (max 2MB)</p>
                  </>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingUser(null);
                  setNewName("");
                  setNewPassword("");
                  setNewImage("");
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-gray-500 font-medium hover:bg-gray-50 transition-colors border border-gray-100"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                disabled={addingUser}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {addingUser && <Loader2 size={16} className="animate-spin" />}
                {editingUser ? "Saqlash" : "Qo'shish"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[540px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/80">
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Foydalanuvchi</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Parol</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tur</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {users.map((user) => (
                  <tr key={user.docId} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden shrink-0 text-sm">
                          {(user as any).image ? (
                            <img src={(user as any).image} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span>{user.name[0]?.toUpperCase()}</span>
                          )}
                        </div>
                        <span className="font-medium text-gray-900 truncate max-w-[120px]">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-500 font-mono text-xs">{user.password}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 capitalize">
                        <Shield className="w-3 h-3" />
                        {user.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => handleEdit(user)}
                          className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(user.docId)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center text-gray-400">
                      <Users className="w-10 h-10 mx-auto mb-2 text-gray-200" />
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
