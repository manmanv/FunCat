let name = '小明'
let age = 18
let flag = true

function sum(num1,num2){
    return num1+num2
}

if(flag){
    console.log(sum(20,30));
}
//导出
export {
    flag,sum

}
//导出
export let sex = '男'