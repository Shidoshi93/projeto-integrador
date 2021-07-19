import React from 'react'
import './fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './routes/router'
import Footer from './components/footer/Footer'
import {Global} from './styles/global'
import NavTest from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Global/>
      <Router />
      <Footer />
    </div>
  );
} export default App;