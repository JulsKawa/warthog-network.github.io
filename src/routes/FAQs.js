import React from 'react'
import { useState,useEffect } from 'react';
import Navbar2 from '../navbar2';
import OffcanvasExample from '../navbar';
import { Container } from 'react-bootstrap';
const FAQs = () => {
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
      <div className='App'>
    <Container> 
<h2 style={{ display: 'flex', justifyContent: 'center' }}>
        FAQs</h2>
        <div className='left'>
        <p><strong>Q:</strong> What's algorithm used in this project?</p>
        <p><strong>A:</strong> The new algorithm is called "Janushash". More detailed information you can find here<a href='https://www.warthog.network/docs/janushash/'>Janushash</a></p>
        <p><strong>Q:</strong> Can I run mining on GPU or CPU only?</p>
        <p>A: No, you can't. Miner uses both GPU and CPU.</p>
        <p><strong>Q:</strong> Where can I find the latest releases of the node+wallet and miner?</p>
        <p>A: You can find precompiled binaries of Node+Wallet:</p><a href='https://github.com/warthog-network/Warthog/releases'> Node+Wallet-releases</a>
        
        <p>Miner (Linux and HiveOS builds):</p>
        <a href='https://github.com/CoinFuMasterShifu/janusminer/releases'>Janusminer-releases</a>
<p>See README.md in these repos for usage information.</p>
<p><strong>Q:</strong> I'm getting this error in miner output:
[error] API request failed. Are you running the node with RPC endpoint enabled?
[warning] Could not get mining information, retrying in 100 milliseconds...</p>
<p>A: You should run node with `--rpc=0.0.0.0:3000` to accept remote connections from your rigs and prevent this error.
Keep in mind that you can only run one node per public IP.</p>
<p><strong>Q:</strong> Miner exits with error `custom exiter (exitcode=0), waiting to cooldown a bit`</p>
<p>A: Probably your CPU is too old. The CPU must support these instructions: `'-mpclmul', '-msse4', '-msse4.1', '-msse4.2', '-mssse3', '-mavx', '-maes'`</p>
<p><strong>Q:</strong> What does `CPU queue full` and `CPU queue drained` mean?</p>
<p>A: It means that there is an imbalance between CPU and GPU, this can happen sometimes but should not occur often. CPU queue drained can happen more often and is normal on each new block height. It should rebalance itself independent of how many threads you choose. Just look at the CPU load. If it is as specified everything is good. For example if you specify two threads two processor threads should be in use close to 100% . If that happens most of the time, everything is good.</p>
<p><strong>Q:</strong> What does `CPU outruns GPU` mean?</p>
<p>A: GPU and CPU compute different hash functions so it can happen if GPU is slow and CPU fast.</p>
<p><strong>Q:</strong> My node stuck and won't sync?</p>
<p>A: Make sure you are running the latest version `wart-node-linux --version`. Delete folder with node db files and start the node again. (It locates in home directory `~/.warthog` if you are using Linux and `%AppData%\Local\Warthog` in Windows)</p>

</div>
</Container>  
</div>

    </div>
  )
}

export default FAQs