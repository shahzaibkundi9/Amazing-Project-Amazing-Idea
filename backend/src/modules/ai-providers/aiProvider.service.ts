import { AIProviderRepository } from "./aiProvider.repository";

export const AIProviderService = {
  getAll: async () => AIProviderRepository.findAll(),

  updateProvider: async (id: string, data: any) => {
    return AIProviderRepository.update(id, data);
  },
};
