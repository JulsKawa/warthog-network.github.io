import React from 'react'

import { useState,useEffect } from 'react';


const Screensize = () => {

    const [windowDim, setWindowDim] = useState  ({
        winWidth:window.innerWidth,
        
        });
        
        const detectSize = () =>{
            setWindowDim({
                winWidth:window.innerWidth,
            })
        }
        
        useEffect(()=>{
        window.addEventListener('resize', detectSize)
        
        return()=>{
            window.removeEventListener('resize', detectSize)
        }
        },[windowDim])
    return (
    <div>screen width

        {windowDim.winWidth}
    </div>
  )
}

export default Screensize