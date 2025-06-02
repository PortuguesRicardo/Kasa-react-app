import React from 'react';  //  JSX Transform becomes automatic. Keeping just in case. //
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

