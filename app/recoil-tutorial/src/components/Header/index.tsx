import React from 'react'
import { Link } from 'react-router-dom'
import { pageConfig } from '../../pages/pageConfig'
import { Navigation } from '../Navigation'

export const Header: React.FC = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to='/'>
            LOGO
          </Link>
        </h1>

        <div>
          <Navigation items={pageConfig} />
        </div>
      </header>
    </div>
  )
}