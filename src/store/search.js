import { SEARCH_ARTIST } from "./actions";
import MusicService from "@/services/musicService";

export const SEARCH_ARTIST_MUTATIONS = {
  REQUEST: `${SEARCH_ARTIST}_REQUEST`,
  SUCCESS: `${SEARCH_ARTIST}_SUCCESS`,
  ERROR: `${SEARCH_ARTIST}_ERROR`,
  RESET: `${SEARCH_ARTIST}_RESET`
};

const initial_state = {
  loading: false,
  error: false,
  success: false,
  artists: [],
  next: null
};

const getters = {
  artists(state) {
    return state.artists;
  },
  artistsCount(state) {
    return state.artists.legnth;
  },
  isLoading(state) {
    return state.loading;
  },
  isSuccess(state) {
    return state.success;
  },
  isError(state) {
    return state.error;
  }
};

const actions = {
  async [SEARCH_ARTIST]({ commit }, { artist }) {
    try {
      commit(SEARCH_ARTIST_MUTATIONS.REQUEST);
      const response = await MusicService.searchArtist({ artist });
      if (response) {
        commit(SEARCH_ARTIST_MUTATIONS.SUCCESS, response.data);
      } else {
        commit(SEARCH_ARTIST_MUTATIONS.ERROR, "No funco");
      }
    } catch (err) {
      commit(SEARCH_ARTIST_MUTATIONS.ERROR, "No funco");
    }
  }
};

const mutations = {
  [SEARCH_ARTIST_MUTATIONS.REQUEST](state) {
    state.loading = true;
  },
  [SEARCH_ARTIST_MUTATIONS.SUCCESS](state, { data }) {
    state.artists = state.artists.concat(data);
    state.success = true;
    state.loading = false;
  },
  [SEARCH_ARTIST_MUTATIONS.ERROR](state) {
    state.error = true;
    state.loading = false;
  },
  [SEARCH_ARTIST_MUTATIONS.RESET](state) {
    state.success = false;
    state.error = false;
    state.loading = false;
  }
};

export default {
  state: initial_state,
  getters,
  actions,
  mutations
};
