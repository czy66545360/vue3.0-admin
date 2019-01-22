<template>
  <div id="passenger" class="frame-min-cont">
    <xk-table>
      <template slot="seoBoxLeft">
        <div class="seo-box-item">
          <DatePicker style="width: 200px" type="daterange" placement="bottom-start"
                      v-model="seoTime"
                      placeholder="创建日期"></DatePicker>
        </div>
        <div class="seo-box-item">
          <Select v-model="seoParams.companyId" filterable style="width: 200px" placeholder="公司">
            <Option v-for="item in companyList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="seo-box-item">
          <Input v-model="seoParams.fuzzy" placeholder="联系人/联系电话" style="width: 200px" clearable/>
        </div>
      </template>
      <template slot="seoBoxRight">
        <div class="seo-box-item">
          <Button type="primary">
            <Icon type="md-search"/>
            搜索
          </Button>
        </div>
        <div class="seo-box-item">
          <Button type="success">
            <Icon type="md-add"/>
            添加
          </Button>
        </div>
      </template>
      <template slot="tableBox" slot-scope="scope">
        <Table :height="scope.tableHeight" border :columns="tableTitle" :data="table"
               :loading="tableLoading"
               type="selection" size="small"></Table>
      </template>
      <template slot="pageBoxRight">
        <Page :total="100" show-sizer show-elevator/>
      </template>
    </xk-table>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import XkTable from '@/components/table/index.vue';

  interface SeoParams { // 搜索的数据模型
    page: number; // 页数
    size: number; // 条数
    startTime?: string; // 开始时间
    endTime?: string; // 结束时间
    companyId?: number; // 公司 ID
    fuzzy?: string; // 联系人/电话
  }

  @Component({
    components: {XkTable},
  })
  export default class Passenger extends Vue {
    public $refs!: { // 声明
      tableBox: HTMLFormElement,
    };

    private seoParams: SeoParams = { // 搜索字段
      page: 1,
      size: 20,
    };
    private seoTime: string = ''; // 搜索创建日期范围
    private tableLoading: boolean = false; // 表格加载过渡
    private companyList = []; // 公司列表
    private tableTitle: object[] = [ // 表格 表头
      {
        type: 'selection',
        width: 60,
        align: 'center',
        fixed: 'left',
      },
      {
        title: '操作',
        key: 'name',
        width: 80,
        fixed: 'left',
        align: 'center',
        render: (h: any, params: any) => {
          const that: Passenger = this; // 赋值 Vue 实例
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small',
              },
              style: {
                marginRight: '5px',
              },
              on: {
                click: () => { // 点击事件
                  that.editCompanyFn(params);
                },
              },
            }, '操作'),
          ]);
        },
      },
      {
        title: '创建日期',
        key: 'time',
        minWidth: 160,
        render(h: any, params: any) {
          const time = Vue.$utils.formatTimeFn(params.row.time);
          return h('div', time);
        },
      },
      {
        title: '企业名称',
        key: 'companyName',
        minWidth: 120,
      },
      {
        title: '负责人',
        key: 'principal',
        minWidth: 120,
      },
      {
        title: '业务数量',
        key: 'businessNo',
        width: 90,
      },
      {
        title: '业务',
        key: 'business',
        minWidth: 300,
      },
    ];
    private table: object[] = [
      {
        id: 1,
        time: 1547902752,
        companyName: '小咖科技',
        principal: '陈哲宇',
        businessNo: '4',
        business: '城内打车、城际专线、包车租车、定制包车',
      },
      {
        id: 2,
        time: 1547902752,
        companyName: 'E代驾',
        principal: '邓雅丽',
        businessNo: '2',
        business: '城内打车、定制包车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
      {
        id: 3,
        time: 1547902752,
        companyName: '快些哥',
        principal: '童俊超',
        businessNo: '3',
        business: '城内打车、定制包车、包车租车',
      },
    ]; // 数据

    /**
     * 编辑公司
     * @param params | 点击获取的当前行的数据
     */
    private editCompanyFn(params: any) {
      this.$router.push({path: '/passenger/form', query: {id: params.row.id}});
    }

    // private mounted() {
    // }
  }
</script>
<style lang="scss">
  #passenger {
  }
</style>
