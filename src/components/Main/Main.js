import Card from "../Card/Card";
import './Main.css';


function Main(props) {

  return (
    <main className="main">
      <section className="main__container">
        <h2 className="main__title">Добавить книгу в список</h2>
        <button
          type="button"
          onClick={props.onAddBook}
          className="main__add-button"
        ></button>
      </section>
      <section className="main__elements">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardDelete={props.onCardDelete} 
            onCardEdit={props.onCardEdit}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
