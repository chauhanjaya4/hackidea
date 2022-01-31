import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'


function App(){
  return(
  <Router>

  <Navbar/>
  </Router>
  );
  
  
};
/*const MyName=()=>{
  return(<><h1>jaya</h1></>);
}*/

export default App;