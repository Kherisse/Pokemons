import Nav from "./components/Nav.jsx";
import PetDisplay from "./components/PetDisplay.jsx";
import HomeLogo from "./components/HomeLogo.jsx";
import Search from "./components/Search.jsx";
import PetList from "./components/PetList";
import PetDetails from "./components/PetDetails";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { useState } from "react";

import "./App.css";
import Homehero from "./components/HomeHero.jsx";
import Sample from "./components/Sample.jsx";

function App() {
  const [petData, setPetData] = useState([]);

  return (
    <>
      <main className="p-5 w-screen flex-1 ">
        <Nav />
        <Homehero />
        {/* <HomeLogo /> */}
        <Search petData={petData} setPetData={setPetData} />
        <Container>
          {/* <div className="grid sm:grid-cols-1 sm:grid-flow-row md:grid-cols-4 gap-1 p-5 bg-indigo-500/20 mx-auto w-100 mr-5 rounded-lg auto-cols-max "> */}
          {/* <div className="grid-flow-row-dense grid-cols-12 grid gap-1 p-5 bg-indigo-500/20 mx-auto w-full  rounded-lg auto-cols-max "> */}
          {/* <div className="p-5 bg-indigo-500/20 mx-auto w-11/12 rounded-lg  flex flex-wrap grid md:grid-cols-3 sm:grid-cols-1 gap-4"> */}
          <div className="p-5 bg-indigo-500/20 mx-auto w-11/12 rounded-lg flex flex-wrap grid ">
            <PetList petData={petData} />
            <PetDetails />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
