import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';


function App() {
  return (
    
    <div className="App">
      
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/add" element={<AddStudent/>}/>
     <Route exact path="/edit" element={<EditStudent/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
