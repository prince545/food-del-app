import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Menu from '../../Menu/Menu'
import Food from '../../Food/Food'
import Footer from '../../Footer/Footer'
import AppDownload from '../../App Download/AppDownload'
const Home = () => {
  return (
    <div>
        <Header />
        <Menu/>
        <Food/>
        <AppDownload/>
        <Footer/>
        
    </div>
  )
}

export default Home