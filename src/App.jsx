import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import UniversityScrolling from './component/TopUniversityScrolling/UniversityScrolling'
import Testimonal from './component/Testimonial/Testimonial'
import Partners from './component/Partners/Partners'
import Review from './component/Review/Review'
import News from './component/News/News'
// import MultiCardSlider from './component/MultiCardSlider'
import CardSlider from './component/CardSlider'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <UniversityScrolling/>
    <Testimonal/>
    <Services/>
    <Partners/>
    <Review/>
    <News/>
    <Footer/>
    {/* <CardSlider/> */}
    </>
  )
}

export default App