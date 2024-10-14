import Link from "next/link";

export default function Header (){
  return(
    <div  className="navbar">
        <div className="navdiv">
          <div className="logo">PROTOFILO</div>
        <ul>
        <Link href={"/"}>
          <li className="a">Home</li>
          </Link>

          <Link href={"about-us"}>
          <li className="a">About us</li>
          </Link>

          <Link href={"contact"}>
          <li className="a">Contact</li>
          </Link>

          <Link href={"jobs"}>
          <li className="a">Jobs</li>
          </Link>
        </ul>
        </div>
    </div>
  );
}