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
import ShowCase2 from "../../components/projectsShowcase/ShowCase2";
import Featured6 from "../../components/Features/Featured6";
import GitInTouch from "../../components/GitInTouch/GitInTouch";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col snap-container">
        <div className="flex flex-col snap">
          <Nav />
          <HeroContainer />
        </div>
        <div className="snap">
          <Featured1 />
        </div>
        <div className="snap">
          <InfiniteXMovement />
        </div>
        <div className="snap">
          <Featured2 />
        </div>
        <div className="snap">
          <Featured3 />
        </div>
        <div className="snap">
          <InfiniteXMovement2 />
        </div>
        <div className="snap">
          <Featured4 />
        </div>
        <div className="snap">
          <ShowCase />
        </div>
        <div className="snap">
          <ShowCase2 />
        </div>
        <div className="snap">
          <ShowCase />
        </div>
        <div className="snap">
          <ShowCase2 />
        </div>
        <div className="snap">
          <Featured5 />
        </div>
        <div className="snap">
          <Featured6 />
        </div>
        <div className="snap">
          <GitInTouch />
        </div>
        <div className="snap">
         <Footer />  
        </div>
      </div>
    </div>
  );
};

export default Home;







