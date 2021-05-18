import React from 'react'
import { About } from './About'
import { Home } from './Home'

export interface PageData {
  id: string
  path: string
  label: string
  component: React.FC
}

export const pageConfig: ReadonlyArray<PageData> = [
  {
    id: 'home',
    path: '/',
    label: 'HOME',
    component: Home
  },
  {
    id: 'about',
    path: '/about',
    label: 'ABOUT',
    component: About
  }
]