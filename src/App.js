import './App.css';
import {Navbar} from './components/Navbar';
import { Features } from './pages/Features';
import {Home} from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
    </div>
  );
}

export default App;
