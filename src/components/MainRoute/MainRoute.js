import React from 'react'
import wrapRoute from 'utils/wrapRoute'
import { useDispatch } from 'react-redux'

const MainRoute = ({
  matchProps,
  component: Component,
}) => {
  const dispatch = useDispatch()

  return (
    <Component {...matchProps} />
  )
}

export default wrapRoute(MainRoute)
