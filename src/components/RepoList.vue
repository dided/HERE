<template>
  <section class="repos">
      <aside class="repos__search">
          <mu-text-field
            hintText="Enter repository name."
            labelFloat
            label="Search..."
            fullWidth
            @input="handleInput"
          />
      </aside>
      <div class="repos__list">
          <mu-card v-for="repo in filteredRepos">
              <router-link :to="repo.name">
                <mu-card-header :title="repo.name" :subTitle="repo.description" />
              </router-link>
          </mu-card>
      </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    filteredRepos: 'filteredRepos',
  }),
  methods:{
    handleInput(value) {
        this.$store.commit('updateRepos', value);
    }
  },
  created() {
      this.$store.dispatch('getRepos')
  }
}
</script>
<style lang="scss" scoped>
 @import '../styles/repo.scss'
</style>
