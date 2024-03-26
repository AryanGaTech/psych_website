import './App.css';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar';
import { Connect } from './pages/Connect';
import { Features } from './pages/Features';
import {Home} from './pages/Home_And_About/Home';
import {Link, Route, Routes} from 'react-router-dom';


import { OurPurpose } from './pages/Home_And_About/OurPurpose';
import {WhatMakesUsDifferent} from './pages/Home_And_About/WhatMakesUsDifferent';
import {HowItWorks} from './pages/Home_And_About/HowItWorks';

function App() {
  return (

    /*
    <div className="App">
      <Navbar />
      <Home />
      <OurPurpose />
      <WhatMakesUsDifferent />
      <HowItWorks />
      <Footer />
    </div> */

    <>
      <Navbar />
        <main className={"main-content"}>
          <Routes>
              <Route path={'/'} element={
                (<Home />) } />
              <Route path={'/connect'} element={<Connect />} />
              <Route path={'/features'} element={<Features/>}/>
          </Routes>

        </main>

    </>
  );
}

export default App;
