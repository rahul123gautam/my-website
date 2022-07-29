import React from "react";
import emailjs from '@emailjs/browser'

import Linkdin from './Image/linkdin.png'
import Github from './Image/github.png'
import Twitter from './Image/twitter.png'
import Insta from './Image/instagram.png'
import Facebook from './Image/facebook.png'
import Gmail from './Image/gmail.png'
export default function Contact(){
    const Link=()=>{
        window.open("https://www.linkedin.com/in/rahul-maurya-968606195/")
    }
    const Git=()=>{
        window.open("https://github.com/rahul123gautam")
    }
    const Twit=()=>{
        window.open("https://twitter.com/98rkgautam")
    }
    const Face=()=>{
        window.open("https://www.facebook.com/profile.php?id=100010939052383")
    }
    const Inst=()=>{
        window.open("https://www.instagram.com/rm_maurya_/")
    }
    const Gml=()=>{
        window.open("https://mail.google.com/mail/u/0/#sent?compose=new")
    }
   
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_9nmiuiz', 'template_wqf0ra6', e.target, 'nAXFMtwryResV3iRC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        e.target.reset();
    }
    return(
        <div className="contact">
            <h1>💌Send A Message💌</h1>
            <div>
                <form  className="form" onSubmit={sendEmail}>
                    <input type="name" className="input" placeholder="Name" required name="name"></input>
                    <input type="email" className="input" placeholder="Email Address" required name="email"></input>
                    <textarea  className="input message" placeholder="Write Message here..." required name="message"></textarea>
                    <input type="submit"  className="submit" value="Send" required></input>
                </form>
            </div>
            <h1>📱Connect With Me📱</h1>
            <div className="connect">
                <img src={Linkdin} alt="Linkdin" className="connect-size" onClick={Link}></img>
                <img src={Github} alt="Github" className="connect-size" onClick={Git}></img>
                <img src={Twitter} alt="Twitter" className="connect-size" onClick={Twit}></img>
                <img src={Insta} alt="Instagram" className="connect-size" onClick={Inst}></img>
                <img src={Facebook} alt="Facebok" className="connect-size" onClick={Face}></img>
                <img src={Gmail} alt="Gmail" className="connect-size" onClick={Gml}></img>
            </div>
        </div>
    )
}