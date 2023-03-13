<template>
  <div>
    <h3>Single Todo</h3>
    <div class="single-todo">
      <div class="todo">
        {{ this.todo }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      todo: {
        id: '',
        title: '',
        completed: false,
      },
      id: this.$route.params.id,
    }
  },

  name: 'allTodos',
  computed: {
    ...mapGetters(['allTodos']),
  },

  // find the todo with the id that matches the id in the route
  // and set the todo to that todo
  mounted() {
    this.allTodos.find((todo) => {
      if (todo.id === this.id) {
      console.log(todo)
        return this.todo = todo;
      }
    });
  },


};

</script>

<style scoped>

.single-todo {
  display: flex;
  justify-content: center;
}

.todo {
  background: #41b883;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
