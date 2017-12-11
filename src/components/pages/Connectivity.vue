<template>
  <div class="page">
      <v-toolbar
        dense
      >
        <v-text-field prepend-icon="search" hide-details single-line v-model="url"></v-text-field>
      </v-toolbar>
    <iframe :src="url" border="0"></iframe>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        url: 'http://www.igalia.com'
      }
    }
  }
</script>



<style lang="less">
  @import "../../assets/settings.less";
  iframe {
    z-index: 1;
    .cover();
    widTH: 100%;
    heighT: 100%;
  }
  .toolbar {
    z-index: 9;
  }
</style>
