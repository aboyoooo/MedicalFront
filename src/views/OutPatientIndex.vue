<template>
    <div class="main">
        <heads></heads>
        <div class="container">
            <el-row>
                <el-col :span="22" :offset="1" class="my-row">
                    <el-row>
                        <el-col :span="24">
                            <div class="my-tag">
                                <div>基本信息</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23" class="base-info">
                            <el-form ref="baseInfoForm" :model="baseInfoForm" label-width="100px" :disabled="true">
                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="姓名：">
                                            <el-input v-model="baseInfoForm.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item label="年龄：">
                                            <el-input v-model="baseInfoForm.age"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-form-item label="性别：">
                                            <el-input v-model="baseInfoForm.sex"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item label="出生日期：">
                                            <el-input v-model="baseInfoForm.birth"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="银行卡号：">
                                            <el-input v-model="baseInfoForm.bankCard"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-form-item label="性质：">
                                            <el-input v-model="baseInfoForm.patientFeature"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="地址：">
                                            <el-input v-model="baseInfoForm.address"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="身份证号码：">
                                            <el-input v-model="baseInfoForm.idCard"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="电话号码：">
                                            <el-input v-model="baseInfoForm.tel"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col  :span="24">
                                        <el-form-item label="备注：">
                                            <el-input v-model="baseInfoForm.remark"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="22" :offset="1" class="my-row my-second">
                    <el-row>
                        <el-col :span="24">
                            <div class="my-tag">
                                <div>科室信息</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23" class="base-info">
                            <el-form ref="doctorInfoForm" :model="doctorInfoForm" label-width="100px">
                                <el-row>
                                    <el-col :span="5">
                                        <el-form-item label="科室：" prop="department">
                                            <el-select v-model="doctorInfoForm.department" placeholder="请选择所挂科室">
                                                <el-option label="内科" value="0"></el-option>
                                                <el-option label="外科" value="1"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="5">
                                        <el-form-item label="医生：" prop="doctor">
                                            <el-select v-model="doctorInfoForm.doctor" placeholder="请选择医生">
                                                <el-option label="张三" value="0"></el-option>
                                                <el-option label="李四" value="1"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="22" :offset="1" class="my-row my-third">
                    <el-row>
                        <el-col :span="24">
                            <div class="my-tag">
                                <div>收费信息</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23" class="base-info">
                            <el-form ref="feeInfoForm" :model="feeInfoForm" label-width="100px" :disabled="true">
                                <el-row>
                                    <el-col :span="5">
                                        <el-form-item label="挂号费：">
                                            <el-input v-model="feeInfoForm.numberFee"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="5">
                                        <el-form-item label="手续费：">
                                            <el-input v-model="feeInfoForm.proceduresFee"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import heads from 'components/header.vue'
import Bus from '../assets/js/bus'

export default {
    name:"OutPatientIndex",
    //注册组件
    components:{
        heads
    },
    data(){
        return {
            token:'',
            patientID:'',
            baseInfoForm: {
                name: '',
                age:'',
                sex:'',
                birth:'',
                bankCard:'',
                patientFeature:'',
                address:'',
                idCard:'',
                tel:'',
                remark:''
            },
            doctorInfoForm:{
                doctor:'',
                department:''
            },
            feeInfoForm:{
                //挂号费和手续费
                numberFee:'',
                proceduresFee:''
            }
        }
    },
    created(){
        var that = this;
        Bus.$on('patientId',(val)=>{
             that.patientID = val;
             //将id写入cookie
            that.$cookie.set("id",val);
        });
        var id = that.$cookie.get("id");
        if(id!=null && id!=undefined){
            that.patientID = id;
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
         //发送数据请求
         that.dataGet();
    },
    beforeDestroy(){
        Bus.$off('patientId');
    },
    methods:{
        //获取页面数据
        dataGet:function(){
            var that = this;
            //构造请求url
            var url = "http://localhost:8003/out/api/patients/"+that.patientID;
            that.$axios.get(url,{
                headers:{
                    'content-type':'application/json',
                    'access_token':that.token
                }
            }).then((res)=>{
                res = res.data;
                if(res.code==20000 && res.flag==true){
                    //数据渲染
                    var data = res.data;
                    that.baseInfoForm.name = data.patientName;
                    that.baseInfoForm.age = data.age;
                    that.baseInfoForm.sex = data.sex;
                    that.baseInfoForm.birth = data.birth.split("T")[0];
                    that.baseInfoForm.bankCard = data.bankCard;
                    that.baseInfoForm.patientFeature = data.patientFeature;
                    that.baseInfoForm.address = data.address;
                    that.baseInfoForm.idCard = data.identityCard;
                    that.baseInfoForm.tel = data.phone;
                    that.baseInfoForm.remark = data.remark;
                }
            });
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

    .container{
        position: relative;
    }

    .my-row{
        background-color: #fff;
        margin-top:10px;
        padding:20px;
    }

    .my-tag{
        width:90px;
        height:34px;
        color:#fff;
        text-align: center;
        background-color: rgb(46,105,235);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .base-info{
        margin-top:16px;
    }

    .fee-about{
        width: 100%;
        border-top:1px solid red;
        background-color: #fff;
        position: absolute;
        bottom:0;
        z-index: 2;
    }
</style>