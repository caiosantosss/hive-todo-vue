import axios from 'axios';

const state = {
  todos: [],
  todo: {},
};

// getting the state
const getters = {
  allTodos: state => {
    return state.todos;
  },
  singleTodo: state => {
    return state.todo;
  }
};

const actions = {
  async fetchTodos({ commit }) {
    // using axios to get the data
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // commit the mutation to set the state
    commit('setTodos', response.data);
  },
  async deleteTodo({ commit }, id) {
    // using axios to delete the data
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  },
  async updateTodo({ commit }, updatedTodo) {
    // using axios to update the data
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
    commit('updateTodo', response.data);
  },
  async addTodo({ commit }, title) {
    // using axios to add the data
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
    commit('addTodo', response.data);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    // using axios to get the data
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    // commit the mutation to set the state
    commit('setTodos', response.data);
  },
  async fetchSingleTodo ({ commit }, id) {
    // using axios to get the data
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // commit the mutation to set the state
    commit('setTodo', response.data);
  }
};

const mutations = {
  // setting the state
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  addTodo: (state, newTodo) => {
    state.todos.unshift(newTodo);
  },
  setTodo: (state, todo) => {
    state.todo = todo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
