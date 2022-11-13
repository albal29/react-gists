import React from 'react'
import { Link } from 'react-router-dom'
import Tags from '../Tags/Tags'
import './styles.css';

const Gist = ({ gist }) => {
  const noOfFiles = Object.keys(gist.files).length;
  return (
    <>
        <Link className='nav-links' activeClassName='active-links' to={{pathname: `/${gist.id}`}} state={{ id: gist.id, description: gist.description, files: gist.files }}>
        <li className='list-row'>
            <p className='description'>{(gist.description) || 'No description'}</p>
            <p className='number-of-files'>{noOfFiles}{(noOfFiles>1)? ' Files' : ' File'}</p>
        <Tags files={gist.files}/>
        </li>
        </Link>
    </>
  )
}

export default Gist