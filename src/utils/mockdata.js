import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

// Función para generar usuarios falsos
export const generateMockUsers = (num) => {
  return Array.from({ length: num }).map(() => {
    const password = "coder123";  // Contraseña a encriptar
    const hashedPassword = bcrypt.hashSync(password, 10);  // Encriptar la contraseña

    const role = Math.random() > 0.5 ? 'admin' : 'user';  // Asignar un rol aleatorio

    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.number.int({ min: 18, max: 100 }),
      role: role,  // Agregar el campo role
      pets: []
    };
  });
};

// Función para generar mascotas ficticias
export const generateMockPets = () => {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.name.firstName(),
    type: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
  }));
};
