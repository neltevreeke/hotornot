import React, { useState, useEffect } from 'react'
import styles from './HighScoresView.scss'
import Page from '../../../../components/Page/Page'
import { useDispatch } from 'react-redux'
import { setUpSockets } from '../../../../actions/sockets'
import { getInitialStatements } from 'actions/statements'
import Statement from '../../../../components/Statement/Statement'

const HighScoresView = () => {
  const dispatch = useDispatch()
  const [highScore, setHighScore] = useState([])

  useEffect(() => {
    // sets up sockets for receiving updates from server
    dispatch(setUpSockets(setHighScore))

    // retrieves initial highscore statements on first load
    dispatch(getInitialStatements(setHighScore))
  }, [])

  return (
    <Page>
      <div className={styles.component}>
        {highScore && highScore.map((statement, index) => {
          return (
            <Statement
              key={index}
              label={statement.label}
              count={statement.count}
            />
          )
        })}
      </div>
    </Page>
  )
}

export default HighScoresView
