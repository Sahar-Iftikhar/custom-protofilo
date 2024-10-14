import Header from "@/component/Header"
import Footer from "@/component/Footer"

export default function About (){
  return(
    <div>
      <Header/>
      <div className="container">
      <div className="content">
      <h2>Welcome To Our Website</h2>
      <p>I am a Enthusiastic and dedicated Computer Science student with a
 strong foundation in programming and web development,
 currently enhancing my skills in artificial intelligence through the
 Governor House GIAIC program. Proficient in various programming languages, with hands
on experience in TypeScript and Next.js. Passionate about
 leveraging technology to create innovative solutions and foster a
 deeper understanding of computer science in others</p>
 <button className="cta-button">Learn More</button>
 </div>
  <img className="book-image" src="/book.jpeg" alt="image" />
 </div>
 <Footer/>
    </div>
  )
}