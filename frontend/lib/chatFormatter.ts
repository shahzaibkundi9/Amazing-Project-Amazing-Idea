// Roman Urdu: Message ko frontend-friendly format me convert karta hai

export const formatMessage = (msg: any) => {
  return {
    jid: msg.jid,
    message: msg.message,
    type: msg.type,
    sender: msg.sender,
    timestamp: msg.timestamp || Date.now(),
  };
};
