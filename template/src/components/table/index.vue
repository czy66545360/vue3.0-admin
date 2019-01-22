<!-- 表单组件 -->
<template>
  <div class="xk-table">
    <div class="seo-box">
      <div class="seo-box-left">
        <slot name="seoBoxLeft">

        </slot>
      </div>
      <div class="seo-box-right">
        <slot name="seoBoxRight">

        </slot>
      </div>
    </div>
    <div class="table-box" ref="tableBox">
      <slot name="tableBox" :tableHeight="tableHeight">

      </slot>
    </div>
    <div class="page-box">
      <div class="page-box-left">
        <slot name="pageBoxLeft">
        </slot>
      </div>
      <div class="page-box-right">
        <slot name="pageBoxRight">

        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class XkTable extends Vue {
    public $refs!: { // 声明
      tableBox: HTMLFormElement,
    };

    private tableHeight: any = 400;

    /**
     * 计算table高度
     */
    private tableBoxHeightFn() {
      window.console.log(this.$refs.tableBox);
      this.tableHeight = this.$refs.tableBox.clientHeight;
    }

    /**
     * 页面渲染完成
     */
    private mounted() {
      this.$nextTick(() => {
        this.tableBoxHeightFn();
      });
      window.onresize = this.tableBoxHeightFn;
    }

    /**
     * 页面卸载
     */
    private destroyed() {
      window.onresize = null;
    }
  }
</script>
<style lang="scss">
  .xk-table {
    display: flex;
    flex-direction: column;
    height: 100%;
    .seo-box {
      flex-shrink: 0;
      display: flex;
      border-bottom: 1px dashed #eee;
      padding-bottom: 8px;
      position: relative;
      flex-wrap: wrap;
      z-index: 10;
      justify-content: space-between;
      .seo-box-right, .seo-box-left {
        flex-wrap: wrap;
        display: flex;
      }
      .seo-box-item {
        margin-bottom: 8px;
        padding-right: 10px;
      }
    }
    .table-box {
      display: flex;
      margin-top: 16px;
      flex: auto;
      flex-wrap: wrap;
      .ivu-table-wrapper {
        width: 100%;
      }
    }
    .page-box {
      flex-shrink: 0;
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      .page-box-left, .page-box-right {
        display: flex;
      }
    }
  }
</style>
