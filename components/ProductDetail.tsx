import React, { useState } from 'react';
import { Product } from '../types';
import StarIcon from './icons/StarIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  language: 'en' | 'es' | 'pt';
}

const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onBack, 
  onAddToCart,
  language 
}) => {
  const [quantity, setQuantity] = useState(1);

  const translations = {
    backToProducts: {
      en: 'Back to Products',
      es: 'Volver a Productos',
      pt: 'Voltar aos Produtos'
    },
    addToCart: {
      en: 'Add to Cart',
      es: 'Añadir al Carrito',
      pt: 'Adicionar ao Carrinho'
    },
    quantity: {
      en: 'Quantity',
      es: 'Cantidad',
      pt: 'Quantidade'
    },
    inStock: {
      en: 'In Stock',
      es: 'En Stock',
      pt: 'Em Estoque'
    },
    outOfStock: {
      en: 'Out of Stock',
      es: 'Agotado',
      pt: 'Fora de Estoque'
    },
    features: {
      en: 'Features',
      es: 'Características',
      pt: 'Características'
    },
    reviews: {
      en: 'reviews',
      es: 'reseñas',
      pt: 'avaliações'
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    alert(
      language === 'en' ? 'Product added to cart!' :
      language === 'es' ? '¡Producto añadido al carrito!' :
      'Produto adicionado ao carrinho!'
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        {translations.backToProducts[language]}
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <img 
              src={product.imageUrl} 
              alt={product.name[language]} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name[language]}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    filled={i < Math.floor(product.rating)}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} {translations.reviews[language]})
              </span>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="mb-6">
              <span className={`text-lg font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 
                  ? `${translations.inStock[language]} (${product.stock})`
                  : translations.outOfStock[language]
                }
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description[language]}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {translations.features[language]}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature[language]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.quantity[language]}
                </label>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 text-lg font-semibold"
            >
              {translations.addToCart[language]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
