import React from 'react'
import './sideBar.css'
import {useSelector} from 'react-redux'

export default function SideBar() {
    const {name } =  useSelector( state => state.user.userData)

  return (
    <div className='sideBar'>
        <ul>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Contact</li>
            <li><a href="#"></a>Blog</li>
            <li><a href="#"></a>Hello {name}</li>
            
        </ul>
    </div>
  )
}
