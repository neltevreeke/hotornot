import React from 'react'
import styles from './Page.scss'
import Header from 'components/Header/Header'

const Page = ({
  children
}) => {
  return (
    <>
      <Header />
      <div className={styles.component}>
        {children}
      </div>
    </>
  )
}

export default Page
