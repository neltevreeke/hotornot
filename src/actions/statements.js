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

export const postStatement = (statement) => async () => {
  try {
    await request('statement', {
      method: 'POST',
      body: {
        statement
      }
    })
  } catch (e) {
    console.error(e)
  }
}
