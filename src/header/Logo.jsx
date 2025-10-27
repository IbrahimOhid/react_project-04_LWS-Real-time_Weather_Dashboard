import React from 'react'
import LogoSvg from '../assets/logo.svg'

const Logo = () => {
  return (
    <div>
      <a href="./index.html">
          <img className="h-9" src={LogoSvg} alt="Weather App" />
        </a>
    </div>
  )
}

export default Logo
