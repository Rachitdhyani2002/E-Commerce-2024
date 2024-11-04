import rateLimit from 'express-rate-limit'

export const apiLimiter = rateLimit({
    windowMs : 15*60*100,
    max:100,
    message:"Too many requests from this Ip server,Please! try again after 15min"
})