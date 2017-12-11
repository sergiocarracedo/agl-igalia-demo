<template>
    <div>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card v-for="video in videos" :key="video.src">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <v-card-media height="200px">
                      <v-video @play="playVideo" :src="video.src" width="100%" height="auto">
                      </v-video>
                    </v-card-media>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-content xs12 sm6>
                      <v-card-title primary-title>
                        <div>
                          <h2 class="mb-0">{{ video.title}}</h2>
                          <div>{{ video.description}} </div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="teal" @click="playVideo(video.src)">View</v-btn>
                      </v-card-actions>
                    </v-card-content>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <transition name="slide-fade">
        <video v-show="src" @click="stopVideo"  id="video-player" ref="player" :src="src" autoplay></video>
      </transition>
    </div>
</template>

<script>
  import VVideo from '@/components/VVideo.vue'
  export default {
    components: {
      'v-video': VVideo
    },
    methods: {
      playVideo (src) {
        this.src = src
        // this.$refs['player'].play()
      },
      stopVideo (src) {
        this.$refs.player.pause()
        this.src = null
      }
    },
    data () {
      return {
        src: null,
        videos: [
          {
            src: 'static/342893149.mp4',
            title: 'Lorem ipsum dolor est',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis augue lectus, at ultrices purus tincidunt a. Praesent ornare, elit ac lobortis finibus,'
          },

          {
            src: 'static/343291949.mp4',
            title: 'Lorem ipsum dolor est',
            description: 'Vestibulum mi mi, venenatis eget ex sollicitudin, dapibus dapibus neque. Nunc vitae sem tincidunt, commodo massa eget, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          },
          {
            src: 'static/348456922.mp4',
            title: 'Lorem ipsum dolor est',
            description: 'Fusce sodales at mauris non viverra. Nam ac volutpat augue, ut venenatis enim. Suspendisse pulvinar purus ut orci posuere, a sagittis ligula fermentum. '
          },

          {
            src: 'static/796795557.mp4',
            title: 'Lorem ipsum dolor est',
            description: 'Vestibulum mi mi, venenatis eget ex sollicitudin, dapibus dapibus neque. Nunc vitae sem tincidunt.'
          },
          {
            src: 'static/796795580.mp4',
            title: 'Lorem ipsum dolor est',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
          },
          {
            src: 'static/874871185.mp4',
            title: 'Lorem ipsum dolor est',
            description: ' Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          }
        ]
      }
    }
  }
</script>


<style lang="less">
  #video-player {
    position: fixed;
    left: 50%;
    width: 700px;
    margin-left: -350px;
    top: 100px;
    right: 0;
    bottom: 0;
    heighT: 100%;
    background: fade(#000, 70%);
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-300px);
    opacity: 0;
  }
</style>

<style scope lang="less">
  .card {
    background-color: transparent !important;
  }
  .card__title {
    padding-top: 0 !important;
  }
</style>
