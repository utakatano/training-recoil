import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { pageConfig } from './pageConfig'

export const PageRoutes: React.FC = () => {
  return (
    <Switch>
      {pageConfig.map(({id, path, component}) => (
        <Route key={id} path={path} component={component} exact />
      ))}
    </Switch>
  )
}