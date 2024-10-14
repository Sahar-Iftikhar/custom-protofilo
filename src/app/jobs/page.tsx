import Image from 'next/image'; // Ensure to import Image from 'next/image'  
import Header from "@/component/Header"
import Footer from "@/component/Footer"
export default function Jobs (){
  return(
    <div>
      <Header/>

      <div className="jobs-List-container">
        <h2>5 Jobs</h2>
        <div className="jobs">
          <div className="job">
            <img src="/developer.png" alt="software" />
            <h3 className="job-title">Front-End Developer</h3>
            <div className="details">Responsible for designing, developing and maintaining websites and application
            </div>
            <a href="a" className="deatils-btn">More Deatils</a>
            <div className="open-positions">4 open positions</div>
          </div>

          <div className="job">
            <Image src="/developer.png" alt="software" />
            <h3 className="job-title">Front-End Developer</h3>
            <div className="details">Responsible for designing, developing and maintaining websites and application
            </div>
            <a href="a" className="deatils-btn">More Deatils</a>
            <div className="open-positions">4 open positions</div>
          </div>

          <div className="job">
            <img src="/developer.png" alt="software" />
            <h3 className="job-title">Front-End Developer</h3>
            <div className="details">Responsible for designing, developing and maintaining websites and application
            </div>
            <a href="a" className="deatils-btn">More Deatils</a>
            <div className="open-positions">4 open positions</div>
          </div>

          <div className="job">
            <img src="/developer.png" alt="software" />
            <h3 className="job-title">Front-End Developer</h3>
            <div className="details">Responsible for designing, developing and maintaining websites  and application
            </div>
            <a href="a" className="deatils-btn">More Deatils</a>
            <div className="open-positions">4 open positions</div>
          </div>

          <div className="job">
            <img src="/developer.png" alt="software" />
            <h3 className="job-title">Front-End Developer</h3>
            <div className="details">Responsible for designing, developing and maintaining websites  and application
            </div>
            <a href="a" className="deatils-btn">More Deatils</a>
            <div className="open-positions">4 open positions</div>
          </div>

          <div className="job">
            <img src="/developer.png" alt="software" />
            <h3 className="job-title">Front-End Developer</h3>
            <div className="details">Responsible for designing, developing and maintaining websites and application
            </div>
            <a href="a" className="deatils-btn">More Deatils</a>
            <div className="open-positions">4 open positions</div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}