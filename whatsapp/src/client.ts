// Roman Urdu: WhatsApp Baileys multi-device client initialization

import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys";
import { saveSession } from "./session/session.store";
import { handleIncomingMessage } from "./handlers/message.handler";
import { handleQrEvent } from "./qr/qr.events";
import { logger } from "./utils/humanizer";

export const initClient = async (sessionPath: string) => {
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
  });

  // QR EVENT
  sock.ev.on("connection.update", (update) => handleQrEvent(update));

  // SAVE SESSION FILES
  sock.ev.on("creds.update", saveCreds);

  // MESSAGE HANDLER
  sock.ev.on("messages.upsert", async (msg) => {
    if (!msg.messages[0].message) return;
    await handleIncomingMessage(sock, msg.messages[0]);
  });

  logger("📲 WhatsApp client initialized successfully");

  return sock;
};
