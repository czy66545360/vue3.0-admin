# Flyio

`Flyio`是一个 ajax 的三方工具，可以完成基础的 ajax 请求工作，内部还富有请求拦截和响应拦截功能等...

## 获取方式

在该项目中获取到 `flyio` 实例的方法有一下：

* 在 window 对象中可以获取：

```typescript jsx
  window.console.log(window.$fly)
```

* 在 `import {Component, Vue} from 'vue-property-decorator'` 中的 Vue 实例中：

```typescript jsx
import {Component, Vue} from 'vue-property-decorator'
window.console.log(Vue.$fly)
```

## 请求方式

```typescript jsx
// get
fly.get('xxxx',{});

// put
fly.put('xxxx',{});

// post
fly.post('xxxx',{});

// delete
fly.delete('xxxx',{});
```

## 拦截器

Fly支持请求／响应拦截器，可以通过它在请求发起之前和收到响应数据之后做一些预处理。

```typescript jsx
//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["X-Tag"]="flyio";
  	//打印出请求体
  	console.log(request.body)
  	//终止请求
  	//var err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
  
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)
```
