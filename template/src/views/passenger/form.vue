<template>
  <div id="passenger-form">
    <Breadcrumb class="frame-min-breadcrumb">
      <BreadcrumbItem>首页</BreadcrumbItem>
      <BreadcrumbItem to="/passenger">客户管理</BreadcrumbItem>
      <BreadcrumbItem>编辑客户</BreadcrumbItem>
    </Breadcrumb>
    <div class="frame-min-cont">
      <div class="form-box">
        <div class="form-box-left">
          <Form :model="company" label-position="top">
            <FormItem label="企业 LOGO">
              <Input v-model="company.logo"></Input>
            </FormItem>
            <FormItem label="公司名称">
              <Input v-model="company.name"></Input>
            </FormItem>
            <FormItem label="公司简称">
              <Input v-model="company.abbreviation"></Input>
            </FormItem>
            <FormItem label="所在地区">
              <Input v-model="company.address"></Input>
            </FormItem>
            <FormItem label="详细地址">
              <Input v-model="company.detailedAddress"></Input>
            </FormItem>
            <FormItem label="公司电话">
              <Input v-model="company.telephone"></Input>
            </FormItem>
            <FormItem label="创建日期">
              <DatePicker style="width: 100%" v-model="company.createTime" type="date"
                          placeholder="请选择创建日期"></DatePicker>
            </FormItem>
            <FormItem label="公司官网">
              <Input v-model="company.url"></Input>
            </FormItem>
            <FormItem label="紧急联系人">
              <Input v-model="company.urgentName"></Input>
            </FormItem>
            <FormItem label="紧急联系人电话">
              <Input v-model="company.urgentPhone"></Input>
            </FormItem>
            <FormItem label="服务机构代码">
              <Input v-model="company.serviceCode"></Input>
            </FormItem>
            <FormItem label="负责人">
              <Input v-model="company.principalName"></Input>
            </FormItem>
            <FormItem label="负责人电话">
              <Input v-model="company.principalPhone"></Input>
            </FormItem>
            <FormItem label="管理员">
              <Input v-model="company.adminName"></Input>
            </FormItem>
            <FormItem label="管理员 电话">
              <Input v-model="company.adminPhone"></Input>
            </FormItem>
            <FormItem label="邮寄地址">
              <Input v-model="company.mailingAddress"></Input>
            </FormItem>
          </Form>
        </div>
        <div class="form-box-right">

        </div>
      </div>
      <div class="bottom">
        <Button type="primary">
          保存
        </Button>
        <Button @click="previousFn">
          返回
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  /**
   * 公司信息
   * @param name | 名称
   * @param abbreviation | 简称
   * @param address | 地区
   * @param detailedAddress | 详细地址
   * @param telephone | 座机号
   * @param createTime | 创建时间
   * @param url | 网址
   * @param urgentPhone | 紧急电话
   * @param urgentName | 紧急联系人
   * @param serviceCode | 服务机构代码
   * @param principalName | 负责人
   * @param principalPhone | 负责人电话
   * @param adminName | 管理员
   * @param adminPhone | 管理员电话
   * @param mailingAddress | 邮寄地址
   * @param logo | 企业 logo
   */
  interface Company {
    name: string;
    abbreviation: string;
    address: string;
    detailedAddress: string;
    telephone?: number | null;
    createTime?: number | null;
    url: string;
    urgentPhone?: number | null;
    urgentName: string;
    serviceCode: string;
    principalName: string;
    principalPhone?: number | null;
    adminName: string;
    adminPhone: string;
    mailingAddress: string;
    logo: string;
  }

  @Component
  export default class PassengerForm extends Vue {
    private id?: any = '';
    private company: Company = {
      name: '',
      abbreviation: '',
      address: '',
      detailedAddress: '',
      telephone: null,
      createTime: null,
      url: '',
      urgentPhone: null,
      urgentName: '',
      serviceCode: '',
      principalName: '',
      principalPhone: null,
      adminName: '',
      adminPhone: '',
      mailingAddress: '',
      logo: '',
    };

    /**
     * 页面加载
     */
    private created() {
      this.id = this.$route.query.id || '';
    }

    /**
     * 返回上一页
     */
    private previousFn() {
      this.$Modal.confirm({
        title: '返回提示',
        content: '您的信息还没提交,确认要离开此页面吗？',
        onOk: () => {
          this.$router.go(-1);
        },
      });
    }

    /**
     * 页面卸载
     */
    private destroyed() {
      window.onbeforeunload = null;
    }

    /**
     * 页面渲染完成
     */
    private mounted() {
      window.onbeforeunload = () => {
        return '您的信息还没提交,确认要离开此页面吗？';
      };
    }
  }
</script>

<style lang="scss">
  #passenger-form {
    .form-box {
      display: flex;
      justify-content: space-between;
      overflow-y: auto;
      .form-box-left {
        /*max-width: 50%;*/
        .ivu-form {
          /*display: flex;*/
          /*flex-direction: row;*/
          /*flex-wrap: wrap;*/
        }
        .ivu-form-item {
          min-width: 350px;
          max-width: 400px;
          padding-right: 10px;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .ivu-btn {
        margin: 0 5px;
      }
    }
  }
</style>
