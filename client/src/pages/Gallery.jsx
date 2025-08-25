import React, { useState } from "react";

const colors = {
  dog: "bg-yellow-300",
  cat: "bg-pink-300",
  bird: "bg-blue-300",
  rabbit: "bg-green-300",
};

const Gallery = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <div className=" bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        PetWorld Guide
      </h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Dog Card */}
        <div
          className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.dog} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
          onClick={() =>
            setSelectedPet({
              name: "Dog",
              type: "dog",
              food: "Dog food, meat",
              habitat: "Home, backyard",
              exercise: "Daily walks, playtime",
              grooming: "Brushing, baths",
              health: "Vaccinations, vet checkups",
              behavior: "Friendly, loyal",
            })
          }
        >
          <p className="text-xl font-bold text-gray-800">Dog</p>
        </div>

        {/* Cat Card */}
        <div
          className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.cat} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
          onClick={() =>
            setSelectedPet({
              name: "Cat",
              type: "cat",
              food: "Cat food, fish",
              habitat: "Home, garden",
              exercise: "Climbing, playing",
              grooming: "Brushing, nail trimming",
              health: "Vaccinations, vet checkups",
              behavior: "Independent, affectionate",
            })
          }
        >
          <p className="text-xl font-bold text-gray-800">Cat</p>
        </div>

        {/* Bird Card */}
        <div
          className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.bird} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
          onClick={() =>
            setSelectedPet({
              name: "Bird",
              type: "bird",
              food: "Seeds, fruits",
              habitat: "Cage, aviary",
              exercise: "Flying, perching",
              grooming: "Feather cleaning",
              health: "Regular checkups",
              behavior: "Social, vocal",
            })
          }
        >
          <p className="text-xl font-bold text-gray-800">Bird</p>
        </div>

        {/* Rabbit Card */}
        <div
          className={`flex items-center justify-center h-40 rounded-xl shadow-lg ${colors.rabbit} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
          onClick={() =>
            setSelectedPet({
              name: "Rabbit",
              type: "rabbit",
              food: "Vegetables, hay",
              habitat: "Hutch, indoor area",
              exercise: "Hopping, playtime",
              grooming: "Brushing, nail trimming",
              health: "Vaccinations, vet visits",
              behavior: "Gentle, social",
            })
          }
        >
          <p className="text-xl font-bold text-gray-800">Rabbit</p>
        </div>
      </div>

      {/* Modal */}
      {selectedPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
              onClick={() => setSelectedPet(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPet.name}</h2>
            <p>
              <span className="font-semibold">Food:</span> {selectedPet.food}
            </p>
            <p>
              <span className="font-semibold">Habitat:</span> {selectedPet.habitat}
            </p>
            <p>
              <span className="font-semibold">Exercise:</span> {selectedPet.exercise}
            </p>
            <p>
              <span className="font-semibold">Grooming:</span> {selectedPet.grooming}
            </p>
            <p>
              <span className="font-semibold">Health:</span> {selectedPet.health}
            </p>
            <p>
              <span className="font-semibold">Behavior:</span> {selectedPet.behavior}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
