import './App.css';
import ClassFormComponent from './Components/ClassFormComponent/ClassFormComponent';
import FunctionFormComponent from './Components/FunctionFormComponent/FunctionFormComponent';
import { Link, BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section className="App-header">

        <Router>
          <nav>
            <ul>
              <li><Link to="/">Class Component</Link></li>
              <li><Link to="/function-component">Function Component</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<ClassFormComponent />}></Route>
            <Route exact path='/function-component' element={<FunctionFormComponent />}></Route>
          </Routes>
          
        </Router>


      </section>
    </div>
  );
}

export default App;
