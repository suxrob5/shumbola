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
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
            Mahsulotlar
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Katalogdagi barcha mahsulotlarni boshqarish.
          </p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Yangi mahsulot</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h2 className="font-bold text-gray-900">Mahsulotlar ro'yxati</h2>
          <input 
            type="text" 
            placeholder="Qidirish..." 
            className="w-full sm:w-56 px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
          />
        </div>
        <div className="min-h-[300px] md:min-h-[400px] flex flex-col bg-gray-50/20">
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