import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Pokémon Memory Game</h1>
      <p>Click on each Pokémon once. Don't click the same one twice!</p>
    </header>
  );
}

export default Header;