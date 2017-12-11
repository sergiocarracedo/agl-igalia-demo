<template>
  <div>
    <video @click="playVideo" :src="src" :width="width" :height="height"></video>
  </div>
</template>

<script>
  export default {
    name: 'v-video',
    props: [
      'src', 'width', 'height'
    ],
    data () {
      return {
      }
    },
    methods: {
      playVideo () {
        // this.$refs['video'].play()
        this.$emit('play', this.src)
      }
    }
  }
</script>


<style scoped lang="less">

</style>
