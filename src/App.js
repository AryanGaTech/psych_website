import './App.css';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar';
import { Connect } from './pages/Connect';
import { Features } from './pages/Features';
import {Home} from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
