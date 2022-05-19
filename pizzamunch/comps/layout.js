import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function layout({children}) {
  return (
      <div>
    <Navbar/>
       {children}
    <Footer/>
    </div>
  )
}

export default layout