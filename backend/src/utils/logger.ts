// Roman Urdu Comment: Production grade logger (Winston)

import winston from "winston";
import "winston-daily-rotate-file";

const transport = new winston.transports.DailyRotateFile({
  dirname: "logs",
  filename: "%DATE%-app.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "10m",
  maxFiles: "14d",
});

const errorTransport = new winston.transports.DailyRotateFile({
  dirname: "logs",
  filename: "%DATE%-error.log",
  level: "error",
  datePattern: "YYYY-MM-DD",
  maxSize: "10m",
  maxFiles: "30d",
});

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`;
    })
  ),
  transports: [new winston.transports.Console(), transport, errorTransport],
});
