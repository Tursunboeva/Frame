import './App.css'
import './static/data.js'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
// import Product from './components/product/Product'
// import { products } from './static/data'
import Section from './components/section/Section'
import Section1 from './components/sections/Section1.jsx'
import Section2 from './components/section2/Section2.jsx'

function App() {
  
  return (
    <>
      <Header/>
      <Banner/>
      <Section/>
      {/* <Product products={products}/> */}
      <Section1/>
      <Section2/>
    </>
  )
}

export default App
