// Roman Urdu: Har WhatsApp user ki current state store karta hai (payment pending, ai, verification, onboarding)

const stateStore = new Map<string, string>();

export const setUserState = (jid: string, state: string) => {
  stateStore.set(jid, state);
};

export const getUserState = (jid: string) => {
  return stateStore.get(jid) || "idle";
};

export const clearUserState = (jid: string) => {
  stateStore.delete(jid);
};
