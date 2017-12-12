<template>
  <div class="temp-selector">
    <div class="temp">
      {{ tempDisplay }}
    </div>
    <div class="actions">
      <i-btn @click="tempUp()">
        <v-icon>keyboard_arrow_up</v-icon>
      </i-btn>
      <i-btn @click="tempDown()">
        <v-icon>keyboard_arrow_down</v-icon>
      </i-btn>
    </div>
  </div>
</template>

<script>
  import IBtn from '@/components/IBtn'

  export default {
    components: {
      'i-btn': IBtn
    },
    data () {
      return {
        temp: 22
      }
    },
    computed: {
      tempDisplay () {
        let displayed = this.temp.toFixed(1)
        displayed += 'º'
        if (this.temp < 16) {
          displayed = 'LO'
        }
        if (this.temp > 28) {
          displayed = 'HI'
        }
        return displayed
      }
    },
    methods: {
      tempUp () {
        this.temp += 0.5
        if (this.temp > 28) {
          this.temp = 28.5
        }
      },
      tempDown () {
        this.temp -= 0.5
        if (this.temp < 16) {
          this.temp = 15.5
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/settings.less";
  .temp-selector {
    border: 1px solid #333;
    display: flex;
    padding: 0;
    text-transform: uppercase;
    .gradient-vertical(#333, @black);
    width: 140px;
    height: 80px;
    align-items: center;
    justify-content: center;
    position: relative;
    .transition(all, .2s);
    .temp {
      font-size: 30px;
      font-weight: 300;
      width: 100px;
      text-align: center;
    }

    .i-btn {
      border-left-width: 2px;
    }

  }
</style>
