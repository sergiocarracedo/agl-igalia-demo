<template>
  <div class="page">
    <gmap-map
      :center="{lat:42.4, lng:-8}"
      :zoom="8"
      map-type-id="terrain"
    ></gmap-map>
    <v-card
      img="static/doc-images/toolbar/map.jpg"
      flat
      class="pt-3"
    >
      <v-toolbar
        floating
        dense
      >
        <v-text-field prepend-icon="search" hide-details single-line></v-text-field>
        <v-btn icon>
          <v-icon>my_location</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

  </div>
</template>


<script>
  export default {

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
