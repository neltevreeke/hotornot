import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import Button from 'components/Button/Button'
import { history } from 'utils/configureStore'

const Header = () => {
  const handleHomeBtnClick = () => {
    history.push(Routes.HOME)
  }

  const handleHighScoresBtnClick = () => {
    history.push(Routes.HIGHSCORES)
  }

  return (
    <div className={styles.component}>
      <Link
        className={styles.logo}
        to={Routes.HOME}
      >
        HotOrNot
      </Link>
      <div className={styles.controls}>
        <Button
          variant={Button.VARIANT_DEFAULT}
          className={styles.controlSpacing}
          onClick={handleHomeBtnClick}
        >
          Home
        </Button>
        <Button
          variant={Button.VARIANT_DEFAULT}
          onClick={handleHighScoresBtnClick}
        >
          High scores
        </Button>
      </div>
    </div>
  )
}

export default Header
