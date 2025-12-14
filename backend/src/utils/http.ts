// Roman Urdu Comment: AI microservice se fast & safe HTTP requests bhejne ke liye wrapper

import axios from "axios";

export const http = axios.create({
  timeout: 15000,
});
