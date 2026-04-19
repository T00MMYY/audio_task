import { Outlet, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Inicio from './views/Inicio.jsx'
import Episodios from './views/Episodios.jsx'
import Contacto from './views/Contacto.jsx'
import AuditReport from './components/AuditReport.jsx'
function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
      >
        Saltar al contenido
      </a>
      <section className="italic">
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </section>
      <AuditReport />
    </>
  )
}

export default App
