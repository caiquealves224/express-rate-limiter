import { createClient } from 'redis';

let redisClient;

(async () => {
    if(!redisClient) {
        redisClient = createClient({
            url: ''
        });
    }

    await redisClient.connect();
})()

export default redisClient;