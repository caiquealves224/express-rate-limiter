import redisClient from "../redis.js";

export default (rule) => {
    return async (req, res, next) => {
        const ipAddress = request.ip;
        const key = `rate-limit:${ipAddress}`;

        const requets = await redisClient.incr(key);

        if(requets === 1) {
            await redisClient.expire(key, rule.rate_limit.time)
        }

        if(requets > rule.rate_limit.limit) {
            return res.status(429).send({ message: "to much resquets"});
        }

        next()
    }
}