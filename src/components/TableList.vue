<template>
<div class="table-wrapper">
  <el-input @keyup="debounced" class="filter" v-model="input" placeholder="Please incert email to find" clearable />
  <el-table class="table" :data="tableData" style="width: 100%" height="250">
    <el-table-column fixed prop="id" label="Id" width="50" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="username" label="Username" width="160" />
    <el-table-column prop="email" label="Email" width="230" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button class="button_remove" type="text" size="small">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>
  <user-info  v-if="usersDetails"></user-info>
</div>
</template>

<script>
import { ref } from 'vue'
import UserInfo from './UserInfo.vue'
// import {mapGetters} from 'vuex'
export default {
    name: 'TableList',
    components: {
      UserInfo,
    },
    data() {
      return {
        input: ref(''),
        debouncedInput: '',
        usersDetails: false,
      }
    }, 
    computed: {
      // ...mapGetters([
      //   'USERS'
      // ]),

      tableData() {
        if (!this.debouncedInput) {
          return this.$store.getters.USERS;
        } else 
          return this.filteredData
      }, 

      filteredData() {
        let newArr = []
        const inpuValue = this.debouncedInput.toUpperCase()
        const users = this.$store.getters.USERS;
        users.forEach(elem => {
          const emailContent = elem.email.toUpperCase();
          if(emailContent.includes(inpuValue)) newArr.push(elem);
        }) 
        return newArr;
      },

      debounced() {
        return this.debounce(() => this.debouncedInput = this.input)
      },

    },

    methods: {
      debounce: (fn, ms = 500) => {
      let timeout;
        return () => {
          clearTimeout(timeout);
          timeout = setTimeout(fn, ms)
        };
      },

      handleClick({target}) {
        let parent = target.closest('.el-table__row');
        let id = parent.querySelector('.cell').innerText;
        
        this.usersDetails = !this.usersDetails;
      },
    }
}
</script>

<style scoped>
  .table-wrapper {
    position: relative;
  }
  .filter {
    margin-top: 50px;
    margin-left: 20px;
    width: 740px;
  }

  .table {
    margin-left: 20px;
    max-width: 740px;
  }
  .button_remove:hover {
    color: crimson;
  }
</style>
