import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';


export default function SelectProduct() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const { id } = useParams<{ id: string }>();

  // State to store the product details
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const [quantity, setQuantity] = useState(1);

  // Fetch product details from the API
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/products/${id}`) // Update this URL based on your API
      .then((response) => {
        console.log(response.data.product); // Log the response to check the structure
        // Assuming the response structure has a "product" object
        // Update the state with the product details
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("There was an error fetching the product:", error);
      });
  }, [id]);

  
  const handleRangeChange = (event : any) => {
    setQuantity(event.target.value);
  };

  const addToCart = () => {
    for(let i = 0; i < quantity; i++) {
      // Get the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Add the new product to the cart
    const updatedCart = [...existingCart, product];
    // create new product form with add quantity
    const products = updatedCart.map((product: any) => {
      if (product._id === product._id) {
        return {
          ...product,
          quantity: quantity,
        };
      }
      return product;
    });
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(products));

   

    console.log('Product added to cart:', products);

    }
  };

  // State to manage loading state of the Buy Now button
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = async () => {
    setIsLoading(true);
    const notifier = new AWN();

    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 2000));

    notifier.success('Purchase successful!');
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex">
        {/* PRODUCT Assets */}
        <div className="w-1/2 h-[100vh] p-10 pl-20 space-y-6">
          <h2 className="space-x-3">
            <span className="text-gray-500 font-[500]">Electronics</span> /
            <span className="text-gray-500 font-[500]"> Audio </span> /
            <span className="text-gray-500 font-[500]"> Headphones </span> /
            <span className="text-black font-[500]"> {product.name} </span>
          </h2>

          <div 
            style={{ 
              backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/backpack-62c5e.appspot.com/o/images%2F${product.image}?alt=media")`,
              backgroundSize: '80%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
             }}
            className=" bg-[whitesmoke] w-[80%] h-[80%]  ">

          </div>


        </div>

        {/* PRODUCT DETAILS */}
        <div className="w-1/2 h-[100vh] p-10">
          <div className="w-[80%] space-y-4">
            <h1 className="text-3xl font-bold"> {product.name} </h1>
            <p className="text-gray-600 font-bold text-sm">
              {product.description}
            </p>
            <div className="w-[80%] border-b-2"></div>
            <div className="w-[80%] space-y-1 mt-10">
            <h1 className="text-2xl font-bold text-[#222]">
              ${product.price.toFixed(2)} or ${(product.price / 6).toFixed(2)}$/month
            </h1>

              <p className="text-gray-600 font-bold text-sm">Suggested payments with 6 months special financing.</p>
              <div className="pt-10"></div>
            </div>
            <div className="w-[80%] border-b-2"></div>

            <div className="flex items-center mt-10 space-x-4">
              <div className="w-36">
                <input
                  type="range"
                  min={0}
                  max="10"
                  className="range range-success"
                  value={quantity}
                  onChange={handleRangeChange}
                />
              </div>
              <div>
                <p className="text-gray-600 font-bold text-sm">
                  Quantity <span>{quantity}</span>
                </p>
              </div>
            </div>
            <div>
              <p className=' font-[500] text-gray-600 '>Only <span className='text-orange-500 font-bold'>12 items</span> Left! <br /> Don't miss it</p>
            </div>

              <div className='flex items-center space-x-4'>
                  <button 
                          className={`w-[150px] h-10 text-white rounded-[50px] p-1 font-bold duration-200 ${isLoading ? 'bg-gray-500' : 'bg-green-900 hover:bg-green-700'}`} 
                          onClick={handleBuyNow}
                          disabled={isLoading}
                        >
                          {isLoading ? 'Processing...' : 'Buy Now'}
                  </button>
                  <button className=' w-[150px] h-10 border border-green-900 text-green-950 rounded-[50px] p-1 font-bold duration-200 hover:w-[200px] ' onClick={addToCart} >Add to Cart</button>
              </div>

              <div className='border-2 border-[whitesmoke] p-5 h-36 space-y-4'>
                    <p className='flex items-center space-x-3 '> 
                      <svg viewBox="0 0 24 24" className='w-5' fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff8800"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.78799 3C5.96948 2.99999 5.29393 2.99998 4.74393 3.04565C4.17258 3.0931 3.64774 3.19496 3.1561 3.45035C2.42553 3.82985 1.82985 4.42553 1.45035 5.1561C1.19496 5.64774 1.0931 6.17258 1.04565 6.74393C0.999977 7.29393 0.999988 7.96946 1 8.78798V15C1 16.9138 2.344 18.5136 4.13963 18.9072C4.52413 20.1206 5.65937 21 7 21C8.30622 21 9.41746 20.1652 9.8293 19H15.1707C15.5825 20.1652 16.6938 21 18 21C19.4031 21 20.5812 20.0368 20.9092 18.7355C22.0899 18.2016 22.849 16.9282 22.6403 15.5506L22.5007 14.6294C22.1412 12.2568 21.2527 9.99549 19.9009 8.01285L19.7194 7.74665C18.9743 6.65384 17.7372 6 16.4145 6H15C14.9494 6 14.8992 6.00188 14.8495 6.00558C14.7854 5.71074 14.6911 5.42833 14.5497 5.1561C14.1702 4.42553 13.5745 3.82985 12.8439 3.45035C12.3523 3.19496 11.8274 3.0931 11.2561 3.04565C10.7061 2.99998 10.0305 2.99999 9.21202 3H6.78799ZM15 8.71577C15 8.73971 15 8.76377 15 8.78795V17H15.1707C15.5825 15.8348 16.6938 15 18 15C19.089 15 20.0425 15.5803 20.5682 16.4485C20.6576 16.2709 20.6953 16.0643 20.6629 15.8502L20.5233 14.929C20.2087 12.853 19.4313 10.8743 18.2484 9.13952L18.0669 8.87333C17.6944 8.32692 17.0758 8 16.4145 8L15 8V8.71577ZM13 8.83C13 7.95898 12.9992 7.36686 12.9612 6.90945C12.9242 6.46402 12.8572 6.23663 12.7748 6.07805C12.5851 5.71277 12.2872 5.41493 11.9219 5.22517C11.7634 5.1428 11.536 5.07578 11.0905 5.03879C10.6331 5.0008 10.041 5 9.17 5H6.83C5.95898 5 5.36686 5.0008 4.90945 5.03879C4.46402 5.07578 4.23663 5.1428 4.07805 5.22517C3.71277 5.41493 3.41493 5.71277 3.22517 6.07805C3.1428 6.23663 3.07578 6.46402 3.03879 6.90945C3.0008 7.36686 3 7.95898 3 8.83V15C3 15.8316 3.50759 16.5447 4.22985 16.8463C4.68191 15.7621 5.75196 15 7 15C8.30622 15 9.41746 15.8348 9.8293 17H13V8.83ZM8 18C8 17.4477 7.55229 17 7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19C7.55229 19 8 18.5523 8 18ZM17 18C17 17.4477 17.4477 17 18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18Z" fill="#ff8800"></path> </g></svg>
                      <span className='text-gray-900 font-bold'>Free Delivery</span> <br />
                      <span className='text-gray-600 font-bold text-sm'>Get it by 10th August</span>
                    </p>

                    <p className='flex items-center space-x-3 '> 
                      <svg viewBox="0 0 24 24" className='w-5' fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff8800"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C8.55229 1 9 1.44772 9 2V3.00228C9.29723 2.99999 9.61798 3 9.96449 3H14.0355C14.382 3 14.7028 2.99999 15 3.00228V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3.12459C17.3192 3.17902 17.621 3.25947 17.9134 3.3806C19.1386 3.88807 20.1119 4.86144 20.6194 6.08658C20.8305 6.59628 20.9181 7.13456 20.9596 7.74331C21 8.33531 21 9.06272 21 9.96448V13.6035C21 14.7056 21 15.5944 20.9403 16.3138C20.8788 17.0547 20.7487 17.7049 20.4371 18.3049C19.9627 19.2181 19.2181 19.9627 18.3049 20.4371C17.7049 20.7487 17.0547 20.8788 16.3138 20.9403C15.5944 21 14.7056 21 13.6035 21H10.3965C9.29444 21 8.40557 21 7.68616 20.9403C6.94535 20.8788 6.29513 20.7487 5.69513 20.4371C4.78191 19.9627 4.03731 19.2181 3.56293 18.3049C3.25126 17.7049 3.12125 17.0547 3.05972 16.3138C2.99998 15.5944 2.99999 14.7056 3 13.6035V9.96449C2.99999 9.06273 2.99999 8.33531 3.04038 7.74331C3.08191 7.13456 3.16948 6.59628 3.3806 6.08658C3.88807 4.86144 4.86144 3.88807 6.08658 3.3806C6.37901 3.25947 6.68085 3.17902 7 3.12459V2C7 1.44772 7.44772 1 8 1ZM7 5.17476C6.94693 5.19142 6.89798 5.20929 6.85195 5.22836C6.11687 5.53284 5.53284 6.11687 5.22836 6.85195C5.135 7.07733 5.07033 7.37254 5.03574 7.87945C5.01452 8.19046 5.0059 8.55351 5.00239 9H18.9976C18.9941 8.55351 18.9855 8.19046 18.9643 7.87945C18.9297 7.37254 18.865 7.07733 18.7716 6.85195C18.4672 6.11687 17.8831 5.53284 17.1481 5.22836C17.102 5.20929 17.0531 5.19142 17 5.17476V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5.00239C14.7059 5.00009 14.3755 5 14 5H10C9.62448 5 9.29413 5.00009 9 5.00239V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6V5.17476ZM19 11H5V13.56C5 14.7158 5.0008 15.5214 5.05286 16.1483C5.10393 16.7632 5.19909 17.116 5.33776 17.3829C5.62239 17.9309 6.06915 18.3776 6.61708 18.6622C6.88403 18.8009 7.23678 18.8961 7.85168 18.9471C8.47856 18.9992 9.28423 19 10.44 19H13.56C14.7158 19 15.5214 18.9992 16.1483 18.9471C16.7632 18.8961 17.116 18.8009 17.3829 18.6622C17.9309 18.3776 18.3776 17.9309 18.6622 17.3829C18.8009 17.116 18.8961 16.7632 18.9471 16.1483C18.9992 15.5214 19 14.7158 19 13.56V11ZM13 16C13 15.4477 13.4477 15 14 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H14C13.4477 17 13 16.5523 13 16Z" fill="#ff8800"></path> </g></svg>
                      <span className='text-gray-900 font-bold'>Return Delivery</span> <br />
                      <span className='text-gray-600 font-bold text-sm'>Easy return within 7 days</span>
                    </p>

              </div>

          </div>
        </div>
      </div>
    </>
  );
}
