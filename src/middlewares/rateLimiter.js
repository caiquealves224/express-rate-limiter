export const rateLimiter = (rule) => {
    return (req, res, next) => {
        const ipAddress = request.ip
        next()
    }
}