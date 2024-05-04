
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Aboutaccreditation from './components/Aboutaccreditation';
import Faculty from './components/Faculty';
import Facilities from './components/Facilities';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Popup from './components/Popup';
function App() {
  return (
    <>
     <Popup/>
     <Navbar/>
     <About/>
     <Aboutaccreditation/>
     <Faculty/>
     <Facilities/>
     <Contactus/>
     <Footer/>
    </>
  );
}  
export default App;
  