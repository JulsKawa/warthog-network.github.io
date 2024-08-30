import React from 'react'
import { useState,useEffect } from 'react';
const Navbar3 = () => {

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
    <div>
    {  (windowDim.winWidth>1000) ? <div>Navbar3</div> :<div>apples</div>}
    </div>
  )
}

export default Navbar3