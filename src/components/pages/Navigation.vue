<template>
  <div class="page">
    <gmap-map
      :center="center"
      :zoom="8"
      map-type-id="terrain"
    >
      <gmap-marker
        :key="index"
        :position="center"
      ></gmap-marker>

      <gmap-polyline v-if="route" :path="route"  :options="{geodesic:true, strokeColor:'#66ff99'}">
      </gmap-polyline>

    </gmap-map>

    <v-container grid-list-md v-if="steps" class="mt-3">
      <v-layout row wrap>
        <v-flex xs6>
          <v-toolbar
            floating
            dense

          >
            <v-icon class="pr-3">search</v-icon>
            <gmap-autocomplete prepend-icon="search"
                               :value="description"
                               @place_changed="setPlace"
            >
            </gmap-autocomplete>
            <v-btn @click="setCurrent()" icon>
              <v-icon>my_location</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
        <v-flex xs6>
          <v-card class="steps" v-if="steps[0]">
            <v-list two-line>
              <v-list-tile v-for="step in steps" :key="step.distance">
                <v-list-tile-avatar>
                  {{ step.distance.text }}
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="step.html_instructions"></v-list-tile-title>
                  <v-list-tile-sub-title>{{ step.duration.text }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        center: {lat: 42.2261474, lng: -8.7605312},
        search: '',
        markers: [],
        index: '',
        description: '',
        route: '',
        steps: []
      }
    },
    methods: {
      setCurrent () {
        this.center = {
          lat: 42.2261474,
          lng: -8.7605312
        }
      },
      setPlace (e) {
        this.center = {
          lat: e.geometry.location.lat(),
          lng: e.geometry.location.lng()
        }

        this.getRoute()
      },
      getRoute () {
        let origin = '42.2261474,-8.7605312'

        axios('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + this.center.lat + ',' + this.center.lng + '&key=' + process.env.MAPS_API_KEY)
          .then((response) => {
            console.log(response.data.routes[0].legs[0].steps)
            this.steps = response.data.routes[0].legs[0].steps
            this.route = window.google.maps.geometry.encoding.decodePath(response.data.routes[0].overview_polyline.points)
          }).catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>


<style lang="less">
  .page {
    position: absolute;
    left: 0;
    righT: 0;
    bottom: 0;
    top: 0;
  }
  .vue-map-container {
    position: absolute !important;
    left: 0;
    righT: 0;
    bottom: 0;
    top: 0;
  }

  .steps {
    max-height: 300px;
    overflow: auto;
  }
</style>
