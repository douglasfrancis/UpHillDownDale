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

function App() {
  return (
    <div className="App">
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
