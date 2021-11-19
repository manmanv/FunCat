<template>
  <div>
      <h2>我是Cpn组件的标题</h2>
      <p>Cpn组件内容</p>
      <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
    name:"Cpn",
    data(){
        return{
            name:'Cpn组件的name'
        }
    }
}
</script>

<style>

</style>