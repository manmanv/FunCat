//使用commonjs的模块化规范
const {add,mul} = require('./js/mathUtil.js')

console.log(add(20,30));
console.log(mul(20,30));
//使用ex6的模块化规范
import {name,age} from './js/info.js';

 console.log(name);
 console.log(age);

 require('./css/normal.css')
 require('./css/special.less')

document.writeln('<h2>你好</h2>')

//使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
})

document.writeln('<button>按钮</button>')



