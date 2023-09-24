import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {
  return (
    <div className='screen'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
