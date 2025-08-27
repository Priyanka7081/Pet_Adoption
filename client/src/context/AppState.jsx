// import React, { useState, useEffect } from "react";
// import AppContext from "./AppContext";
// import axios from "axios";

// const AppState = ({ children }) => {
//   const url = "http://localhost:4000/api";

//   // 🐶 Pets state
//   const [animal, setAnimal] = useState([]);

//   // 👤 Auth state
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   // 👉 Fetch Pets from API
//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const { data } = await axios.get(`${url}/pets/all`, {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         });

//         console.log("API Response:", data);

//         if (data.pets) {
//           setAnimal(data.pets);
//         } else {
//           setAnimal(data);
//         }
//       } catch (error) {
//         console.error("Error fetching pets:", error);
//       }
//     };

//     fetchPets();
//   }, []);

//   // 👉 Save token in localStorage
//   useEffect(() => {
//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//     }
//   }, [token]);

//   // 👉 Register user
//   const registerUser = async (formData) => {
//     try {
//       const res = await axios.post(`${url}/user/register`, formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       if (res.data.token) {
//         setToken(res.data.token);
//         setUser(res.data.user);
//       }

//       return res.data;
//     } catch (error) {
//       console.error("❌ Register Error:", error.response?.data || error.message);
//       throw error.response?.data || { message: "Something went wrong" };
//     }
//   };

//   // 👉 Login user (✅ added in context)
//   const loginUser = async (formData) => {
//     try {
//       const res = await axios.post(`${url}/user/login`, formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       if (res.data.token) {
//         setToken(res.data.token);
//         setUser(res.data.user);
//       }

//       return res.data;
//     } catch (error) {
//       console.error("❌ Login Error:", error.response?.data || error.message);
//       throw error.response?.data || { message: "Something went wrong" };
//     }
//   };

//   // 👉 Logout user
//   const logoutUser = () => {
//     setToken("");
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         // 🐶 Pets
//         animal,
//         setAnimal,

//         // 👤 Auth
//         user,
//         token,
//         registerUser,
//         loginUser,  // ✅ Exposed login function here
//         logoutUser,
//       }}
//     >
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

  // 🐶 Pets state
  const [animal, setAnimal] = useState([]);

  // 👤 Auth state
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // 🛒 Cart state
  const [cart, setCart] = useState([]);

  // 👉 Fetch Pets from API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await axios.get(`${url}/pets/all`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        console.log("API Response:", data);

        if (data.pets) {
          setAnimal(data.pets);
        } else {
          setAnimal(data);
        }
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  // 👉 Save token in localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // 👉 Register user
  const registerUser = async (formData) => {
    try {
      const res = await axios.post(`${url}/user/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.token) {
        setToken(res.data.token);
        setUser(res.data.user);
      }

      return res.data;
    } catch (error) {
      console.error("❌ Register Error:", error.response?.data || error.message);
      throw error.response?.data || { message: "Something went wrong" };
    }
  };

  // 👉 Login user
  const loginUser = async (formData) => {
    try {
      const res = await axios.post(`${url}/user/login`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.token) {
        setToken(res.data.token);
        setUser(res.data.user);
      }

      return res.data;
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error.message);
      throw error.response?.data || { message: "Something went wrong" };
    }
  };

  // 👉 Logout user
  const logoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  // 🛒 Cart functions
  const addToCart = (pet) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item._id === pet._id);
      if (exists) return prevCart; // avoid duplicates
      return [...prevCart, pet];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        // 🐶 Pets
        animal,
        setAnimal,

        // 👤 Auth
        user,
        token,
        registerUser,
        loginUser,
        logoutUser,

        // 🛒 Cart
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
