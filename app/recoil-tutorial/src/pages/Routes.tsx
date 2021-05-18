import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { pageConfig } from './pageConfig'

export const Routes: React.FC = () => {
  return (
    <Fragment>
      {pageConfig.map(({id, path, component}) => (
        <Route key={id} path={path} component={component} exact />
      ))}
    </Fragment>
  )
}