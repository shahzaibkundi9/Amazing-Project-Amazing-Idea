// Roman Urdu Comment: Anti-ban intelligent delay engine

export const smartDelay = async () => {
  const delay = 800 + Math.random() * 1800; 
  return new Promise((res) => setTimeout(res, delay));
};

export const longDelay = async () => {
  const delay = 2000 + Math.random() * 3000;
  return new Promise((res) => setTimeout(res, delay));
};
