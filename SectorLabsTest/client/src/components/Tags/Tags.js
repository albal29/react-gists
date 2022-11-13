import React from 'react'

import './style.css';

const Tags = ({ files }) => {
  const languages = [];

    for(let file in files) {
        let language = files[file].language;

        if(!languages.includes(language)) {
            languages.push(language);
        }
    }

  return (
    <>
    <ul className='ultags'>
        {languages.map((language) => (
            <li className='lielements'>{language}</li>
        ))}
    </ul>
    </>
  )
}

export default Tags