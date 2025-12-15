import { TemplateRepository } from "./template.repository";

export const TemplateService = {
  list: async () => TemplateRepository.findAll(),

  get: async (id: string) => TemplateRepository.findById(id),

  create: async (data: any) => TemplateRepository.create(data),

  update: async (id: string, data: any) =>
    TemplateRepository.update(id, data),

  remove: async (id: string) => TemplateRepository.delete(id),
};
