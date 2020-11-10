import React from 'react'
import styles from './Statement.scss'

const Statement = ({
  label,
  onClick
}) => {
  return (
    <div
      className={styles.component}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default Statement
