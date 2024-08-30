import React from 'react'
import logo from './navlogo.png';
import { Link } from "react-router-dom";
import {Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from './img/github.svg';
import discord from './img/discord.svg';
import telegram from './img/telegram.svg';
import twitter from './img/twitter.svg'
import { useState,useEffect } from 'react';
const Navbar2 = () => {
  
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
    
      <Navbar collapseOnSelect expand="sm" bg="black" variant="dark">
        
      <Navbar.Brand className='Brand' href="./"> <img src={logo} className='logo'  alt="logo" /> { (windowDim.winWidth>1200) 
? null 
 :         <Nav>     <Nav.Link className='logohome' href='https://github.com/warthog-network'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={github}  alt="logo" /></p>  </Nav.Link>
        
 <Nav.Link className='logohome' href='https://discord.com/invite/QMDV8bGTdQ'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={discord}  alt="logo" /></p>  </Nav.Link>
 
 <Nav.Link className='logohome' href='https://t.me/warthognetwork'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={telegram}  alt="logo" /></p>  </Nav.Link>
 <Nav.Link className='logohome' href='https://x.com/warthognetwork'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={twitter}  alt="logo" /></p>  </Nav.Link>
 
 </Nav>
} </Navbar.Brand>
   
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" me-auto">
        <Nav.Link className="logohome " as={Link} to={"/"}>
                    
                    <p className="logohome1 logo1left" >MAIN</p>
                </Nav.Link>
       <Nav.Link className="logohome " as={Link} to={"/getstarted"}>
                    
                    <p className=" logohome1 logo1left" >GET STARTED</p>
                </Nav.Link>
                <Nav.Link className="logohome " as={Link} to={"/news"}>
    
    <p className="logohome1 logo1left" >NEWS</p>
</Nav.Link>
<Nav.Link className="logohome " as={Link} to={"/algorithim"}>
                    
                    <p className="logohome1 logo1left" >ALGORITHIM</p>
                </Nav.Link>
                
                <Nav.Link className="logohome " as={Link} to={"/whitepaper"}>
                    
                    <p className="logohome1 logo1left" >WHITEPAPER</p>
                </Nav.Link> 
                <Nav.Link className="logohome " as={Link} to={"/faq"}>
                    
                    <p className="logohome1 logo1left" >FAQS</p>
                </Nav.Link>
                 <Nav.Link className="logohome " as={Link} to={"https://wartscan.io/"}>
                    
                    <p className="logohome1 logo1left" >EXPLORER</p>
                </Nav.Link>
                <Nav.Link className="logohome " as={Link} to={"https://www.warthog.network/docs/"}>
                    
                    <p className="logohome1 logo1left" >DOCS</p>
                </Nav.Link>
               
         
          {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={"./movieplayer"}>Lost Hymns</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"./reader"}>E-Publications</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>*/}
        </Nav>
      
        { (windowDim.winWidth<1200) 
? null 
 :         <Nav>     <a className='logohome' href='https://github.com/warthog-network'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={github}  alt="logo" /></p>  </a>
        
 <a className='logohome' href='https://discord.com/invite/QMDV8bGTdQ'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={discord}  alt="logo" /></p>  </a>
 
 <a className='logohome' href='https://t.me/warthognetwork'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={telegram}  alt="logo" /></p>  </a>
 <a className='logohome' href='https://x.com/warthognetwork'>   <p className='logohome2 logo1left ' ><img  className='navlink'src={twitter}  alt="logo" /></p>  </a>
 
 </Nav>
}
         
         
      </Navbar.Collapse>
     
      </Navbar>
      
      
      
      </div>
      

  )
}

export default Navbar2