// // import React, { useEffect } from 'react'
// // import AppContext from './AppContext';
// // import axios from 'axios';

// // const AppState = (props) => {
// //     const url = "http://localhost:4000/api";
// //     const [pet,setPet]=useState([]);

// //     useEffect(()=>{
// //         const fetchProduct = async =()=>{
// //           const api = await axios.get(`${url}/pets/all`),{
// //             headers:{
// //               "Content-Type":"Application/json",
// //             },
// //             console.log(api.data.pets);
// //             setPet(api.data.pets)
// //           },

// //         }

// //     },[])
    
// //     const data =10;
// //   return (
// //    <AppContext.Provider value={{
// // pet
// //    }}>
// // {props.children}
// //    </AppContext.Provider>
// //   )
// // }

// // export default AppState;



// import React, { useState, useEffect } from "react";
// import AppContext from "./AppContext";
// import axios from "axios";

// const AppState = ({children}) => {
//   const url = "http://localhost:4000/api";
//   const [pet, setPet] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const { data } = await axios.get(`${url}/pets/all`, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         });

//         console.log(data);
//         setPet(data); // fallback to [] if pets is undefined
//       } catch (error) {
//         console.error("Error fetching pets:", error);
//       }
//     };

//     fetchPets();
//   }, []);

//   return (
//     <AppContext.Provider value={{ pet }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppState;



import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const AppState = ({ children }) => {
  const url = "http://localhost:4000/api";
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await axios.get(`${url}/pets/all`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log("API Response:", data);

        // ✅ If backend returns { pets: [...] }
        if (data.pets) {
          setAnimal(data.pets);
        } else {
          // ✅ If backend returns plain array
          setAnimal(data);
        }
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <AppContext.Provider value={{ animal, setAnimal }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
