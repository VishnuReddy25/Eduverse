// App.js
import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Courses from './Courses';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>

      </Routes>
    </Router>
    
    </>);
}

export default App;
