<template>
  <div class="users">
    <h1 class="users__title">This is an about page</h1>
    <table-list class="table-list"></table-list>
  </div>
</template>
<script>
import TableList from '../components/TableList.vue'

export default {
  name: 'Users',
  components: {
    TableList
  }, 
  
  
}
</script>

<style scoped>
  .users {
    display: flex;
    flex-direction: column;
  }



  .table-list {
    margin-top: 100px;
  }
</style>
