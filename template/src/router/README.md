# 路由

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

> path 路径必须要和文件同步列如  `/passenger/form` 必须和 `@/views/passenger/form.vue` 文件目录同步

 
