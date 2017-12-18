<template>
  <section class="repos__repo-detail">
    <mu-appbar :title="this.$route.params.name + ' [Number of Bytes per language]'">
      <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/"/>
    </mu-appbar>
    <div class="repos__repo-chart">
        <languages-chart
          :chart-data="repoLanguages"
          :options="{responsive: true, maintainAspectRatio: false}"
        ></languages-chart>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
      repoLanguages: 'repoLanguages'
  }),
  created() {
      this.$store.dispatch('getRepoLanguages', this.$route.params.name);
  }
}
</script>
<style lang="scss" scoped>
 @import '../styles/repo.scss'
</style>
