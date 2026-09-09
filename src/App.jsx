import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import Disciplinas from './pages/Disciplinas'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/disciplinas" element={<Disciplinas />} />
    </Routes>
  )
}

export default App