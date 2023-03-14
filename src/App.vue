<template>
  <div id="app">
    <div id="nav">
      <router-link class="navbar" to="/">TO DO LIST</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #35495e;
  border-radius: 3px;
}

.navbar {
  text-decoration: none;
  color: #fff;
  font-size: large;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: xx-large;
}
</style>
