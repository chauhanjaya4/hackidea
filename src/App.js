import React from 'react';
//import Sidebar from './components/Sidebar';
import './App.css';
import SigninPage from './pages/signin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Navbar from './components/Navbar';

function App(){
  return(
  <Router>
    <Navbar/>
<switch>
  <Route path='/' component={Home} exact/>
  
  <Route path='/signin' component={SigninPage} exact/>
</switch>
  
  </Router>
  );
  
  
}
/*const MyName=()=>{
  return(<><h1>jaya</h1></>);
}*/
/*const App = () => (

);*/
export default App;