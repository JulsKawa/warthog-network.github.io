import React from 'react'
import { useState,useEffect } from 'react';
import Navbar2 from '../navbar2';
import OffcanvasExample from '../navbar';

import pobw1 from '../img/pobw1.png'
import pobw2 from '../img/pobw2.png'
import pobw3 from '../img/pobw3.png'
import pobw4 from '../img/pobw4.png'
import pobw5 from '../img/pobw5.png'
import pobw6 from '../img/pobw6.png'
import pobw7 from '../img/pobw7.png'


const Algorithim = () => {
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
  <div className='newsApp'>
       { (windowDim.winWidth>1025) 
? <Navbar2/> 
:   <OffcanvasExample />
}
    
    
      <div className='App'>
        <img alt='' className='pobw' src={pobw1} />
        <img alt='' className='pobw' src={pobw2} />
        <img alt='' className='pobw' src={pobw3} />
        <img alt='' className='pobw' src={pobw4} />
        <img alt='' className='pobw' src={pobw5} />
        <img alt='' className='pobw' src={pobw6} />
        <img alt='' className='pobw' src={pobw7} />
      </div>
    </div>
  )
}

export default Algorithim