import express from "express";
import { addAddress, getAddress } from '../controllers/address.js'
// import { Authe} from "../Middlewares/auth.js";

const router = express.Router();

// add address
router.post("/add",  addAddress);

// get address
router.get('/get', getAddress)

export default router;