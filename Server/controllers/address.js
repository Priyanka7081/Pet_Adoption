// import { Address } from '../models/Address.js'

// export const addAddress = async (req, res) => {
//   let { fullName, address, city, state, country, pincode, phoneNumber } =
//     req.body;
//   let userId = req.user;
//   let userAddress = await Address.create({
//     userId,
//     fullName,
//     address,
//     city,
//     state,
//     country,
//     pincode,
//     phoneNumber,
//   });
//   res.json({ message: "Address added", userAddress,success:true });
// };


// export const getAddress = async (req,res)=>{
//     let address = await Address.find({userId:req.user}).sort({createdAt:-1})
//     res.json({message:'address', userAddress:address[0]})
// }


import { Address } from '../models/Address.js';

export const addAddress = async (req, res) => {
  try {
    const { fullName, address, city, state, country, pincode, phoneNumber } = req.body;
    const userId = req.user; // Make sure middleware sets req.user correctly

    const userAddress = await Address.create({
      userId,
      fullName,
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
    });

    return res.status(201).json({
      success: true,
      message: "Address added successfully",
      userAddress,
    });
  } catch (error) {
    console.error("Error adding address:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding address",
    });
  }
};

export const getAddress = async (req, res) => {
  try {
    const address = await Address.find({ userId: req.user }).sort({ createdAt: -1 });

    if (!address || address.length === 0) {
      return res.status(404).json({ success: false, message: "No address found" });
    }

    return res.status(200).json({
      success: true,
      message: "Latest address fetched",
      userAddress: address[0], // returning latest address
    });
  } catch (error) {
    console.error("Error fetching address:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching address",
    });
  }
};
