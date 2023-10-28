import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {

  return (
    <div className='screen'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Content text={'List'}/>}/>
          <Route path='/add-contact' element={<Content text={'New Contact'}/>}/>
          <Route path='/edit' element={<><Content text={'Edit'}/></>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
