//使用commonjs的模块化规范
const {add,mul} = require('./mathUtil.js')
console.log(add(20,30));
console.log(mul(20,30));
//使用ex6的模块化规范
import {
    name,age
} from '../../03-webpack的loader/src/js/info.js'
console.log(name);
console.log(age);