import deleteIcon from "../../images/delete-icon.svg";
import './Card.css';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  /*  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  }; */

  return (
    <article className="element">
     {/*  <div className="element__image-container">
        <img
          className="element__image"
           src={card.link}
          alt={card.name} 
          onClick={handleClick}
        />
      </div> */}
      <div className="element__title">
        <h2 className="element__text-title">{/* {card.name} */}Автор книги</h2>
        <p className="element__text-subtitle">Название книги</p>
      </div>
      <button
        type="button"
        className="element__delete-button"
        /* onClick={handleDeleteClick} */
      >
        <img src={deleteIcon} alt="Кнопка удаления карточки" />
      </button>
    </article>
  );
}

export default Card;
