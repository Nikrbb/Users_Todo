<template>
<div class="table-wrapper">
  <el-input @keyup="debounced" class="filter" v-model="input" placeholder="Please incert email to find" clearable />
  <el-table class="table" @row-click="tableHandler" :data="tableData" style="width: 100%" height="250">
    <el-table-column fixed prop="id" label="Id" width="50" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="username" label="Username" width="160" />
    <el-table-column prop="email" label="Email" width="230" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small">Detail</el-button>
        <el-button class="button_remove" type="text" size="small">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>

  <user-info :usersDetails="usersDetails"  v-if="usersNode">
   <el-button class="button_close" @click="usersNode = false" type="text">Close</el-button>
   <el-button class="button_remove" @click="removeFromNode" type="text">Remove</el-button>
  </user-info>
</div>
</template>

<script>
import { ref } from 'vue'
import UserInfo from './UserInfo.vue'
import onInput from '../mixins/onInput.js'
import {mapGetters} from 'vuex'

export default {
    name: 'TableList',
    components: {
      UserInfo,
      onInput,
    },

    data() {
      return {
        input: ref(''),
        debouncedInput: '',
        usersDetails: null,
        usersNode: false,
      }
    }, 

    created() {
      this.$store.dispatch(`getUsersFromApi`)
    },
  
    computed: {
      ...mapGetters([
        'USERS'
      ]),

      debounced() {
        return onInput.debounce(() => this.debouncedInput = this.input)
      },

      tableData() {
        if (!this.debouncedInput) return this.USERS;
        return this.USERS.filter(el => el.email.toUpperCase().includes(this.debouncedInput.toUpperCase()));
      }, 
    },

    methods: {

      tableHandler(user, column, {target}) {
        if (target.innerText === 'Detail') {
          this.usersDetails = user;
          this.usersNode = true;
        } else if (target.innerText === 'Remove') {
          const index = this.USERS.findIndex(el => el.id === user.id);
          this.$store.commit( `REMOVE_DATA`, index);
          if (this.usersDetails.id === user.id) this.usersNode = false;
        }
      },

      removeFromNode() {
        const index = this.USERS.findIndex(el => el.id === this.usersDetails.id);
        this.$store.commit( `REMOVE_DATA`, index);
        this.usersNode = false
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
