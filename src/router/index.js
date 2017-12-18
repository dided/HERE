import VueRouter from 'vue-router';
import Repo from '../components/Repo.vue';
import RepoList from '../components/RepoList.vue';

const routes = [
  { path: '/', component: RepoList },
  { path: '/:name', component: Repo },
];

export default new VueRouter({ routes });
