import React from 'react';
import { Users } from 'lucide-react';

const CustomersPage = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Xaridorlar
        </h1>
        <p className="text-gray-500">
          Tizimdagi barcha faol xaridorlar ro'yxati.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="min-h-[400px] flex flex-col items-center justify-center text-gray-400 gap-4 bg-gray-50/50">
          <div className="p-4 bg-white rounded-2xl shadow-sm">
            <Users className="w-12 h-12 text-gray-200" />
          </div>
          <p>Xaridorlar topilmadi.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
