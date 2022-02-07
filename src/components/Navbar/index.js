import React from 'react';
import{FaBars} from 'react-icons/fa'

import "../assets/css/style.css";
import "../assets/css/extra.css";
import { BrowserRouter} from "react-router-dom";
import { Nav , NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

//import emailjs from 'emailjs-com'




const Navbar = ({toggle}) => {

  
    return (
        <>
         <Nav>
           <NavbarContainer>
             <NavLogo to='/'>
             
             <img src="img/logo.png" alt="logo"/> 
               
             </NavLogo>
             <MobileIcon onClick={toggle}>
               <FaBars/>
             </MobileIcon>
             <NavMenu>
               <NavItem>
                 <NavLinks to="about">About This Channel</NavLinks>
                 </NavItem>
                 <NavItem> 
                   <NavLinks to="myposts">My Posts </NavLinks>
                   </NavItem>
                   <NavItem>
                      <NavLinks to="reachme">Reach Me</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to="whatsnew">What's New</NavLinks>
               </NavItem>
               <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
               </NavItem>

             </NavMenu>
             <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
               </NavBtn>
           </NavbarContainer>
           </Nav>         

        
<section className="banner_post">
<div className="container-fluid">
<div className="row justify-content-between">
<div className="banner_post_1 banner_post_bg_1">
<div className="banner_post_iner text-center">
<a href="category.html"><h5> Fashion / Lifestyle Hacks</h5></a>
<a href="single-blog.html"><h2>Fashion And Lifestyle Ideas </h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div><div className="banner_post_1 banner_post_bg_2">
<div className="banner_post_iner text-center">
<a href="category.html"><h5> Daily Life Hacks And Ideas</h5></a>
<a href="single-blog.html"><h2>Solution For Daily  Household Problems </h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
<div className="banner_post_1 banner_post_bg_3">
<div className="banner_post_iner text-center">
<a href="category.html"><h5> Daily Utility Hacks</h5></a>
<a href="single-blog.html"><h2>Daily Utility Stuffs Ideas And Hacks </h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>
</div>
</section>

<section className="all_post section_padding">
<div className="about-section">
  <div className="inner-container">
    <h1>About Us</h1>
    <p className="text">
    HACKIDEATRICK-HIT is made to bring tips, tricks, hacks and ideas for our viewer. This channel is dedicated to  bring only one tips/tricks/hacks on individual topic at a time so that it gets easy for the viewer to find hacks/ideas/tricks on individual topic. This channel will produce all types of HOW TO video's beneficial for all based on our experience.
     From household to lifestyle, will try to add as many aspects as possible.
    </p>
    
  </div>
</div>
</section>


<section className="all_post section_padding">
<div className="container">

<div className="row">

<div className="col-lg-12">
<div ><h3 className="text1">My Posts</h3></div>
<div className="row">

<div className="col-lg-4 col-sm-6">
<div className="single_post post_1">
  
<div className="single_post_img">
<img src="img/post/cleaning_tips.jpg" alt=""/>
</div>
<div className="single_post_text text-center">
<a href="category.html"><h5> Best Cleaning Tips</h5></a>
<a href="single-blog.html"><h2>Get Best Household Cleaning Tips</h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="single_post post_1">
<div className="single_post_img">
<img src="img/post/smelly_shoes.jpg" alt=""/>
</div>
<div className="single_post_text text-center">
<a href="category.html"><h5> How To Get Rid Of Smelly Shoes</h5></a>
<a href="single-blog.html"><h2>Tips For Getting Rid Of Smelly Shoes</h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="single_post post_1">
<div className="single_post_img">
<img src="img/post/howtooranizeanything1.jpg" alt=""/>
</div>
<div className="single_post_text text-center">
<a href="category.html"><h5> How to Organize Anything</h5></a>
<a href="single-blog.html"><h2>Learn to Oragnize things In A Right Way</h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="single_post post_1">
<div className="single_post_img">
<img src="img/post/right_pan1.jpg" alt=""/>
</div>
<div className="single_post_text text-center">
<a href="category.html"><h5> Best Pan </h5></a>
<a href="single-blog.html"><h2>Choose Right Pan for Your Kitchen</h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="single_post post_1">
<div className="single_post_img">
<img src="img/post/differenttypesof_health1.jpg" alt=""/>
</div>
<div className="single_post_text text-center">
<a href="category.html"><h5> All About Health</h5></a>
<a href="single-blog.html"><h2>Know All About Your Health</h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="single_post post_1">
<div className="single_post_img">
<img src="img/post/clean_gas.jpeg" alt=""/>
</div>
<div className="single_post_text text-center">
<a href="category.html"><h5> Clean Gas Stove</h5></a>
<a href="single-blog.html"><h2>How to Clean Your Gas Stove</h2></a>
<p>Posted on April 15, 2019</p>
</div>
</div>
</div>

</div>

</div>

</div>
</div>
</section>
<section>
<div className="form">
        <div className="header">
          <h1>Welcome!</h1>
          <p>Please provide your information below.</p>
        </div>
        <div className="inputcontainer">
          <form >
          {/* Below are the text fields that record the user's information. Each uses the onChange event handler, and sets the user input value to the component's state in real time using e.target.value    */}
          <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name"  defaultValue="" />
          <input  name="email" placeholder="Enter Email" defaultValue="" />
          
          
          <textarea name='message' rows='4' placeholder="Enter Message"/>
          
          
          {/* Below is the submit button. Using the onClick event handler, it changes the value of this.state.display to false, which would trigger the ternary in the render method to display the user's info instead of this form*/}
          <input type="Submit" defaultValue='Send'/>
          </form>
        </div>
      </div>
</section>

<section className="social_connect_part">
  <h3>What's New</h3> 
<div className="container-fluid">
<div className="row">
<div className="col-xl-12">
<div className="social_connect">
<div className="single-social_connect">
<div className="social_connect_img">
<img src="img/sidebar/gift_ideas.webp" className="" alt="blog"/>
<div className="social_connect_overlay">
<a href="#"><span className="ti-instagram"></span></a>
</div>
</div>
</div>
<div className="single-social_connect">
<div className="social_connect_img">
<img src="img/sidebar/hackgiveaway.webp" className="" alt="blog"/>
<div className="social_connect_overlay">
<a href="#"><span className="ti-instagram"></span></a>
</div>
</div>
</div>
<div className="single-social_connect">
<div className="social_connect_img">
<img src="img/sidebar/quick_decorationideas.webp" className="" alt="blog"/>
<div className="social_connect_overlay">
<a href="#"><span className="ti-instagram"></span></a>
</div>
</div>
</div>
<div className="single-social_connect">
<div className="social_connect_img">
<img src="img/sidebar/wheredofruitflies_comefrom.webp" className="" alt="blog"/>
<div className="social_connect_overlay">
<a href="#"><span className="ti-instagram"></span></a>
</div>
</div>
</div>
<div className="single-social_connect">
<div className="social_connect_img">
<img src="img/sidebar/shoppingon_sale.webp" className="" alt="blog"/>
<div className="social_connect_overlay">
<a href="#"><span className="ti-instagram"></span></a>
</div>
</div>
</div>
<div className="single-social_connect">
<div className="social_connect_img">
<img src="img/sidebar/wd-40.webp" className="" alt="blog"/>
<div className="social_connect_overlay">
<a href="#"><span className="ti-instagram"></span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<footer className="footer-area">
<div className="container">
<div className="row">
<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
<h4>about us</h4>
<p>Heaven fruitful doesn't over the lesser days appear cree ping seasons so behold bea Place likeness female form. Lesser Was green image lights fowl.</p>
</div>
<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
<h4>Contact Info</h4>
<ul>

<li><p>Email : <a href="business.hackideatrick@gmail.com" className="__cf_email__" data-cfemail="e78e898188a784888b88958b8e85c984888a">business.hackideatrick@gmail.com</a></p></li>
</ul>
</div>
<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
<h4>Important Link</h4>
<ul>
<li><a href="#">Weekly Updates</a></li>
<li><a href="#">Reach Me</a></li>
<li><a href="#">Posts</a></li>



</ul>
</div>
<div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
<h4>Newsletter</h4>
<p>You Can Drop Your Queries To My Email-Id</p>
<div className="form-wrap" id="mc_embed_signup">


</div>
</div>
</div>
<div className="copyright_text">
<div className="row align-items-center">
<div className="col-lg-8">
<div className="copyright_part">
<p className="footer-text m-0">Copyright © 2022 All rights reserved <span className="px-2">|</span> This website is Made with <i className="ti-heart"></i> by Nebula Tech</p>
</div>
</div>
<div className="col-lg-4 text-center text-lg-right">
<div className="footer-social">
<a href="https://www.facebook.com/Hackideatrick-105208221554690"><i className="ti-facebook"></i></a>

<a href="https://www.instagram.com/hackideatrick/"><i className="ti-instagram"></i></a>

</div>
</div>
</div>
</div>
</div>
</footer>
        </>
    );
};

export default Navbar
