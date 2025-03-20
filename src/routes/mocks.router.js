import express from 'express';
import { generateMockPets, generateMockUsers } from '../utils/mockdata.js';

const router = express.Router();

// Ruta para generar mascotas ficticias
router.get('/mockingpets', (req, res) => {
  const mockPets = generateMockPets();
  res.json(mockPets);
});

// Ruta para generar usuarios ficticios con contraseñas encriptadas
router.get('/mockingusers', (req, res) => {
  const numUsers = 10;  // Puedes cambiar el número de usuarios que quieres generar
  const mockUsers = generateMockUsers(numUsers);
  res.json(mockUsers);
});

export default router;
