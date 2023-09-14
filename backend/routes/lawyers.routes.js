import express from "express";
import {
  getAllLawyers,
  getLawyerByCity,
  ApplayLawyer,
} from "../controllers/lawyers.controller.js";
const router = express.Router();

router.get("/all", getAllLawyers);
router.get("/:id", getLawyerByCity);
router.post("/apply", ApplayLawyer);

export default router;
