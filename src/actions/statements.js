import request from 'utils/request'

export const getInitialStatements = (setHighScore) => async () => {
  try {
    const { data } = await request('statement', {
      method: 'GET'
    })

    setHighScore(data)
  } catch (e) {
    console.error(e)
  }
}
