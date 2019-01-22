// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue';

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
  // 可以使用 `VueConstructor` 接口
//   // 来声明全局属性
  interface VueConstructor {
    $utils?: any; // 工具包
    $fly?: any; // ajax
    $localforage?: any; // indexedDB
  }
}

// ComponentOptions 声明于 types/options.d.ts 之中
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $utils?: any; // 工具包
    $fly?: any; // ajax
    $localforage?: any; // indexedDB
  }
}
