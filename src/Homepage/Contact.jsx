import { useRef } from "react";
import SectionSubTitle from "../Components/SectionSubTitle";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kzch1kw', 'template_51xdnua', form.current, 'WYXuP9WUzaqzl_jrP')
        .then((result) => {
            if(result.text === 'OK'){

                alert('Message sent successfully !')
            }
            
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
return (
    <>
    <SectionSubTitle text="Let's work together"/>
<div className="container-primary  p-[0px] border-none" data-aos="fade-up" id="contact">
    <div className="wrapper flex flex-col p-5 md:p-10">
   <form className="w-full" ref={form} onSubmit={sendEmail}>
   <input required type="text" name='user_name' className="input text-[#ffffff73] outline-none" placeholder="Enter your name here"/>

   <input required type="email" name='user_email' className="input my-5 text-[#ffffff73] outline-none" placeholder="Enter your email here"/>

   <input type="text" name='user_phone' className="input mb-5 text-[#ffffff73] outline-none" placeholder="Enter your phone number"/>

   <textarea name="message" cols="30" rows="8" className="input outline-none" placeholder="Write details here"></textarea>
   <button className="px-3 active:bg-[#ffffff73] py-2 w-24 text-white elite social rounded-lg mt-4">Send</button>
   </form>
   <div className="flex flex-wrap md:flex-nowrap pt-5 gap-4 justify-center items-center">
    <a href="https://www.facebook.com/fayez.chowdhury.7374/" target="_blank"  rel="noreferrer" className=" social"><FaFacebook/></a>
    <a href="https://github.com/fayezf" target="_blank"  rel="noreferrer" className=" social"><FaGithub/></a>
    <a href="https://www.linkedin.com/in/muhammad-fayez-48989127b/" target="_blank"  rel="noreferrer" className=" social"><FaLinkedin/></a>
    <a href="https://www.instagram.com/mohammad_fayez_ahmed/" target="_blank"  rel="noreferrer" className=" social"><FaInstagram/></a>
    
   </div>
    </div>
</div>
    </>
);
};
export default Contact;