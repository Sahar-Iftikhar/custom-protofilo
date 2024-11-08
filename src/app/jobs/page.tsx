import Image from 'next/image';  
import Header from "@/component/Header";  
import Footer from "@/component/Footer";  

export default function Jobs() {  
  return (  
    <div>  
      <Header/>  

      <div className="jobs-List-container">  
        <h2>5 Jobs</h2>  
        <div className="jobs">  
          {/* Job Information */}  
          {Array(5).fill(null).map((_, index) => (  
            <div className="job" key={index}>  
              <Image   
                src="/developer.png"   
                alt="software"  
                width={500}  
                height={300}   
              />  
              <h3 className="job-title">Front-End Developer</h3>  
              <div className="details">Responsible for designing, developing, and maintaining websites and applications.</div>  
              <a href="a" className="details-btn">More Details</a>  
              <div className="open-positions">4 open positions</div>  
            </div>  
          ))}  
        </div>  
      </div>  
      <Footer/>  
    </div>  
  );  
}
// import Image from 'next/image';  
// import Header from "@/component/Header"
// import Footer from "@/component/Footer"
// export default function Jobs (){
//   return(
//     <div>
//       <Header/>

//       <div className="jobs-List-container">
//         <h2>5 Jobs</h2>
//         <div className="jobs">
//           <div className="job">
//             <img src="/developer.png" alt="software"  width={500}  // Specify the width  
//         height={300} />
//             <h3 className="job-title">Front-End Developer</h3>
//             <div className="details">Responsible for designing, developing and maintaining websites and application
//             </div>
//             <a href="a" className="deatils-btn">More Deatils</a>
//             <div className="open-positions">4 open positions</div>
//           </div>

//           <div className="job">
//             <Image src="/developer.png" alt="software" width={500}  // Specify the width  
//         height={300} />
//             <h3 className="job-title">Front-End Developer</h3>
//             <div className="details">Responsible for designing, developing and maintaining websites and application
//             </div>
//             <a href="a" className="deatils-btn">More Deatils</a>
//             <div className="open-positions">4 open positions</div>
//           </div>

//           <div className="job">
//             <Image src="/developer.png" alt="software" height={200} width={200}/>
//             <h3 className="job-title">Front-End Developer</h3>
//             <div className="details">Responsible for designing, developing and maintaining websites and application
//             </div>
//             <a href="a" className="deatils-btn">More Deatils</a>
//             <div className="open-positions">4 open positions</div>
//           </div>

//           <div className="job">
//             <Image src="/developer.png" alt="software" width={500} height={300} />
//             <h3 className="job-title">Front-End Developer</h3>
//             <div className="details">Responsible for designing, developing and maintaining websites  and application
//             </div>
//             <a href="a" className="deatils-btn">More Deatils</a>
//             <div className="open-positions">4 open positions</div>
//           </div>

//           <div className="job">
//             <img src="/developer.png" alt="software" />
//             <h3 className="job-title">Front-End Developer</h3>
//             <div className="details">Responsible for designing, developing and maintaining websites  and application
//             </div>
//             <a href="a" className="deatils-btn">More Deatils</a>
//             <div className="open-positions">4 open positions</div>
//           </div>

//           <div className="job">
//             <img src="/developer.png" alt="software" />
//             <h3 className="job-title">Front-End Developer</h3>
//             <div className="details">Responsible for designing, developing and maintaining websites and application
//             </div>
//             <a href="a" className="deatils-btn">More Deatils</a>
//             <div className="open-positions">4 open positions</div>
//           </div>

//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }