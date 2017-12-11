<template>
  <v-system-bar status color="primary" lights-out>
    <v-icon>network_wifi</v-icon>
    <v-icon>signal_cellular_null</v-icon>
    <v-icon>battery_full</v-icon>
    <v-icon>bluetooth</v-icon>
    <v-spacer></v-spacer>
    <v-icon>directions_car</v-icon> The roadbeast
    <v-spacer></v-spacer>
    <v-icon>access_time</v-icon>
    <Clock :blink="true" />
  </v-system-bar>
</template>

<script>
  import Clock from 'vue-digital-clock'
  export default {
    components: {
      Clock
    }
  }
</script>
