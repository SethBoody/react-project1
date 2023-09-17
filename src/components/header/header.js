import React from 'react'
import './header.css'
import {useSelector} from 'react-redux';

export default function Header () {
    const {name } =  useSelector( state => state.user.userData)
  return (
    <div className='header'>
        <h1>My project</h1>
        <p>Hello {name}</p>
    </div>
  )
}
