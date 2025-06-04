// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import HeroBanner from './components/HeroBanner';  // Lo quitamos porque no lo usaremos
import CardList from './components/CardList';
import ItemList from './components/ItemList';
import ContactForm from './components/ContactForm';
import OfferCarousel from './components/OfferCarousel';  // Importar el carrusel de ofertas
import './App.css';  // CSS principal

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            {/* Quitamos HeroBanner */}
            <OfferCarousel />  {/* Solo carrusel de ofertas */}
            <CardList />    {/* Lista de servicios o funcionalidades */}
          </>
        } />
        <Route path="/items" element={<ItemList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
