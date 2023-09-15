import express from "express";
import {
  getAllLawyers,
  getLawyerByCity,
  ApplayLawyer,
  getLawyerById,
  getUserById,
  getAllLawyersInfo,
} from "../controllers/lawyers.controller.js";
const router = express.Router();

router.get("/all", getAllLawyers);
router.get("/:id", getLawyerByCity);
router.post("/apply", ApplayLawyer);
router.post("/lawyer", getLawyerById);
router.get("/user/:id", getUserById);
router.get("/info/:id", getAllLawyersInfo);

export default router;
