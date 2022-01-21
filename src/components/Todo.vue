<template>
  <div class="container">
        <SelectButton 
        :currentTab="currentTab" 
        :tabs="tabs" 
        @changeTab="change" />
      <div class="wrapper">
        <keep-alive>
         
          <Form 
          :currentTab="currentTab" 
          @sendData="getData
          "/>

        </keep-alive>
        <ClearButton 
        @clearTodos="clearAllTodos"
        :currentTab="currentTab"
        :home="homeTasks"
        :work="workTasks"
         />
        <div v-if="currentTab === `Work`" class="wrapper__todo-item">
          <TodoItem 
          v-for="workItem in workTasks" 
          :key="workItem.id" 
          :item="workItem" 
          :currentTab="currentTab"
          :workTasks="workTasks" 
          @deleteTodo="updateTodo" />
        </div>
        <div v-if="currentTab === `Home`" class="wrapper__todo-item">
          <TodoItem 
          v-for="homeItem in homeTasks" 
          :key="homeItem.id" 
          :item="homeItem"
          :currentTab="currentTab"
          :homeTasks="homeTasks" 
          @deleteTodo="updateTodo" />
        </div>
        
      </div>
      
  </div>
</template>

<script>
import SelectButton from './SelectButton.vue'
import Form from './Form.vue'
import TodoItem from './TodoItem.vue'
import ClearButton from './ClearButton.vue'

export default {
  name: 'Todo',
  components: {
    SelectButton,
    Form,
    TodoItem,
    ClearButton
  },

  data() {
    return {
      homeTasks: [],
      workTasks: [],
      tabs: [`Home`, `Work`],
      currentTab: `Home`,
    } 
  },
  computed: {
     changeTamplate() {
        return this.currentTab
      },
  },
  mounted() {
    if (localStorage.workTodos){
      this.workTasks = JSON.parse(localStorage.getItem('workTodos'))
    }
     if (localStorage.homeTodos){
      this.homeTasks = JSON.parse(localStorage.getItem('homeTodos'))
    }
  },

  methods: {
      
      change(tab) {
        this.currentTab = tab
      },
      
      getData(obj) {
        if (this.currentTab === `Work`) {
          if (!this.workTasks.length) obj.id = 1
          else obj.id = this.workTasks[this.workTasks.length - 1].id + 1
        
          this.workTasks.push(obj)
          this.setData(this.workTasks)
        }
        else {
          if (!this.homeTasks.length) obj.id = 1
          else obj.id = this.homeTasks[this.homeTasks.length - 1].id + 1
        
          this.homeTasks.push(obj)
          this.setData(this.homeTasks)
        }
      },

      setData(data) {
        if (this.currentTab === `Work`) {
          localStorage.setItem(`workTodos`, JSON.stringify(data)) 
        }
        else {
          localStorage.setItem(`homeTodos`, JSON.stringify(data)) 
        }
      },

      updateTodo(arr) {
        if (this.currentTab === `Work`) {
          localStorage.setItem(`workTodos`, JSON.stringify(arr)) 
          this.workTasks = arr
        } else {
          localStorage.setItem(`homeTodos`, JSON.stringify(arr)) 
          this.homeTasks = arr
        }
      },

      clearAllTodos() {
        if (this.currentTab === `Work`) {
          localStorage.removeItem('workTodos')
          this.workTasks = [];
        }
        else {
          localStorage.removeItem('homeTodos')
          this.homeTasks = []
        }
      }
  },   
}
</script>

<style scoped>

.container {
  max-width: 1310px;
  margin: 0 20px;
}

.wrapper {
  display: flex;
  gap: 20px;
}

.wrapper__todo-item {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

</style>
