<template>
  <div class="component">
    <div class="car">
      <img src="/static/car.png" class="car-img" />
      <div class="wrapper">
        <v-icon>flaticon-airbag</v-icon>
        <v-icon>flaticon-fuel</v-icon>
        <v-icon>flaticon-seatbelt</v-icon>
        <v-icon>flaticon-low-beam</v-icon>


        <pressure-sensor class="preasure fl" :pressure="pressure.frontLeft" @click.native="togglePressure('frontLeft')"></pressure-sensor>
        <pressure-sensor class="preasure fr" :pressure="pressure.frontRight" @click.native="togglePressure('frontRight')"></pressure-sensor>
        <pressure-sensor class="preasure rl" :pressure="pressure.rearLeft" @click.native="togglePressure('rearLeft')"></pressure-sensor>
        <pressure-sensor class="preasure rr" :pressure="pressure.rearRight" @click.native="togglePressure('rearRight')"></pressure-sensor>

        <child-lock class="child-lock" :locked="childlock" @click.native="toggleChildlock()"></child-lock>

      </div>
    </div>
  </div>
</template>
<script>
  import PressureSensor from './PressureSensor'
  import ChildLock from './ChildLock'
  import Battery from './Battery'
  export default {
    components: {
      Battery,
      ChildLock,
      'pressure-sensor': PressureSensor
    },
    props: [
      'pressure'
    ],
    data () {
      return {
        childlock: false
      }
    },
    methods: {
      togglePressure (wheel) {
        if (this.pressure[wheel] < 2) {
          this.pressure[wheel] = 2.3
        } else {
          this.pressure[wheel] = Math.random() * 1 + 1
        }
      },
      toggleChildlock () {
        this.childlock = !this.childlock
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";
  .component {
    .cover();
  }
  .car {
    margin: auto;
    max-width: 285px;
    width: 40%;

    display: block;
    left: 0;
    right: 0;
    .vertical-align();

    .car-img {
      max-width: 100%;
    }

    .preasure,
    .child-lock {
      cursor: pointer;
    }


    .child-lock,
    .preasure,
    .flaticon {
      position: absolute;
      .flaticon {
        position: relative;
      }
    }

    .flaticon-airbag {
      color: @orange;
      right:30%;
      top: 45%;
    }

    .flaticon-seatbelt {
      color: @red;
      left:30%;
      top: 45%;;
    }

    .flaticon-fuel {
      color: @orange;
      left:-15px;
      top: 85%;
    }

    .flaticon-low-beam {
      color: @blue;
      left: 40%;
      top: 10px;
    }

    .child-lock {
      top: 62%;
    }


    .preasure {
      &:after {
        display: block;
        content: ' ';
        position: absolute;
        heighT: 1px;
        background: @white;
        bottom: -2px;
        width: 120px;
      }

      &.rl,
      &.fl {
        left: -100px;
        &:after {
          left: 0;
        }
      }

      &.rr,
      &.fr {
        right: -100px;
        &:after {
          right: 0;
          width: -120px;
        }
      }

      &.fl,
      &.fr {
        top: 20%;
      }

      &.rl,
      &.rr {
        bottom: 22%;
      }

    }
  }
  .wrapper {
    .cover();
  }

</style>
