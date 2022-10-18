import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Educacao from './Pages/Educacao'
import Emprego from './Pages/Emprego'
import MeioAmbiente from './Pages/MeioAmbiente'
import Moradia from './Pages/Moradia'
import Home from './Pages/Home'
import Login from './Pages/Login'



function App() {
  return (
    <main className='corpo'>
      <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/Educacao' element={<Educacao/>}/>
        <Route path = '/Emprego' element={<Emprego/>}/>
        <Route path = '/MeioAmbiente' element={<MeioAmbiente/>}/>
        <Route path = '/Moradia' element={<Moradia/>}/>
        <Route path = '/Cadastro' element={<Cadastro/>}/>
        <Route path = '/Login' element = {<Login/>}/>
      </Routes>
        </Router>
    </main>
);
}
export default App;
