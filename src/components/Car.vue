<template>
  <div class="component">
    <div class="car">
      <img src="/static/car.png" class="car-img" />
      <div class="wrapper">
        <v-icon>flaticon-airbag</v-icon>
        <v-icon>flaticon-fuel</v-icon>
        <v-icon>flaticon-seatbelt</v-icon>
        <v-icon>flaticon-low-beam</v-icon>

        <span class="preasure fl">
          1.8psi
          <v-icon>flaticon-warning</v-icon>
        </span>

        <span class="preasure fr">
          2.3psi
        </span>

        <span class="preasure rl">
          2.5psi
        </span>
        <span class="preasure rr">
          2.5psi
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>

<style scoped lang="less">
  @import "../assets/settings.less";
  .component {
    .cover();
  }
  .car {
    margin: auto;
    width: 285px;
    display: block;
    left: 0;
    right: 0;
    .vertical-align();

    .car-img {
      max-width: 100%;
    }

    .preasure,
    .flaticon {
      position: absolute;
      .flaticon {
        position: relative;
      }
    }

    .flaticon-airbag {
      color: @orange;
      right:80px;
      top: 280px;
    }

    .flaticon-seatbelt {
      color: @red;
      left:80px;
      top: 280px;
    }

    .flaticon-fuel {
      color: @orange;
      left:-15px;
      top: 550px;
    }

    .flaticon-low-beam {
      color: @blue;
      left: 40%;
      top: 10px;
    }

    .flaticon-warning {
     color: @orange;
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
        top: 130px;
      }

      &.rl,
      &.rr {
        bottom: 150px;
      }

    }
  }
  .wrapper {
    .cover();
  }

</style>
