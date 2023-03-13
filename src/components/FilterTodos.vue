<template>
  <div>
    <div>
      Filter Todos:
      <select v-on:change="filterTodos($event)">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option selected value="200">200</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'FilterTodos',
  methods: {
    ...mapActions(['filterTodos']),
  }
}
</script>

<style scoped>
  select {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #41b883;
  }
</style>
