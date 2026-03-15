"use client";

import React from 'react';
import { X, Edit2, Package, Tag, Layers, FileText } from 'lucide-react';

interface ProductPreviewProps {
    product: any;
    onClose: () => void;
    onEdit: () => void;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product, onClose, onEdit }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            <Package className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Mahsulot ko'rinishi</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={onEdit}
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors active:scale-95 shadow-sm"
                        >
                            <Edit2 className="w-4 h-4" />
                            <span>Tahrirlash</span>
                        </button>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto flex-1 p-6 space-y-8">
                    {/* Image and Primary Info */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {(product.image || product.imageUrl) && (
                            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                                <img 
                                    src={product.image || product.imageUrl} 
                                    alt={product.name} 
                                    className="w-full h-full object-contain md:object-cover" 
                                />
                            </div>
                        )}
                        <div className="flex-1 space-y-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">ID: {product.id || 'N/A'}</p>
                                <h1 className="text-2xl font-black text-gray-900 leading-tight">
                                    {product.name_uz || product.name}
                                </h1>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200/50">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                                        <Tag className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold uppercase">Turi</span>
                                    </div>
                                    <p className="font-bold text-gray-900">{product.type || 'N/A'}</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200/50">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                                        <Layers className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold uppercase">O'lchamlar</span>
                                    </div>
                                    <p className="font-bold text-gray-900">
                                        {Array.isArray(product.sizes) ? product.sizes.join('g, ') : product.sizes}g
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Translations and Description */}
                    <div className="space-y-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-gray-900 mb-4">
                            <FileText className="w-5 h-5 text-blue-500" />
                            <h3 className="font-bold">Batafsil ma'lumot</h3>
                        </div>

                        <div className="grid gap-6">
                            {/* RU */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="px-1.5 py-0.5 rounded bg-gray-100 text-[10px] font-bold text-gray-400">RU</span>
                                    <h4 className="font-bold text-gray-900">{product.name || 'Nomsiz'}</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 border-gray-100 pl-4">
                                    {product.description || 'Tavsif mavjud emas.'}
                                </p>
                            </div>

                            {/* UZ */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[10px] font-bold text-blue-400">UZ</span>
                                    <h4 className="font-bold text-gray-900">{product.name_uz || product.name}</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 border-blue-50 pl-4">
                                    {product.description_uz || product.description || 'Tavsif mavjud emas.'}
                                </p>
                            </div>

                            {/* EN */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="px-1.5 py-0.5 rounded bg-cyan-50 text-[10px] font-bold text-cyan-400">EN</span>
                                    <h4 className="font-bold text-gray-900">{product.name_en || product.name}</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 border-cyan-50 pl-4">
                                    {product.description_en || product.description || 'Tavsif mavjud emas.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-center shrink-0">
                    <p className="text-[10px] text-gray-400 font-medium">Shumbola Dashboard • Mahsulotni tahlil qilish</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPreview;
