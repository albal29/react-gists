import React from 'react'
import Gist from './Gist';
import './styles.css';

const GistList = ({ gists, error}) => {
    return (
        <>
        {
            !error.length ?

                <div>
                    <ul className='ulstyle'>
                        {gists.map((gist) => {
                            return (<Gist
                                key={gist.id}
                                gist={gist} />);
                        })}
                    </ul>
                </div>
                :
                <div>{error}</div>
        }
    </>

    );
}

export default GistList