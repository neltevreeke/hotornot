import { initSockets } from 'utils/sockets.js'
import * as EventTypes from 'constants/EventTypes'

const setupSocketUpdates = (socket, setHighScore) => {
  socket.on('event-receive', (event) => {
    const {
      type,
      data
    } = JSON.parse(event)

    if (type === EventTypes.UPDATE_STATEMENT) {
      setHighScore(data)
    }
  })
}

export const setUpSockets = (setHighScore) => async () => {
  try {
    const socket = await initSockets()
    setupSocketUpdates(socket, setHighScore)

  } catch (e) {
    console.error(e)
  }
}
