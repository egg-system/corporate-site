import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('dayjs', function(date) {
  return dayjs(date).format('YYYY/MM/DD')
})
