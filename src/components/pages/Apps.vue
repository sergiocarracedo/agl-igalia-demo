<template>
  <h1>
    <v-icon>icon-grid</v-icon>
    Cooming soon
  </h1>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="less">
  @import "../../assets/settings.less";

  h1 {
    .vertical-align();
    font-weight: normal;
    left: 0;
    righT: 0;
    text-align: center;
  }
  .icon {
    font-size: 100px;
    display: block;
    color: @primary-color;
    margin: auto;
  }
</style>
