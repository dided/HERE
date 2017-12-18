<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
import RepoList from './RepoList.vue'
import Repo from './Repo.vue'
import LanguagesChart from './LanguagesChart'
export default {
  components: { RepoList, Repo, LanguagesChart }
}
</script>
