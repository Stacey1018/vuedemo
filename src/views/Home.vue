<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import instance from '@/axios/http.ts'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.getApi()
  },
  methods:{
    getApi(){
      instance.get(`/api/bi/metric/instance_list/`).then( data =>{
        console.log(data)
      })
    }
  }
}
</script>
