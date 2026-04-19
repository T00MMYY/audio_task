function Episodios() {
  return (
    <section id="episodios" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900">Catálogo de Episodios</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 font-bold text-xl">
                01
              </div>
              <h3 className="font-semibold text-lg">Análisis: El éxito de "The Last of Us"</h3>
            </div>
            <audio controls className="w-full">
              <source src="" type="audio/mpeg" />
              Tu navegador no soporta el audio.
            </audio>
          </div>

          <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 font-bold text-xl">
                02
              </div>
              <h3 className="font-semibold text-lg">Series que marcaron una época</h3>
            </div>
            <audio controls className="w-full">
              <source src="" type="audio/mpeg" />
              Tu navegador no soporta el audio.
            </audio>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Detrás de Escena: Producción
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Proceso de Grabación y Edición</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Para lograr un sonido profesional, se realizó una grabación de voz limpia en{' '}
                <strong>Audacity</strong>
                Se aplicó una <strong>Reducción de Ruido</strong> para eliminar el siseo de fondo y
                se utilizó la herramienta
                <strong>Auto Duck</strong> para que la música bajara automáticamente de volumen
                durante las intervenciones de voz.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Herramientas Utilizadas</h4>
              <ul className="list-disc list-inside text-slate-700 text-sm">
                <li>
                  <strong>Audacity:</strong> Edición, corte de silencios y mezcla.
                </li>
                <li>
                  <strong>FFmpeg:</strong> Optimización de archivos para la web.
                </li>
                <li>
                  <strong>Librerías CC:</strong> Música de fondo con licencias libres.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Episodios
