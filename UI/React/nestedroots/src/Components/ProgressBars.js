import React, { useState, useEffect } from 'react'

function Apps() {
    const [bars, setBars] = useState(0);

    return (
        <div className="wrapper">
            <div>
                <button
                    onClick={() => {
                        setBars(bars + 1);
                    }}>
                    Add
                </button>
            </div>
            <div className="bars">
                {Array(bars)
                    .fill(null)
                    .map((_, index) => (
                        <ProgressBars key={index} />
                    ))}
            </div>
        </div>
    );
}

const ProgressBars = () => {
    const [transition, setTransition] = useState(false)

    useEffect(() => {
        if(transition){
            return;
        }

        setTransition(true)
    },[])

    return (
        <div className="bar">
            <div
                className={['bar-contents', transition && 'bar-contents--filled']
                    .filter(Boolean)
                    .join(' ')}
            />
        </div>
    );
}

export default ProgressBars