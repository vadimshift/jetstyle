import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AddBookPopup from '../AddBookPopup/AddBookPopup';
import EditBookPopup from '../EditBookPopup/EditBookPopup';

function App() {
  const [isAddBookPopupOpen, setIsAddBookPopupOpen] = useState(false);
  const [isEditBookPopupOpen, setIsEditBookPopupOpen] = useState(false);

  const handleEditBookClick = () => {
    setIsEditBookPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddBookPopupOpen(false);
    setIsEditBookPopupOpen(false);
  };

  const handleAddBookClick = () => {
    setIsAddBookPopupOpen(true);
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
          onCardEdit={handleEditBookClick}
        />
        <PopupWithForm />
        <AddBookPopup
          isOpen={isAddBookPopupOpen}
          onClose={closeAllPopups}
          onAddBook={handleAddBookSubmit}
        />
        <EditBookPopup
          isOpen={isEditBookPopupOpen}
          onClose={closeAllPopups}
          /* onEdit={handleEditBookSubmit} */
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
