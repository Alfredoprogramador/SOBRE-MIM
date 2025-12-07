import React from 'react';
import { Product } from '../types';
import StarIcon from './icons/StarIcon';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  language: 'en' | 'es' | 'pt';
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onSelectProduct, 
  onAddToCart,
  language 
}) => {
  const translations = {
    addToCart: {
      en: 'Add to Cart',
      es: 'Añadir al Carrito',
      pt: 'Adicionar ao Carrinho'
    },
    inStock: {
      en: 'In Stock',
      es: 'En Stock',
      pt: 'Em Estoque'
    },
    viewDetails: {
      en: 'View Details',
      es: 'Ver Detalles',
      pt: 'Ver Detalhes'
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div 
        className="cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        <img 
          src={product.imageUrl} 
          alt={product.name[language]} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name[language]}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description[language]}
          </p>
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  filled={i < Math.floor(product.rating)}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviews})
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-green-600">
              {product.stock > 0 ? translations.inStock[language] : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          disabled={product.stock === 0}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {translations.addToCart[language]}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
