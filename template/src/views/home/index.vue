<template>
  <div id="home">
    <div class="frame-min-cont" style="height: 600px">
      {{num}}
      <Button @click="addNum">加1</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    private num = 0;

    private addNum() {
      window.console.log(this);
      this.$set(this, 'num', this.num + 1);
      window.console.log(this.num);
      this.$forceUpdate();
    }

    @Watch('num', {deep: true})
    private numChange(value: any, oldVal: any) {
      window.console.log(value, oldVal);
    }

    @Watch('$route', {deep: true, immediate: true})
    private routeChange(value: any, oldVal: any) {
      window.console.log(value, oldVal);
    }
  }
</script>
<style lang="scss">

</style>
