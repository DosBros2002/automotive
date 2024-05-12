import path from "path";
import winston from "winston";
import "winston-daily-rotate-file";
import { fileURLToPath } from "url";
import { redactMessage, redactFormat, debugTraverse } from "./parsers.js";

// Deriving __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.join(__dirname, "..", "..", "logs");

const {
  NODE_ENV,
  DEBUG_LOGGING = true,
  DEBUG_CONSOLE = false,
  CONSOLE_JSON = false,
} = process.env;

const useConsoleJson =
  (typeof CONSOLE_JSON === "string" && CONSOLE_JSON.toLowerCase() === "true") ||
  CONSOLE_JSON === true;

const useDebugConsole =
  (typeof DEBUG_CONSOLE === "string" &&
    DEBUG_CONSOLE.toLowerCase() === "true") ||
  DEBUG_CONSOLE === true;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  activity: 6,
  silly: 7,
};

winston.addColors({
  info: "green",
  warn: "italic yellow",
  error: "red",
  debug: "blue",
});

const level = () => {
  const env = NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const fileFormat = winston.format.combine(
  redactFormat(),
  winston.format.timestamp({ format: () => new Date().toISOString() }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
);

const transports = [
  new winston.transports.DailyRotateFile({
    level: "error",
    filename: `${logDir}/error-%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    format: fileFormat,
  }),
];

if (DEBUG_LOGGING) {
  transports.push(
    new winston.transports.DailyRotateFile({
      level: "debug",
      filename: `${logDir}/debug-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      format: winston.format.combine(fileFormat, debugTraverse),
    }),
  );
}

const consoleFormat = winston.format.combine(
  redactFormat(),
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf((info) => {
    const message = `${info.timestamp} ${info.level}: ${redactMessage(info.message)}`;
    return message;
  }),
);

if (useDebugConsole) {
  transports.push(
    new winston.transports.Console({
      level: "debug",
      format: useConsoleJson
        ? winston.format.combine(
            fileFormat,
            debugTraverse,
            winston.format.json(),
          )
        : winston.format.combine(fileFormat, debugTraverse),
    }),
  );
} else if (useConsoleJson) {
  transports.push(
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(fileFormat, winston.format.json()),
    }),
  );
} else {
  transports.push(
    new winston.transports.Console({
      level: "info",
      format: consoleFormat,
    }),
  );
}

export const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});
