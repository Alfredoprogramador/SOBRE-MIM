import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  language: 'en' | 'es' | 'pt';
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  onSelectProduct, 
  onAddToCart,
  language 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const translations = {
    title: {
      en: 'Our Products',
      es: 'Nuestros Productos',
      pt: 'Nossos Produtos'
    },
    all: {
      en: 'All Products',
      es: 'Todos los Productos',
      pt: 'Todos os Produtos'
    },
    filterBy: {
      en: 'Filter by:',
      es: 'Filtrar por:',
      pt: 'Filtrar por:'
    }
  };

  // Get unique categories
  const categories = Array.from(
    new Set(products.map(p => p.category[language]))
  );

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category[language] === selectedCategory);

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        {translations.title[language]}
      </h1>
      
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        <span className="text-gray-700 font-medium mr-2">
          {translations.filterBy[language]}
        </span>
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition-colors duration-200`}
        >
          {translations.all[language]}
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
            language={language}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {language === 'en' && 'No products found in this category.'}
            {language === 'es' && 'No se encontraron productos en esta categoría.'}
            {language === 'pt' && 'Nenhum produto encontrado nesta categoria.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
