import React, { useState, useRef } from 'react';
import desktopFormBG from '../images/bg-shorten-desktop.svg';
import mobileFormBG from '../images/bg-shorten-mobile.svg';
import axios from 'axios';
import ShortenedURL from './ShortenedURL';

const Form = ({ viewportSize }) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false);
    const inputRef = useRef(null);

    async function getShorterLink(url) {
        try {
            const response = await axios.post('https://rel.ink/api/links/', { url });
            setResults(res => [...res, response.data])
        } catch(error) {
            console.log('ERROR:' + error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        let urlToShorten = inputRef.current.value;
        let urlValidation = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi);
            // *** Thanks to https://regexr.com/39nr7 for this RegEx*** //\
        let errorMsg = document.querySelector('.form__control--small');
        
        if (urlValidation.test(urlToShorten)) {
            setError(false);
            getShorterLink(urlToShorten)
            inputRef.current.value = '';
        } else if (!urlValidation.test(urlToShorten) && urlToShorten !== '') {
            setError(true);
            errorMsg.innerText = `Invalid URL`
        } else {
            setError(true);
            errorMsg.innerText = `Please add a link`
        }
    }

    return (
        <div className="form__section">
            <form className="form" onSubmit={handleSubmit}>
                <img 
                    className="form-bg--desktop"
                    src={
                        viewportSize > 733
                            ? desktopFormBG
                            : mobileFormBG
                    }  
                    alt="" 
                />
                <div className="form__control">
                    <input
                        ref={inputRef}
                        className={`form__control--input ${error ? 'error' : ''}`}
                        placeholder="Shorten a link here..."
                    />
                    <button className="form__control--button">Shorten It!</button>
                    <small className={`form__control--small ${error ? 'error' : ''}`}></small>
                </div>
            </form>
            <div className="form__output">
                { results.slice(0).reverse().map((res, i) => <ShortenedURL key={i} dataFromAPI={res} />)  }
            </div>
        </div>
    )
}

export default Form;