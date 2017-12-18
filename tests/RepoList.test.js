import Vuex from 'vuex';
import { shallow, createLocalVue } from 'vue-test-utils';
import { __createMocks as createStoreMocks } from '../src/store';
import RepoList from '../src/components/RepoList';
jest.mock('../src/store');
const localVue = createLocalVue();

localVue.use(Vuex);

describe('RepoList', () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStoreMocks();
    wrapper = shallow(RepoList, {
      store: storeMocks.store,
      attachToDocument: true,
      localVue,
    });
  });
   test('It should fetch repos.', () => {
    expect(storeMocks.actions.getRepos).toBeCalled();
  });
});
