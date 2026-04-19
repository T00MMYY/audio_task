import { useState } from 'react'

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [liveMessage, setLiveMessage] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
    // Clear error on change
    if (errors[id]) {
      setErrors({ ...errors, [id]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido.'
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      setLiveMessage('Hay errores en el formulario. Revisa los campos marcados.')
    } else {
      setLiveMessage('')
    }
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('¡Gracias por tu participación! Tu mensaje y audio han sido enviados (simulación).')
    }
  }

  return (
    <section id="contacto" className="max-w-5xl mx-auto p-8 mb-20">
      <div aria-live="polite" className="sr-only">
        {liveMessage}
      </div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Registro y Participación</h1>
        <p className="text-slate-600 mt-2">
          Quieres sugerir una serie o enviarnos tu propia crítica? Te escuchamos!
        </p>
      </div>

      <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Introduce tu nombre"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                errors.nombre ? 'border-red-500' : 'border-slate-300'
              }`}
              required
              aria-describedby={errors.nombre ? 'error-nombre' : undefined}
            />
            {errors.nombre && (
              <p id="error-nombre" className="text-red-600 text-sm mt-1">
                {errors.nombre}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Introduce tu email"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
              required
              aria-describedby={errors.email ? 'error-email' : undefined}
            />
            {errors.email && (
              <p id="error-email" className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-2">
              Sugerencias de series o comentarios
            </label>
            <textarea
              id="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos qué serie deberíamos analizar en el próximo episodio..."
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                errors.mensaje ? 'border-red-500' : 'border-slate-300'
              }`}
              aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
            />
            {errors.mensaje && (
              <p id="error-mensaje" className="text-red-600 text-sm mt-1">
                {errors.mensaje}
              </p>
            )}
          </div>

          <div className="p-6 bg-blue-50 rounded-xl border border-dashed border-blue-300">
            <label htmlFor="audio" className="block text-sm font-bold text-blue-800 mb-2">
              ¡Envía tu propia grabación de audio!
            </label>
            <p className="text-xs text-blue-600 mb-4">
              Puedes grabar una crítica breve y la incluiremos en el programa.
            </p>
            <input
              type="file"
              id="audio"
              accept="audio/*"
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transform active:scale-95 transition-all shadow-lg shadow-blue-200"
          >
            Enviar participación
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto
