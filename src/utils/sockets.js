import openSocket from 'socket.io-client'

let isInitialized = false
let socket = null

export const initSockets = () => new Promise(resolve => {
  // if socket is already initialized it will return so it wont open another connection
  if (isInitialized) {
    return
  }

  // opens the socket and connects to the socket port of the server
  socket = openSocket('ws://localhost:4000')

  // when a connection has been made isInitialized will be set to true and resolve this promise with the socket
  socket.on('connect', () => {
    isInitialized = true
    resolve(socket)
  })
})
