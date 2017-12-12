<template>
  <div class="battery-indicator">
    <v-icon>battery_charging_full</v-icon>
    <div>
      {{ battery.percent }}<span>%</span>
      <br />
      {{ battery.energy }}<span>kwh</span>
      <br />
      <span>Range: 320km</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'battery'
    ]
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";

  .battery-indicator {
    display: flex;

    > div,
    .icon {
    }

    > div {
      padding-top: 5px;
      line-height: 1em;
      font-size: 26px;
    }

    span {
      font-size: 14px;
    }
  }
  .icon {
    align-items: flex-start;
    font-size: 60px;
  }
</style>
