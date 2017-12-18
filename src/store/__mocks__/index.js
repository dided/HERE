import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
  loading: false,
  repos: [],
  repoLanguages: {},
  filteredRepos: [],
}
export const getters = {
  repos: jest.fn().mockReturnValue([
    {
      id: 1,
      name: 'Foo',
    },
    {
      id: 2,
      name: 'Bar',
    },
  ]),
  filteredRepos: jest.fn().mockReturnValue([
    {
      id: 1,
      name: 'Foo',
    },
    {
      id: 2,
      name: 'Bar',
    },
  ]),
  repoLanguages: jest.fn().mockReturnValue([
      { 'python': 3000, 'javascript': 1400 }
  ])
};

export const mutations = {
  updateRepos: jest.fn(),
};

export const actions = {
  getRepos: jest.fn(),
  getRepoLanguages: jest.fn(),
};
// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  const mockState = Object.assign({}, state, custom.state);

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  };
}

export const store = __createMocks().store;
