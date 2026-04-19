import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section id="home" className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
        <img
          src="/images/peakyBlinders.jpg"
          alt="Series de TV"
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Hablemos de Series</h1>
          <p className="text-lg text-slate-600">
            Bienvenidos a mi podcast original. Aquí analizamos los mejores estrenos, los finales más
            polémicos y te recomendamos qué ver el fin de semana.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500 mb-12">
        <h3 className="text-xl font-semibold mb-2">Escucha el episodio más reciente:</h3>
        <p className="text-gray-500 mb-4">"Las mejores series de 2024 hasta ahora"</p>

        <audio controls className="w-full">
          <source src="" type="audio/mpeg" />
          Tu navegador no soporta el audio.
        </audio>
      </div>

      <div className="flex justify-center gap-6">
        <Link
          to="/episodios"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Ver todos los episodios
        </Link>
        <Link
          to="/contacto"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
        >
          Ir a contacto
        </Link>
      </div>
    </section>
  )
}

export default Inicio
