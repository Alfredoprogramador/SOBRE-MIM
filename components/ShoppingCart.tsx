import React from 'react';
import { Cart } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface ShoppingCartProps {
  cart: Cart;
  onBack: () => void;
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onCheckout: () => void;
  language: 'en' | 'es' | 'pt';
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ 
  cart, 
  onBack, 
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
  language 
}) => {
  const translations = {
    title: {
      en: 'Shopping Cart',
      es: 'Carrito de Compras',
      pt: 'Carrinho de Compras'
    },
    backToProducts: {
      en: 'Continue Shopping',
      es: 'Continuar Comprando',
      pt: 'Continuar Comprando'
    },
    quantity: {
      en: 'Quantity',
      es: 'Cantidad',
      pt: 'Quantidade'
    },
    price: {
      en: 'Price',
      es: 'Precio',
      pt: 'Preço'
    },
    total: {
      en: 'Total',
      es: 'Total',
      pt: 'Total'
    },
    remove: {
      en: 'Remove',
      es: 'Eliminar',
      pt: 'Remover'
    },
    proceedToCheckout: {
      en: 'Proceed to Checkout',
      es: 'Proceder al Pago',
      pt: 'Prosseguir para o Pagamento'
    },
    emptyCart: {
      en: 'Your cart is empty',
      es: 'Tu carrito está vacío',
      pt: 'Seu carrinho está vazio'
    },
    subtotal: {
      en: 'Subtotal',
      es: 'Subtotal',
      pt: 'Subtotal'
    },
    shipping: {
      en: 'Shipping',
      es: 'Envío',
      pt: 'Envio'
    },
    free: {
      en: 'Free',
      es: 'Gratis',
      pt: 'Grátis'
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          {translations.backToProducts[language]}
        </button>
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {translations.emptyCart[language]}
          </h2>
          <button
            onClick={onBack}
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {translations.backToProducts[language]}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        {translations.backToProducts[language]}
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {translations.title[language]}
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {cart.items.map((item) => (
              <div 
                key={item.product.id}
                className="border-b border-gray-200 p-6 flex gap-4"
              >
                <img 
                  src={item.product.imageUrl} 
                  alt={item.product.name[language]} 
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.product.name[language]}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.product.category[language]}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <label className="text-sm text-gray-600 mr-2">
                        {translations.quantity[language]}:
                      </label>
                      <input
                        type="number"
                        min="1"
                        max={item.product.stock}
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      {translations.remove[language]}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    ${item.product.price.toFixed(2)} {language === 'en' ? 'each' : language === 'es' ? 'c/u' : 'cada'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Order Summary' : language === 'es' ? 'Resumen del Pedido' : 'Resumo do Pedido'}
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">{translations.subtotal[language]}</span>
                <span className="font-semibold">${cart.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{translations.shipping[language]}</span>
                <span className="font-semibold text-green-600">{translations.free[language]}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">{translations.total[language]}</span>
                  <span className="text-lg font-bold text-blue-600">${cart.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              {translations.proceedToCheckout[language]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
