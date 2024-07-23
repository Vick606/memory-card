import styles from '../styles/Card.module.css';

function Card({ card, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={card.image} alt={card.name} className={styles.cardImage} />
      <p className={styles.cardName}>{card.name}</p>
    </div>
  );
}

export default Card;