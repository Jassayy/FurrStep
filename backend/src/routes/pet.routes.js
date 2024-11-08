import { Router } from "express";
import {
     createPet,
     getAllPets,
     getPet,
} from "../controllers/pet.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create-pet").post(authenticate, createPet); //! http://localhost:3000/api/v1/pets/create-pet
router.route("/get-all-pets").get(authenticate, getAllPets); //! http://localhost:3000/api/v1/pets/get-all-pets
router.route("/:petId").get(authenticate, getPet); //! http://localhost:3000/api/v1/pets/:petId

export default router;
