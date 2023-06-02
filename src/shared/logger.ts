import path from 'path';
import winston from 'winston';

/*
   Write all logs with importance level of `error` or less(`warn`) to `error.log`
   Write all logs with importance level of `info` or less(`success) to `combined.log`
*/
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(process.cwd(), './logs/winston/error.log'), level: 'success'
        })
    ],
});

const errorLogger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(process.cwd(), './logs/winston/error.log'), level: 'error'
        })

    ],
});

export { errorLogger, logger };
