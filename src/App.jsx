import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import FeatureSectionFurits from './components/FeatureSectionFurits'
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast'
import Banner from './components/Banner'
import BlogSection from './components/BlogSection'
import News from './components/News'
import FetureSection from './components/FetureSection'
import FooterSection from './components/FooterSection'







const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFurits/>
      <FeatureSectionBreakfast/>
      <Banner/>
      <BlogSection/>
      <News/>
      <FetureSection/>
      <FooterSection/>
    </main>
  )
}

export default App
