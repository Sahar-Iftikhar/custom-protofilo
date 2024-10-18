import Image from 'next/image'; 
export default function Content() {  
  return (  
    <div>  
        <link  
          rel="stylesheet"  
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"  
        />  
      <section className="home">  
        <div className="home-content">  
          <h1>Hi, It's <span>Sahar Iftikhar</span></h1>
          <h3 className="typing-text">{`I'm a`} <span></span></h3>  
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.</p>  
          <div className="social-icons">  
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>  
            <a href="#"><i className="fa-brands fa-github"></i></a>  
            <a href="#"><i className="fa-brands fa-twitter"></i></a>  
            <a href="#"><i className="fa-brands fa-instagram"></i></a>  
          </div>  
          <a href="#" className="btn">Click me</a>  
        </div>  
        <div className="home-img">  
          <Image src="/stock.jpg" alt="" width={500} height={300} />  
        </div>  
      </section>  
    </div> 
  );  
}