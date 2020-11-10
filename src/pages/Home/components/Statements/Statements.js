import React , { useState, useEffect } from 'react'
import styles from './Statements.scss'
import Statement from '../Statement/Statement'
import request from 'utils/request'

const statements = [{
  label: 'Statement 1'
}, {
  label: 'Statement 2'
}, {
  label: 'Statement 3'
}, {
  label: 'Statement 4'
}, {
  label: 'Statement 5'
}, {
  label: 'Statement 6'
}, {
  label: 'Statement 7'
}, {
  label: 'Statement 8'
}, {
  label: 'Statement 9'
}, {
  label: 'Statement 10'
}, {
  label: 'Statement 11'
}, {
  label: 'Statement 12'
}, {
  label: 'Statement 13'
}, {
  label: 'Statement 14'
}, {
  label: 'Statement 15'
}, {
  label: 'Statement 16'
}, {
  label: 'Statement 17'
}, {
  label: 'Statement 18'
}, {
  label: 'Statement 19'
}, {
  label: 'Statement 20'
}, {
  label: 'Statement 21'
}, {
  label: 'Statement 22'
}, {
  label: 'Statement 23'
}]


// gets 5 random statements from the statements array
const fillRandomStatements = (arr) => {
  const n = 5 - arr.length

  for(let i = 0; i < n; i++) {
    const randomElement = statements[Math.floor(Math.random() * statements.length)]

    // if array already includes the randomElement, i will be decreased to increase the amount of loops
    if (!arr.includes(randomElement)) {
      arr.push(randomElement)
    } else {
      i--
    }
  }

  return arr
}


const Statements = () => {
  let tmpArr = []
  const [randomStatements, setRandomStatements] = useState([])

  useEffect(() => {
    // to neatly fill array on first render
    setRandomStatements(fillRandomStatements(tmpArr))
  }, [])

  const handleStatementOnClick = (statement) => () => {
    // create new variable to dump in new arrays
    let tmpArr

    // filter all other statements out of array but remember original statement
    tmpArr = randomStatements.filter(element => element.label === statement.label)

    // fill array with new statements
    tmpArr = fillRandomStatements(tmpArr)

    // set local state to new array to get rerender
    setRandomStatements(tmpArr)

    // send chosen statement to backend
    request('statement', {
      method: 'POST',
      body: {
        statement
      }
    })
  }

  return (
    <div className={styles.component}>
      {randomStatements && randomStatements.map((statement, index) => {
        return (
          <Statement
            label={statement.label}
            key={index}
            onClick={handleStatementOnClick(statement)}
          />
        )
      })}
    </div>
  )
}

export default Statements
