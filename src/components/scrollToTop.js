import React, { useEffect } from 'react'

// Create scroll to top component on refresh --->
const ScrollToTop = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null;
}; 

export default ScrollToTop
