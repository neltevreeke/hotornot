import React, { useEffect } from 'react'
import styles from './HighScoresView.scss'
import Page from '../../../../components/Page/Page'
import { useDispatch } from 'react-redux'
import { setUpSockets } from '../../../../actions/sockets'

const HighScoresView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUpSockets())
  }, [])

  return (
    <Page>
      <div className={styles.component}>
        highscores page.
      </div>
    </Page>
  )
}

export default HighScoresView
