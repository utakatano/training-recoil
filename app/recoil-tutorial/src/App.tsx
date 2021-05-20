import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Header } from './components/Header'
import { PageRoutes } from './pages/PageRoutes'

export default function App() {
  return (
    <Router>
      <RecoilRoot>
        <Header />

        <PageRoutes />
      </RecoilRoot>
    </Router>
  )
}
