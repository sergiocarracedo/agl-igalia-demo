<template>
  <div class="odometer-indicator">
    <div class="values">
      <div :class="{ 'speed-warning': (speed > 120), speedometer: true }">
        {{ Math.floor(speed) }}<span>km/h</span>
      </div>
      <div class="odometer">
        {{ Math.floor(odo) }}<span>km</span>
      </div>
    </div>
    <div class="gear">
      {{ gear }}
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'speed', 'odo', 'gear'
    ]
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";

  .odometer-indicator {
    display: flex;
    > div {
      line-height: 1em;
      font-size: 26px;
    }

    .values {
      text-align: right;
      widtH: 120px;
      padding-top: 13px;
      line-height: 1em;
      .speedometer {
        font-size: 43px;
        line-height: 0.8em;
      }
      .odometer {
        line-height: 1em;
        font-size: 16px;
      }
      span {
        font-size: 14px;
      }
    }

    .speed-warning {
      color: @orange;
    }

    .gear {
      padding-top: 13px;
      font-size: 43px;
      line-height: 0.8em;
      padding-left: 5px;
      color: fade(@white, 60%);
    }
  }

</style>
