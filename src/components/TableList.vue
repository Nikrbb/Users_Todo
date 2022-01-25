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
        <el-button type="text" size="small" @click="showDetails"
          >Detail</el-button
        >
        <el-button class="button_remove" @click="removeItem" type="text" size="small">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>

  <user-info :usersDetails="usersDetails"  v-if="usersNode">
   <el-button class="button_close" @click="usersNode = false" type="text">Close</el-button>
   <el-button class="button_remove" @click="removeItem" type="text">Remove</el-button>
  </user-info>
</div>
</template>

<script>
import { ref } from 'vue'
import UserInfo from './UserInfo.vue'
import {mapGetters} from 'vuex'
import mixins from '../mixins/mixins'

export default {
    name: 'TableList',
    components: {
      UserInfo,
      mixins,
    },

    data() {
      return {
        input: ref(''),
        debouncedInput: '',
        usersDetails: null,
        usersNode: false,
      }
    }, 
    computed: {
      ...mapGetters([
        'USERS'
      ]),

      debounced() {
        return this.debounce(() => this.debouncedInput = this.input)
      },

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
    },

    methods: {
      debounce: (fn, ms = 500) => {
      let timeout;
        return () => {
          clearTimeout(timeout);
          timeout = setTimeout(fn, ms)
        };
      },

      showDetails({target}) {
        const id = mixins.findElemId(target);
        this.usersDetails = this.USERS.find(elem => elem.id === id);
        if (this.usersNode !== true) this.usersNode = true;
      },

      removeItem({ target }) {
        const id =  this.usersDetails ? mixins.findElemId( target, this.usersDetails.id ) : mixins.findElemId( target );
        if ( this.usersDetails && this.usersDetails.id === id ) this.usersNode = false;
        this.$store.commit( `REMOVE_DATA`, id );
        },
      }
}
</script>

<style scoped>
  .table-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
  .button_close:hover {
    color: darkgoldenrod;
  }
  .button_remove:hover {
    color: crimson;
  }
</style>
