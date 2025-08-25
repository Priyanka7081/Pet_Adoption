
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { Link,useParams } from 'react-router-dom';




const SearchBar = () => {
 const { animal } = useContext(AppContext);
const [searchPets, setSearchPets] = useState([]);

const { term } = useParams();   // ❌ you wrote `const [term]` (array destructuring) but useParams() returns an object, not an array

useEffect(() => {
    if (term && animal.length > 0) {
        setSearchPets(
            animal.filter((data) =>
                data?.name?.toLowerCase().includes(term.toLowerCase())
            )
        );
    }
}, [term, animal]);

  return (
    <div className='text-center font-bold'>
      {/* <h1>Related Products</h1> */}
       <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-auto">
      {searchPets?.length > 0 ? (
        searchPets?.map((item) => (
          <div
            key={item._id}
            className="w-[300px] h-[460px] border border-gray-300 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 mx-auto"
          >
            {/* Main Image */}
            <Link to={`/pet/${item._id}`} className="w-full h-[220px] flex items-center justify-center border-b border-gray-300 bg-gray-50">
              <img
                src={`http://localhost:4000/${item.image.replace(/\\/g, "/")}`} 
                alt={item.name}
                className="h-full object-contain"
              />
            </Link>

            {/* Card Content */}
            <div className="p-4 text-center flex flex-col justify-between h-[220px]">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Age: {item.age} | Breed: {item.breed} | Color: {item.color}
                </p>
              </div>

              {/* Additional Images Preview */}
              {item.additionalImages?.length > 0 && (
                <div className="flex gap-2 mt-2 justify-center">
                  {item.additionalImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={`http://localhost:4000/${img.replace(/\\/g, "/")}`}
                      alt="additional"
                      className="w-10 h-10 rounded-md object-cover border"
                    />
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="mt-4 flex justify-between gap-3 flex-wrap sm:flex-nowrap">
                <button className="flex-1 border border-green-500 text-green-600 rounded-lg py-2 hover:bg-green-500 transition hover:text-amber-50">
                  Adopt Me! 🛒
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No pets available
        </p>
      )}
    </div>
    </div>
  )
}

export default SearchBar
