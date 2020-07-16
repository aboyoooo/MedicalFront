<template>
    <div class="charge">
        <el-row class="charge-row">
            <el-col :span="22" :offset="1" class="main-card">
                <el-row class="rows">
                    <el-col :span="24">
                        <div class="my-tag">
                            <div>患者查询</div>
                        </div>
                        <el-row>
                            <el-col :span="18">
                                <el-form :ref="searchForm" :model="searchForm" label-width="100px" prop="department">
                                    <el-row>
                                        <el-col :span="16">
                                            <el-form-item label="就诊卡号：">
                                                <el-input v-model="searchForm.id" placeholder="请输入患者就诊卡号"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-form-item>
                                                <el-button type="primary" @click="searchPatient()">点击查询患者信息</el-button>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="rows">
                    <el-col :span="24">
                        <div class="my-tag">
                            <div>患者信息</div>
                        </div>
                        <el-row>
                            <el-col :span="24">
                                <el-table :data="tableData" stripe style="width: 100%" v-loading="loading">
                                    <el-table-column prop="patientId" label="就诊卡号" width="280">
                                    </el-table-column>
                                    <el-table-column prop="patientName" label="姓名" width="120">
                                    </el-table-column>
                                    <el-table-column prop="sex" label="性别" width="120">
                                    </el-table-column>
                                    <el-table-column prop="age" label="年龄">
                                    </el-table-column>
                                    <el-table-column prop="departName" label="诊室">
                                    </el-table-column>
                                    <el-table-column prop="doctorName" label="医生">
                                    </el-table-column>
                                    <el-table-column prop="patientFeature" label="合同单位">
                                    </el-table-column>
                                </el-table>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="rows">
                    <el-col :span="24">
                        <div class="my-tag">
                            <div>处方药品</div>
                        </div>
                    </el-col>
                        <el-row>
                            <el-col :span="24">
                                <el-table :data="drugData" height="250" border style="width: 100%" v-loading="loading">
                                    <el-table-column prop="code" label="编码" width="120">
                                    </el-table-column>
                                    <el-table-column prop="name" label="药品名称" width="220">
                                    </el-table-column>
                                    <el-table-column prop="nums" label="数量" width="80">
                                    </el-table-column>
                                    <el-table-column prop="unit" label="单位" width="120">
                                    </el-table-column>
                                    <el-table-column prop="amount" label="金额" width="80">
                                    </el-table-column>
                                    <el-table-column prop="feature" label="结算" width="80">
                                    </el-table-column>
                                    <el-table-column prop="unitPrice" label="单价" width="80">
                                    </el-table-column>
                                    <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>
                            </el-col>
                      </el-row>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"charge",
    data(){
        return {
            searchForm:{
                id:''
            },
            tableData:[],
            drugData:[],
            token:'',
            loading:false
        }
    },
    mounted(){
        var that = this;
        //判断 页面是否有token 如果没有token重定向到 登录页面
         var tken = this.$cookie.get("token");
         if(tken==null || tken==undefined){
             //cookie为空 重定向
             this.$router.push({'path':'/Charge/login'});
         }else{
             this.token = tken;
         }
    },
    methods:{
      handleDelete(index, row) {
        console.log(index, row);
      },
      searchPatient(){
          var that = this;
          that.loading = true;
          if(that.searchForm.id==null || that.searchForm.id==undefined || that.searchForm.id==''){
              that.$message({
                message: '就诊卡号不允许为空',
                type: 'warning'
              });
          }else{
            //构造请求的url 查询患者信息
            var url = "http://localhost:8003/out/api/PatientDetInfos/"+that.searchForm.id
            that.$axios.get(url,{
                headers:{
                    'content-type':'application/json',
                    'access_token':that.token
                }
            }).then((res)=>{
                res = res.data;
                if(res.code==20000 && res.flag==true){
                    var data = res.data;
                    that.tableData.push(data);
                    //构造请求的url查询 患者药方信息
                    var ul = "http://localhost:8003/out/api/PatientDrugs/"+data.outpatientId;
                    that.$axios.get(ul,{
                        headers:{
                            'content-type':'application/json',
                            'access_token':that.token
                        }
                    }).then((response)=>{
                        response = response.data;
                        if(response.code==20000 && response.flag==true){
                            var data = response.data;
                            for(var i=0;i<data.length;i++){
                                that.drugData.push(data[i]);
                            }
                            that.loading = false;
                            this.$message({
                                message: '查询成功',
                                type: 'success'
                            });
                        }
                    });
                }
            });
          }
      }
    }
}
</script>

<style scoped>
    .charge{
        width:100%;
        height:100%;
        background-color: rgb(241,241,241);
    }

    .charge-row{
        height: 100%;
    }

    .main-card{
        margin-top:20px;
        padding:20px;
        border-radius: 2px;
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
        margin-bottom: 15px;
    }

    .rows{
        margin-bottom: 20px;
        background-color: #fff;
        padding:20px;
    }
</style>