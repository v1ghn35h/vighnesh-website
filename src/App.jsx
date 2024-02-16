import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./components/header/NavigationBar";
import Home from "./pages/Home";
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <NavigationBar />

      <Home />
      
      <Footer />
    </>
  )
}

export default App
