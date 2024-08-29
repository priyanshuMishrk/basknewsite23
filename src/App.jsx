import logo from './logo.svg';
import './App.css';
import './Media.css'
import Home from './Pages/Home';
import Work from './Pages/Work.jsx';
import Teams from './Pages/Teams.jsx';
import Vision from './Pages/Vision.jsx';
import Mission from './Pages/Mission.jsx';
import Belief from './Pages/Belief.jsx';
import Csend from './Pages/ContactSend.jsx';
import Cget from './Pages/ContactUs.jsx';
import { InputProvider } from './Context/formContext.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Utils/GT.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
              <InputProvider>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Home/>}/>
              <Route path="/work" element={<Work/>}/>
              <Route path="/team" element={<Teams/>}/>
              <Route path="/vision" element={<Vision/>}/>
              {/* <Route path="/mission" element={<Mission/>}/>
              <Route path="/belief" element={<Belief/>}/>
              <Route path='/contact' element={<Csend/>} /> */}
              <Route path='/contactUs' element={<Cget/>} />
            </Routes>
              </InputProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
