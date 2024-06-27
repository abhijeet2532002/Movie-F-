import { useState } from 'react'
import Navbar from './NavbarComp/Navbar'
import BannerCaresoul from './BannerComp/BannerCaresoul'
import Categories from './CategoryComp/Categories'
import RatedMovie from './RatedMovie/RatedMovie'
function App() {
  return (
    <>
      <Navbar />
      <BannerCaresoul />
      <Categories />
      <RatedMovie />
    </>
  )
}

export default App
