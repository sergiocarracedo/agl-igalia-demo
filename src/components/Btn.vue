<template>
    <v-btn class="icon-title title-xs" flat>
      <slot></slot>
    </v-btn>
</template>

<script>
  export default {

  }
</script>
<style lang="less">
  .btn {
    &.icon-title {
      height: 80px;
      &, .btn__content {
        position: relative;
        flex-direction: column;
      }

      .btn__content {
        &:before {
          top: 0;
          bottom: 0;
          height: auto;
        }
      }
      span {
        text-align: center;
        display: block !important;
        flex-wrap: wrap;
      }

      &.title-xs {
      }
    }

    [xlarge] {
      font-size: 50px;
    }
  }
</style>
