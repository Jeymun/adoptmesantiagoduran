import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export const generateMockUsers = (num) => {
  return Array.from({ length: num }).map(() => {
    const password = 'coder123';
    const hashedPassword = bcrypt.hashSync(password, 10);
    const role = Math.random() > 0.5 ? 'admin' : 'user';

    return {
      email: faker.internet.email(),
      password: hashedPassword,
      role: role
    };
  });
};
