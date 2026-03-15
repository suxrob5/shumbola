import React from 'react';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Sozlamalar
        </h1>
        <p className="text-gray-500">
          Dashboard va tizim sozlamalarini o'zgartirish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            Umumiy sozlamalar
          </h2>
          <div className="space-y-4">
             <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Sayt nomi</label>
                <input type="text" defaultValue="Shumbola" className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100" />
             </div>
             <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Admin Email</label>
                <input type="email" defaultValue="admin@shumbola.uz" className="w-full px-4 py-2 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100" />
             </div>
             <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors w-full"> Saqlash </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
