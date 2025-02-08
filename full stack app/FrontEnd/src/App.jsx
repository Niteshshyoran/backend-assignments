import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import './App.css'
import { CreateNote } from './components/CreateNote'
import { Notes } from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/createnote' element={<CreateNote/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
