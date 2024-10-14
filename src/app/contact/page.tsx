import Header from "@/component/Header"
import Footer from "@/component/Footer"

export default function Contact (){
  return(
    <div className=".Contact">
      <Header/>
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
          <div className="contact-left-title">
            <h2>Get In Touch</h2>
            <hr />
          </div>
          <input type="hidden" name="access_key" value="a0fe47a3-af52-43b9-8eb4-862bcc6079a8"></input>
          <input type="text" name="name" placeholder="Your Name"  className="contact-input" required/>
          <input type="email" name="email" placeholder="Your Email" className="contact-input" required/>
          <textarea name="message" placeholder="Your Message" className="contact-input" required></textarea>
          <button type="submit">Submit <img src="/arrow_icon.png" alt="arrow" /></button>
        </form>
      <div className="contact-right">
        <img src="/contactUs.png" alt="image" />
      </div>
      </div>
      <Footer/>
    </div>
  );
}