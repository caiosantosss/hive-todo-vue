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
  deleteTodo({ commit }, id) {
    commit('removeTodo', id);
  },
  updateTodo({ commit }, updatedTodo) {
    commit('updateTodo', updatedTodo);
  },
  addTodo({ commit }, title) {
    const newTodo = { id: Date.now(), title, completed: false };
    commit('addTodo', newTodo);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    // using axios to get the data
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    // commit the mutation to set the state
    commit('setTodos', response.data);
  },
  // get todo by id from state
  getTodoById({ commit, state }, id) {
    const foundTodo = state.todos.find((todo) => {
      return todo.id === id;
    });
    if (foundTodo) {
      commit("setTodo", foundTodo);
    } else {
      commit("setTodo", {});
    }
  },
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
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
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
