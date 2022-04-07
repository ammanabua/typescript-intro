import React from 'react'

interface IProps {
  players: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

const List: React.FC<IProps> = ({ players }) => {

  const renderList = (): JSX.Element[] => {
    return players.map((player) => {
      return(
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={player.url} alt="" />
            <h2>{player.name}</h2>
          </div>
          <p>{player.age} years old</p>
          <p className="List-note">{player.note}</p>
        </li>
      )
    })
  }
  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List