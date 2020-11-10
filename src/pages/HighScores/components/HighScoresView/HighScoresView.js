import React, { useState, useEffect } from 'react'
import styles from './HighScoresView.scss'
import Page from '../../../../components/Page/Page'
import { useDispatch } from 'react-redux'
import { setUpSockets } from '../../../../actions/sockets'
import { getInitialStatements } from 'actions/statements'
import Statement from '../../../Home/components/Statement/Statement'

const HighScoresView = () => {
  const dispatch = useDispatch()
  const [highScore, setHighScore] = useState([])

  useEffect(() => {
    dispatch(setUpSockets(setHighScore))
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
            />
          )
        })}
      </div>
    </Page>
  )
}

export default HighScoresView
