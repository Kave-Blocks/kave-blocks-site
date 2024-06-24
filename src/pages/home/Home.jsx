import React from "react";
import Nav from "../../components/Nav/Container";
import HeroContainer from "../../components/Hero/HeroContainer";
import Featured1 from "../../components/Features/Featured1";
import InfiniteXMovement from "../../components/Features/InfiniteXMovement";
import Featured2 from "../../components/Features/Featured2";
import Featured3 from "../../components/Features/Featured3";
import InfiniteXMovement2 from "../../components/Features/InfiniteXMovenent2";
import Featured4 from "../../components/Features/Featured4";
import Featured5 from "../../components/Features/Featured5";
import ShowCase from "../../components/projectsShowcase/ShowCase";
import Featured6 from "../../components/Features/Featured6";
import GitInTouch from "../../components/GitInTouch/GitInTouch";
import Footer from "../../components/Footer/Footer";
import ShowCase1 from "../../components/projectsShowcase/ShowCase1";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col snap-container">
        <Nav />
        <HeroContainer />
        <Featured1 />
        <InfiniteXMovement />
        <Featured2 />
        <Featured3 />
        <InfiniteXMovement2 />
        <Featured4 />
        <div className="flex flex-col snap-mandatory snap-y">
          <div className="snap-center">
            <ShowCase />
          </div>
          <div className="snap-center">
            <ShowCase1 />
          </div>
        </div>
        <Featured5 />
        <Featured6 />
        <GitInTouch />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
