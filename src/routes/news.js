import { useState,useEffect } from 'react';
import Navbar2 from '../navbar2';
import OffcanvasExample from '../navbar';
const News = () => {
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
        <div >
           { (windowDim.winWidth>1000) 
    ? <Navbar2/> 
    :   <OffcanvasExample />
    }
        <div className='App paranews'>
    <h1 className=''>News</h1>
    <h2>Latest News</h2>
    <p>
<li>18/07/24-19/07/24 Coordinate fork with pools and exchanges.</li>
<li>11/07/24-17/07/24 Research and implement first draft of new matching engine.</li>
<li>10/07/24 Release version 0.6.0 and inform exchanges about the necessary node upgrade (hard fork).</li>
<li>09/07/24 Add slogan and mission statement to website. Research about custom matching engine.</li>
<li>06/07/24 Add much more detail about warthog features and roadmap to website.</li>
<li>05/07/24 Research about custom DeFi matching engine.</li>
<li>04/07/24 Helping Crispin pool with finding bug in pool update.</li>
<li>03/07/24 Assisting pools with implementation of verushash v2.1 to v2.2 update.</li>
<li>02/07/24 We spotted some issues with iedoc's latest miner update and are investigating.</li>
<li>01/07/24 Shifu started to experiment with DeFi functionality. It seems to be possible to solve the sandwich (more info soon).</li>
<li>30/06/24 We evaluated Dokku as possible tool for automating website upload to the virtual server.</li>
<li>29/06/24 We rented a virtual server to host the browser-node website.</li>
<li>29/06/24 We updated switched to Cloudflare name servers for all of our website infrastructure.</li>

    
    <h2 className='center'>Current Tasks</h2>
    
    <li>Find a way to integrate the virtual server using Dokku and GitHub pages.</li>
        <li>Upload the browser node website (currently only supporting Websocket connections).</li>
        <li>Assisting iedoc and pool devs for the upcoming PoBW change from Verushash v2.1 to Verushash v2.2.</li>
        <li>Fixing bug on network-refactor branch that leads to a crash.</li>
       
<h2 className='center'>Upcoming Tasks</h2>

<li>Integrate Re's improved design for browser nodes.</li>
<li>Extend browser node connect capability to support real peer-to-peer communication over WebRTC.</li>
<li>Research about new DeFi functionalities to merge order based and liquidity pool based implementation.
</li>
</p>
</div>
    </div>
    )
}

export default News;