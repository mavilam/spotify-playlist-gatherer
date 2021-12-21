'use strict'
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message,  timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

module.exports = {
  logger: createLogger({
    format: combine(
      colorize(),
      timestamp(),
      myFormat
    ),
    transports: [new transports.Console()]
  })
}