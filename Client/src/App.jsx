import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Page';
import Navbar from './Components/Navbar';
import Aboutus from './Pages/about';
import OurServices from './Pages/Ourservices';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Collab from './Pages/Collab';
import Team from './Pages/team';
import './App.css';
import './i18n'; // Import i18n configuration

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;