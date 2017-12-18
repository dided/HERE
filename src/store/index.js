import Vue from 'vue';
import Vuex from 'vuex';
import { HERE_REPO_API_ENDPOINT, HERE_REPO_LANGUAGES_API_ENDPOINT } from '../constants';
import here from '../api/here';
import * as types from './mutation-types';

Vue.use(Vuex);

// initial state
const state = {
  loading: false,
  repos: [],
  repoLanguages: {},
  filteredRepos: [],
  errors: {},
};

// getters
const getters = {
  repos: state => state.repos,
  filteredRepos: state => state.filteredRepos,
  repoLanguages: state => state.repoLanguages,
};

// actions
const actions = {
  getRepos({ commit }) {
    commit(types.REPOS_REQUEST);
    here.get(HERE_REPO_API_ENDPOINT)
      .then(response => commit(types.REPOS_SUCCESS, response.body))
      .catch(error => commit(types.REPOS_FAILURE, error));
  },
  getRepoLanguages({ commit }, repoName) {
    here.get(HERE_REPO_LANGUAGES_API_ENDPOINT(repoName))
      .then(response => commit(types.REPO_LANGUAGES_SUCCESS, response.body))
      .catch(error => commit(types.REPO_LANGUAGES_FAILURE, error));
  },
};

// mutations
const mutations = {
  [types.REPOS_REQUEST]() {
    // TODO loading screen whild data is being fetched
    state.loading = true;
  },
  [types.REPOS_SUCCESS](state, payload) {
    state.repos = _.map(payload, obj => _.pick(obj, ['id', 'name', 'description']));
    state.filteredRepos = state.repos;
    state.loading = false;
  },
  [types.REPOS_FAILURE](state, error) {
    state.errors = error;
    state.loading = false;
  },
  [types.REPO_LANGUAGES_REQUEST]() {
    state.loading = true;
  },
  [types.REPO_LANGUAGES_SUCCESS](state, payload) {
    const data = {
      labels: [],
      datasets: [
        {
          label: '# of Bytes',
          backgroundColor: '#2196F3',
          data: [],
        },
      ],
    };
    _.each(payload, (value, key) => {
      data.labels.push(key);
      data.datasets[0].data.push(value);
    });
    state.repoLanguages = data;
    state.loading = false;
  },
  [types.REPO_LANGUAGES_FAILURE](state, error) {
    state.errors = error;
    state.loading = false;
  },
  updateRepos(state, value) {
    state.filteredRepos = state.repos.filter(repo => repo.name.includes(value));
  },
};

export const store = new Vuex.Store({
  getters,
  mutations,
  actions,
  state,
});
