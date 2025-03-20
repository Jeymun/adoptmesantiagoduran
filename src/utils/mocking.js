import bcrypt from "bcrypt";

export function generateMockUsers(count) {
    const users = [];
    const hashedPassword = bcrypt.hashSync("coder123", 10); // Encriptar la contraseña solo una vez

    for (let i = 0; i < count; i++) {
        users.push({
            firstName: `User${i + 1}`,
            lastName: `Test${i + 1}`,
            email: `user${i + 1}@test.com`,
            password: bcrypt.hashSync('coder123', 10), 
            role: Math.random() > 0.5 ? "admin" : "user",
            pets: [],
        });
    }

    return users;
}
