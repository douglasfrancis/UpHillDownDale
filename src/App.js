import './App.css';
import Navbar from './components/Navbar';
import cloud from './cloud.jpeg'
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
        <div id='head-img'>
          <img  id='nav-logo' src={logo} alt='logo' />

        </div>

        <div className='divider' />

        <About />
        <div className='divider' />

        <Prices />
        <div className='divider' />

        <Booking />

        <div className='divider' />

        <Gallery />
        <div className='divider' />

        <Contact />
        <div className='divider' />

      </main>
      <Footer />
    </div>
  );
}

export default App;
