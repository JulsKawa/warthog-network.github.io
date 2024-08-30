import OffcanvasExample from '../navbar';
import {  Row, Col } from 'react-bootstrap';
import exibitron from '../img/exibitron.png'
import tradeogre from '../img/tradeogre.png'
import xeggex from '../img/xeggex.png'
import Navbar2 from '../navbar2';
import { useState,useEffect } from 'react';
import caldera from '../img/caldera.png'

import discord from '../img/discord.png'

const Getstarted = () => {
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
                <h1 style={{ display: 'flex', justifyContent: 'space-evenly' }}>WALLETS—NODE—MINING—BUYING</h1>
                <section>
                    <h2>WALLETS</h2>
                    <p className='paragetstart'>To get started with Warthog network, you need first to create your wallet.
                        You can currently choose between 3 wallet solutions.
                        Each of them need an instance of the node, local or public</p>
                </section>
                <section>
                    <h2>1- wart dapp (GUI)</h2>
                    <p className='paragetstart'>WART DAPP is a GUI wallet working on Windows and Linux. It works with a node.
                        You can connect it with one click to a public node, or manually type your node IP.</p>
                    <li>
                        <a href="https://github.com/warthog-network/wart-dapp/releases">Download</a><br />
                    </li>
                    <li>
                        <a href="https://www.warthog.network/docs/guides/wart-dapp/">Guide</a>
                    </li>
                </section>
                <section>
                    <h2>2- wart-wallet (GUI)</h2>
                    <p className='paragetstart'>WART WALLET is also GUI wallet working on Windows and Linux. It works with a node. You have to manually type your node IP (local or public)
                    </p>
                    <li>
                        <a href="https://github.com/warthog-network/wart-wallet/releases">Download</a><br />
                    </li>
                    <li>
                        <a href="https://github.com/warthog-network/wart-wallet/blob/master/README.md">Guide</a>
                    </li>
                </section>
                <section>
                    <h2>3- wart-wallet (command-line)</h2>
                    <p className='paragetstart'>This is the original Warthog wallet, developped with the node and working on command-line.</p>
                    <li>
                        <a href="https://github.com/warthog-network/Warthog/releases">Download</a><br />
                    </li>
                    <li>
                        <a href="https://www.warthog.network/docs/guides/wart-wallet/">Guide</a>
                    </li>
                </section>
                <section>
                    <h2>NODE</h2>
                    <p className='paragetstart'>See here if you want to install your node on your computer (to support the blockchain decentralization, to use your wallet with a local node, or to mine solo for examples.)</p>
                    <li>
                        <a href="https://github.com/warthog-network/Warthog/releases">Download</a><br />
                    </li>
                    <li>
                        <a href="https://www.warthog.network/docs/guides/node/">Guide</a>
                    </li>
                </section>
                <section>
                    <h2>MINING</h2>
                    <p className='paragetstart'>Once you have created your wallet. You can start mining Warthog. Either solo on your own node, or on a pool. Mining Warthog through the Proof of Balanced Work algo (called Janushash) will use your CPU and GPU at the same time on your worker.</p>
                    <h2>1- MINING GUIDE</h2>
                    <p>See this guide to start mining now :</p>
                    <li>
                        <a href="https://www.warthog.network/docs/guides/mining-quickstart/">English</a><br />
                    </li>
                    <li>
                        <a href="https://www.warthog.network/docs/guides/mining-quickstart_fr/">French</a>
                    </li>
                    <h2>2- POOLS</h2>
                    <p>See here for a list of pools :</p>
                    <li>
                        <a href="https://miningpoolstats.stream/warthog">Miningpoolstats</a><br />
                    </li>
                    <li>
                        <a href="https://www.warthog.network/docs/links/#pools">Docs</a>
                    </li>
                </section>
                <br/>
                <br/>
                <h1 className='textunderline'>BUYING</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Row>
                        <Col>
                           <a href='https://exbitron.com/trade?market=wart-usdt'> <button  className='xButton'><img className='exchangeButton' src={exibitron} alt=''></img><p className='xtext'>exibitron</p></button></a>
                        </Col>
                        <Col>
                           <a href='https://xeggex.com/market/WART_USDT'> <button className='xButton'><img className='exchangeButton' src={xeggex} alt=''></img><p className='xtext'>xeggex</p></button> </a>
                        </Col>
                        <Col>
                        <a href='https://tradeogre.com/exchange/WART-USDT'> <button className='xButton'><img className='exchangeButton' src={tradeogre} alt=''></img><p className='xtext'>tradeogre</p></button></a>
                        </Col>
                        <Col>
                        <a href='https://discord.com/channels/1126486458698584107/1205481571109445633'>  <button className='xButton'><img className='exchangeButton' src={caldera} alt=''></img><p className='xtext'>caldera</p></button></a>
                        </Col>
                        <Col>
                        <a href='https://discord.com/channels/1126486458698584107/1133081739816861716'>  <button  className='xButton'><img className='exchangeButton' src={discord} alt=''></img><p className='xtext'>discord</p></button></a>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Getstarted;