import { prisma } from "../../prisma/client";

export const AIProviderRepository = {
  findAll: () => prisma.aIProvider.findMany({ orderBy: { priority: "asc" } }),

  findById: (id: string) =>
    prisma.aIProvider.findUnique({ where: { id } }),

  create: (data: any) =>
    prisma.aIProvider.create({ data }),

  update: (id: string, data: any) =>
    prisma.aIProvider.update({ where: { id }, data }),

  delete: (id: string) =>
    prisma.aIProvider.delete({ where: { id } }),
};
