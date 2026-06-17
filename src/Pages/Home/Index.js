import React from 'react'
import Navbar from '../Navbar'
import Dashboard from './Dashboard'
import Ceo from './Ceo'
import Footer from './Footer'
import Updates from './Updates'
import Office from '../Office'
import Mission from './Mission'

export default function Index() {
  return (
    <>
        <Navbar/>
        <div className='w-full justify-center mx-auto overflow-hidden'>
            <Dashboard/>
            <Mission/>
            <Ceo/>
            <Office/>
            <Updates/>
            <Footer/>
        </div>
    </>
    
  )
}

