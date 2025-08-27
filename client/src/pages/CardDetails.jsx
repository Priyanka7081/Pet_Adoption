import React, { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedPets from "./RelatedPets";

const CardDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  // ✅ useContext must be inside component
  const { addToCart } = useContext(AppContext);

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
      <div className="flex mt-10 justify-center items-center h-screen text-xl font-semibold">
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

          {/* ✅ FIXED: add pet instead of undefined item */}
          <button
            onClick={() => addToCart(pet)}
            className="flex-1 border border-green-500 text-green-600 rounded-lg py-2 hover:bg-green-500 transition hover:text-amber-50 w-[200px]"
          >
            Adopt Me! 🛒
          </button>
        </div>
      </div>
      <RelatedPets category={pet.category} />
    </>
  );
};

export default CardDetails;
