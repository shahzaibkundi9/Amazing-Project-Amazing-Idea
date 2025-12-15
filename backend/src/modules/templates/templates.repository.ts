import { prisma } from "../../prisma/client";

export const TemplateRepository = {
  findAll: () => prisma.template.findMany({ orderBy: { createdAt: "desc" } }),

  findById: (id: string) =>
    prisma.template.findUnique({ where: { id } }),

  create: (data: any) => prisma.template.create({ data }),

  update: (id: string, data: any) =>
    prisma.template.update({ where: { id }, data }),

  delete: (id: string) =>
    prisma.template.delete({ where: { id } }),
};
