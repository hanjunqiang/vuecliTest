import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

import Test from '@/components/Test'
import JQError from '@/components/Error'
import Count from '@/components/Count'
import Promise from '@/components/Promise'

Vue.use(Router)

export default new Router({
  /* 
    hash模式(默认), URL上会有/#/
    history模式, URL上没有/#/, 比较符合正常的URL
  */
  mode:'hash',
  routes: [
    {
      path:'*',
      component: JQError
      
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      /* 
        路由配置文件中的钩子函数
        如果重写beforeEnter: 需要在箭头函数中调用next(true),否则不会跳转到首页,
        next()默认为next(true)
        next()可以传递对象参数,跳转到指定路由
      */
      beforeEnter: (to, from, next)=>{
        console.log(to);
        console.log(from);
        next(); //是否允许跳转(默认为next(true))
        // next({path:'/test'})  //跳转指定路由
      },
    },

    /* 
      重定向redirect,(path的值不要忘记加"/")
      component改为redirect即可
     */
    {
      path:'/test2',
      // 重定向回首页
      redirect: '/'
    },
    /* 
      重定向redirect,并传递参数
      component改为redirect即可
     */
    {
      path:'/test3/:id/:title',
      name:'test3',
      // 重定向回首页
      redirect: '/pp/:id/:title'
    },

    /* 
    URL传递参数(场景: 新闻传递id和标题)
    第1个/后是个对象A,($route.pp)
    第2个/后是A的属性id,($route.pp.id)
    第3个/后是A的属性title,($route.pp.title)
    */
    {
      path:'/pp/:id/:title',
      name:'test',
      component: Test
    },

    /* 
      单页面多路由,方式2
      需要注意的是:
      left和right的router-view必须放在App.vue中
    */
    {
      path:'/test',
      name:'test',
      // 注意:结尾的s
      components: {
        default : Test,
        left : Hi1,
        right : Hi2
      }
    },

    // 单页面子路由,方式1:
    {
      // 如果有子路由设置name,父路由name设置就无效
      path: '/hi',
      component: Hi,
      children: [
        /* 
          如果添加上path为"/"的路由,
          那么Hi.vue中的标签<router-view>就是自己,
          所以会出现2次(Welcome to Mr.Han's Blog) 
        */
        {
          path: '/',
          name: 'hi',
          component: Hi
        },
        {
          //子路由path中的值,开头不要添加"/"
          path: 'hi1',
          name: 'hi1',
          component: Hi1
        },
        {
          //子路由path中的值,开头不要添加"/"
          path: 'hi2',
          name: 'hi2',
          component: Hi2
        }
      ]
    },
    {
      path:'/count',
      name:'count',
      component: Count
    },
    {
      path:'/promise',
      name:'promise',
      component: Promise
    }
  ]
})
