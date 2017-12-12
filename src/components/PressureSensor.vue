<template>
  <div class="{warning: warning}">
    {{ pressure.toFixed(1) }}psi <v-icon v-if="warning">flaticon-warning</v-icon>
  </div>
</template>

<script>
  export default {
    props: [
      'pressure'
    ],
    computed: {
      warning () {
        return this.pressure < 2
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";
  .flaticon-warning {
    color: @orange;
  }
</style>
