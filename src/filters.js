import Vue from "vue";
import moment from "moment";

Vue.filter("fromNow", function(value) {
  if (value) {
    return moment(value, "YYYYMMDD").fromNow();
  }
});
