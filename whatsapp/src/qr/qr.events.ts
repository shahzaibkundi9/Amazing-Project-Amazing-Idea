// Roman Urdu Comment: QR generate hotay hi admin ko send karne ka system

import qrcode from "qrcode-terminal";
import { logger } from "../utils/humanizer";

export const handleQrEvent = (update: any) => {
  const { qr, connection } = update;

  if (qr) {
    logger("📡 QR Code Generated — Admin Panel ko send hoga");
    qrcode.generate(qr, { small: true });
  }

  if (connection === "open") logger("✅ WhatsApp Connected");
  if (connection === "close") logger("❌ Connection Closed");
};
