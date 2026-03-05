import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Profile = () => {
  const { user, logout } = useContext(AppContext);

  // fallback user (if backend not connected yet)
  const demoUser = {
    name: user?.name || "Priyanka Kumari",
    email: user?.email || "priyanka@gmail.com",
    avatar:
      user?.avatar ||
      "https://ui-avatars.com/api/?name=Priyanka&background=86efac&color=064e3b",
    adopted: 3,
    cartItems: 2,
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* Avatar */}
            <img
              src={demoUser.avatar}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-green-400 shadow-md"
            />

            {/* User Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {demoUser.name}
              </h2>
              <p className="text-gray-500">{demoUser.email}</p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                  Edit Profile
                </button>

                <button
                  onClick={logout}
                  className="px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">

          {/* Adopted Pets */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Pets Adopted 🐾
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {demoUser.adopted}
            </p>
          </div>

          {/* Cart Items */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Cart Items 🛒
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {demoUser.cartItems}
            </p>
          </div>

          {/* Membership */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Membership ⭐
            </h3>
            <p className="text-xl font-semibold text-green-600 mt-2">
              Premium Member
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white mt-8 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>🐶 Adopted a Golden Retriever</li>
            <li>🛒 Added Dog Food to cart</li>
            <li>🐱 Viewed Persian Cat profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;