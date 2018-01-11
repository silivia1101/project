<template>
  <div id="add-shelves">
    <div class="shelves-title shelves-img">
      <h4>产品信息</h4>
    </div>
    <div class="edit-info">
      <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div class="name-info">
          <el-form-item label="产品名称" prop="appName">
            <el-select v-model="ruleForm.appName" clearable placeholder="请选择" @change="changeName">
              <el-option
                v-for="item in listName"
                :key="item.id"
                :label="item.appNames"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="Input">
            <el-form-item label="产品供应商" prop="provider">
              <el-input v-model="ruleForm.provider" :disabled="stopChange"></el-input>
            </el-form-item>
          </div>  
        </div>  
        <div class="shelves-title shelves-prd">
          <h4>商品信息</h4>
        </div>
        <div class="name-info">
          <el-form-item label="销售区域" prop="region">
            <el-select v-model="ruleForm.region" clearable placeholder="请选择">
              <el-option
                v-for="item in terrList"
                :key="item.regionId"
                :label="item.regionName"
                :value="item.regionId">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="Input">
            <el-form-item label="商品名称" prop="productName">
                <el-input v-model="ruleForm.productName"></el-input>
            </el-form-item>
            <!-- <el-form-item label="商品名称" prop="productName">
              <el-input v-model="ruleForm.productName "></el-input>
            </el-form-item> -->
          </div>
          <el-form-item label="商品类型" prop="companyType">
            <el-select v-model="ruleForm.companyType" clearable placeholder="请选择">
              <el-option
                v-for="item in appList"
                :key="item.dataCode"
                :label="item.dataName"
                :value="item.dataCode">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品简介" prop="productDesc" class="desc-input">
              <el-input type="textarea" v-model="ruleForm.productDesc"></el-input>
          </el-form-item>
          <el-form-item label="商品详情" prop="productDetail">
            <quill-editor @detail-data="getInfos"></quill-editor>
          </el-form-item>      
          <el-form-item label="商品图片" prop="imageUrl">
            <upload @upload-data="dataImg"></upload>
          </el-form-item>
          <el-form-item label="适用企业" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox :label="'1'" name="type">小型初创企业(0-50人)</el-checkbox>
              <el-checkbox :label="'2'" name="type">中小型企业(50-300人)</el-checkbox>
              <el-checkbox :label="'3'" name="type">大型企业(>300人)</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <div class="shelves-title shelves-prd">
          <h4>规格版本</h4>
        </div> 
        <div class="add-Info">
          <el-form-item label="规格配置">
            <el-button type="text" @click="addNew">+添加新规格</el-button>
            <el-table
              :data="productSpecList"
              border
              style="width: 100%">
              <el-table-column
                prop="specName"
                label="规格名称"
              >
              </el-table-column>
              <el-table-column
                label="价格(月/元)"
              >
              <template slot-scope="scope">
                  <span>{{ scope.row.productPrice}}</span>
              </template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                     <el-button  type="text" size="small" @click="showData(scope.row)">{{ scope.row.isShow === '1' ? '隐藏' : '展示' }}</el-button>
                     <el-button  type="text" size="small" @click="EditInfo(scope.row)">编辑</el-button>
                     <el-button  type="text" size="small" @click="lookInfo(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
           <add-spec ref="addSpec" @getSpec= "specData"></add-spec>
           <edit-spec ref="editSpec" @editName="getEdit"></edit-spec>
        </div> 
        <div class="add-Info" v-show="isTry">
          <el-form-item label="是否试用" prop="try" >
            <el-radio-group v-model="ruleForm.try" @change="choseTry">
              <el-radio :label="'1'">是</el-radio>
              <el-radio :label="'2'">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </div> 
        <div class="last-info" v-show="isChoose">
          <el-form-item  prop="config">
            <el-select v-model="ruleForm.config" clearable placeholder="请选择" @change="changeConfig">
              <el-option
                v-for="item in productSpecList"
                :key="item.id"
                :label="item.specName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="Input-day">
            <el-form-item prop="days"> 
              <el-input v-model.trim="ruleForm.days" placeholder="请输入试用天数" class="Input" @blur="checkDay"></el-input>
            </el-form-item>
          </div>  
        </div>
        <el-form-item>
            <el-button type="primary" @click="submitForm('0', 'ruleForm')" class="go-btn">保存</el-button>
            <el-button type="primary" @click="submitForm('1', 'ruleForm')" class="go-btn">{{msg}}</el-button>
        </el-form-item>  
      </el-form>
    </div>
  </div>  
</template>
  
<script>
  import _ from 'lodash';
  import accounting from 'accounting';
  import GetAllData from '../service/getData';
  import addSpec from '../components/table/addSpec';
  import quillEditor from '../components/table/quilleditor';
  import editSpec from '../components/table/editSpec';
  import upload from '../components/uplod/uplod';

  const DataList = new GetAllData();

  export default {
    data () {
      return {
        msg: '上架',
        dialogFormVisible: false,
        disable: false,
        stopChange: true,
        appList: [],
        isChoose: false,
        isTry: false,
        isSale: false,
        isStop: false,
        configList: [],
        resource: '',
        tableData: [],
        productSpecList: [],
        ruleForm: {
          provider: '',
          appName: '',
          productName: '',
          region: '',
          companyType: '',
          delivery: false,
          type: [],
          try: '2',
          days: '',
          resource: '',
          productDesc: '',
          productDetail: '',
          config: '',
          imageUrl: '',
        },
        rules: {
          appName: [
            { required: true, message: '请选择产品名称', trigger: 'change' },
          ],
          region: [
            { required: true, message: '请选择销售区域', trigger: 'change' },
          ],
          companyType: [
            { required: true, message: '请选择商品类型', trigger: 'change' },
          ],
          type: [
            { type: 'array', required: true, message: '请选择适用企业', trigger: 'change' },
          ],
          productDesc: [
            { required: true, message: '请输入商品简介', trigger: 'blur' },
            { min: 1, max: 100, message: '长度在 1到 100个字符', trigger: 'blur' },
          ],
          productName: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1到 20个字符', trigger: 'blur' },
          ],
          productDetail: [
            { required: true, message: '请输入商品详情', trigger: 'change' },
          ],
          imageUrl: [
            { required: true, message: '请上传图片', trigger: 'logoUrl' },
          ],
        },
        listName: [],
        terrList: [],
        logoUrl: '',
        logoId: '',
        shooseStr: '',
        spec: '',
        showFlag: '1',
      };
    },
    watch: {
      productSpecList(val, oldval) {
        if (val.length <= 0) {
          this.isTry = false;
          this.isChoose = false;
        } else {
          this.isTry = true;
        }
      },
    },
    components: {
      // 使用编辑器
      quillEditor,
      addSpec,
      editSpec,
      upload,
    },
    methods: {
      /* 验证输入天数 */
      checkDay() {
        const reg = /^\d{1,3}$/;
        if (!reg.test(this.ruleForm.days)) {
          this.$message.error('使用天数只能是1-3为的数字');
        }
      },
       /* 接收上传图片传递的数据 */
      dataImg(url, id) {
       this.ruleForm.imageUrl = url;
       this.logoId = id;
      },
      /* 接收商品详情传递的数据 */
      getInfos(deData) {
       this.ruleForm.productDetail = deData;
      },
      /* 接收新增弹框所传递的数据 */
      specData(msg) {
        this.productSpecList = msg;
      },
      /* 接收编辑弹框所传递的数据 */
      getEdit(data) {
        _.each(this.productSpecList, (val) => {
          if (val.id === data.id) {
            val.specName = data.specName;
            val.productPrice = data.productPrice;
            val.remark = data.remark;
            val.productConfig = data.productConfig;
          }
        });
      },
      /* 获取商品类型 */
      getApp() {
        const data = {
              dictCode: 'product_type',
        };
        const successCb = (res) => { 
          this.appList = res.data.entity; 
        };
        const errorCb = (error) => {
           this.$message.error('获取商品类型失败!');
        };
        DataList.TypeList(data, successCb, errorCb);
      },
      /* 获取产品名称 */
      getNameList() {
        /* 上传图片的url */
        const successCb = (res) => {
            this.listName = res.data.entity;
            console.log(this.listName);
        };
        const errorCb = (error) => {
          this.$message.error('获取产品名称失败!');
        };
        DataList.appName(successCb, errorCb);
      },
      /* 是否展示 */
      showData(row) {
        row.isShow = row.isShow === this.showFlag ? '2' : this.showFlag;
      },
      /* 保存或上架 */
      submitForm(type, formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.productSpecList.length <= 0) {
              this.$message.warning('规格不能为空');
              return false;
            } 
            if (this.ruleForm.try === '2') {
                this.ruleForm.config = '';
                this.ruleForm.days = '';
                this.spec = '';
            } else if (!this.ruleForm.config || !this.ruleForm.days) {
                this.$message.warning('试用规格/试用天数不能为空');
                return false;
            } 
            const data = {
              appConfigId: this.ruleForm.appName,
              productStatus: type,
              companyType: this.ruleForm.type.join(','),
              isUsed: this.ruleForm.try,
              productDesc: this.ruleForm.productDesc,
              productDetail: this.ruleForm.productDetail,
              productLogo: this.logoId,
              productName: this.ruleForm.productName,
              productType: this.ruleForm.companyType,
              regionId: this.ruleForm.region,
              smallLogo: this.logoId,
              specId: this.ruleForm.config,
              specName: this.spec,
              tryDays: this.ruleForm.days,
              productSpecList: this.productSpecList,
            };
            const successCb = (res) => {
              this.$router.push({ path: 'Shelves' });
            };
            const errorCb = (error) => {
              this.$message({
                type: 'error',
                message: error.response.data.message,
              });
            };
          DataList.addApp(data, successCb, errorCb);
            return true;
          }
          return false;
        });
      },
      /* 新增规格 */
      addNew() {
        this.$refs.addSpec.dialogFormVisible = true;
      },
      /* 编辑规格 */
      EditInfo(row) {
        this.$refs.editSpec.paramValue(row);
        this.$refs.editSpec.forbid = false;
        this.$refs.editSpec.dialogFormVisible = true;
      },
       /* 查看规格 */
      lookInfo(row) {
        this.$refs.editSpec.form = row;
        this.$refs.editSpec.forbid = true;
        this.$refs.editSpec.dialogFormVisible = true;
      }, 
      /* 根据产品名称选择供应商 */
      changeName() {
        if (this.ruleForm.appName === '') {
          this.ruleForm.provider = '';
        }
        _.each(this.listName, (val) => {
          if (this.ruleForm.appName === val.id) {
            this.ruleForm.provider = val.providerName;
          }
        });
      },
      /* 选择规格是否试用 */
      changeConfig() {
        _.each(this.productSpecList, (val) => {
          if (this.ruleForm.config === val.id) this.spec = val.specName;
        });
      },
      /* 获取销售区域 */
      getRegin() {
        const successCb = (res) => {
              this.terrList = res.data.entity;
              console.log(res);
        };
        const errorCb = (error) => {
            this.$message.error('获取所属渠道失败!');
        };
        DataList.ownedInfo(successCb, errorCb);
      },
      /* 选择是否适用 */
      choseTry() {
        if (this.ruleForm.try === '1') {
          console.log(this.ruleForm.try);
          this.isChoose = true;
        } else {
          this.isChoose = false;
        }
      },
    },
    created() {
      this.getRegin();
      this.getNameList();
      this.getApp();
    },
  };
</script>

<style lang='scss'>
 #add-shelves{
   height: 100%;
   .name-info{
    //  border: solid 1px red;
     margin: 0 66px;
     margin-top: 24px;
   }
   .shelves-title h4{
       padding: 0;
       margin: 0;
      //  border: solid 1px red;
       height: 54px;
       line-height: 54px;
       margin: 0 24px;
       border-bottom: solid 1px #cccccc;
    }
    .el-checkbox{
      display: block;
    }
    .el-checkbox{
      &+.el-checkbox {
        margin-left: 0;
      }
    }
    .add-Info{
      margin: 22px 66px;
    }
    .el-table,.el-table th>.cell{
      text-align: center
    }
    .el-table th{
      padding: 5px 0;
    }
    .last-info{
       margin: 0 60px;
      margin-bottom: 50px;
    }
    .Input{
      width: 32%;
      // border: solid 1px red;
    }
    .Input-day{
      width: 78%;
    }
    .edit_container{
      width: 544px;
    }
    .el-button{
      width: 14%;
    }
    .desc-input{
      .el-textarea{
        width: 62%;
      }
    }
    .go-btn{
      margin-left: 62px !important;
    }
 }
</style>
