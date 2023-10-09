<template>
  <div id="app">
    <NavBar></NavBar>
    <SideBar class="v-sidebar-menu"></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
},

  
  
}

</script>

<style lang="scss">

</style>
