import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnderConstruction from './pages/UnderConstruction.jsx'

/*
 * INSTRUCCIONES PARA CLAUDE
 * --------------------------
 * Aquí se agregarán instrucciones de configuración y contexto del proyecto
 * para ser usadas con Claude más adelante.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        {/* Agrega aquí nuevas rutas conforme crezca el proyecto */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
