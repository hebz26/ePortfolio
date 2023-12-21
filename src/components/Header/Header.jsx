import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>

        <img src='./images/logo.png' alt = "logo" width={75}/>
        <div className="flexCenter h-menu">
            <a href=''>home

            </a>
            <a href=''>about
                
            </a>
            
            <a href=''>resume
                
            </a>
            <a href='https://github.com/hebz26' target="_blank" rel="noopener noreferrer">
            <img src='./images/github.png' alt='GitHub' width={35} height={35} className='nav-icon' />
          </a>
          <a href='https://www.linkedin.com/in/heba-sayed6' target="_blank" rel="noopener noreferrer">
            <img src='./images/linkedin.png' alt='LinkedIn' width={35} height={35} className='nav-icon' />
          </a>
          {/*
            <button className='button'>
            <a href=''>Contact
                
            </a>
  </button> */}

            
        </div>
        </div>

    </section>
  )
}

export default Header