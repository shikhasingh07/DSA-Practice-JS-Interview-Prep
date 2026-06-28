import React, { useState, useLayoutEffect } from 'react'

const useWindowSize = () => {
    const [layout, setLayout] = useState({
        height: 0,
        width: 0
    })

    useLayoutEffect(() => {
        const handleResize = () => setLayout({ height: window.innerHeight, width: window.innerWidth });
        handleResize(); // initial size set karo
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // cleanup

    },[])
    return layout
}

export default useWindowSize