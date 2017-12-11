<template>
  <div class="component">
    <div class="speedometer">
      {{ speed }}<span>km/h</span>
    </div>
    <div class="odometer">
      {{ odo }}<span>km</span>
    </div>
    <car>

    </car>
  </div>
</template>

<script>
  import Car from '@/components/Car'
  export default {
    components: {
      Car
    },
    data () {
      return {
        speed: 0,
        odo: 0
      }
    },
    methods: {
      simSpeed () {
        let state = 'cruise'

        if ((Math.random(0, 1) * 100) > 95) {
          state = 'brake'
        } else if ((Math.random(0, 1) * 100) < 40) {
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
        this.odo = Math.floor(this.odo)
      }
    },
    mounted () {
      this.speed = Math.floor(Math.random(0, 120) * 100)
      this.odo = Math.floor(Math.random(0, 9999999) * 100)

      setInterval(this.simSpeed, 1000)
    }
  }
</script>


<style scoped lang="less">
  @import "../../assets/settings.less";

  .component {
    .cover();
  }
  .speedometer,
  .odometer {
    padding: 0 40px;
    width: 200px;
    text-align: right;
    span {
      padding-left: 3px;
      font-size: 10px;
    }
  }

  .speedometer {
    font-size: 60px;
    padding-top: 40px;
  }

  .odometer {
    font-size: 20px;
  }

</style>
