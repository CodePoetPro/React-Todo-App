import React from 'react'
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <header>
      <h4>React TodoList</h4>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>
    </header>
  )
}
