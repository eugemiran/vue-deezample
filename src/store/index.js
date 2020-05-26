import Vue from "vue";
import Vuex from "vuex";

import search from "./search.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search
  }
});
