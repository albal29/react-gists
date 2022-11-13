import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Forks from '../../components/forks/Forks'
import './styles.css'

const DetailsPage = () => {

    const location = useLocation()
    const { id, description, files } = location.state;
    const [forks, setForks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchForks() {
        setIsLoading(true);
        await fetch('http://localhost:3000/api/gistForks?gist_id=' + id, {
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
                setIsLoading(false);
                setForks(res.data);
            }
        }));
    }

    useEffect(() => {
        fetchForks();    
    }, []);

    return (
        <>
            {isLoading ? <div className='divLoading'><img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"></img> </div> : 
            <div className='details-container'>
            <header>
                <h1 className='gist-title'>{(description) || "No description"}</h1>
                <hr/>
                <Forks forks={forks}/>
            </header>
            <div className='content-title'>Files</div>
            <ul>
                {Object.values(files).map((file, index) => {
                    return (
                        <li className="file" key={index}>
                            <a href={file.raw_url} target="_blank" rel="noreferrer noopener">
                                {file.filename}
                            </a>
                        </li>
                    );
                })}
            </ul>
            </div>}
        </>
    )
}

export default DetailsPage