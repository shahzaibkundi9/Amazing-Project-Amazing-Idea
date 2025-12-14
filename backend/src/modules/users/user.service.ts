// Roman Urdu Comment: Users module ka business logic yahan hota hai

import { UserRepository } from "./user.repository";

export const UserService = {
  getProfile: async (userId: string) => {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error("User not found");
    return user;
  },

  updateProfile: async (userId: string, data: any) => {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error("User not found");

    return UserRepository.updateUser(userId, data);
  },

  getAllUsers: async () => {
    return UserRepository.findAll();
  },
};
