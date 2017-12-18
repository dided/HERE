import Vue from 'vue';
import { HorizontalBar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

Vue.component('languages-chart', {
  name: 'languages-chart',
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
});

