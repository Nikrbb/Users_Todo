<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <Todo />
  </div>
</template>

<script>

import Todo from '../components/Todo.vue'

export default {
  name: 'Todolist',
  components: {
    Todo
  }
}
</script>
