// Roman Urdu Comment: Media message se URL ya buffer extract karne ke liye helper

import { downloadMediaMessage } from "@whiskeysockets/baileys";

export const extractMedia = async (msg: any) => {
  return downloadMediaMessage(msg, "buffer", {});
};
