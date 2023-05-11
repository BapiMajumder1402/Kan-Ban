import React from 'react'
import nav from './Nav.module.css'

function Nav() {
  return (
    <div className={nav.main}>
      <div> KAN-BAN</div>
      <div className={nav.right}>
        
        <p>Ankur</p>
        <p>Aman</p>
        <p>Asmita</p>
        <p>Bapi</p>
      
      </div>
    </div>
  )
}

export default Nav
