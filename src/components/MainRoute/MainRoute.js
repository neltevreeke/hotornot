import React from 'react'
import wrapRoute from 'utils/wrapRoute'
import { useDispatch } from 'react-redux'

const MainRoute = ({
  matchProps,
  component: Component,
}) => {
  return (
    <Component {...matchProps} />
  )
}

export default wrapRoute(MainRoute)
