const redis = require('redis')

let redisClient;

(async () => {
    if(!redisClient) {
        redisClient = redis.createClient({
            url: ''
        });
    }

    await redisClient.connect();
})()

export default redisClient;