<template>
  <div id="nav">
    <component :is="currentLayout">
      <!-- <router-view></router-view> -->
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    Sidebar
  },

  created() {
    this.$store.dispatch(`loadUsers`)
  },
  
  computed: {
    currentLayout() {
      return 'main-layout'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body, h1, h2, h3, h4, p, ul[class], ol[class], li, figure, figcaption, blockquote, dl, dd {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
