import "./Home.css";
// import Navbar from "../components/Navbar";
import SignUp from "./SignUp";
// import Featured from "../components/Featured";
// import Hero from "../components/Hero";
import Footer from "../components/Footer";
// import Card from "../components/Card";

import Section from "../components/reusables/Section";

import TVImage from "../images/tv.png";
import DeviceImage from "../images/device-pile.png";
import KidsImage from "../images/kids.png";
import MovilGirl from "../images/mobile-girl.jpg";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <SignUp />

      <Section
        title="Enjoy on your TV"
        desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more."
        image={TVImage}
      />
      <Section
        title="Watch everywhere"
        desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={DeviceImage}
      />
      <Section
        title="Create profiles for kids"
        desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        image={KidsImage}
      />

      <Section
        title="Download your shows to watch offline"
        desc="Only available on ad-free plans."
        image={MovilGirl}
      />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
