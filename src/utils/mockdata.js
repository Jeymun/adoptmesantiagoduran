import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export const generateMockUsers = (num) => {
  return Array.from({ length: num }).map(() => {
    const password = "coder123";  
    const hashedPassword = bcrypt.hashSync(password, 10);  

    const role = Math.random() > 0.5 ? 'admin' : 'user';  

    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 100 }),
      role: role, 
      pets: []
    };
  });
};

export const generateMockPets = (num) => {
  return Array.from({ length: num }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    type: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
  }));
};
