// This file is the entry point for the store (Vuex)

import { createStore } from 'vuex';
import todos from './modules/todos';

// Create store
export const store = createStore({
  modules: {
    todos
  }
});
