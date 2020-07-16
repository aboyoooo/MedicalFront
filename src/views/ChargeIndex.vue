<template>
    <div class="main">
        <el-row class="whole">
            <el-col :span="3" class="left">
                <sideBar :itemOne="itemOne" :itemTwo="itemTwo" :itemThree="itemThree" class="si-bar"></sideBar>
            </el-col>
            <el-col :span="21" class="right">
                <heads :title="title" class="my-head"></heads>
                <div class="container">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import heads from 'components/header.vue'
import sideBar from 'components/side-bar.vue'
export default {
    name:"ChargeIndex",
    components:{
        heads,
        sideBar
    },
    data(){
        return{
            title:'医院收费系统',
            itemOne:'门诊收费',
            itemTwo:'门诊退费',
            itemThree:'收费查询'
        }
    }
}
</script>

<style scoped>
     .main{
        width:100%;
        height:100%;
        background-color: rgb(241,241,241);
    }

    .right{
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .my-head{
        height: 10%;
    }

    .si-bar{
        height: 100%;
    }

    .whole{
        width: 100%;
        height:100%;
    }

    .container{
        width:100%;
        height: 90%;
        flex-grow: 1;
        overflow-x:hidden;
        overflow-y: scroll;
    }

    .left{
        height:100%;
        overflow: hidden;
    }
</style>