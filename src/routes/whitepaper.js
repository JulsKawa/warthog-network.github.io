import React from 'react'
import { useState,useEffect } from 'react';
import Navbar2 from '../navbar2';
import OffcanvasExample from '../navbar';
const Whitepaper = () => {
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

        <div className='shadow'>
          <header className='center'>
          <h1>
          Warthog - An experimental fresh rewrite of a PoW cryptocurrency</h1>
          <h2 className='center'>
            Pumbaa
            Rafiki
            October 5, 2023
          </h2>
          <h1>
            Warthog - An experimental fresh rewrite of a PoW cryptocurrency
          </h1>
          <p className='parawhite'>
            Note: This white paper is a work in progress.
          </p>
          <h2>
            Introduction and Project goals
          </h2>
          </header>
          <p className='parawhite'>
            Warthog is a classical Proof-of-Work (PoW) based cryptocurrency which is meant to be a fun and experimental side project of its developers Pumbaa, Timon and Rafiki who work in blockchain industry.
          </p>
          <p className='parawhite'>
            We are working on Warthog in our free time and there is always the risk that we leave due to time constraints or personal reasons. In fact our colleague Timon has already left the team. Therefore we are trying to build up a strong community backing the project.
          </p>
          <p>
          Mainly one can describe this project as an experiment to try out new things and learn how blockchain technology works in detail. But at the same time we want to be as transparent and fair as possible and avoid as much as possible fishy and questionable practice currently seen in most other new projects.
          </p>
          <p>
          The code is freshly written in C++20 and is not a cheap fork of any other project. Therefore there is always the risk of serious or unfixable bugs. But at the same time there is real effort put into this project which sets it apart from most competitors.
          </p>
          <p>
          The community is welcome to take actively part in the evolution of Warthog, the logo and the explorer are made by volunteers and also possible choices for a mining algorithm are proposed. The connection with the community shall be preserved and extended in the future. If you want to join, please do so!
          </p>
          <p>
          There is no specific purpose or use case of Warthog. However we want to revive the days when crypto was a fun and an interesting experimental thing. One of our experiments with this project is to use SQLite to store blocks and state. Another is the completely novel idea of syncing nodes via chain descriptors instead of asking other nodes for blocks by their hashes.
          </p>
          <p>
          One design principle of Warthog is fast sync speed and a low impact on system resources which is achieved by the use of fast hashing algorithms, appropriate data structures and our custom-built sync algorithm.
          </p>
          <p>
          For now and in the near future the primary plan is to make the node implementation more robust and improve infrastructure like explorer and API for better interoperability.
          </p>
          <h2>
            Technical Details
          </h2>
          <h3>
            Retarget Logic
          </h3>
          <p>
          Similarly to Bitcoin, the warthog blockchain will scale its difficulty periodically to adjust for changing hashrate. Changes in difficulty is partitioned into two phases:
          </p>
          <p>
          In the initial phase the difficulty is adjusted every 720 blocks which corresponds to approximately 4 hours.
          In the second phase the difficulty is adjusted every 8640 blocks which corresponds to 2 days.
          The reason for this two-phase approach is the high variability of hashrate in early stages of a project's life which initially requires a more frequent difficulty adjustment. On the other hand too short intervals also have disadvantages such as the tendency to oscillate and a possibly higher impact of faked timestamps. Therefore the second phase stretches the difficulty adjustment interval after the initial phase.
          </p>
          <p>
          While in Bitcoin the difficulty change is capped by factor 4, we have implemented a factor 2 cap because our difficulty adjustment is more frequent than 2 weeks.
          </p>
          <h2>
            Emission Scheme
          </h2>
          <p>
          Warthog was started without any premined or reserved amount of coins on June 29, 2023. The project implements a classical halving-based emission scheme with halvings occurring every 3153600 blocks (every 2 years). The emission for the next 4 years is summarized in the following table:
          </p>
          <div className='center'>
          <table>
       
            <thead><tr><th>Date</th><th>Lifetime</th><th>% of total supply in circulation</th></tr></thead>
            <tr><td>June 29 2023</td><td>0 years</td><td>0%</td></tr>
            <tr><td>June 29 2024</td><td>1 years</td><td>25%</td></tr>
            <tr><td>June 29 2025</td><td>2 years</td><td>50%</td></tr>
            <tr><td>June 29 2026</td><td>3 years</td><td>62.5%</td></tr>
            <tr><td>June 29 2027</td><td>4 years</td><td>75%</td></tr>

          </table>
          </div>
<p>
          There is no tail emission which means there is a hard cap of the amount in circulation. The hard cap is 18921599.68464 WART (around 19 million coins).
          </p>
          <p>
          Before halving occurs every block yields 3 WART as miner reward. Since the block time is 20 seconds, every day approximately 60/20 * 60 * 24 = 4320 blocks and 12960 WART are mined before halving.
          </p>
          <h2>
            Coin Precision
          </h2>
          <p>
          The reference implementation uses the C++ data type uint64_t for storing amounts of WART. This is a 64 bit unsigned integer. To represent fractions of a coin these values are interpreted in fixed point arithmetic with 8 digits precision. This means that 1 WART is internally represented as uint64_t number with value 100000000. The smallest representable step is 0.00000001 WART and represented as uint64_t number with value 1.
          </p>
          <p>
          For easier integration all API endpoints return both, the WART amount as a string (like "amount": "12.0"), and the internal integer representation indicated with label "E8" (like "amountE8": 1200000000).
          </p>
          <h2>
            One-of-a-kind chain descriptor based sync
          </h2>
          <p>
          This project is an experiment where the developers try out new things and push the boundary of what is possible in blockchain technology. We invented a completely unique and new way of syncing nodes which is not presently not known to the industry.
          </p>
          <p>
          Traditionally during synchronization new nodes request block bodies identified by block hashes. The replying node has to look up the block body based on the hash and then sends it back.
          </p>
          <p>
          In contrast we have invented a node communication protocol which works without block hashes for block body lookup. In our setup nodes keep track on fork heights with other nodes. A chain descriptor is used to identify a specific chain on the peer. When a node appends to its chain, the chain descriptor remains unchanged, however the current chain descriptor is increased when the consensus chain switches to a longer fork. Block bodies for previous chains are also kept for some time in case a peer requests them.
          </p>
          <p>
          When syncing nodes request block bodies identified by a chain descriptor and a block range. This way we avoid overhead in communication and lookup.
          </p>
          <h2>
            SQLite backed block store
          </h2>
          <p>
          SQLite is a battle-proven and well-established embedded SQL database engine. Warthog nodes use SQLite as their main storage engine for both, blocks and state. Nodes also index transactions and can provide basic blockchain explorer functionality directly via API thanks to SQLite.
          </p>
          <p>
          SQLite databases are also portable across 32-bit and 64-bit machines and between big-endian and little-endian architectures such that chain snapshots can easily shared. Furthermore SQLite supports transactions which are essential for data integrity even in case of a power outage or node crash.
          </p>
          <p>
          The default SQLite database file name used for the chain is chain.db3 and can be configured via the --chain-db command line option
          </p>
          <h2>
            Account based architecture
          </h2>
          <p>
          Warthog implements an account based architecture. This is similar to Ethereum and different from Bitcoin's UTXO model. Every account along with its balance is stored in the State table of the chain database. For efficiency reasons accounts are referred by their id: Every account is assigned a unique auto-incremented id value on first use. This makes blocks more space-efficient since a block id only requires 8 bytes of storage whereas an address would require 20 bytes.
          </p>
          <h2>
            Anatomy of a block
          </h2>
          <p>
          The binary content of a block is a concatenation of the following sections in their specified order:
          </p>
          <ol>
            <li>Mining section</li>
            <li>New address section</li>
            <li>Reward section</li>
            <li>Transfer section</li>
            </ol>
            <p>
          Below we describe the above sections. All numbers and id values are in network byte order.
          </p>
          <h3>
            Mining section
          </h3>
          <p>
          This section allows miners to put 4 bytes of arbitrary data to affect the merkle hash.
          </p>
<div className='center'>
<table><thead><th> byte range</th><th>content</th></thead>
         	<tr><td>1-4	</td><td>arbitrary data</td></tr>
          
          
          </table>
          </div>
          <h3>
            New address section
          </h3>
          <p>
          This section lists new addresses that receive payments in this block and therefore need to be added to the state table. This way they will be assigned a new id value which is referenced in the other sections to specify a particular account.
          </p>
          <div className='center'>
<table><thead><th> byte range</th><th>number n of new addresses</th></thead>
         	<tr><td>1-4	</td><td>arbitrary data</td></tr>
           <tr><td>5-(4+n*20)	</td><td>n addressess of 20 bytes each</td></tr>
          
          </table>
          </div>
          
          	
          	<p>
          Miners are responsible to ensure that the addresses appearing in the new address section are not already present in the state table and are actually referenced in this block. Otherwise the block is considered invalid.
          </p>
          <h3>
            Reward section
          </h3>
          <p>
          Mining reward is distributed to at least one reward address.
          </p>
          <div className='center'>
<table><thead><th> byte range</th><th>number r of reward entry</th></thead>
         	<tr><td>1-2	</td><td>arbitrary data</td></tr>
           <tr><td>3-(4+r*16)	</td><td>r reward entries</td></tr>
          
          </table>
          </div>

         
          	
          	<p>
          Every reward entry consists of 16 bytes:
          </p>
          <div className='center'>
<table><thead><th> byte range</th><th>number r of reward entry</th></thead>
         	<tr><td>1-8</td><td>accountId</td></tr>
           <tr><td>9-16</td><td>amount</td></tr>
          
          </table>
          </div>
          
          
          	<p>
          The sum of the amounts received by the addresses listed in the mining reward section must not exceed the total mining reward (block reward + transaction fees), otherwise the block is considered invalid.
          </p>
          <p>
          The total size of the mining section is 2+ r*16 bytes.
          </p>
          <h3>
            Transfer section
          </h3>
          <p>
          The transfer section contains the transfers made in this block. Its binary outline is as follows:
          </p>
          <div className='center'>
<table><thead><th> byte range</th><th>number r of reward entry</th></thead>
         	<tr><td>1-4</td><td>number tof transfer entries</td></tr>
           <tr><td>5-(4+t*99)</td><td>t transfer entries</td></tr>
          
          </table>
          </div>
          
          	<p>
          	
          Every transfer entry has the following structure:
          </p>
          <div className='center'>
<table><thead><th> byte range</th><th>number r of reward entry</th></thead>
         	<tr><td>1-8</td><td>fromAccountId</td></tr>
           <tr><td>9-16</td><td>pinNonce</td></tr>
           <tr><td>17-18</td><td>fee</td></tr>
           <tr><td>19-26</td><td>toAccountId</td></tr>
           <tr><td>27-34</td><td>amount</td></tr>
           <tr><td>35-99</td><td>recoverable signature (65 bytes)</td></tr>
          
          </table>
          </div>

         
          	
          	
          	
          	
          	<p>
          	
          Each payment entry has length 99 bytes. Compare this to the average transaction size of around 200 bytes per Bitcoin transfer.
          </p>
          <h2>
            Fee specification
          </h2>
          <p>
          For efficiency and compactness transaction fees are encoded as 2-byte floating-point numbers (16 bits), where the first 6 bits encode the exponent and the remaining 10 bits encode a 11 bit mantissa starting with an implicit 1. This means that fee values cannot be 0 and are of lower precision than regular amount values which use 4 bytes. A fee of value of 0 specified on transaction generation will automatically transform into the minimal fee value of 0.0000001 WART.
          </p>
          <div>
          <h2>
          Project Links
          </h2>
          <ul>
            <a href='https://bitcointalk.org/index.php?topic=5458046.0'>
          Bitcointalk
          </a><br/>
          <a href='https://github.com/warthog-network/Warthog'>
          GitHub
          </a><br/>
          <a href='https://discord.com/invite/QMDV8bGTdQ'>
          Discord
          </a><br/>
          <a href='https://www.warthog.network/'>
          Website
          </a><br/>
          <a href='https://wartscan.io/'>
          Explorer
          </a>  
          </ul>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Whitepaper