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

  const [players, setPlayers] = useState<IState["players"]>([])

  

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
