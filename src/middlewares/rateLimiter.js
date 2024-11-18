import redisClient from "../redis";

export const rateLimiter = (rule) => {
    return async (req, res, next) => {
        const ipAddress = request.ip;
        const key = `rate-limit:${ipAddress}`;

        const requets = await redisClient.incr(key);

        if(requets === 1) {
            await redisClient.expire(key, rule.rate_limit.time)
        }

        next()
    }
}