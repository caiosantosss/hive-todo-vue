<template>
  <div id="home">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import AddTodo from '../components/AddTodo.vue'
import FilterTodos from '../components/FilterTodos.vue'
import Todos from '../components/Todos.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    AddTodo,
    FilterTodos,
    Todos
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
