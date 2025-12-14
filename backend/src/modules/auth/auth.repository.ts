// Roman Urdu Comment: Database interaction layer for Auth module

import { prisma } from "../../prisma/client";

export const AuthRepository = {
  findByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  createUser: async (data: any) => {
    return prisma.user.create({ data });
  },

  findById: async (id: string) => {
    return prisma.user.findUnique({ where: { id } });
  },
};
