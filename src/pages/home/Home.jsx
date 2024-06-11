import React from 'react'
import Nav from '../../components/Nav/Container'
import HeroContainer from '../../components/Hero/HeroContainer'
import Featured1 from '../../components/Features/Featured1'
import InfiniteXMovement from '../../components/Features/InfiniteXMovement'
import Featured2 from '../../components/Features/Featured2'

const Home = () => {
  return (
    <div>
      <Nav />
      <HeroContainer />
      <Featured1 />
      <InfiniteXMovement />
      <Featured2 />
    </div>
  )
}

export default Home
