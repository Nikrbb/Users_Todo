<template>
<el-input class="filter" v-model="input" placeholder="Please input" clearable />
   <el-table :data="tableData" style="width: 100%" height="250">
    <el-table-column fixed prop="id" label="Id" width="50" />
    <el-table-column prop="name" label="Name" width="150" />
    <el-table-column prop="username" label="Username" width="120" />
    <el-table-column prop="email" label="Email" width="300" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'TableList',
    data() {
      return {
        input: ref('')
      }
    }, 
    computed: {
        tableData() {
            return this.$store.getters.getData;
        }
    },

    methods: {
      handleClick() {
            console.log('click')
      }
      
    }
}
</script>

<style scoped>
  .filter {
    width: 740px;
  }
</style>
