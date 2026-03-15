import React from 'react';
import { ShoppingCart } from 'lucide-react';

const OrdersPage = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Buyurtmalar
        </h1>
        <p className="text-gray-500">
          Mijozlar tomonidan qilingan so'nggi buyurtmalar.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="min-h-[400px] flex flex-col items-center justify-center text-gray-400 gap-4 bg-gray-50/50">
          <div className="p-4 bg-white rounded-2xl shadow-sm">
            <ShoppingCart className="w-12 h-12 text-gray-200" />
          </div>
          <p>Yangi buyurtmalar hali kelib tushmadi.</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
