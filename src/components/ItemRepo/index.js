import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, removeItemRepo}) => {
  const removeItem =() => {
    removeItemRepo(repo.id);
  }

  return (
    <ItemContainer>
        <h3>{repo?.name}</h3>
        <p>{repo?.full_name}</p>
        <a href={repo?.html_url} target="_blank" className='' rel="noreferrer">Ver repositório</a><br/>
        <a href="##" className='remover' onClick={removeItem}>remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo