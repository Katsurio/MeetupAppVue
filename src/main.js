import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1,
    accent: colors.green.accent2,
    secondary: colors.grey.lighten1,
    error: colors.red.accent4,
    info: colors.blue.lighten1,
    success: colors.green.lighten2,
    warning: colors.amber.darken2
  }
})
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDtlgtQ11Fc-xoxO8y4ofR17bmxliOTaj8',
      authDomain: 'devmeetup-819ed.firebaseapp.com',
      databaseURL: 'https://devmeetup-819ed.firebaseio.com',
      projectId: 'devmeetup-819ed',
      storageBucket: 'devmeetup-819ed.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
