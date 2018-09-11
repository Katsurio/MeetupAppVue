import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.dentons.com/-/media/images/website/background-images/offices/taipei/taipei_city_1900x1500px.jpg',
        id: 'SantoryuOgiRokudoTsuji12',
        title: 'Meetup in Taipei',
        date: new Date(),
        location: 'Taipei 101',
        description: 'It\'s a tall building in Taiwan'
      },
      {
        imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70',
        id: 'GomuGomuNoGatling23',
        title: 'Meetup in Tokyo',
        date: new Date(),
        location: 'Mount Fuji',
        description: 'It\'s a mountain in Japan'
      },
      {
        imageUrl: 'https://lonelyplanetwp.imgix.net/2016/04/Santorini-53c9e0dca77b.jpg?fit=min&q=40&sharp=10&vib=20&w=1470',
        id: 'NinpoSantoryu34',
        title: 'Meetup in Santorini',
        date: new Date(),
        location: 'The Blue Roofed Building',
        description: 'It\'s an island in Greece'
      },
      {
        imageUrl: 'https://www.myholidayguru.co.uk/wp-content/uploads/2017/10/Zuiderkerk-in-Amsterdam-iStock-528503566-2_titel.jpg',
        id: 'GomuGomuNoGrizly45',
        title: 'Meetup in Amsterdam',
        date: new Date(),
        location: 'Red Light District',
        description: 'It\'s a well lit area in Amsterdam'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.description,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'dhafkjhasdkfjha34'
      }
      // Reach out to Firebase and store it
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
