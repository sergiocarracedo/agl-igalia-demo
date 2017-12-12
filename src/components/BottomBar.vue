<template>
  <div class="bottombar">
    <temp-selector></temp-selector>

    <div class="ac-controls">
      <i-switch>
        A/C
      </i-switch>
      <i-switch>
        Auto
      </i-switch>
      <i-switch>
        <v-icon>flaticon-recirculation</v-icon>
      </i-switch>
      <i-switch>
        MAX
        <v-icon>flaticon-windshield-defrost</v-icon>
      </i-switch>

      <i-switch>
        REAR
        <v-icon>flaticon-rear-window-defrost</v-icon>
      </i-switch>
    </div>

    <temp-selector></temp-selector>



  </div>
</template>

<script>
  import Switch from '@/components/Switch'
  import TempSelector from '@/components/TempSelector'
  export default {
    components: {
      'i-switch': Switch,
      'temp-selector': TempSelector
    },
    data () {
      return {}
    }
  }
</script>

<style scope lang="less">
  .bottombar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    display: flex;
    align-content: center;



    .bottombar-item {
      flex: 1;
    }
    .ac-controls {
      display: flex;
      flex-grow: 1;
      justify-content: center;
    }
  }
</style>
