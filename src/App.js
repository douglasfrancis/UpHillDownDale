import './App.css';
import Navbar from './components/Navbar';
import cloud from './cloud.jpeg'
import About from './components/About';
import Prices from './components/Prices';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logo from './navlogo.png'

function App() {
  return (
    <div className="App">
      <header>
      <Navbar />

      </header>
      <main>
        <img id='cloud' src={cloud} alt='Bosley Cloud'/>

    

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
