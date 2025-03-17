import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Menu from '../../Menu/Menu'
import Food from '../../Food/FOod'
import Footer from '../../Footer/Footer'
const Home = () => {
  return (
    <div>
        <Header />
        <Menu/>
        <Food/>
        <Footer/>
    </div>
  )
}

export default Home