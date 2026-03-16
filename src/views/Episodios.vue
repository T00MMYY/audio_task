<template>
  <section id="episodios" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900">Catálogo de Episodios</h2>
        <p class="text-slate-600">Análisis profundo de tus series favoritas</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mb-16">
        <div class="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-indigo-100 p-3 rounded-lg text-indigo-600 font-bold text-xl">01</div>
            <h3 class="font-semibold text-lg">Análisis: El éxito de "The Last of Us"</h3>
          </div>
          <audio controls class="w-full">
            <source src="" type="audio/mpeg">
            Tu navegador no soporta el audio.
          </audio>
        </div>

        <div class="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-indigo-100 p-3 rounded-lg text-indigo-600 font-bold text-xl">02</div>
            <h3 class="font-semibold text-lg">Series que marcaron una época</h3>
          </div>
          <audio controls class="w-full">
            <source src="" type="audio/mpeg">
            Tu navegador no soporta el audio.
          </audio>
        </div>
      </div>

      <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h3 class="text-2xl font-bold text-slate-900 mb-6 text-center">Detrás de Escena: Producción</h3>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-semibold text-indigo-600 mb-2">Proceso de Grabación y Edición</h4>
            <p class="text-slate-700 text-sm leading-relaxed">
              Para lograr un sonido profesional, se realizó una grabación de voz limpia en <strong>Audacity</strong>
              Se aplicó una <strong>Reducción de Ruido</strong> para eliminar el siseo de fondo y se utilizó la herramienta 
              <strong>Auto Duck</strong> para que la música bajara automáticamente de volumen durante las intervenciones de voz.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-indigo-600 mb-2">Herramientas Utilizadas</h4>
            <ul class="list-disc list-inside text-slate-700 text-sm">
              <li><strong>Audacity:</strong> Edición, corte de silencios y mezcla.</li>
              <li><strong>FFmpeg:</strong> Optimización de archivos para la web.</li>
              <li><strong>Librerías CC:</strong> Música de fondo con licencias libres.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>