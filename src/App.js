import React from 'react'
import './fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './routes/router'
import Footer from './components/Footer/Footer'
import {Global} from './styles/global'

function App() {
  return (
    <div className="App">
      <Global/>
      <Router />
      <Footer />
    </div>
  );
} export default App;