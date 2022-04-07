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
  return (
    <div>I am a List</div>
  )
}

export default List