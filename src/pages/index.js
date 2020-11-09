import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../utils/configureStore'
import PageSpinner from 'components/PageSpinner/PageSpinner'

import Home from './Home'
import HighScores from './HighScores'

export default (
<ConnectedRouter history={history}>
  <Suspense
    fallback={(
      <PageSpinner />
    )}
  >
    <Switch>
      {Home}
      {HighScores}
    </Switch>
  </Suspense>
</ConnectedRouter>
)
