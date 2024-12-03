import React, { useEffect, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  date: string;
  __v: number;
}

const MyCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = window.localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const removeProduct = (id: string) => {
    const updatedCart = cart.filter(product => product._id !== id);
    setCart(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {/* Prix Total */}
      <p className="text-right text-lg font-bold text-green-600 p-5 ">Total: ${cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)}</p>
      {/* Liste des produits */}
      <div className="space-y-4">
        {cart.map((product) => (
          <div key={product._id} className="flex items-center bg-base-100 shadow-xl p-4 rounded-lg">
            <img 
              src={`https://firebasestorage.googleapis.com/v0/b/backpack-62c5e.appspot.com/o/images%2F${product.image}?alt=media`} 
              alt={product.name} 
              className="w-24 h-24 object-cover rounded-lg mr-4" 
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>
            <button 
              className="btn btn-primary ml-4" 
              onClick={() => removeProduct(product._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;