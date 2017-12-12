<template>
  <div>
    <div class="help">
      Child Lock
      <span v-if="locked">
        activated
      </span>
      <span v-else="locked">
        disabled
      </span>
    </div>
    <v-icon v-if="locked">lock</v-icon>
    <v-icon v-else="locked">lock_open</v-icon>
  </div>
</template>

<script>
  export default {
    props: [
      'locked'
    ]
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";
  .help {
    position: absolute;
    left: -110px;
    top: -17px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    widtH: 100px;
    border: 1px solid @white;
    padding: 5px;
  }
</style>
