import { initSockets } from 'utils/sockets.js'

export const setUpSockets = () => async () => {
  try {
    console.log('here 1')
    const socket = await initSockets()
    console.log('here 2')

  } catch (e) {
    console.error(e)
  }
}
