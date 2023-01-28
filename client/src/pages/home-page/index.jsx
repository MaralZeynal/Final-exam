import React from 'react'
import FifthSection from '../../home-sections/fifth-section'
import FirstSection from '../../home-sections/first-section'
import FourthSection from '../../home-sections/fourth-section'
import SecondSection from '../../home-sections/second-section'
import ThirdSection from '../../home-sections/third-section'
import {Helmet} from "react-helmet";


const HomePage = ({wishlists, setWishlists}) => {
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>IT LOCK</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection wishlists={wishlists} setWishlists={setWishlists}/>
        <FifthSection/>
    </div>
  )
}

export default HomePage