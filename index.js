import express from 'express';
import rateLimiter from './src/middlewares/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 3000

const RATE_LIMIT = {
    rate_limit: {
        limit: 10,
        time: 60,
    }
}

const userController = (req, res) => {
    res.status(200).send({userId: 1})
}

app.use('/users', rateLimiter(RATE_LIMIT), userController)

app.listen(PORT, () => {
    console.log(`Application in runnig on port ${PORT}`)
})