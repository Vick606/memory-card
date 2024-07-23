import { useState, useEffect } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import GameBoard from './components/GameBoard';
import styles from './App.module.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const pokemonDetails = await res.json();
          return {
            id: pokemonDetails.id,
            name: pokemon.name,
            image: pokemonDetails.sprites.front_default,
          };
        })
      );
      setCards(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      // Game over
      setScore(0);
      setClickedCards([]);
    } else {
      // Continue game
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, id]);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
    shuffleCards();
  };

  return (
    <div className={styles.app}>
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;