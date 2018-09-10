<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 sm10 md8 xl4 offset-sm1 offset-md2 offset-xl4>
      <v-card class="primary">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-img
                src="https://www.dentons.com/-/media/images/website/background-images/offices/taipei/taipei_city_1900x1500px.jpg"
                height="130px"
              ></v-img>
            </v-flex>
            <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                <div>
                  <h2 class="font-weight-thin">My Meetup</h2>
                  <div class="black--text">9th September 2018</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat to="/meetups/1">
                  <v-icon left>arrow_forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
