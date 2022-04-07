import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

interface IState {
  players: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [players, setPlayers] = useState<IState["players"]>([
    {
      name: "LaMelo Ball",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432816.png&w=350&h=254",
      age: 21,
      note: "Youngest youngin to come in the NBA styling & saucing"
    }
  ])

  

  return (
    <div className="App">
      <h1>
        My Favorite Basketball Players
      </h1>
      <List players={players} />
    </div>
  );
}

export default App;
