import React, { useState, useEffect } from 'react';

const ShortenedURL = ({ dataFromAPI }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(function() { setCopied(false) }, 2000)
        }
    }, [copied])

    return(
        <div className="item">
            <span className="original__URL">{ dataFromAPI.url }</span>
            <span className="hash-id">{`https://rel.ink/${dataFromAPI.hashid}`}</span>
            <button
                onClick={() => setCopied(true)}
                className={`btn--copy ${copied ? 'active' : ''}`}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default ShortenedURL;