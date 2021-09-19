import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function AddBookPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddBook({
      bookAuthor,
      bookName,
    });
    setBookAuthor('');
    setBookName('');
  }

  const [bookAuthor, setBookAuthor] = useState('');
  const [bookName, setBookName] = useState('');

  const hendleChangeBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const hendleChangeBookName = (e) => {
    setBookName(e.target.value);
  };

  return (
    <PopupWithForm
      name='add-place'
      title='Новая книга'
      buttonTitle='Сохранить'
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        required
        minLength='2'
        maxLength='40'
        id='enterAuthorBook'
        name='author'
        type='text'
        placeholder='Автор'
        className='popup__enter popup__enter_type_author-book'
        value={bookAuthor || ''}
        onChange={hendleChangeBookAuthor}
      />
      <input
        required
        type='text'
        id='enterNameBook'
        name='name'
        placeholder='Название книги'
        className='popup__enter popup__enter_type_name-bok'
        value={bookName || ''}
        onChange={hendleChangeBookName}
      />
    </PopupWithForm>
  );
}
export default AddBookPopup;
