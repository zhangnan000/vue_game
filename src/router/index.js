import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Start from '@/components/start'
import Game from '@/components/game'
import Levelone1 from '@/components/gameboard/levelone1'
import Levelone2 from '@/components/gameboard/levelone2'
import Leveltwo1 from '@/components/gameboard/leveltwo1'
import Leveltwo2 from '@/components/gameboard/leveltwo2'
import Levelthree1 from '@/components/gameboard/levelthree1'
import Levelthree2 from '@/components/gameboard/levelthree2'
import Plam from '@/components/plam'
import Shared from '@/components/shared'
import Register from '@/components/register'
import Rules from '@/components/rules'
import Download from '@/components/download'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',component: Index},
    {path:'/start',name: 'start', component: Start},
    {path:'/plam',name: 'plam', component: Plam},
    {path:'/register',name: 'register', component: Register},
    {path:'/shared',name: 'shared', component: Shared},
    {path:'/rules',name: 'rules', component: Rules},
    {path:'/download',name: 'download', component: Download},
    {
      path:'/game',
      name: 'game', 
      component: Game,
      children:[
        {path:'/levelone1',name: 'levelone1', component: Levelone1},
        {path:'/levelone2',name: 'levelone2', component: Levelone2},
        {path:'/leveltwo1',name: 'leveltwo1', component: Leveltwo1},
        {path:'/leveltwo2',name: 'leveltwo2', component: Leveltwo2},
        {path:'/levelthree1',name: 'levelthree1', component: Levelthree1},
        {path:'/levelthree2',name: 'levelthree2', component: Levelthree2},
      ]
    },    
  ]
})
