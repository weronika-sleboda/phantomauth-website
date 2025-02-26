import './App.css';
import { Logo } from './components/layout/Logo.jsx';
import { Nav } from './components/layout/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About.jsx';
import { Demo } from './pages/Demo.jsx';
import { Docs } from './pages/Docs.jsx';
import { Tutorial } from './pages/Tutorial.jsx';

function App() {


  return (
    <BrowserRouter>
      <Logo/>
      <Nav/>
      <main>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/demo' element={<Demo/>} />
        <Route path='/docs' element={<Docs/>} />
        <Route path='/tutorial' element={<Tutorial/>} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
