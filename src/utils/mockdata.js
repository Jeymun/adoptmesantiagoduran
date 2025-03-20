import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export const generateMockPets = () => {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.name.firstName(),
    type: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
  }));
};

export const generateMockUsers = (numUsers) => {
  const users = Array.from({ length: numUsers }).map(() => {
    const password = 'coder123';
    const hashedPassword = bcrypt.hashSync(password, 10);

    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,  // Contraseña encriptada
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.number.int({ min: 18, max: 99 }),
    };
  });

  return users;
};
