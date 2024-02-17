import './App.css';
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
    </div>
  );
}

export default App;
