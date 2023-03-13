<template>
  <div>
    <div>
      <h1>Todos</h1>
      <div class="todos">
        <div
          v-for="todo in allTodos"
          class="todo"
          v-bind:key="todo.key"
        >
          {{ todo.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
  // when the component is created, fetch the todos
  created() {
    this.fetchTodos();
  }
};

</script>

<style scoped>

</style>
