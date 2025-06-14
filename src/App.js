import React from 'react';  //  JSX Transform becomes automatic. Keeping just in case. //
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="content">
          <AppRouter />
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

