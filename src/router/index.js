import Vue from 'vue'
import Router from 'vue-router'
import UserForm from '@/components/UserForm'
import LoginForm from '@/views/LoginForm'
import Home from '@/components/Home'
import Event from '@/components/Event'
import Form1 from '@/components/Form1'
import Modifier from '@/components/Modifier'
import Computed1 from '@/components/Computed1';
import Watchers from '@/components/Watchers';
import NonProps from '@/components/NonProps';
import BeforeCreateLh from '@/components/BeforeCreateLh';
import Product from '@/components/Product';
import BootstrapForm from '@/components/BootstrapForm';
import Students from '@/components/Students';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserForm',
      component: UserForm
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/form1',
      name: 'Form1',
      component: Form1
    },
    {
      path: '/modifier',
      name: 'Modifier',
      component: Modifier
    },
    {
      path: '/computed',
      name: 'Computed1',
      component: Computed1
    },
    {
      path: '/watchers',
      name: 'Watchers',
      component: Watchers
    },
    {
      path: '/nonprops',
      name: 'NonProps',
      component: NonProps
    },
    {
      path: '/beforeCreate',
      name: 'BeforeCreateLh',
      component: BeforeCreateLh
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/bootstrapform',
      name: 'BootstrapForm',
      component: BootstrapForm
    },
    
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
  ]
})
