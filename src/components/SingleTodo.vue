<template>
  <div>
    <h3>Single Todo</h3>
    <div class="single-todo">
      <div class="todo">
        {{ id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
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
