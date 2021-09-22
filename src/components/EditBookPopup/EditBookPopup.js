import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditBookPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onEditBook({
      bookAuthor: bookAuthorNew,
      bookName: bookNameNew,
    });
    setBookAuthorNew('');
    setBookNameNew('');
  }

  const [bookAuthorNew, setBookAuthorNew] = useState('');
  const [bookNameNew, setBookNameNew] = useState('');

  const hendleChangeBookAuthorNew = (e) => {
    setBookAuthorNew(e.target.value);
  };

  const hendleChangeBookNameNew = (e) => {
    setBookNameNew(e.target.value);
  };

  return (
    <PopupWithForm
      name="edit-book"
      title="Редактировать книгу"
      buttonTitle="Сохранить"
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        required
        minLength="3"
        maxLength="40"
        id="enterBookAuthorNew"
        name="name"
        type="text"
        placeholder="Автор"
        className="popup__enter popup__enter_type_book-author-new"
        value={bookAuthorNew || ""}
        onChange={hendleChangeBookAuthorNew}
      />
      <input
        required
        minLength="2"
        maxLength="40"
        id="enterBookNameNew"
        name="about"
        type="text"
        placeholder="Название книги"
        className="popup__enter popup__enter_type_book-name-new"
        value={bookNameNew || ""}
        onChange={hendleChangeBookNameNew}
      />
    </PopupWithForm>
  );
}

export default EditBookPopup;
