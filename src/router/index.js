import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

import OutPatientRegister from 'views/OutPatientRegister.vue'
import OutPatientLogin from 'views/OutPatientLogin.vue'
import OutPatientIndex from 'views/OutPatientIndex.vue'

const routes = [
  {
    path:'/',
    name:'home',
    redirect:'/OutPatient/login'
  },
  {
    path:'/OutPatient/register',
    name:'register',
    component:OutPatientRegister
  },
  {
    path:'/OutPatient/login',
    name:'login',
    component:OutPatientLogin
  },{
    path:'/OutPatient/index',
    name:'index',
    component:OutPatientIndex
  }
]

const router = new VueRouter({
  //url取消hash
  mode:"history",
  routes
})

export default router
