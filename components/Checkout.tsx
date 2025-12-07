import React, { useState } from 'react';
import { Cart, ShippingInfo } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface CheckoutProps {
  cart: Cart;
  onBack: () => void;
  onPlaceOrder: (shippingInfo: ShippingInfo) => void;
  language: 'en' | 'es' | 'pt';
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onBack, onPlaceOrder, language }) => {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const translations = {
    title: {
      en: 'Checkout',
      es: 'Finalizar Compra',
      pt: 'Finalizar Compra'
    },
    backToCart: {
      en: 'Back to Cart',
      es: 'Volver al Carrito',
      pt: 'Voltar ao Carrinho'
    },
    shippingInfo: {
      en: 'Shipping Information',
      es: 'Información de Envío',
      pt: 'Informações de Envio'
    },
    fullName: {
      en: 'Full Name',
      es: 'Nombre Completo',
      pt: 'Nome Completo'
    },
    email: {
      en: 'Email',
      es: 'Correo Electrónico',
      pt: 'E-mail'
    },
    address: {
      en: 'Address',
      es: 'Dirección',
      pt: 'Endereço'
    },
    city: {
      en: 'City',
      es: 'Ciudad',
      pt: 'Cidade'
    },
    state: {
      en: 'State/Province',
      es: 'Estado/Provincia',
      pt: 'Estado/Província'
    },
    zipCode: {
      en: 'ZIP Code',
      es: 'Código Postal',
      pt: 'CEP'
    },
    country: {
      en: 'Country',
      es: 'País',
      pt: 'País'
    },
    phone: {
      en: 'Phone',
      es: 'Teléfono',
      pt: 'Telefone'
    },
    placeOrder: {
      en: 'Place Order',
      es: 'Realizar Pedido',
      pt: 'Fazer Pedido'
    },
    orderSummary: {
      en: 'Order Summary',
      es: 'Resumen del Pedido',
      pt: 'Resumo do Pedido'
    },
    total: {
      en: 'Total',
      es: 'Total',
      pt: 'Total'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder(shippingInfo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        {translations.backToCart[language]}
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {translations.title[language]}
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {translations.shippingInfo[language]}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.fullName[language]} *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={shippingInfo.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.email[language]} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={shippingInfo.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.phone[language]} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={shippingInfo.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.address[language]} *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={shippingInfo.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.city[language]} *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={shippingInfo.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.state[language]} *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={shippingInfo.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.zipCode[language]} *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={shippingInfo.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.country[language]} *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={shippingInfo.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold mt-6"
              >
                {translations.placeOrder[language]}
              </button>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {translations.orderSummary[language]}
            </h2>
            <div className="space-y-3">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.product.name[language]} x {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">{translations.total[language]}</span>
                  <span className="text-lg font-bold text-blue-600">
                    ${cart.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
