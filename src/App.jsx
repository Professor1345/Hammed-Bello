// import React from 'react'

import {
  AdditionalInfo,
  Contact,
  Education,
  Experience,
  Header,
  Introduction,
  Projects,
  Skills,
} from "./components";

// import Header from "./components/Header";

const App = () => {
  return (
    <div className="text-[rgb(245,244,239)] bg-[rgb(45,44,41)] min-h-screen font-poppins border-x-2 border-solid">
      <Header />
      <Introduction />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <AdditionalInfo />
      <Contact />
    </div>
  );
};

export default App;
