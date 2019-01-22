import Vue from 'vue';
import fly from 'flyio';

// 添加请求拦截器
fly.interceptors.request.use((request: any) => {

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});
// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response: any) => {

  return response.data;
}, async (err: any) => {
  return Promise.resolve(err);
});

Vue.$fly = fly;
window.$fly = fly;

export default fly;
