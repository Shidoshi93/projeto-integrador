import React from 'react'
import './App.css';
import Router from './routes/router'
import Footer from './components/footer/footer'
import Recadastro from './pages/newpassword';

function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
} export default App;