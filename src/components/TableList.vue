<template>
<div class="table-wrapper">
  <div class="table__filter">
    <el-input @keyup="debounced" class="table__filter-input" v-model="input" placeholder="Please incert email to find" />
    <router-link v-show="id" class="info_id" :to="`/users/${id}`">info</router-link>
    <el-input maxlength="4" class="table__filter-id" v-model="id" placeholder="Id" />
    <el-select @change="usersPerPage(select)" v-model="select" class="table__filter-select m-2">
  
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :value="item.value"
    >
    </el-option>
    </el-select>
  </div>
  <el-table class="table" @row-click="tableHandler" :data="tableData" style="width: 100%" height="350">
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
   <el-button class="button_add mt-4" style="width: 100%" @click="usersPerPage(+USERS.length + +select)">Add {{select}} users</el-button>
</div>
</template>

<script>
import { ref } from 'vue'
import UserInfo from './UserInfo.vue'
import User from '../views/User.vue'
import onInput from '../mixins/onInput.js'
import {mapGetters} from 'vuex'


export default {
    name: 'TableList',
    components: {
      User,
      UserInfo,
      onInput,
    },

    data() {
      return {
        input: ref(''),
        select: ref('10'),
        id: ref(''),
        debouncedId: '',
        debouncedInput: '',
        options: [
          {
            value: '10',
          },
          {
            value: '20',
          },
          {
            value: '50',
          },
          {
            value: '100',
          },
        ], 
      }
    }, 

    created() {
      this.$store.dispatch(`getUsersFromApi`);
    },
  
    computed: {
      ...mapGetters([
        'USERS',
        'userById',
      ]),

      debounced() {
        return onInput.debounce(() => {
          this.debouncedInput = this.input;
          this.debouncedId = this.id;
          })
      },

      tableData() {
        if (!this.debouncedInput) return this.USERS;
        return this.USERS.filter(el => el.email.toUpperCase().includes(this.debouncedInput.toUpperCase()));
      },

      userDetails() {
        return this.userById;
      }

    },

    methods: {

      tableHandler(user, column, {target}) {
        if (target.innerText === 'Detail') {
          this.$store.commit('SET_USER', user);
          this.$router.push({ path: `/users/${user.id}` })

        } else if (target.innerText === 'Remove') {
          const index = this.USERS.findIndex(el => el.id === user.id);
          this.$store.commit( `REMOVE_DATA`, index);
        }
      },
      
      usersPerPage(amount) {
        this.$store.dispatch(`getUsersFromApi`, amount);
      }, 
    }
}
</script>

<style scoped>

  .table {
    margin-left: 20px;
    max-width: 740px;
  }
  .table-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .table__filter {
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
     max-width: 740px;
  }
  .table__filter-input {
    margin-left: 20px;
  }
  .table__filter-id {
    max-width: 60px;
  }
  .table__filter-select {
    max-width: 60px;
    
    text-align: center;
  }

  .info_id {
    padding: 5px 10px;
    overflow: hidden;
    border-radius: 5px;
    width: 60px;
    height: 30px;
    background-color: #fff;
    transition: 0.3s;
    animation-duration: 0.7s;
    animation-name: slidein;
    border: none;
    text-decoration: none;
  }
  .info_id:hover {
    opacity: 1;
    outline: 1px solid #409eff;

  }
  @keyframes slidein {
    0%{
      width: 0;
      opacity: 0;
      padding: 0;
    }

    100% {
      width: 60px;
    }

  }
  
  .button_close:hover {
    color: darkgoldenrod;
  }
  .button_remove:hover {
    color: crimson;
  }
  .button_add {
    margin: 0 20px;
    max-width: 740px;
  }
</style>
