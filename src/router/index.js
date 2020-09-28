import Vue from 'vue'
import VueRouter from 'vue-router'
import todolist from '../components/Todo-List'
import demo1 from '../components/Demo1'
import demo2 from '../components/Demo2'
import demo3 from '../components/Demo3'
import demo4 from '../components/Demo4'
import demo5 from '../components/Demo5'
import demo6 from '../components/Demo6'
import demo7 from '../components/Demo7'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'todolist',
        component: todolist
    },
    {
        path: '/demo1',
        name: 'Event and Method',
        component: demo1
    },
    {
        path: '/demo2',
        name: 'Data and Variables',
        component: demo2
    },
    {
        path: '/demo3',
        name: 'Dictionary and Array Data',
        component: demo3
    },
    {
        path: '/demo4',
        name: 'Computed vs Methods',
        component: demo4
    },
    {
        path: '/demo5',
        name: 'Binding',
        component: demo5
    },
    {
        path: '/demo6',
        name: 'Form input and V model',
        component: demo6
    },
    {
        path : '/demo7',
        name : 'Slot passing',
        component : demo7
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
