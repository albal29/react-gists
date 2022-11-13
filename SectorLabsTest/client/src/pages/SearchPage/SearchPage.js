import React from 'react';
import { useState } from 'react';
import GistList from '../../components/gists/GistList';
import './styles.css';

const SearchPage = () => {
    const [username, setUsername] = useState('');
    const [gists, setGists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchGists(event) {
        event.preventDefault();
        console.log(username);
        setIsLoading(true);
        await fetch('http://localhost:3000/api/gists?username=' + username, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        }).then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
        ).then(res => {
            console.log(res.status, res.data)
            if(res.status === 200) {
            setError('')
            setGists(res.data);
            }
            else
            {
                setGists([]);
                setError('Something went wrong')
            }
            setIsLoading(false);
        }));
    }

    return (
        <div>
            <div className='search-container'>
            <form onSubmit={fetchGists} className="searchform">
            <label />
            <input 
                className="search-bar" 
                type="text" 
                placeholder="..."
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            </form>
            </div>
            {isLoading ? <div className='divLoading'><img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"></img> </div> : <GistList gists={gists} error = {error}/>}
        </div>
    )
}

export default SearchPage