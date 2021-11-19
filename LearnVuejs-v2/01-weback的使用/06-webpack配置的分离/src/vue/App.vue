<template>
    <div class="title"> 
        <h2>{{message}}</h2>
        <button @click = "btnClick">按钮</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from "./Cpn.vue"
export default {
    name:"App",
    components: {
        Cpn
    },
    data(){
            return{
                message:'Hello呀呀',
                name:"你叉叉"
            }
        },
        methods:{
            btnClick(){
    
            }
        }
}
</script>

<style>
    .title{
        color: rgb(4, 0, 255);
    }
</style>