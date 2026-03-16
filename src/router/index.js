import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Episodios from '../views/Episodios.vue'
import Contacto from '../views/Contacto.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/episodios',
      name: 'episodios',
      component: Episodios
    },
    {
      path:"/contacto",
      name: 'contacto',
      component: Contacto
    }
  ],
})

export default router
