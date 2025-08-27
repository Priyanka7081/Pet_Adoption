import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(AppContext);
  const navigate = useNavigate();

  // ✅ Proceed handler
  const handleProceed = () => {
    navigate("/address");
  };

  // ✅ Helper for image URL
  const getImageUrl = (pet) => {
    const imgField =
      pet?.image ||
      (pet?.images && pet.images.length > 0 && pet.images[0]) ||
      "";

    if (!imgField) return "/placeholder.png";

    if (typeof imgField === "string" && (imgField.startsWith("http://") || imgField.startsWith("https://"))) {
      return imgField;
    }

    if (typeof imgField === "string") {
      return `http://localhost:4000/${imgField.replace(/\\/g, "/")}`;
    }

    return "/placeholder.png";
  };

  return (
    <div className="pt-24 px-6 sm:px-12 mt-10">
      <h1 className="text-2xl font-bold mb-6">My Adoption Cart 🐾</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Go adopt a pet!</p>
      ) : (
        <div className="space-y-6">
          {cart.map((pet) => (
            <div
              key={pet._id || pet.id}
              className="flex items-center gap-6 bg-white p-4 rounded-xl shadow-md"
            >
              {/* Pet Image */}
              <img
                src={getImageUrl(pet)}
                alt={pet.name || "pet"}
                className="w-28 h-28 object-cover rounded-lg"
              />

              {/* Pet Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{pet.name}</h2>
                <p className="text-gray-600">{pet.description}</p>
                <p className="text-sm text-gray-500">
                  Age: {pet.age} | Breed: {pet.breed} | Color: {pet.color}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(pet._id || pet.id)}
                className="text-red-500 hover:text-red-700 text-xl"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Cart Actions */}
          <div className="flex gap-10">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
            <button
              onClick={handleProceed}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
