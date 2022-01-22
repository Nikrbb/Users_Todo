<template>
  <el-row class="tac">
   
    <el-col class="aside-menu" :span="12">
       <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
       
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <router-link class="router-link" to="/">Todo List</router-link>
        </el-menu-item>
        <el-menu-item index="2" >
          <el-icon><document /></el-icon>
          <router-link class="router-link" to="/users">Users</router-link>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><setting /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {Location, Document, Menu as IconMenu, Setting,} from '@element-plus/icons-vue'

export default {
    name: 'MainLayout',
    components: {
        Location,
        Document,
        IconMenu,
        Setting
    },

    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath)
        }, 
        handleClose(key, keyPath) {
            // console.log(key, keyPath)
        }
    }

}


</script>

<style scoped>
  .tac {
    display: block;
    width: 300px;
  }
  .aside-menu {
    width: 100%;
    max-width: 100%;
  }
  .router-link {
    display: block;
    width: 100%;
    text-align: left;
  }

</style>
