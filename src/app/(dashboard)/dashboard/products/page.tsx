"use client";

import React, { useState } from 'react';
import ListProducts from '@/components/dashboard/list-products';
import AddProduct from '@/components/dashboard/add-product';
import { Package, Plus } from 'lucide-react';

const ProductsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
            Mahsulotlar
          </h1>
          <p className="text-gray-500">
            Katalogdagi barcha mahsulotlarni boshqarish.
          </p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span>Yangi mahsulot</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-900 text-lg">Mahsulotlar ro'yxati</h2>
          <div className="w-64 relative">
             <input 
               type="text" 
               placeholder="Qidirish..." 
               className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
             />
          </div>
        </div>
        <div className="min-h-[400px] flex flex-col bg-gray-50/20">
          <ListProducts key={refreshKey} />
        </div>
      </div>

      {showAddModal && (
        <AddProduct 
          onClose={() => setShowAddModal(false)} 
          onSuccess={handleSuccess} 
        />
      )}
    </div>
  );
};

export default ProductsPage;

  // <div className="p-4 bg-white rounded-2xl shadow-sm">
  //           <Package className="w-12 h-12 text-gray-200" />
  //         </div>