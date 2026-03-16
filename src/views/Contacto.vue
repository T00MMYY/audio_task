<template>
  <section id="contacto" class="max-w-5xl mx-auto p-8 mb-20">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-slate-800">Registro y Participación</h2>
      <p class="text-slate-600 mt-2">
        Quieres sugerir una serie o enviarnos tu propia crítica? Te escuchamos!
      </p>
    </div>

    <div class="bg-white border rounded-2xl shadow-sm p-6 md:p-10">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <div>
          <label for="nombre" class="block text-sm font-semibold text-slate-700 mb-2">Nombre completo</label>
          <input 
            type="text" 
            id="nombre" 
            placeholder="Introduce tu nombre"
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          >
        </div>

        <div>
          <label for="mensaje" class="block text-sm font-semibold text-slate-700 mb-2">Sugerencias de series o comentarios</label>
          <textarea 
            id="mensaje" 
            rows="4" 
            placeholder="Cuéntanos qué serie deberíamos analizar en el próximo episodio..."
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          ></textarea>
        </div>

        <div class="p-6 bg-blue-50 rounded-xl border border-dashed border-blue-300">
          <label class="block text-sm font-bold text-blue-800 mb-2">
            ¡Envía tu propia grabación de audio!
          </label>
          <p class="text-xs text-blue-600 mb-4">Puedes grabar una crítica breve y la incluiremos en el programa.</p>
          <input 
            type="file" 
            accept="audio/*" 
            class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-600 file:text-white
              hover:file:bg-blue-700 transition"
          >
        </div>

        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transform active:scale-95 transition-all shadow-lg shadow-blue-200"
        >
          Enviar participación
        </button>

      </form>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert('¡Gracias por tu participación! Tu mensaje y audio han sido enviados (simulación).');
};
</script>