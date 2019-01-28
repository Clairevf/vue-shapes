import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main'
import NewGame from '@/views/newGameView'

Vue.use(Router);

console.log('router js incorporated');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/new-game',
      name: 'new-game', 
      component: NewGame
    }
  ]
})
