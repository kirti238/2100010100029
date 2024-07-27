import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Footer';
import Productlist from './component/Productlist';






import logo from './logo.svg';
import './App.css';

const App=()=>(
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Productlist/>}/>
       
      <Productlist/>

      

    </Routes>
    <Footer/>
  </Router>
)
export default App;
