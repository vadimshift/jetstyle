import deleteIcon from "../../images/delete-icon.svg";
import './Card.css';

function Card({ card, onCardDelete }) {

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <article className="element">
      <div className="element__title">
        <h2 className="element__text-title">{card.bookAuthor}</h2>
        <p className="element__text-subtitle">{card.bookName}</p>
      </div>
      <button
        type="button"
        className="element__delete-button"
        onClick={handleDeleteClick}
      >
        <img src={deleteIcon} alt="Кнопка удаления карточки" />
      </button>
    </article>
  );
}

export default Card;
