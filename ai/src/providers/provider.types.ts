export interface AIInput {
  message: string;
  history: any[];
  context: any;
  lang: string;
  metadata: any;
}

export interface AIProvider {
  name: string;
  generate: (input: AIInput) => Promise<string>;
}
