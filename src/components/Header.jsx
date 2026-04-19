import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-tight text-blue-600">
          Hablemos de <span className="text-slate-800">Series</span>
        </h1>

        <nav className="hidden md:flex gap-8 font-semibold text-slate-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link to="/episodios" className="hover:text-blue-600 transition-colors">
            Episodios
          </Link>
          <Link to="/contacto" className="hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-slate-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
