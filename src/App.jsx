import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ShoppingCart, Leaf, Package, Star, Plus, Minus, X, FileText } from 'lucide-react'
import './App.css'
import ecoPackagingVariety from './assets/eco_packaging_variety.webp'
import ecoCupsContainers from './assets/eco_cups_containers.jpg'
import customPackagingBoxes from './assets/custom_packaging_boxes.jpg'
import customMailerBoxes from './assets/custom_mailer_boxes.jpg'
import PoliciesPage from './components/PoliciesPage.jsx'

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const products = [
    {
      id: 1,
      name: 'Set Completo de Empaques Ecológicos',
      description: 'Variedad de empaques biodegradables para alimentos: cajas, vasos, cubiertos y contenedores. Perfectos para cafeterías y restaurantes.',
      price: 850,
      currency: 'MXN',
      image: ecoPackagingVariety,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Vasos y Contenedores Biodegradables',
      description: 'Set de vasos y contenedores kraft 100% biodegradables. Ideales para bebidas calientes y alimentos para llevar.',
      price: 450,
      currency: 'MXN',
      image: ecoCupsContainers,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Cajas Personalizadas Premium',
      description: 'Cajas de cartón reciclable con diseño personalizado. Refuerza tu marca con empaques únicos y sustentables.',
      price: 1200,
      currency: 'MXN',
      image: customPackagingBoxes,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Cajas de Envío Personalizadas',
      description: 'Cajas mailer box con impresión personalizada. Perfectas para e-commerce y envíos de productos especiales.',
      price: 950,
      currency: 'MXN',
      image: customMailerBoxes,
      rating: 4.6
    }
  ]

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
      }
      return item
    }).filter(item => item.quantity > 0))
  }

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  if (currentPage === 'policies') {
    return <PoliciesPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="text-white w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">GreenPack</h1>
                <p className="text-sm text-gray-600">Empaques Ecológicos</p>
              </div>
            </button>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setCurrentPage('policies')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                Políticas B2B
              </Button>
              <Button 
                onClick={() => setShowCart(!showCart)}
                className="relative bg-green-600 hover:bg-green-700"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Carrito
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Empaques Sustentables para tu Negocio
          </h2>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Productos biodegradables y personalizados que cuidan el planeta
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <Package className="w-6 h-6" />
              <span>100% Reciclables</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              <span>Biodegradables</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6" />
              <span>Personalización Incluida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Nuestros Productos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {product.currency}
                    </span>
                  </div>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Agregar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-in-right">
            <div className="bg-green-600 text-white p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Carrito de Compras</h3>
              <Button 
                onClick={() => setShowCart(false)}
                variant="ghost"
                className="text-white hover:bg-green-700"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-2">{item.name}</h4>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-7 w-7 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="font-semibold">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-7 w-7 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-green-600 font-bold mt-2">
                          ${item.price * item.quantity} {item.currency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${getTotalPrice()} MXN
                  </span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                  Proceder al Pago
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Leaf className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">GreenPack</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empaques ecológicos y personalizados para tu negocio
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white mb-4">Información</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('policies')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Políticas B2B
                  </button>
                </li>
                <li>
                  <a href="mailto:ventas@greenpack.mx" className="text-gray-400 hover:text-green-400 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <p className="text-gray-400 text-sm mb-2">ventas@greenpack.mx</p>
              <p className="text-gray-500 text-xs">Disponible de lunes a viernes</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 GreenPack. Comprometidos con el medio ambiente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

