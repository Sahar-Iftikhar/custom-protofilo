import Image from 'next/image'; // Ensure to import Image from 'next/image'  
import Header from "@/component/Header";  
import Footer from "@/component/Footer";  

export default function Contact() {  
  return (  
    <div className="Contact">  
      <Header />  
      <div className="contact-container">  
        <form   
          action="https://api.web3forms.com/submit"   
          method="POST"   
          className="contact-left"  
        >  
          <div className="contact-left-title">  
            <h2>Get In Touch</h2>  
            <hr />  
          </div>  
          <input   
            type="hidden"   
            name="access_key"   
            value="a0fe47a3-af52-43b9-8eb4-862bcc6079a8"   
          />  
          <input   
            type="text"   
            name="name"   
            placeholder="Your Name"  
            className="contact-input"   
            required   
          />  
          <input   
            type="email"   
            name="email"   
            placeholder="Your Email"   
            className="contact-input"   
            required   
          />  
          <textarea   
            name="message"   
            placeholder="Your Message"   
            className="contact-input"   
            required   
          />  
          <button type="submit">  
            Submit <Image src="/arrow_icon.png" alt="arrow" width={16} height={16} />  
          </button>  
        </form>  
        <div className="contact-right">  
          <Image src="/contactUs.png" alt="Contact Us" width={500} height={300} />  
        </div>  
      </div>  
      <Footer />  
    </div>  
  );  
}