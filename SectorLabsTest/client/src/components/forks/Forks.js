import React from 'react'
import './styles.css'

const Forks = ({ forks }) => {
  return (
    <div className='forks-container'>
        <div className='forks-text'>Forks</div>
        <ul className='fork-list'>
            {forks.map((fork) => (
                <li className='fork-list-item'>
                    <a href={fork.url} target='_blank' rel="noreferrer noopener">
                        <div className='fork'>
                                <img src={fork.avatar} className="avatar"/>
                                <span className="username">{fork.username}</span>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Forks