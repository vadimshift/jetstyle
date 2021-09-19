import Card from "../Card/Card";
import './Main.css';

function Main(props) {

  return (
    <main className="main">
      <section className="main__container">
        <h2 className="main__title">Добавить книгу в список</h2>
        <button
          type="button"
          onClick={props.onAddPlace}
          className="main__add-button"
        ></button>
      </section>
      <section className="main__elements">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        {/* {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))} */}
      </section>
    </main>
  );
}

export default Main;
