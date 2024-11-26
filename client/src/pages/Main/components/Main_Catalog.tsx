import React, { useState } from 'react';
import products from '../../../../public/assets/Products/Headphones/data.json'; // Adjust the path as necessary
import Main_Catalog_menu from './Main_Catalog_menu'; // Adjust the import path
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Main_Catalog: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<string>('name'); // Default sort by name

  const sortedProducts = [...products].sort((a: Product, b: Product) => {
    if (sortCriteria === 'price') {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <Main_Catalog_menu setSortCriteria={setSortCriteria} />
      <div className="w-[80%] m-auto mt-10">
        <h1 className="font-bold text-2xl ml-10">Headphones For You!</h1>

        {/* Catalog */}
        <nav className="w-full flex flex-wrap justify-around" id="headphonestype">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product: Product) => (
              <div key={product.id} className=" w-80 h-96 p-10 ">
                <div
                  className="h-56 bg-[whitesmoke] bg-no-repeat bg-center bg-cover rounded-[30px] "
                  style={{
                    backgroundImage: `url(${product.image})`,
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
                  <p className="text-sm">{product.description}</p>

                    <Link to={`/selectproduct/${product.id}`}>

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
