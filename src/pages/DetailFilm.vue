<template>
  <div class="detail-film">
    <div>
      <navbar />
      <carousel :banner-data="bannerData" />
      <div class="ma-4">
        <v-container>
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <v-row>
            <v-col
              cols="6"
              md="4"
            >
              <div class="pa-2">
                <div class="wrap-film" @click="routeToDetailFilm(data.id)">
                  <img src="https://placeimg.com/640/480/arch">
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="8" class="mt-3">
              <div
                class="pa-2"
              >
                Directed By : <b>{{ detailFilm.director }}</b>
              </div>
              <hr class="ml-2" />
              <div class="pa-2 mt-3">
                <b class="text-24">{{ detailFilm.title }}</b>
              </div>
              <div class="px-2 pt-2 mt-2">
                <p class="text-14">{{ detailFilm.description }}</p>
              </div>
              <div class="px-2 pb-2">
                <p class="text-12">{{ `Year of Production: ${detailFilm.release_date} • Score: ${detailFilm.rt_score} • Subtitles: English` }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
const navbar = () => import('@/components/Navbar.vue')
const carousel = () => import('@/components/Carousel.vue')
export default {
  name: 'Home',
  components: {
    navbar,
    carousel
  },
  data: function () {
    return {
      counter: 0
    }
  },
  computed: {
    bannerData () {
      return this.$store.getters['home/banner']
    },

    detailFilm () {
      return this.$store.getters['home/detailFilm']
    }
  },
  created () {
    this.getDetailFilm()
  },
  methods: {
    async getDetailFilm () {
      const payload = {
        id: this.$route.params.id
      }
      try {
        await this.$store.dispatch('home/getDetailFilm', payload)
      } catch (err) {
        throw new Error(err)
      } finally {
        // this.$loading('finish')
      }
    }
  }
}
</script>
<style lang="sass">
.detail-film
  *
    margin: 0
    padding: 0

  .wrap-film
    overflow: hidden
    margin: 10px
    height: 209px
    border-radius: 8px
    cursor: pointer

    img
      transition: 0.8s
      width: 100%

    &:hover img
      transform: scale(1.3)

</style>
