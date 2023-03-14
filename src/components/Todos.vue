<template>
  <div>
    <h3>TASK LIST</h3>
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
        <div class="buttons">
          <router-link :to="`/task/${todo.id}`" class="fas fa-solid fa-link"></router-link>
          <i class="fas fa-trash-alt" v-on:click="deleteTodo(todo.id)"></i>
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
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
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
    },

    sendTodo(todo) {
      this.$router.push({ path: `/task/${todo.id}`, props: { title: todo.title, id: todo.id, completed: todo.completed } });
    }

  },
  computed: {
    ...mapGetters(['allTodos']),
  },
  mounted() {
    if (this.allTodos.length === 0) {
      this.fetchTodos();
    }
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

.buttons {
  position: absolute;
  bottom: 10px;
  right: 20px;
  color: #fff;
  cursor: pointer;
}

.fa-link {
  text-decoration: none;
  color: #fff;
}

i {
  margin: 0px 2px;
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
