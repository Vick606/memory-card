import styles from './Scoreboard.module.css';

function Scoreboard({ score, bestScore }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreItem}>
        <span>Current Score:</span>
        <span className={styles.scoreValue}>{score}</span>
      </div>
      <div className={styles.scoreItem}>
        <span>Best Score:</span>
        <span className={styles.scoreValue}>{bestScore}</span>
      </div>
    </div>
  );
}

export default Scoreboard;