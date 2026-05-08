import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CriarTreino } from './pages/criarTreino/CriarTreino'
import { Home } from './pages/home/Home'
import { Treinos } from './pages/treinos/Treinos'


function App() {


  return (
    <>
    <BrowserRouter>   
    <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/treinos' element={<Treinos></Treinos>}></Route>
          <Route path='/criarTreino' element={<CriarTreino></CriarTreino>}></Route>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
