import React , {useState} from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import BrowseProfile from "../components/BrowseProfile";


const HomeBrowse = () => {
  const [currentUser, setCurrentUser] = useState(false);

  const handleClick =(user) =>{
    console.log(user)
    setCurrentUser(true)
  }
  return (
    <>
      {currentUser ? (
        <>
        <Navbar />
          <Featured />
          <Hero />
        </>
      ) : (
        <BrowseProfile handleClick={handleClick} />
      )}
    </>
  );
};

export default HomeBrowse;
