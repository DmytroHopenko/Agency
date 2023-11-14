import React from 'react'
import './NavList.scss';

export default function NavList({nav, navOnClick}) {
  return (
    <li className='link_wrap'><a href={nav.link} onClick={() => navOnClick(nav.id)}>{nav.name}</a></li>
  )
}
