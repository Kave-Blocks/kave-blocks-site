import React from 'react'
import Nav from '../../components/Nav/Container'
import HeroContainer from '../../components/Hero/HeroContainer'
import Featured1 from '../../components/Features/Featured1'
import InfiniteXMovement from '../../components/Features/InfiniteXMovement'

const Home = () => {
  return (
    <div>
      <Nav />
      <HeroContainer />
      <Featured1 />
      <InfiniteXMovement />
    </div>
  )
}

export default Home
