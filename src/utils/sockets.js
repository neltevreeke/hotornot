import openSocket from 'socket.io-client'

let isInitialized = false
let socket = null

export const initSockets = () => new Promise(resolve => {
  if (isInitialized) {
    return
  }

  socket = openSocket('ws://localhost:4000')

  socket.on('connect', () => {
    console.log('connected')

    isInitialized = true
    resolve(socket)
  })
})

export const sendEvent = ({ type, data }) => {
  socket.emit('event', {
    type,
    data
  })
}
