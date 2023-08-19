import './App.css';
import Navbar from './components/Navbar';
import dog from './images/dog.mp4'
import About from './components/About';
import Prices from './components/Prices';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logo from './images/uphill.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <header>
      <Navbar />

      </header>
      <main>
        <div id='hero'>
          
          <video id='horse-vid' autoPlay muted loop playsInline controls={false}>
                  <source src={dog} type="video/mp4"/>
                  Your browser does not support the video tag.
                  
          </video>
          <div id='gradient'>
            <img id='hero-logo' src={logo}/>
          </div>

        </div>


        <About />

        <Prices />

        <Booking />


        <Gallery />

        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;
