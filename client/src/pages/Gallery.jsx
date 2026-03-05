// import React, { useState } from "react";

// const colors = {
//   dog: "bg-yellow-300",
//   cat: "bg-pink-300",
//   bird: "bg-blue-300",
//   rabbit: "bg-green-300",
// };

// const Gallery = () => {
//   const [selectedPet, setSelectedPet] = useState(null);

//   return (
//     <div className=" bg-gray-100 py-10">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         PetWorld Guide
//       </h1>

//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {/* Dog Card */}
//         <div
//           className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.dog} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
//           onClick={() =>
//             setSelectedPet({
//               name: "Dog",
//               type: "dog",
//               food: "Dog food, meat",
//               habitat: "Home, backyard",
//               exercise: "Daily walks, playtime",
//               grooming: "Brushing, baths",
//               health: "Vaccinations, vet checkups",
//               behavior: "Friendly, loyal",
//             })
//           }
//         >
//           <p className="text-xl font-bold text-gray-800">Dog</p>
//         </div>

//         {/* Cat Card */}
//         <div
//           className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.cat} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
//           onClick={() =>
//             setSelectedPet({
//               name: "Cat",
//               type: "cat",
//               food: "Cat food, fish",
//               habitat: "Home, garden",
//               exercise: "Climbing, playing",
//               grooming: "Brushing, nail trimming",
//               health: "Vaccinations, vet checkups",
//               behavior: "Independent, affectionate",
//             })
//           }
//         >
//           <p className="text-xl font-bold text-gray-800">Cat</p>
//         </div>

//         {/* Bird Card */}
//         <div
//           className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.bird} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
//           onClick={() =>
//             setSelectedPet({
//               name: "Bird",
//               type: "bird",
//               food: "Seeds, fruits",
//               habitat: "Cage, aviary",
//               exercise: "Flying, perching",
//               grooming: "Feather cleaning",
//               health: "Regular checkups",
//               behavior: "Social, vocal",
//             })
//           }
//         >
//           <p className="text-xl font-bold text-gray-800">Bird</p>
//         </div>

//         {/* Rabbit Card */}
//         <div
//           className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.rabbit} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
//           onClick={() =>
//             setSelectedPet({
//               name: "Rabbit",
//               type: "rabbit",
//               food: "Vegetables, hay",
//               habitat: "Hutch, indoor area",
//               exercise: "Hopping, playtime",
//               grooming: "Brushing, nail trimming",
//               health: "Vaccinations, vet visits",
//               behavior: "Gentle, social",
//             })
//           }
//         >
//           <p className="text-xl font-bold text-gray-800">Rabbit</p>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedPet && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
//               onClick={() => setSelectedPet(null)}
//             >
//               ×
//             </button>
//             <h2 className="text-2xl font-bold mb-4">{selectedPet.name}</h2>
//             <p>
//               <span className="font-semibold">Food:</span> {selectedPet.food}
//             </p>
//             <p>
//               <span className="font-semibold">Habitat:</span> {selectedPet.habitat}
//             </p>
//             <p>
//               <span className="font-semibold">Exercise:</span> {selectedPet.exercise}
//             </p>
//             <p>
//               <span className="font-semibold">Grooming:</span> {selectedPet.grooming}
//             </p>
//             <p>
//               <span className="font-semibold">Health:</span> {selectedPet.health}
//             </p>
//             <p>
//               <span className="font-semibold">Behavior:</span> {selectedPet.behavior}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from "react";

const pets = [
  {
    name: "Dog",
    color: "bg-yellow-200",
    emoji: "🐶",
    food: "Dog food, meat",
    habitat: "Home, backyard",
    exercise: "Daily walks, playtime",
    grooming: "Brushing, baths",
    health: "Vaccinations, vet checkups",
    behavior: "Friendly, loyal",
  },
  {
    name: "Cat",
    color: "bg-pink-200",
    emoji: "🐱",
    food: "Cat food, fish",
    habitat: "Home, garden",
    exercise: "Climbing, playing",
    grooming: "Brushing, nail trimming",
    health: "Vaccinations, vet checkups",
    behavior: "Independent, affectionate",
  },
  {
    name: "Bird",
    color: "bg-blue-200",
    emoji: "🐦",
    food: "Seeds, fruits",
    habitat: "Cage, aviary",
    exercise: "Flying, perching",
    grooming: "Feather cleaning",
    health: "Regular checkups",
    behavior: "Social, vocal",
  },
  {
    name: "Rabbit",
    color: "bg-green-200",
    emoji: "🐰",
    food: "Vegetables, hay",
    habitat: "Hutch, indoor area",
    exercise: "Hopping, playtime",
    grooming: "Brushing, nail trimming",
    health: "Vaccinations, vet visits",
    behavior: "Gentle, social",
  },
];

const Gallery = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 py-12 pb-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🐾 PetWorld Guide
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pets.map((pet, index) => (
          <div
            key={index}
            onClick={() => setSelectedPet(pet)}
            className={`${pet.color} rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
          >
            <div className="text-5xl mb-3">{pet.emoji}</div>
            <h2 className="text-xl font-bold text-gray-800">{pet.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPet && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative animate-scaleIn">
            {/* Close */}
            <button
              onClick={() => setSelectedPet(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
            >
              ×
            </button>

            <div className="text-center mb-4">
              <div className="text-5xl">{selectedPet.emoji}</div>
              <h2 className="text-2xl font-bold mt-2">
                {selectedPet.name} Care Guide
              </h2>
            </div>

            <div className="space-y-2 text-gray-700">
              <p><b>🍖 Food:</b> {selectedPet.food}</p>
              <p><b>🏡 Habitat:</b> {selectedPet.habitat}</p>
              <p><b>🏃 Exercise:</b> {selectedPet.exercise}</p>
              <p><b>🛁 Grooming:</b> {selectedPet.grooming}</p>
              <p><b>💊 Health:</b> {selectedPet.health}</p>
              <p><b>❤️ Behavior:</b> {selectedPet.behavior}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;