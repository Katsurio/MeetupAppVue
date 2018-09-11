import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.dentons.com/-/media/images/website/background-images/offices/taipei/taipei_city_1900x1500px.jpg',
        id: 'SantoryuOgiRokudoTsuji12',
        title: 'Meetup in Taipei',
        date: '2018-09-12'
      },
      {
        imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70',
        id: 'GomuGomuNoGatling23',
        title: 'Meetup in Tokyo',
        date: '2018-09-13'
      },
      {
        imageUrl: 'https://lonelyplanetwp.imgix.net/2016/04/Santorini-53c9e0dca77b.jpg?fit=min&q=40&sharp=10&vib=20&w=1470',
        id: 'NinpoSantoryu34',
        title: 'Meetup in Santorini',
        date: '2018-09-14'
      },
      {
        imageUrl: 'https://www.myholidayguru.co.uk/wp-content/uploads/2017/10/Zuiderkerk-in-Amsterdam-iStock-528503566-2_titel.jpg',
        id: 'GomuGomuNoGrizly45',
        title: 'Meetup in Amsterdam',
        date: '2018-09-15'
      }
    ],
    user: {
      id: 'tsukinomi2345',
      registeredMeetups: ['GomuGomuNoGrizly45']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
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
    }
  }
})
