<template>
  <div class="toolbar-item">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";

  .toolbar-item {
    padding: 15px 10px 5px 10px;
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;
    .transition(all, .2s);


    .icon,
    img {
      max-width: 100%;
      width: 70px;
      height: auto;
      display: block;
      margin: 0 auto 10px auto;
    }

    .icon {
      color: @primary-color;
    }

    &.active,
    &:hover {
      .gradient-vertical(fade(@primary-color, 0%), fade(@primary-color, 80%), 40%, 100%);
    }

    &.active {
      border-bottom: 1px solid @primary-color;
    }
  }
</style>
