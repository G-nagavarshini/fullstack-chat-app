// middleware/rateLimiter.js
import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import Redis from "ioredis";

const redisClient = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

export const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.call(...args),
  }),
  windowMs: 60 * 1000, // 1 minute
  max: 5,              // 5 requests per minute per IP
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
