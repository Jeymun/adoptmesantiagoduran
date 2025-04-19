import express from 'express';
import { generateMockPets, generateMockUsers } from '../utils/mockdata.js';
import User from './models/User.js';
import Pet from '../models/Pet.js';

const router = express.Router();

router.get('/mockingpets', (req, res) => {
  const mockPets = generateMockPets();
  res.json(mockPets);
});

router.get('/mockingusers', async (req, res) => {
  const numUsers = 50;  
  const mockUsers = await generateMockUsers(numUsers);
  res.json(mockUsers);
});

router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  try {
    const generatedUsers = await generateMockUsers(users);
    await User.insertMany(generatedUsers);

    const generatedPets = await generateMockPets(pets, generatedUsers);
    await Pet.insertMany(generatedPets);

    res.status(201).json({
      message: `${users} usuarios y ${pets} mascotas generados e insertados exitosamente`,
      users: generatedUsers,
      pets: generatedPets,
    });
  } catch (error) {
    console.error('Error al generar datos:', error);
    res.status(500).json({ message: 'Error al generar los datos', error });
  }
});

export default router;
