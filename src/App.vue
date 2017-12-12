<template>
  <div id="app">
    <v-app dark>
      <status-bar></status-bar>
      <tool-bar></tool-bar>
      <div class="router-container">
        <transition name="slide">
          <router-view/>
        </transition>
      </div>
      <bottom-bar></bottom-bar>
    </v-app>
  </div>
</template>

<script>
  import StatusBar from '@/components/StatusBar'
  import ToolBar from '@/components/ToolBar'
  import BottomBar from '@/components/BottomBar'

  export default {
    components: {
      'status-bar': StatusBar,
      'tool-bar': ToolBar,
      'bottom-bar': BottomBar
    },
    name: 'app'
  }
</script>

<style lang="less">
  html, body {
    overflow: hidden;
  }
  body {
    max-width: 700px;
    height: 100%;
    margin: 0 auto;
  }
  #app {
    background: url(/static/img/content-background.png) no-repeat;
    background-size: cover;
    background-position: center center;
    .toolbar {
      top: 0;
    }

    .bottombar {

    }
    .router-container {
      position: absolute;
      top: 105px;
      left: 0;
      right: 0;
      bottom: 80px;
      overflow: auto;
    }
  }

  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>
