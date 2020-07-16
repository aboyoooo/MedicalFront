<template>
    <div class="side">
        <el-row class="tac">
            <el-col :span="24" class="my-nav">
                <div class="logo-row">
                    logo放置处
                </div>
                <el-menu
                default-active="0"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="0" @click="navi(0)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{itemOne}}</span>
                </el-menu-item>
                <el-menu-item index="1" @click="navi(1)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{itemTwo}}</span>
                </el-menu-item>
                <el-menu-item index="2" @click="navi(2)">
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{itemThree}}</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'sideBar',
    data(){
        return {

        }
    },
    props:[
        'itemOne',
        'itemTwo',
        'itemThree'
    ],
    methods:{
        //路由跳转
        navi:function(val){
            if(val==0){
                this.$router.push({'path':'/Charge/index/pcharge'});
            }else if(val==1){
                this.$router.push({'path':'/Charge/index/rcharge'});
            }else if(val==2){
                this.$router.push({'path':'/Charge/index/qcharge'});
            }else{
                this.$router.push({'path':'/Charge/index/pcharge'});
            }
        }
    }
}
</script>

<style scoped>
    .side{
        height:100%;
        background-color:#545c64;
    }

    .tac,.my-nav{
        height:100%;
    }

    .logo-row{
        height:10%;
    }
</style>