<template>
  <div id="frame">
    <Layout style="height: 100vh">
      <Header class="frame-header">
        <div class="frame-admin-name">V6配置服务平台</div>
      </Header>
      <Layout class="frame-content">
        <Sider width="200">
          <Menu
              :active-name="activeName"
              theme="dark"
              width="auto"
          >
            <MenuItem name="/home" to="/home">
              <Icon type="ios-home"/>
              <span>首页</span>
            </MenuItem>
            <MenuItem name="/passenger" to="/passenger">
              <Icon type="ios-contact"/>
              <span>客户管理</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Content class="frame-layout-conetnt">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';

  @Component
  export default class Frame extends Vue {
    private activeName?: string; // 选中的 菜单项

    @Watch('$route', {deep: true, immediate: true}) // 监听路由变化
    private routeChange(route: any, oldVal: any) {
      window.console.log('框架', route, oldVal);
      this.activeName = route.path;
    }
  }
</script>

<style lang="scss">
  #frame {
    .frame-header {
      background: #fff;
      box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .1);
      padding: 0;
      position: relative;
      z-index: 10;
      flex: 0;
    }
    .frame-admin-name {
      width: 200px;
      font-size: 18px;
      color: #fff;
      text-align: center;
      line-height: 64px;
      background: rgb(81, 90, 110);
    }
    .frame-layout-conetnt {
      padding: 16px;
      overflow-y: auto;
    }
    .frame-content {
      position: relative;
      z-index: 0;
      flex: 1;
      overflow: hidden;
    }
    .frame-min-cont { // 框架 显示
      padding: 16px;
      display: flex;
      flex-direction: column;
      background: #fff;
      height: 100%;
    }
    .frame-min-breadcrumb { // 面包屑
      padding-bottom: 16px;
    }
  }
</style>
