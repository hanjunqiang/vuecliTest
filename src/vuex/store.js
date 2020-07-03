import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//可以理解为单例对象state
const state = {
    count: 3
}

// 同步修改方法
const mutations = {
    /* 
        第一个参数默认是state,
        外界调用this.$store.commit("add",10),
        传入的参数10,对应的是add()的第二个参数,一次类推
    */
    add(state) {
        state.count++;
    },
    reduce(state) {
        state.count--;
    },
    //带参数n
    add2(state, n) {
        state.count = state.count + n;
    },
}

//异步修改方法,并且可以调用mutations中的方法
const actions = {
    addAsync(context) {
        context.commit('add')
        setTimeout(() => {
            context.commit('reduce')
        }, 5000);
        console.log('我比上一行的异步操作先执行');
    },
    reduceAsync(context) {
        context.commit('reduce')
    },
}

/* 
作用: 对state中的属性(比如:count),进行计算属性的操作,就是在count输出前进行一些操作
getters相当于计算属性,不要忘记添加return,否则count没有值,
*/
const getters = {
    count: state => {
        return state.count = state.count + 100
    }
}

// 想要外面this.$store.到的属性,需要这里导出
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})