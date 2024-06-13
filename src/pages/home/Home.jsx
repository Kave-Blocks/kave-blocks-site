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

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col snap-container">
        <div className="flex flex-col nap">
          <Nav />
          <HeroContainer />
        </div>
        <div className="nap">
          <Featured1 />
        </div>
        <div className="nap">
          <InfiniteXMovement />
        </div>
        <div className="nap">
          <Featured2 />
        </div>
        <div className="nap">
          <Featured3 />
        </div>
        <div className="nap">
          <InfiniteXMovement2 />
        </div>
        <div className="nap">
          <Featured4 />
        </div>
        <div className="nap">
          <ShowCase />
        </div>
        <div className="nap">
          <ShowCase2 />
        </div>
        <div className="nap">
          <ShowCase />
        </div>
        <div className="nap">
          <ShowCase2 />
        </div>
        <div className="nap">
          <Featured5 />
        </div>
      </div>
    </div>
  );
};

export default Home;
