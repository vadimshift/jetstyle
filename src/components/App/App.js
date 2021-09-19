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

  const [cards, setCards] = useState([]);
  console.log(cards);
  const handleAddBookSubmit = (data) => {
    setCards([data, ...cards]);
    closeAllPopups();
  };

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Main cards={cards} onAddBook={handleAddBookClick} />
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
