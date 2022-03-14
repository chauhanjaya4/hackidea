
import React , {useState, useEffect} from 'react';
import{FaBars} from 'react-icons/fa'

import "../assets/css/style.css";
import "../assets/css/extra.css";
import { BrowserRouter} from "react-router-dom";
import { Nav , NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,
  NavBtn,NavBtnLink} from './NavbarElements';
import { animateScroll as scroll}  from 'react-scroll';
//import emailjs from 'emailjs-com'




const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  
 

  const changeNav = () => {
 if(window.scrollY >= 80)
 {
   setScrollNav(true)

 }
else
{
  setScrollNav(false)
}


  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }; 
    return (
        <>
         <Nav scrollNav= {scrollNav}>
           <NavbarContainer>
             <NavLogo to='/'>
             
             <img src="img/logo.png" alt="logo"/> 
               
             </NavLogo>
             <MobileIcon onClick={toggleHome}>
               <FaBars/>
             </MobileIcon>
             <NavMenu>
               <NavItem>
                 <NavLinks to='about' 
                 smooth={true} 
                 duration={500} 
                 spy={true} 
                 exact='true' 
                 offset={-80}
                 activeClass="active">
                   About This Channel
                   </NavLinks>
                 </NavItem>
                 <NavItem> 
                   <NavLinks to='myposts'
                   smooth={true} 
                   duration={500} 
                   spy={true} 
                   exact='true' 
                   offset={-80}
                   
                   >My Posts </NavLinks>
                   </NavItem>
                   <NavItem>
                      <NavLinks to='reachme'
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      >Reach Me</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='whatsnew'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >What's New</NavLinks>
               </NavItem>
               <NavItem>
                        <NavLinks to='signup'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Sign Up</NavLinks>
               </NavItem>

             </NavMenu>
             <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
               </NavBtn>
           </NavbarContainer>
           </Nav>         

        

        </>
    );
};

export default Navbar
