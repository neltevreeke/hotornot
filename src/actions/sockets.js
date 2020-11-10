import { initSockets } from 'utils/sockets.js'
import * as EventTypes from 'constants/EventTypes'

const setupSocketUpdates = (socket, setHighScore) => {
  socket.on('event-receive', (event) => {
    // deconstructing the event data received from server
    const {
      type,
      data
    } = JSON.parse(event)

    // with multiple future events a simple if or switch statement will do
    if (type === EventTypes.UPDATE_STATEMENT) {
      setHighScore(data)
    }
  })
}

export const setUpSockets = (setHighScore) => async () => {
  try {
    // gets me access to the socket due to a promise that resolves with the socket
    const socket = await initSockets()

    // handler for receiving events from server
    setupSocketUpdates(socket, setHighScore)

  } catch (e) {
    console.error(e)
  }
}
