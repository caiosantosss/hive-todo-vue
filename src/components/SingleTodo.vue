<template>
  <div>
    <h3>Single Todo</h3>
    <div class="single-todo">
      <div class="todo">
        {{ this.todo.title }}
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

  name: 'singleTodo',
  computed: {
    ...mapGetters(['singleTodo']),
  },

  async mounted() {
    await this.$store.dispatch('fetchSingleTodo', this.id);
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
