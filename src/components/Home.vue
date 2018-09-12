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
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4" v-if="!loading">
      <v-flex xs12>
        <template>
          <v-carousel style="cursor:pointer">
            <v-carousel-item
              v-for='meetup in meetups'
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
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
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
