"use client";

import { getDocuments, deleteDocument } from "@/backend/firebase";
import { useEffect, useState, useCallback } from "react";
import { Trash2, Edit2 } from "lucide-react";
import AddProduct from "./add-product";
import ProductPreview from "./product-preview";

const ListProducts = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState<any | null>(null);
    const [viewingProduct, setViewingProduct] = useState<any | null>(null);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        const data = await getDocuments("products");
        setProducts(data);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = async (e: React.MouseEvent, docId: string) => {
        e.stopPropagation();
        if (window.confirm("Haqiqatan ham ushbu mahsulotni o'chirib tashlamoqchimisiz?")) {
            const result = await deleteDocument("products", docId);
            if (result.success) {
                setProducts(products.filter(p => p.docId !== docId));
            } else {
                alert("Xatolik yuz berdi");
            }
        }
    };

    const handleEdit = (e: React.MouseEvent, product: any) => {
        e.stopPropagation();
        setEditingProduct(product);
    };

    if (loading) {
        return <div className="p-4 text-gray-500 w-full text-center"> Yuklanmoqda...</div>;
    }

    return (
        <div className="w-full p-4">
            <div className="grid gap-4 snap-start max-h-[58vh] overflow-y-auto">
                {products.length === 0 ? (
                    <p className="text-gray-500 text-center py-8"> Mahsulotlar topilmadi.</p>
                ) : (
                    products.map((product) => (
                        <div 
                            key={product.docId} 
                            onClick={() => setViewingProduct(product)}
                            className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-blue-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-4">
                                {(product.image || product.imageUrl) && (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-50 bg-gray-50 shrink-0">
                                        <img src={product.image || product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-semibold text-gray-900">{product.name_uz || product.name || "Nomsiz mahsulot"}</h3>
                                    {product.type && <div className="flex items-center"><p className="text-[10px] text-gray-400 mt-0.5 mr-3">Tur: {product.type}</p> <p className="text-[10px] text-gray-400 mt-0.5">Olcham: {product.sizes}</p></div> }
                                </div>
                            </div>
                        <div className="flex items-center gap-1 shrink-0">
                            <button
                                onClick={(e) => handleEdit(e, product)}
                                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all sm:opacity-0 sm:group-hover:opacity-100"
                            >
                                <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                                onClick={(e) => handleDelete(e, product.docId)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all sm:opacity-0 sm:group-hover:opacity-100"
                            >
                                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                        </div>
                    ))
                )}
            </div>

            {viewingProduct && (
                <ProductPreview 
                    product={viewingProduct}
                    onClose={() => setViewingProduct(null)} 
                    onEdit={() => {
                        setEditingProduct(viewingProduct);
                        setViewingProduct(null);
                    }}
                />
            )}

            {editingProduct && (
                <AddProduct 
                    onClose={() => setEditingProduct(null)} 
                    onSuccess={() => {
                        fetchProducts();
                        setEditingProduct(null);
                    }} 
                    initialData={editingProduct}
                />
            )}
        </div>
    );
};

export default ListProducts;
