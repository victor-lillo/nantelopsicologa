import React, { useRef } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

// import logo from '../../public/logo.png';

import Monogram from './Monogram'

function Navbar({ navbarClass }) {
  const navbarRef = useRef(null)
  const router = useRouter()

  const hamburguerHandler = (e) => {
    if (e.target.checked) {
      navbarRef.current.classList.add('navbar-tabs-displayed')
    } else {
      navbarRef.current.classList.remove('navbar-tabs-displayed')
    }
  }

  return (
    <React.Fragment>
      <div className={`navbar ${navbarClass ? navbarClass : ''}`}>
        <div className='navbar-icon'>
          <div>
            <Monogram />
          </div>

          <div className='hamburguer-container'>
            <input className='hamburguer-button' type='checkbox' onChange={hamburguerHandler} />
            <span className='span1'></span>
            <span className='span2'></span>
            <span className='span3'></span>
          </div>
        </div>

        <div ref={navbarRef} className='navbar-tabs'>
          <Link href='/' className={router.pathname == '/' ? 'active' : ''}>
            Inicio
          </Link>

          <Link href='/about' className={router.pathname == '/about' ? 'active' : ''}>
            Sobre mí
          </Link>

          <Link href='/terapia' className={router.pathname == '/terapia' ? 'active' : ''}>
            Terapia
          </Link>

          <Link href='/contacto' className={router.pathname == '/contacto' ? 'active' : ''}>
            Contacto
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
