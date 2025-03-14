import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Menu from '../../Menu/Menu'
import Food from '../../Food/FOod'
const Home = () => {
  return (
    <div>
        <Header />
        <Menu/>
        <Food/>
    </div>
  )
}

export default Home