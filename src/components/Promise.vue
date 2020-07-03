<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg : 'Mrhan'
    };
  },
  mounted() {
    // this.test()
    //   .then(msg => {
    //     console.log("then:" + msg);
    //   })
    //   .catch(err => {
    //     console.log("catch:" + err);
    //   });
    
    //字符串中,拼接变量, 必须用``包裹
    console.log(`msg:${this.msg}`);
    
    this.test3();
  },

  methods: {
    /* 
        因为没有使用await, 所以输出结果:
        [Promise对象]
        [走我了] 
        [then:success]

        注意: resolve和reject只会处理一次,谁在前谁生效
    */
    test() {
      let a = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("success");
          reject("fail");
          console.log("走我了");
        }, 3000);
      });
      console.log(a); //输出: Promise对象
      return a;
    },

    /* 
        如果添加了await，那么返回值就是Promise具体处理的结果,
        处理结果要么resolve，要么reject，谁在前面谁先执行且只能执行一个,
        
        调用test2()方法,输出的结果:
        [走我了]
        [success]
        [我在await之后]
        [then:success]

        原因: resolve和reject会先寄存起来,等遇到.then和.catch才会触发,
        所以先输出: [走我了 success 我在await之后],
        最后return a, a实现了.then .catch, 输出了[then:success]
    */
    async test2() {
      let a = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("success"); //正常处理(fulfiled)
          reject("fail"); //因为上面正常处理,这里的异常处理无效
          console.log("走我了"); //走我了
        }, 3000);
      });
      console.log(a); //输出success
      console.log("我在await之后");
      return a;
    },

    /* 
        因为函数test4中没有用await, 所以函数前不应该加async, 但加了也不会报错.
        async的副作用, 会把函数的返回值包装成Promise对象
    */
    async test4() {
      return 1;
    },
    async test3() {
      let a = this.test4();
      console.log(a); //输出Promise实例

      let b = await a; //这里用到了await,可以在test3前添加async,也可以使用 函数自调用
      console.log(b);

      //函数自调用写法:
      //   (async () => {
      //     let b = await a;
      //     console.log(b);
      //   })();
    }
  }
};
</script>

<style lang='less' scoped>
</style>