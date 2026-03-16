<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-5xl mx-auto flex justify-between items-center p-4">
      
      <h1 class="text-2xl font-bold tracking-tight text-blue-600">
        Hablemos de <span class="text-slate-800">Series</span>
      </h1>

      <nav class="hidden md:flex gap-8 font-semibold text-slate-600">
        <router-link 
          to="/" 
          class="hover:text-blue-600 transition-colors"
          active-class="text-blue-600"
        >
          Inicio
        </router-link>
        <router-link 
          to="/episodios" 
          class="hover:text-blue-600 transition-colors"
          active-class="text-blue-600"
        >
          Episodios
        </router-link>
        <a href="/contacto" class="hover:text-blue-600 transition-colors">
          Contacto
        </a>
      </nav>

      <div class="md:hidden">
        <button class="text-slate-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>