import Card from './Card';
import styles from '../styles/GameBoard.module.css';

function GameBoard({ cards, onCardClick }) {
  return (
    <div className={styles.gameBoard}>
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card.id)} />
      ))}
    </div>
  );
}

export default GameBoard;