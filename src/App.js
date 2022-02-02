import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Fun from './components/pages/Fun';
import Gallery from './components/pages/Gallery';
import Resume from './components/pages/Resume';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './style.css'

export default function App() {
  const [ currentPage, setCurrentPage] = useState(0);
 function renderPage(){
  switch (currentPage){
    default:
      return <About/>;
    case 0:
      return <About/>;      
    case 1: 
      return <Gallery/>;
    case 2:
      return <Fun/>;
    case 3:
      return <Resume/>;
    
  }
  
 };
  
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer/>        
    </div>
  );
}


