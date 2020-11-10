import React from 'react'
import styles from './Statement.scss'

const Statement = ({
  label,
  count = false,
  onClick
}) => {
  return (
    <div
      className={styles.component}
      onClick={onClick}
    >
      <p>{label}</p>
      <p>{count}</p>
    </div>
  )
}

export default Statement
