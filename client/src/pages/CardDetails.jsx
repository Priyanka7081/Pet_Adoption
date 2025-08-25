// import React,{useEffect,useState } from 'react'
// import { useParams} from 'react-router-dom'
// import axios from 'axios'
// const CardDetails = () => {
//   const {id}=useParams()
//     const url = "http://localhost:4000/api";
//   const [animal, setAnimal] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const { data } = await axios.get(`${url}/get/${id}`, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         });

//         console.log("API Response:", data);
//         if (data.pets) {
//           setAnimal(data.pets);
//         } else {
//           setAnimal(data.pets);
//         }
//       } catch (error) {
//         console.error("Error fetching pets:", error);
//       }
//     };

//     fetchPets();
//   }, [id]);

//   return (
//     <div>
// <h1>{id}</h1>
//     </div>
//   )
// }

// export default CardDetails









// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CardDetails = () => {
//   const { id } = useParams();
//   const url = "http://localhost:4000/api";
//   const [animal, setAnimal] = useState(null); // null for single pet

//   useEffect(() => {
//     const fetchPet = async () => {
//       try {
//         const { data } = await axios.get(`${url}/pets/get/${id}`, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         });

//         console.log("API Response:", data);

//         // ✅ Adjust according to your backend response
//         if (data.pet) {
//           setAnimal(data.pet);
//         } else if (data.pets) {
//           setAnimal(data.pets);
//         }
//       } catch (error) {
//         console.error("Error fetching pet:", error);
//       }
//     };

//     fetchPet();
//   }, [id]);

//   if (!animal) {
//     return <h2>Loading pet details...</h2>;
//   }

//   return (
//     <div>
//       <h1>{animal.name}</h1>
//       <p>Breed: {animal.breed}</p>
//       <p>Age: {animal.age}</p>
//       <p>Description: {animal.description}</p>
//       {animal.image && (
//         <img
//           src={animal.image}
//           alt={animal.name}
//           style={{ width: "300px", borderRadius: "10px" }}
//         />
//       )}
//     </div>
//   );
// };

// export default CardDetails;






// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const PetDetails = () => {
//   const { id } = useParams();
//   const [pet, setPet] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:4000/api/pets/get/${id}`)
//       .then((res) => setPet(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   if (!pet) return <p className="text-center mt-10">Loading pet details...</p>;

//   return (
//     <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden">
//       {/* <img
//         src={pet.image}
//         alt={pet.name}
//         className="w-full h-80 object-cover"
//       /> */}
//        <img
//                 src={`http://localhost:4000/${pet.image.replace(/\\/g, "/")}`} 
//                 alt={pet.name}
//                 className="h-full object-contain"
//               />
//       <div className="p-6">
//         <h2 className="text-2xl font-bold">{pet.name}</h2>
//         <p className="text-gray-600">{pet.breed}</p>
//         <p className="mt-4 text-gray-800">{pet.description}</p>
//         <p className="mt-2 text-blue-600 font-semibold">
//           Age: {pet.age} years
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PetDetails;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedPets from './RelatedPets';

const CardDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/pets/get/${id}`);
        setPet(res.data);
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
         <img
               src={`http://localhost:4000/${pet.image.replace(/\\/g, "/")}`} 
               alt={pet.name}
               className="h-full object-contain border rounded-xl border-white-100"
             />
      </div>

      {/* Right Side - Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{pet.name}</h1>
        <p className="text-gray-600 text-lg">{pet.description}</p>
        <p className="text-gray-700">
          <span className="font-semibold">Age:</span> {pet.age}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Breed:</span> {pet.breed}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Price:</span> ₹{pet.price}
        </p>

       <button className="flex-1 border border-green-500 text-green-600 rounded-lg py-2 hover:bg-green-500 transition hover:text-amber-50 w-[200px] ">
                  Adopt Me! 🛒
                </button>
      </div>
    </div>
<RelatedPets category={pet.category} />
    </>
  );
};

export default CardDetails;
