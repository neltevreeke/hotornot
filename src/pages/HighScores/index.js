import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const HighScoresView = lazy(() => import('./components/HighScoresView/HighScoresView'))

export default (
  <MainRoute
    exact
    path={Routes.HIGHSCORES}
    component={HighScoresView}
  />
)
