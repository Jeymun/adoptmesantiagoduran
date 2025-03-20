// src/utils/mockdata.js
import { faker } from '@faker-js/faker';

export const generateMockPets = () => {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),  // Generar UUID correctamente
    name: faker.name.firstName(),
    type: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),  // Corregido a faker.number.int()
  }));
};
