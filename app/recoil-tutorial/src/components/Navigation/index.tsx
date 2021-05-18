import React from 'react'
import { Link } from 'react-router-dom'
import { PageData } from '../../pages/pageConfig'

interface Props {
  items: ReadonlyArray<PageData>
}

export const Navigation: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <nav>
        <ul>
          {items.map(({ id, path, label }) => (
            <li key={id}>
              <Link to={path}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}