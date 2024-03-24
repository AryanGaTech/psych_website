import './App.css';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar';
import { Connect } from './pages/Connect';
import { Features } from './pages/Features';
import {Home} from './pages/Home';
import {Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <>
          <Navbar />
              <main className={"main-content"}>
                  <Routes>
                      <Route path={'/'} element={<Home />} />
                      <Route path={'/connect'} element={<Connect />} />
                      <Route path={'/features'} element={<Features/>}/>
                  </Routes>
              </main>
      </>

  );
    /*
      return (
      <div className="App">
        <Navbar />
        <Home />
        <Features />
        <Connect />
        <Footer />
      </div>
    );

    <div className="App">
              <Navbar/>
              <Link to={'/'}><Home/></Link>
              <Link to={'/features'}><Features/></Link>
              <Link to={'/connect'}><Connect/></Link>
              <Footer/>
          </div>
     */
}

export default App;
