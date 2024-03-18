import pino from 'pino'
import dayjs from 'dayjs'

export const log = pino(
  {
    transport: {
      target: 'pino-pretty',
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
  pino.multistream([
    { stream: process.stdout },
    {
      stream: pino.destination('/var/log/knverse/user-registration/stdout.log'),
    },
  ])
)
