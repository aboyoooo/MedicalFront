<template>
    <div class="main">
        <heads :title="title" class="my-head"></heads>
        <outpatientContainer class="my-container" @finalFee="getFees" @canUse="getDisabled" ref="child"></outpatientContainer>
        <settlement class="my-settle" :finalFee="allFees" :canUse="isDisabled" @gua="getFlag"></settlement>
    </div>
</template>

<script>
import heads from 'components/header.vue'
import outpatientContainer from 'components/OutPatientContainer.vue'
import settlement from 'components/Settlement.vue'
import Bus from '../assets/js/bus'

export default {
    name:"OutPatientIndex",
    //注册组件
    components:{
        heads,
        outpatientContainer,
        settlement
    },
    data(){
        return {
            token:'',
            patientID:'',
            title:'门诊挂号系统',
            allFees:'0',
            isDisabled:true
        }
    },
    created(){
        var that = this;
        var id = that.$cookie.get("id");
        if(id!=null && id!=undefined){
            that.patientID = id;
        }else{
            Bus.$on('patientId',(val)=>{
                that.patientID = val;
                //将id写入cookie
                that.$cookie.set("id",val);
            });
        }
    },
    mounted(){
        var that = this;
        //判断 页面是否有token 如果没有token重定向到 登录页面
         var tken = this.$cookie.get("token");
         if(tken==null || tken==undefined){
             //cookie为空 重定向
             this.$router.push({'path':'/OutPatient/login'});
         }else{
             this.token = tken;
         }
         that.$refs.child.setId(that.patientID);
         that.$refs.child.dataGet();
    },
    beforeDestroy(){
        Bus.$off('patientId');
    },
    methods:{
        getFees(val){
            this.allFees = val;
        },
        getDisabled(val){
            this.isDisabled = val;
        },
        getFlag(val){
            this.$refs.child.setVisable(true);
        }
    }
}
</script>

<style scoped>
    .main{
        width:100%;
        height:100%;
        background-color: rgb(241,241,241);
        overflow: hidden;
    }

    .my-head{
        width:100%;
        height: 10%;
    }

    .my-container{
        width: 100%;
        height: 75%;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .my-settle{
        width:100%;
        height: 15%;
    }
</style>