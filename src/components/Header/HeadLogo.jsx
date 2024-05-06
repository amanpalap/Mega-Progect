import React from 'react'
import Logo from "../Body/Images/Logo.png"

function HeadLogo() {
  return (
    <div className='md:ml-8 ml-4 w-32 h-16 flex justify-between items-center'>
        <img src={Logo} alt="" />
      
    </div>
  )
}

export default HeadLogo
