// Roman Urdu Comment: Yeh business logic handle karta hai (register, login, profile)

import { AuthRepository } from "./auth.repository";
import { hashPassword, comparePassword } from "../../utils/password";
import { generateToken } from "../../utils/jwt";

export const AuthService = {
  register: async (name: string, email: string, password: string) => {
    const existing = await AuthRepository.findByEmail(email);
    if (existing) throw new Error("Email already registered");

    const hashed = await hashPassword(password);

    const user = await AuthRepository.createUser({
      name,
      email,
      password: hashed,
    });

    const token = generateToken({ id: user.id });

    return { user, token };
  },

  login: async (email: string, password: string) => {
    const user = await AuthRepository.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await comparePassword(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = generateToken({ id: user.id });

    return { user, token };
  },

  me: async (userId: string) => {
    const user = await AuthRepository.findById(userId);
    if (!user) throw new Error("User not found");
    return user;
  },
};
