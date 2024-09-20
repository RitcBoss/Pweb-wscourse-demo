import React from 'react'
import Article from '../Component/Article/Article'
import Programbar from '../Component/Programbar/Programbar'
import Products from '../Component/Products/Products'
import About from '../Component/About/About'

const Home = () => {
  return (
    <>
        <Article/>
        <Programbar/>
        <Products/>
        <About/>
    </>
  )
}

export default Home