import React, { useState, useEffect } from 'react';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AddBookPopup from '../AddBookPopup/AddBookPopup';

function App() {
  const [isAddBookPopupOpen, setIsAddBookPopupOpen] = useState(false);

  const handleAddBookClick = () => {
    setIsAddBookPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddBookPopupOpen(false);
  };

  const handleCardDelete = (card) => {
    setCards((cards) => cards.filter((c) => c.id !== card.id));
  };

    const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('bookInLocalStorage');
    const initialValue = JSON.parse(saved);
    return initialValue || []; 
  });

  useEffect(() => {
    localStorage.setItem('bookInLocalStorage', JSON.stringify(cards));
  }, [cards]);

  console.log(cards);

  const handleAddBookSubmit = (data) => {
    setCards([data, ...cards]);
    closeAllPopups();
  };

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Main
          cards={cards}
          onAddBook={handleAddBookClick}
          onCardDelete={handleCardDelete}
        />
        <PopupWithForm />
        <AddBookPopup
          isOpen={isAddBookPopupOpen}
          onClose={closeAllPopups}
          onAddBook={handleAddBookSubmit}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
