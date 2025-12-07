# ElecDigi E-commerce Store

ElecDigi is a modern, fully-functional e-commerce platform for electronics and digital products.

## Features

### Core E-commerce Functionalities
- **Product Catalog**: Browse a comprehensive catalog of electronics and digital products
- **Product Details**: View detailed information, images, features, ratings, and reviews
- **Shopping Cart**: Add, remove, and update product quantities in your cart
- **Checkout Process**: Complete purchase with shipping information
- **Multi-language Support**: Available in English, Spanish, and Portuguese
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Product Categories
- Gaming Peripherals (Mice, Keyboards)
- Monitors
- Audio (Headphones, Speakers)
- Storage Devices
- Wearables
- Accessories (Webcams, Docking Stations)

### Technical Features
- **React 19**: Built with the latest React version
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast development and build tooling
- **Tailwind CSS**: Modern, utility-first styling
- **Local Storage**: Persistent shopping cart
- **Real-time Updates**: Dynamic cart count and total calculations

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Browse Products**: View all available products on the home page
2. **Filter by Category**: Click category buttons to filter products
3. **View Product Details**: Click on any product to see detailed information
4. **Add to Cart**: Click "Add to Cart" to add products to your shopping cart
5. **Manage Cart**: View and modify your cart by clicking the cart icon
6. **Checkout**: Proceed to checkout and enter shipping information
7. **Complete Order**: Submit your order and receive confirmation

## Technology Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useCallback, useEffect)
- **Data Persistence**: Local Storage

## Project Structure

```
/
├── components/           # React components
│   ├── Header.tsx       # Site header with cart and language selector
│   ├── Footer.tsx       # Site footer
│   ├── ProductList.tsx  # Product listing with filters
│   ├── ProductCard.tsx  # Individual product card
│   ├── ProductDetail.tsx # Product detail view
│   ├── ShoppingCart.tsx # Shopping cart view
│   ├── Checkout.tsx     # Checkout form
│   └── icons/           # SVG icon components
├── data/                # Data files
│   └── products.ts      # Product catalog
├── hooks/               # Custom React hooks
│   └── useCart.ts       # Shopping cart logic
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
└── index.html           # HTML template
```

## Features Implemented

✅ Product browsing with category filtering
✅ Product search and filtering
✅ Detailed product views with images and specifications
✅ Shopping cart with add/remove/update functionality
✅ Cart persistence using localStorage
✅ Multi-step checkout process
✅ Order confirmation
✅ Multi-language support (EN/ES/PT)
✅ Responsive design for all screen sizes
✅ Product ratings and reviews display
✅ Stock availability indicators
✅ Price calculations and totals
✅ Modern, intuitive UI/UX

## License

© 2024 ElecDigi. All Rights Reserved.
