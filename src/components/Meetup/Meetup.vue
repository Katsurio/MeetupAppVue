<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">My Meetup</h3>
          </v-card-title>
          <v-responsive>
            <v-img
              src="https://www.dentons.com/-/media/images/website/background-images/offices/taipei/taipei_city_1900x1500px.jpg"
              height="400px">
            </v-img>
          </v-responsive>
          <v-card-text>
            <div class="info--text">9th September 2018 - Where it takes place</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, eos ipsum nam officia quibusdam quis repudiandae rerum sapiente sequi temporibus tenetur vero?</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup()
      }
    }
  }
</script>
