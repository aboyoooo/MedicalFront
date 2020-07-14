<template>
    <div class="main">
        我是首页
    </div>
</template>

<script>
export default {
    name:"OutPatientIndex",
    data(){
        return {
            token:''
        }
    },
    mounted(){
        //判断 页面是否有token 如果没有token重定向到 登录页面
         var tken = this.$cookie.get("token");
         if(tken==null || tken==undefined){
             //cookie为空 重定向
             this.$router.push({'path':'/OutPatient/login'});
         }else{
             this.token = tken;
         }
    },
    methods:{

    }
}
</script>

<style scoped>
    .main{
        width:100%;
        height:100%;
    }
</style>