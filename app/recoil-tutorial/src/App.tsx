import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Header } from './components/Header'
import { Routes } from './pages/Routes'

export default function App() {
  return (
    <Router>
      <RecoilRoot>
        <Header />

        <Switch>
          <Routes />
        </Switch>
      </RecoilRoot>
    </Router>
  )
}
