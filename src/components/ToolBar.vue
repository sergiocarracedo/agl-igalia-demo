<template>
  <div class="toolbar">
    <toolbar-item>
      <img slot="icon" src="static/logo.png" alt="AGL" />
    </toolbar-item>

    <toolbar-item :class="{active: ($route.name == item.route)}" v-for="item in items" :key="item.route" @click.native="goto(item.route)">
      <img v-if="item.icon" slot="icon" :src="item.icon" :alt="item.title" />
      <v-icon v-if="item.fonticon" slot="icon">{{ item.fonticon }}</v-icon>
      <span slot="title">{{ item.title }}</span>
    </toolbar-item>
  </div>
</template>

<script>
  import Btn from '@/components/Btn'
  import ToolbarItem from '@/components/ToolbarItem'
  export default {
    data () {
      return {
        items: [
          {
            title: 'Home',
            fonticon: 'icon-home',
            route: 'Home'
          },
          {
            title: 'Apps',
            fonticon: 'icon-grid',
            route: 'apps'
          },
          {
            title: 'Multimedia',
            fonticon: 'icon-music-tone-alt',
            route: 'Multimedia'
          },
          {
            title: 'Navigation',
            fonticon: 'icon-compass',
            route: 'Navigation'
          },
          {
            title: 'HVAC',
            fonticon: 'icon-speedometer',
            route: 'Hvac'
          },
          {
            title: 'Connectivity',
            fonticon: 'icon-globe',
            route: 'Connectivity'
          }
        ]
      }
    },
    components: {
      Btn,
      'toolbar-item': ToolbarItem
    },
    methods: {
      goto (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scope lang="less">
  .toolbar {
    top: 0;
    background: #000;
    display: flex;
    .toolbar-item {
      flex-grow: 1;
      flex: 1;
    }
  }
</style>
