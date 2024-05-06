import React from 'react'
import {HeadLogo,Nav} from "../index"
import BACK from "../Back.jpg"


function Header() {
  return (
    <header className='flex flex-wrap justify-between items-center sticky md:fixed w-full z-30 md:bg-cover bg-no-repeat'
    style={{backgroundImage:`url(${BACK})`}}>
      <HeadLogo/>
      <Nav/>
    </header>
  )
}

export default Header
