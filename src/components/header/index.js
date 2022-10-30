import './header.css';
import { Link } from "react-router-dom"

const Header = () => {
    const handleMobileNav = (event) =>{
        let mobileNav = document.getElementById("mobileNav");
        (mobileNav.style.display === "block")?mobileNav.style.display = "none":mobileNav.style.display = "block";

    }
  return (
    <>
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <h1>VideoPlayer</h1>
                    </div>
                    <ul>
                        <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                        <li className="nav-items"><Link to="/allVideos" className="nav-links">All Videos</Link></li>
                        <li className="nav-items"><Link to="/playlist" className="nav-links">Playlist</Link></li>
                    </ul>
                    <div className="bars" onClick={handleMobileNav}>
                    <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
                    <div id="mobileNav">
                        <ul>
                            <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                            <li className="nav-items"><Link to="/allVideos" className="nav-links">All Videos</Link></li>
                            <li className="nav-items"><Link to="/playlist" className="nav-links">Playlist</Link></li>
                        </ul>
                    </div>
            </div>
        </header>
    </>
  )
}

export default Header