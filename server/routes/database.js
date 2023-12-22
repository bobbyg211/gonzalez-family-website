import { Router } from "express";
import { getAccount } from "../controllers/database.js";
import { checkJwt } from "../auth/check-jwt.js";

const router = Router();

router.get("/account", checkJwt, getAccount);

export default router;
