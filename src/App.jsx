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

function App() {
  const [petData, setPetData] = useState([]);

  return (
    <>
      <main className="p-5 w-fit flex-1 ">
        <Nav />
        <Homehero />
        {/* <HomeLogo /> */}
        <Search petData={petData} setPetData={setPetData} />
        <Container>
          <div className="grid sm:grid-cols-1 sm:grid-flow-row md:grid-cols-4 gap-1 p-5 bg-indigo-500/20 mx-auto w-100 mr-5 rounded-lg auto-cols-max ">
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
