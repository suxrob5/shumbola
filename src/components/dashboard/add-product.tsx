"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Image as ImageIcon, Plus, Upload, Languages } from 'lucide-react';
import { addDocument, updateDocument } from '@/backend/firebase';

interface AddProductProps {
  onClose: () => void;
  onSuccess: () => void;
  initialData?: any;
}

const AddProduct: React.FC<AddProductProps> = ({ onClose, onSuccess, initialData }) => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'ru' | 'uz' | 'en'>('ru');
  
  const [formData, setFormData] = useState({
    id: '',
    type: '1',
    name: '',
    name_uz: '',
    name_en: '',
    image: '',
    sizes: '20',
    description: '',
    description_uz: '',
    description_en: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id?.toString() || '',
        type: initialData.type?.toString() || '1',
        name: initialData.name || '',
        name_uz: initialData.name_uz || '',
        name_en: initialData.name_en || '',
        image: initialData.image || '',
        sizes: Array.isArray(initialData.sizes) ? initialData.sizes.join(', ') : '',
        description: initialData.description || '',
        description_uz: initialData.description_uz || '',
        description_en: initialData.description_en || '',
      });
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Rasm hajmi juda katta (maksimum 5MB)");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    setLoading(true);
    const productData = {
      ...formData,
      id: formData.id ? Number(formData.id) : Date.now(),
      type: Number(formData.type),
      sizes: formData.sizes.split(',').map(s => Number(s.trim())).filter(s => !isNaN(s)),
    };

    let result;
    if (initialData?.docId) {
        result = await updateDocument('products', initialData.docId, productData);
    } else {
        result = await addDocument('products', productData);
    }

    if (result.success) {
      onSuccess();
      onClose();
    } else {
      alert('Xatolik yuz berdi');
    }
    setLoading(false);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <h2 className="text-xl font-bold text-gray-900">
            {initialData ? "Mahsulotni tahrirlash" : "Yangi mahsulot qo'shish"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mahsulot ID (Masalan: 100)</label>
                <input
                  type="number"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all font-mono"
                  placeholder="Avtomatik"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">O'lchamlar (Sizes, vergul bilan)</label>
                <input
                  type="text"
                  value={formData.sizes}
                  onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                  placeholder="20, 30, 40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Turi (Type)</label>
                <div className="relative group">
                  <input
                    type="number"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all font-mono"
                  />
                  <div className="absolute right-0 top-full mt-2 hidden group-hover:block z-20 w-48 bg-gray-900 text-white text-[10px] p-3 rounded-xl shadow-xl leading-relaxed">
                    <p className="font-bold border-b border-gray-700 mb-1 pb-1">Katalog turlari:</p>
                    <ul className="space-y-0.5">
                      <li>1 - Qurt</li>
                      <li>2 - Suluguni</li>
                      <li>3 - Xamdom pista</li>
                      <li>4 - Bodom</li>
                      <li>5 - Keshu</li>
                      <li>6 - Yer yong'oq</li>
                      <li>7 - O'rik danak</li>
                      <li>8 - Semechka</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400">Sichqonchani ustiga olib boring (1: Qurt, 2: Suluguni...)</p>
              </div>
            </div>

            <div className="flex bg-gray-50 p-1 rounded-xl gap-1 shrink-0">
              {(['ru', 'uz', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setActiveTab(lang)}
                  className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === lang ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {lang === 'ru' ? 'Русский' : lang === 'uz' ? "O'zbekcha" : 'English'}
                </button>
              ))}
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {activeTab === 'ru' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nomi (RU)</label>
                    <input
                      type="text"
                      required={activeTab === 'ru'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Tavsif (RU)</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                </>
              )}
              {activeTab === 'uz' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nomi (UZ)</label>
                    <input
                      type="text"
                      value={formData.name_uz}
                      onChange={(e) => setFormData({ ...formData, name_uz: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Tavsif (UZ)</label>
                    <textarea
                      rows={3}
                      value={formData.description_uz}
                      onChange={(e) => setFormData({ ...formData, description_uz: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                </>
              )}
              {activeTab === 'en' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nomi (EN)</label>
                    <input
                      type="text"
                      value={formData.name_en}
                      onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Tavsif (EN)</label>
                    <textarea
                      rows={3}
                      value={formData.description_en}
                      onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Mahsulot rasmi</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group relative border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer overflow-hidden min-h-[160px]"
              >
                {formData.image ? (
                  <>
                    <img src={formData.image} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Upload className="w-8 h-8 text-white" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
                    </div>
                    <p className="text-sm font-semibold text-gray-700 text-center">Rasm yuklash yoki URL manzilini kiritish</p>
                  </>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              </div>
              <input
                type="text"
                value={formData.image.startsWith('data:') ? '' : formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
                placeholder="yoki rasm URL manzili..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 mt-4 h-14 text-lg"
            >
              {loading ? 'Saqlanmoqda...' : (initialData ? "O'zgarishlarni saqlash" : "Mahsulotni bazaga qo'shish")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
