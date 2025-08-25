import React from "react";

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-6">About PetWorld 🐾</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-green-600">PetWorld</span>,  
          your one-stop destination to <span className="font-semibold">buy</span> or <span className="font-semibold">donate</span> pets.  
          We believe that every pet deserves a loving home, and every pet lover should  
          find their perfect companion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-green-100 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">🐶 Our Mission</h2>
            <p className="text-gray-700">
              To connect pets with caring families while promoting kindness, adoption,  
              and responsible pet ownership.
            </p>
          </div>

          <div className="p-6 bg-green-100 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">🐾 What We Offer</h2>
            <p className="text-gray-700">
              A platform where you can <strong>adopt</strong>, <strong>buy</strong>,  
              or <strong>donate</strong> pets safely, with love and trust.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">💚 Why Choose PetWorld?</h2>
          <ul className="list-disc text-left max-w-2xl mx-auto text-gray-700 space-y-2">
            <li>Trusted pet adoption & donation system.</li>
            <li>Easy and safe process for pet lovers.</li>
            <li>Helping stray and abandoned animals find homes.</li>
            <li>Dedicated support for both adopters and donors.</li>
          </ul>
        </div>

        <div className="mt-10">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition">
            Meet Our Pets 🐕🐈
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
