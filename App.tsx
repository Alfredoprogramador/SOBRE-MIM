
import React, { useState, useCallback } from 'react';
import { Product, ShippingInfo } from './types';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

type View = 'products' | 'product-detail' | 'cart' | 'checkout' | 'order-success';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('en');
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getItemCount } = useCart();

  const handleSelectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProducts = useCallback(() => {
    setSelectedProduct(null);
    setCurrentView('products');
    window.scrollTo(0, 0);
  }, []);

  const handleShowCart = useCallback(() => {
    setCurrentView('cart');
    window.scrollTo(0, 0);
  }, []);

  const handleShowCheckout = useCallback(() => {
    setCurrentView('checkout');
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = useCallback((product: Product, quantity: number = 1) => {
    addToCart(product, quantity);
  }, [addToCart]);

  const handlePlaceOrder = useCallback((shippingInfo: ShippingInfo) => {
    console.log('Order placed:', { shippingInfo, cart });
    clearCart();
    setCurrentView('order-success');
    window.scrollTo(0, 0);
  }, [cart, clearCart]);

  const handleBackToShopping = useCallback(() => {
    setCurrentView('products');
    window.scrollTo(0, 0);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackToProducts}
            onAddToCart={handleAddToCart}
            language={language}
          />
        ) : (
          <ProductList
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            language={language}
          />
        );
      case 'cart':
        return (
          <ShoppingCart
            cart={cart}
            onBack={handleBackToProducts}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onCheckout={handleShowCheckout}
            language={language}
          />
        );
      case 'checkout':
        return (
          <Checkout
            cart={cart}
            onBack={handleShowCart}
            onPlaceOrder={handlePlaceOrder}
            language={language}
          />
        );
      case 'order-success':
        return (
          <div className="max-w-2xl mx-auto py-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' && 'Order Placed Successfully!'}
                {language === 'es' && '¡Pedido Realizado con Éxito!'}
                {language === 'pt' && 'Pedido Realizado com Sucesso!'}
              </h2>
              <p className="text-gray-600 mb-8">
                {language === 'en' && 'Thank you for your purchase. You will receive a confirmation email shortly.'}
                {language === 'es' && 'Gracias por su compra. Recibirá un correo de confirmación en breve.'}
                {language === 'pt' && 'Obrigado pela sua compra. Você receberá um e-mail de confirmação em breve.'}
              </p>
              <button
                onClick={handleBackToShopping}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                {language === 'en' && 'Continue Shopping'}
                {language === 'es' && 'Continuar Comprando'}
                {language === 'pt' && 'Continuar Comprando'}
              </button>
            </div>
          </div>
        );
      default:
        return (
          <ProductList
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            language={language}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        onShowCart={handleShowCart}
        cartItemCount={getItemCount()}
        language={language} 
        onLanguageChange={setLanguage} 
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
