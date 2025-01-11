import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurService from "./components/OurService";
import Hero from "./components/Hero";


const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <OurService />
       
        <Footer />{" "}
      </div>
    </>
  );
};
export default App;
// import React from "react";
// import LanguageSwitcher from './components/LanguageSwitcher'; // Import the LanguageSwitcher
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import OurService from "./components/OurService";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <>
//       <div>
//         {/* Language Switcher included globally */}
//         <LanguageSwitcher /> {/* Render the LanguageSwitcher component */}
//         <Header />
//         <Hero />
//         <OurService />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;
