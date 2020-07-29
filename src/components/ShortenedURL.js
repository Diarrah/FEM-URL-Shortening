import React, { useState, useEffect } from 'react';

const ShortenedURL = ({ dataFromAPI }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(function() { setCopied(false) }, 2000)
        }
    }, [copied])

    function copyLink(e) {
        let newURL = e.target.parentNode.children[1].textContent;
        window.navigator.clipboard.writeText(newURL);
    }

    const handleCopy = e => { // This is combining the 2 functions into 1 since you can't have 2 onClicks
        setCopied(true);
        copyLink(e)
    }

    return(
        <div className="shortened__output">
            <span className="original__URL">{ dataFromAPI.url }</span>
            <span className="hash-id">{`https://rel.ink/${dataFromAPI.hashid}`}</span>
            <button
                onClick={handleCopy}
                className={`btn--copy ${copied ? 'active' : ''}`}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default ShortenedURL;