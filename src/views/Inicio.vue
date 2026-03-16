<template>
  <section id="home" class="max-w-5xl mx-auto p-8">
    
    <div class="flex flex-col md:flex-row items-center gap-10 mb-12">
      <img 
        src="/images/peakyBlinders.jpg" 
        alt="Series de TV" 
        class="w-64 h-64 object-cover rounded-lg shadow-md"
      />
      
      <div class="text-center md:text-left">
        <h2 class="text-4xl font-bold text-slate-800 mb-4">Hablemos de Series</h2>
        <p class="text-lg text-slate-600">
          Bienvenidos a mi podcast original. Aquí analizamos los mejores estrenos, 
          los finales más polémicos y te recomendamos qué ver el fin de semana.
        </p>
      </div>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500 mb-12">
      <h3 class="text-xl font-semibold mb-2">Escucha el episodio más reciente:</h3>
      <p class="text-gray-500 mb-4">"Las mejores series de 2024 hasta ahora"</p>
      
      <audio controls class="w-full">
        <source src="" type="audio/mpeg">
        Tu navegador no soporta el audio.
      </audio>
    </div>

    <div class="flex justify-center gap-6">
      <router-link to="/episodios" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Ver todos los episodios
      </router-link>
      <a href="/contacto" class="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
        Ir a contacto
      </a>
    </div>

  </section>
</template>