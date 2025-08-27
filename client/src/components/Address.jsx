import React, { useState } from "react";

const Address = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProceed = () => {
    console.log("Address Data:", formData);
    alert("Proceeding with Address ✅");
  };

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 mt-30">
      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Address</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />
         <div className="flex gap-10">
           <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />
         </div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />
          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
          />

          <button
            type="button"
            onClick={handleProceed}
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Proceed To Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
