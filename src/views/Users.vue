<template>
  <div class="users">
    <h1 class="users__title">Users page</h1>
    <table-list ></table-list>
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

</style>
