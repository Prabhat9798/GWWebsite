import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import UniversityScrolling from './component/TopUniversityScrolling/UniversityScrolling'
import Testimonal from './component/Testimonial/Testimonial'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <UniversityScrolling/>
    <Testimonal/>
    <Services/>

    </>
  )
}

export default App