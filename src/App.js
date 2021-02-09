import './App.css';
import routes from './routes'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {routes}
    </div>
  );
}

export default App;
