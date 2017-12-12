<template>
    <div :class="[{'on': state}, 'switch']" @click="toggle()">
      <div class="light"></div>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        state: false
      }
    },
    methods: {
      toggle () {
        this.state = !this.state
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/settings.less";
  .switch {
    border: 1px solid #333;
    display: flex;
    padding: 10px;
    cursor: pointer;
    text-transform: uppercase;
    .gradient-vertical(#333, @black);
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    position: relative;
    .transition(all, .2s);

    flex-direction: column;
    .icon {
      &:before {
        margin: 0;
        font-size: 30px;
      }
    }

    .light {
      background: @black;
      .transition(all, .2s);
      position: absolute;
      width: 40px;
      height: 6px;
      top: 6px;
      .border-radius(2px);
    }
    &.on {
      .text-shadow(0, 0, 15px, @primary-color);
      .light {
        background: @primary-color;
        .box-shadow(0, 0, 15px, @primary-color);
      }
    }
  }
</style>
