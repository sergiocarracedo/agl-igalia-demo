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


    </gmap-map>
    <v-card
      img="static/doc-images/toolbar/map.jpg"
      flat
      class="pt-3"
    >
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
          <v-icon >my_location</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        center: {lat: 42.2261474, lng: -8.7605312},
        search: '',
        marker: {}
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

        this.markers[0].position = this.center

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
</style>
