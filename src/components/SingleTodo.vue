<template>
  <div>
    <h3>Single Todo</h3>
    <div class="single-todo">
      <div class="todo">
        <span v-if="!isEdit">{{ todo.title }}
          <i class="fas fa-edit" style="margin-left: 10px" v-on:click="isEdit = true" />
        </span>
        <!-- add edit icon -->
        <div v-if="isEdit">
          <input v-model="todo.title" />
          <button @click="saveTodo">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      todo: {
        id: '',
        title: '',
        completed: false,
      },
      id: this.$route.params.id,
      isEdit: false,
    }
  },

  name: 'singleTodo',
  computed: {
    ...mapGetters(['singleTodo']),
  },

  methods: {
    ...mapActions(['getTodoById', 'updateTodo']),

    saveTodo() {
      this.updateTodo(this.todo);
      this.isEdit = false;
    }
  },

  created() {
    this.getTodoById(Number(this.id));
    this.todo = this.singleTodo;
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
