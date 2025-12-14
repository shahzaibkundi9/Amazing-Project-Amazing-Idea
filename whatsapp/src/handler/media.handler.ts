import { syncMessage } from "../sync/sync.events";

export const handleMediaMessage = async (sock: any, msg: any) => {
  const sender = msg.key.remoteJid;

  // Sync media arrival
  await syncMessage(sender, "[Screenshot Uploaded]", "image", "user");
  
  // Rest of media logic continued…
};
