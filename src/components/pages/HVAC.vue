<template>
  <div class="component">
    <odometer :speed="speed" :odo="odo" :gear="gear"></odometer>

    <battery :battery="{ percent: 80, energy: 31}"></battery>

    <car :pressure="pressure">

    </car>
  </div>
</template>

<script>
  import Car from '@/components/Car'
  import Battery from '../Battery'
  import Odometer from '../Odometer'
  export default {
    components: {
      Odometer,
      Battery,
      Car
    },
    data () {
      return {
        speed: 0,
        odo: 0,
        gear: 'D',
        pressure: {
          frontRight: 2.2,
          frontLeft: 2.2,
          readRight: 2.4,
          rearLeft: 2.4
        }
      }
    },
    methods: {
      simSpeed () {
        let state = 'cruise'

        let stateRand = Math.random(0, 1) * 100
        if (stateRand > 95) {
          state = 'brake'
        } else if (stateRand < 40) {
          state = 'acceleration'
        } else {
          state = 'cruise'
        }

        let change = 5
        switch (state) {
          case 'brake':
            change = -30
            break
          case 'acceleration':
            change = 30
            break
        }

        if (state === 'cruise') {
          this.speed += Math.floor(Math.random() * change - (change / 2))
        } else {
          this.speed += Math.floor(Math.random() * change)
        }
        if (this.speed > 123) {
          this.speed = 120
        }

        if (this.speed < 0) {
          this.speed = 0
        }

        this.odo += (this.speed * 1 / 3600)
        this.odo = this.odo
      },
      simPressure () {
        let pressureRandom = (Math.random(0, 1) / 2) - 0.25

        for (let i in this.pressure) {
          this.pressure[i] += pressureRandom
          if (this.pressure[i] < 0) {
            this.pressure[i] = 0
          }

          if (this.pressure[i] > 3) {
            this.pressure[i] = 3
          }
        }
      }
    },
    mounted () {
      this.speed = Math.floor(Math.random(0, 120) * 100)
      this.odo = Math.floor(Math.random(0, 9999999) * 100)

      setInterval(this.simPressure, 1000)
      setInterval(this.simSpeed, 1000)
    }
  }
</script>


<style scoped lang="less">
  @import "../../assets/settings.less";

  .component {
    .cover();
  }
  .odometer-indicator {
    position: absolute;
    left: 20px;
    top: 20px;
  }


  .battery-indicator {
    position: absolute;
    right: 20px;
    top: 20px;
  }

</style>
