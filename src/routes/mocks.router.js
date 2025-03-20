// src/routes/mocks.router.js
import express from 'express';
import { generateMockPets } from '../utils/mockdata.js';  // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Definir la ruta para generar mascotas ficticias
router.get('/mockingpets', (req, res) => {
  const mockPets = generateMockPets(); // Llama a la función que genera las mascotas
  res.json(mockPets);  // Devuelve los datos como respuesta JSON
});

export default router;
