import React from 'react';
import './App.css'; 
import FirstDiv from './FirstDiv'; 
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='NavBar'>
        <Header />
      </div>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FirstDiv />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
