import { Router } from "express";
import { generateMockUsers } from "../utils/mocking.js";
import bcrypt from "bcrypt";
import UserModel from "../dao/models/user.model.js"; // Ajusta la ruta según tu estructura
import PetModel from "../dao/models/pet.model.js";   // Ajusta la ruta según tu estructura

const router = Router();

// Endpoint migrado de mockingpets
router.get("/mockingpets", async (req, res) => {
    try {
        const mockPets = [
            { name: "Firulais", species: "dog" },
            { name: "Michi", species: "cat" },
        ];
        res.json({ status: "success", payload: mockPets });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Endpoint para generar 50 usuarios mockeados
router.get("/mockingusers", async (req, res) => {
    try {
        const users = generateMockUsers(50);
        res.json({ status: "success", payload: users });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Endpoint para generar e insertar usuarios y mascotas en la base de datos
router.post("/generateData", async (req, res) => {
    try {
        const { users, pets } = req.body;

        if (!users || !pets) {
            return res.status(400).json({ status: "error", message: "Debe enviar los parámetros users y pets" });
        }

        // Generar usuarios mockeados
        const userData = generateMockUsers(users);

        // Insertar usuarios en la base de datos
        const insertedUsers = await UserModel.insertMany(userData);

        // Generar mascotas ficticias
        const petData = Array.from({ length: pets }).map(() => ({
            name: `Pet-${Math.random().toString(36).substring(7)}`,
            species: Math.random() > 0.5 ? "dog" : "cat",
        }));

        // Insertar mascotas en la base de datos
        const insertedPets = await PetModel.insertMany(petData);

        res.json({ status: "success", message: "Datos generados con éxito", users: insertedUsers, pets: insertedPets });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default router;
