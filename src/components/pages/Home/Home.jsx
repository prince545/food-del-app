import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Menu from '../../Menu/Menu'
import Footer from '../../Footer/Footer'
import AppDownload from '../../App Download/AppDownload'

const Home = ({ foodFilters }) => {
  return (
    <div>
        <Header />
        <Menu foodFilters={foodFilters} />
        <AppDownload/>
        <Footer/>
        
    </div>
  )
}

export default Home