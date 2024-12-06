import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main_Catalog_menu from './Main_Catalog_menu'; // Adjust the import path
import { Link } from 'react-router-dom';

interface Product {
  _id: string;  // MongoDB uses _id as the primary key
  name: string;
  price: number;
  description: string;
  image: string;
}

const Main_Catalog: React.FC = () => {

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [products, setProducts] = useState<Product[]>([]);
  const [sortCriteria, setSortCriteria] = useState<string>('name'); // Default sort by name

  useEffect(() => {
    // Fetch products from the API
    axios
      .get(`${SERVER_URL}/api/products`)  // Update this URL based on your API
      .then((response) => {
        console.log(response.data.products);  // Log the response to check the structure
        setProducts(response.data.products);  // Assuming the response structure has a "products" array
      })
      .catch((error) => {
        console.error("There was an error fetching the products:", error);
      });
  }, []);

  const sortedProducts = [...products].sort((a: Product, b: Product) => {
    if (sortCriteria === 'price') {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <Main_Catalog_menu setSortCriteria={setSortCriteria} />
      <div className="w-[80%] h-[100%] m-auto mt-10">
        <h1 className="font-bold text-2xl ml-10">Headphones For You!</h1>

        {/* Catalog */}
        <nav className="w-full flex flex-wrap justify-around" id="headphonestype">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product: Product) => (
              <div key={product._id} className=" w-80 h-96 p-10"> {/* Use _id for the key */}
                <div
                  className="h-56 bg-[whitesmoke] bg-no-repeat bg-center bg-cover rounded-[30px]"
                  style={{
                    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/backpack-62c5e.appspot.com/o/images%2F${product.image}?alt=media)`,
                    backgroundSize: '90%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'whitesmoke',
                  }}
                ></div>

                <div className="h-40 bg-white p-5 space-y-1">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold truncate" title={product.name}>
                      {product.name}
                    </h1>
                    <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                  </div>
                  <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 " title={product.description} >{product.description}</p>

                  <Link to={`/selectproduct/${product._id}`}> {/* Use _id for the link */}
                    <button
                      className="w-36 border border-black bg-transparent text-black p-2 rounded-[50px] font-bold duration-300 hover:bg-green-950 hover:text-white hover:border-none"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full">No products available.</p>
          )}
        </nav>
      </div>
    </>
  );
}

export default Main_Catalog;
