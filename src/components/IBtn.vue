<template>
    <div class="i-btn" @click="click()">
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
      click () {
        this.$emit('click')
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/settings.less";
  .i-btn {
    border: 1px solid #333;
    display: flex;
    padding: 10px;
    cursor: pointer;
    text-transform: uppercase;
    .gradient-vertical(#333, @black);
    width: 40px;
    height: 40px;
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
  }
</style>
