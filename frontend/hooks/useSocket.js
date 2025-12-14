// Roman Urdu: Real-time socket admin panel me connect karta hai

"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const s = io(process.env.NEXT_PUBLIC_BACKEND_SOCKET_URL!);
    setSocket(s);
    return () => s.disconnect();
  }, []);

  return socket;
};
