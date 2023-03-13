<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="onDblClick(todo)"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i class="fas fa-trash-alt" v-on:click="deleteTodo(todo.id)"></i>
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
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      console.log(todo)
      if (todo.id) {
        const updatedTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        };
      this.updateTodo(updatedTodo);
      } else {
        console.log('Todo not found');
      }
    }
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
