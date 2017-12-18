<template>
  <div class="{warning: warning}">
    {{ pressureDisplay }}psi <v-icon v-if="warning">flaticon-warning</v-icon>
  </div>
</template>

<script>
  export default {
    props: [
      'pressure'
    ],
    computed: {
      pressureDisplay () {
        try {
          return this.pressure.toFixed(1)
        } catch (e) {
          return 0
        }
      },
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
