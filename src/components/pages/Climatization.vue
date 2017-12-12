<template>
  <div>


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
    </div>


    <i-switch>
      MAX
      <v-icon>flaticon-windshield-defrost</v-icon>
    </i-switch>

    <i-switch>
      REAR
      <v-icon>flaticon-rear-window-defrost</v-icon>
    </i-switch>
  </div>
</template>


<script>
  import Switch from '@/components/Switch'

  export default {
    components: {
      'i-switch': Switch
    }
  }
</script>



<style scoped lang="less">

  .ac-controls {
    display: flex;
    width: 100%;
  }
</style>
