export const SafetyFilter = {
  clean: (text: string) => {
    return text.replace(/badword/gi, "***"); // Roman Urdu: Aap unlimited rules add kar sakte hain
  },
};
