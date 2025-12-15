export const detectLanguage = (text: string) => {
  if (/[\u0600-\u06FF]/.test(text)) return "urdu";
  if (/[a-zA-Z]/.test(text)) return "english";
  return "unknown";
};
