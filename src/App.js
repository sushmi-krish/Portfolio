import './App.css';
import{Routes, Route} from 'react-router-dom';
  import Home from './containers/home/home';
  import AboutMe from './containers/AboutMe/about';
  import Skills from './containers/skills/skills';
  import Portfolio from './containers/portfolio/Portfolio';
  import Contact from './containers/contact/contact';
  import Navbar from './components/navbar/navbar';

  function App() {
    return (
      <div className="App">
    {/* partical.js */}
 
    {/* navbar */}
    <Navbar/>
    {/*main page content*/}
    <Routes>
      <Route index element={<Home/>} />
      <Route  path='/about' element={<AboutMe/>} />
      <Route  path='/portfolio' element={<Portfolio/>} />
      <Route  path='/skills' element={<Skills/>} />
      <Route  path='/contact' element={<Contact/>} />
    </Routes>
      </div>
    );
  }

  export default App;
