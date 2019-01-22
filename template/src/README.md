# 快速入手

该项目是用于辅助公司现有的 V6产品的初始化配置系统。

主要技术栈如下：

* [vue-cli 3.0+](https://cli.vuejs.org/zh/)
  * [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
  * [vue-class-component](https://github.com/vuejs/vue-class-component)
  * [typeScript](https://www.tslang.cn/)
  * [vue-typeScript](https://cn.vuejs.org/v2/guide/typescript.html)
* [vue-router](https://router.vuejs.org/zh/)
* [vuex](https://vuex.vuejs.org/zh/guide/)
* [scss](https://www.sass.hk/)
* [iview](https://www.iviewui.com/)
* [flyio](https://github.com/wendux/fly)
* [localforage](https://localforage.docschina.org/)
* [qs](https://github.com/ljharb/qs)

## 项目依赖

```
npm install
```
### 启动命令

```
npm run serve
```

### 打包命令

```
npm run build
```

## ts声明

每个制定的对象在声明时如果没有事先声明在接口中的话，就会报错导致编译错误。

[官方声明教程](https://cn.vuejs.org/v2/guide/typescript.html#%E5%A2%9E%E5%BC%BA%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%85%8D%E5%90%88%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8)

### shims-tsx.d.ts

该文件初始化声明了window 这个接口的新增的参数：

```typescript jsx
  // 声明 window 实例的属性
  interface Window {
    $utils: any; // 工具包
    $fly: any; // ajax
    $localforage: any; // indexedDB
  }
```

### shims-config.d.ts

该文件初始化声明了 Vue 这个全局接口的新增参数：

```typescript jsx
// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue';

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
  // 可以使用 `VueConstructor` 接口
  // 来声明全局属性
  interface VueConstructor {
    $utils?: any; // 工具包
    $fly?: any; // ajax
    $localforage?: any; // indexedDB
  }
}

/**
* 声明过后  在使用 Vue.$utils 才不会报错
*/
```

## index.ts

路由配置基本没什么大的变化，只有在懒加载上的引用变化比较大。

```typescript jsx
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { // 客户信息
      path: '/passenger/form',
      name: 'passenger/form',
      component: () => import('@/views/passenger/form.vue'), // .vue 文件
    },
  ]
})
```
