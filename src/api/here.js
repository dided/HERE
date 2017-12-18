import Vue from 'vue';

export default {
  get(url, request) {
    return Vue.http.get(url, request);
  },
};
