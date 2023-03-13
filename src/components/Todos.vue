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
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.complete-box,
.incomplete-box {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.complete-box {
  background: #35495e;
}
.incomplete-box {
  background: #41b883;
}
.is-complete {
  color: #fff;
  background: #35495e;
}
@media (max-width: 768px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

</style>
