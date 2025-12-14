// Roman Urdu Comment: Users table se related DB operations

import { prisma } from "../../prisma/client";

export const UserRepository = {
  findById: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  updateUser: async (id: string, data: any) => {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  findAll: async () => {
    return prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
};
