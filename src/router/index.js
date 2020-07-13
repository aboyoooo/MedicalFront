import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

import OutPatientLogin from 'views/OutPatientLogin.vue'
import OutPatientIndex from 'views/OutPatientIndex.vue'
import OutPatientRegister from 'views/OutPatientRegister.vue'

const routes = [
  {
    path:'/OutPatient',
    component:OutPatientLogin
  },
  {
    path:'/OutPatient/login',
    component:OutPatientLogin
  },{
    path:'/OutPatient/index',
    component:OutPatientIndex
  },
  {
    path:'/OutPatient/register',
    component:OutPatientRegister
  }
]

const router = new VueRouter({
  //url取消hash
  mode:"history",
  routes
})

export default router
