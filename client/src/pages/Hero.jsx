import React from "react";
import hero from "../assets/pexels-chevanon-1108099.png";
import Card from "./Card";
const Hero = () => {
  return (
   <>
    <div
      className="flex items-center justify-center text-center bg-cover bg-center h-[80vh] w-[80vw] mx-auto rounded-xl mt-5"
      style={{ backgroundImage: `url(${hero})` }}
    >
 <h1 className="text-4xl md:text-3xl font-extrabold text-amber-100 drop-shadow-lg  px-6 py-4 rounded-2xl inline-block  mt-80 ">
  🐶 A dog is the only thing on earth that loves you more than he loves himself. 💛
</h1>

    </div>
    <Card />
   </>
  );
};

export default Hero;
