import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import api  from '../../services/api'

function DevItem({dev, onDelete}){

  function removeDev(e, id){
    e.preventDefault();

    onDelete(id)
  }

  return (
      <li className="dev-item">
          <header>
            <img alt={ dev.name } src={ dev.avatar_url } />
            <div className='user-info'>
              <strong>{ dev.name }</strong>
              <span>{ dev.techs.join(', ')}</span>
            </div>
          </header>
          <p>{ dev.bio }</p>
          <a href={`https://github.com/${dev.github_username}`}>
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <div className="options">
              <FontAwesomeIcon onClick={ e => removeDev(e, dev._id)} icon={faTrash} />
          </div>
      </li>
  )
}

export default DevItem;