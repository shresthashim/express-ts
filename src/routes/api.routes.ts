import { Router } from "express";
import getSample from "../controllers/sample.controller";

const router = Router();

router.get("/sample", getSample);

export default router;
