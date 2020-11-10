import React from 'react'
import styles from './HomeView.scss'
import Page from 'components/Page/Page'
import Statements from '../Statements/Statements'

const HomeView = () => {
  return (
    <Page>
      <div className={styles.component}>
        <Statements />
      </div>
    </Page>
  )
}

export default HomeView
