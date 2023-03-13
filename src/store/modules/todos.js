import axios from 'axios';

const state = {
  todos: []
};

// getting the state
const getters = {
  allTodos: state => {
    return state.todos;
  }
};

const actions = {
  async fetchTodos({ commit }) {
    // using axios to get the data from the API
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // commit the mutation to set the state
    commit('setTodos', response.data);
  }
};

const mutations = {
  // setting the state
  setTodos: (state, todos) => {
    state.todos = todos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
