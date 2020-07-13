<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  created:function(){
    //跳转到指定路径
    this.$router.push({'path':'/OutPatient/login'});
  }
}
</script>

<style scoped>
  #app{
    width:100%;
    height:100%;
  }
</style>
