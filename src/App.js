import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './Pages/Home'
import About from './Pages/About'
import SingleCocktail from './Pages/SingleCocktail'
import Error from './Pages/Error'

// import components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cocktail/:id' element={<SingleCocktail />}></Route>
        <Route path='*' element={<Error />}></Route>

      </Routes>
      <Footer />

    </Router>
  )
}

export default App;