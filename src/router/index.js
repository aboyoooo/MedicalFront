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
import DrugLogin from "../views/DrugLogin";
import DrugIndex from "../views/DrugIndex";

const routes = [
  {
    path:'/',
    name:'home',
    // redirect:'/OutPatient/login'
    redirect:'/Drug/login'
  },
  {
    path:'/OutPatient/register',
    name:'register',
    component:OutPatientRegister
  },
  {
    // path:'/OutPatient/login',
    path:'/Drug/login',
    name:'login',
    // component:OutPatientLogin
    component:DrugLogin
  },{
    // path:'/OutPatient/index',
    path:'/Drug/index',
    name:'index',
    component:DrugIndex
  }
]

const router = new VueRouter({
  //url取消hash
  mode:"history",
  routes
})

export default router
