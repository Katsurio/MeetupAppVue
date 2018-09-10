<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class='text-xs-center text-sm-right'>
        <v-btn large router to='/meetups' class='info'>Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class='text-xs-center text-sm-left'>
        <v-btn large router to='/meetup/new' class='info'>Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4">
      <v-flex xs12>
        <template>
          <v-carousel style="cursor:pointer">
            <v-carousel-item
              v-for='(meetup,i) in meetups'
              :key='meetup.id'
              @click="onLoadMeetup(meetup.id)"
              :src='meetup.imageUrl'
              reverse-transition='fade'
              transition='fade'>
              <div class="title">
                {{ meetup.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </template>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 class='text-xs-center'>
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {imageUrl: 'https://www.dentons.com/-/media/images/website/background-images/offices/taipei/taipei_city_1900x1500px.jpg', id: 'SantoryuOgiRokudoTsuji12', title: 'Meetup in Taipei'},
          {imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70', id: 'GomuGomuNoGatling23', title: 'Meetup in Tokyo'},
          {imageUrl: 'https://lonelyplanetwp.imgix.net/2016/04/Santorini-53c9e0dca77b.jpg?fit=min&q=40&sharp=10&vib=20&w=1470', id: 'NinpoSantoryu34', title: 'Meetup in Santorini'},
          {imageUrl: 'https://www.myholidayguru.co.uk/wp-content/uploads/2017/10/Zuiderkerk-in-Amsterdam-iStock-528503566-2_titel.jpg', id: 'GomuGomuNoGrizly45', title: 'Meetup in Amsterdam'}
        ]
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    font-size: 2em!important;
    padding: 20px;
  }
</style>
