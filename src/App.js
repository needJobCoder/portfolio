import logo from './logo.svg';
import Navbar from './components/Navbar';
import "./styles/navBar.css"
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';
import NeedJobCoderImageURL from './images/NeedJobCoderAttempt.png' 
import About from './components/About';


function App() {

  // Home Page
  const CardHomeBackground = "https://wallpaperaccess.com/full/1769054.gif"
  const techImage = "https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon-thumbnail.png";
  const description = 
  `As a fresh-faced coder, I'm eager to explore the exciting and dynamic world of software development. 
  My skills span a range of technologies and tools, including Unity, Godot, MERN, Blender, and Aseprite. I
   have a particular passion for game development, and I love creating immersive experiences that transport
    players to new worlds`

// About Page
const mernImage = "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg";
const godotImage = "https://www.thumbsticks.com/wp-content/uploads/2021/09/Godot-Engine-logo-960x720.jpg";
const unityImage = "https://logowik.com/content/uploads/images/unity-new-20212110.jpg";
  return (
    <Router>
      <div className='NavbarContainer'>
        <nav className="NavbarContainer_navbar">
          <ul className="NavbarContainer_navbar-nav">
            <li className="NavbarContainer_navbar-nav_nav-item">
              <Link className="NavbarContainer_navbar-nav_nav-item_nav-link" to="/">Home</Link>
            </li>
            <li className="NavbarContainer_navbar-nav_nav-item">
              <Link className="NavbarContainer_navbar-nav_nav-item_nav-link" to="/About">About</Link>
            </li>
            <li className="NavbarContainer_navbar-nav_nav-item">
              <Link className="NavbarContainer_navbar-nav_nav-item_nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
          <img className="NavbarContainer_card-image" src={NeedJobCoderImageURL} alt={"Error"} />
        </nav>
      </div>
      <Routes>
            <Route path="/" element={<Card title={"NeedJobCoder"} description={description} imageUrl={CardHomeBackground} techImage={techImage} />} />
            <Route path="/About" element={<About godotImage={godotImage} mernImage={mernImage} unityImage={unityImage} />} />
          </Routes>
    </Router>
  );
}

export default App;
