import { FormEvent, useState } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
export default function AddProducts() {

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);


  const handupload = (e : FormEvent) => {
    e.preventDefault();
    if (image == null) return;

    let myUUID = v4();
    const photoRef = ref(storage, `images/${myUUID}`);
    uploadBytes(photoRef,image)
    .then(() => {
       
       axios.post(`${SERVER_URL}/api/addProduct` , {name , price , description , image : myUUID})
       .then((response) => {
          
          alert("Product Added Successfully");
          console.log(response.data);
          window.location.href = "/dashboard";
          
       }).catch((e) => {console.log(`Axios Error : `,e);
       })

       
    }).catch((e) => {console.log(e);
    })

}
  

  

   return (
     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
       <h2 className="text-2xl font-semibold text-center mb-6">Add a New Product</h2>
       
       <form className="space-y-4" onSubmit={handupload}>
         {/* Product Name */}
         <div>
           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
             Product Name
           </label>
           <input
             id="name"
             type="text"
             placeholder="Enter product name"
             onChange={(e) => setName(e.target.value)}
             className="input input-bordered w-full mt-2"
             required
           />
         </div>
 
         {/* Price */}
         <div>
           <label htmlFor="price" className="block text-sm font-medium text-gray-700">
             Price
           </label>
           <input
             id="price"
             type="text"
             placeholder="Enter product price"
              onChange={(e) => setPrice(e.target.value)}
             className="input input-bordered w-full mt-2"
             required
           />
         </div>
 
         {/* Description */}
         <div>
           <label htmlFor="description" className="block text-sm font-medium text-gray-700">
             Product Description
           </label>
           <textarea
             id="description"
             placeholder="Enter product description"
              onChange={(e) => setDescription(e.target.value)}
             className="textarea textarea-bordered w-full mt-2"
             rows={4}
             required
           ></textarea>
         </div>
 
         {/* Upload Image */}
         <div>
           <label htmlFor="image" className="block text-sm font-medium text-gray-700">
             Product Image
           </label>
           <input
             id="image"
             type="file"
             accept="image/*"
              onChange={(e) => setImage(e.target.files![0])}
             className="file-input file-input-bordered w-full mt-2"
           />
         </div>
 
         {/* Submit Button */}
         <div className="text-center">
           <button type="submit" className="btn btn-primary mt-6 w-full">
             Add Product
           </button>
         </div>
       </form>
     </div>
   );
 }
 