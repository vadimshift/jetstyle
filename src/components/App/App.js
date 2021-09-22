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
  const [card, setCard] = useState('');

  const handleEditBookClick = (openCard) => {
    setCard(openCard);
    setIsEditBookPopupOpen(true);
  };

  const handleEditBookSubmit = (newData) => {
    //ищем нужную карточку
    const findCard = cards.find((book) => book.id === card.id);
    //обновляем информацию в карточке
    const newCard = {
      id: (findCard.id = card.id),
      bookAuthor: (findCard.bookAuthor = newData.bookAuthor),
      bookName: (findCard.bookName = newData.bookName),
    };
    //изменяем карточку в массиве
    setCards(cards.map(item => item.id === newCard.id? newCard:item))
    closeAllPopups();
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
          onEditBook={handleEditBookSubmit}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
