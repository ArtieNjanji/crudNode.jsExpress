import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin  from './pages/Signin';
import Header from './components/Header';


function App() {
  return ( 
    
    <>
      <Router>
        <div className='container'>
        <Header/>
          <Routes>
            <Route path='/' element = {<Dashboard/>}/>
            <Route path='/signin' element = {<Signin />}/>
            <Route path='/signup' element = {<Signup />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
