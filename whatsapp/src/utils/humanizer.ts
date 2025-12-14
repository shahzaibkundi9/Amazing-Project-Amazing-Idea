// Roman Urdu Comment: Human-like typing, slow responses, logs

export const humanTyping = async (sock: any, jid: string) => {
  await sock.sendPresenceUpdate("composing", jid);
  await delay(1200 + Math.random() * 1500);
  await sock.sendPresenceUpdate("paused", jid);
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const logger = (msg: string) => {
  console.log(`[WHATSAPP BOT] ${msg}`);
};
