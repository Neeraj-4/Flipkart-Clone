import express  from "express";
import { userSignup } from "../Controller/user-controller.js";
import { productList } from "../Controller/product-controller.js";
const router = express.Router();
router.post('/signup',userSignup);
router.get('/product',productList);
export default router;