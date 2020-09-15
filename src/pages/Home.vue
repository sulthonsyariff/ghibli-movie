<template>
  <div class="home">
    <div>
      <navbar />
      <carousel :banner-data="bannerData" />
      <v-row class="ma-3">
        <v-col
          v-for="(data, index) in filmData"
          :key="index"
          cols="6"
          md="3"
          class="mb-3"
        >
          <div class="wrap-film" @click="routeToDetailFilm(data.id)">
            <img src="https://placeimg.com/640/480/arch">
          </div>
          <b class="mx-3 text-14">{{ data.title }}</b> <br>
          <p class="mx-3 text-12 text-truncate">{{ data.description }}</p>
          <div class="d-flex justify-space-between mx-3 text-12">
            <span>Tahun: {{ data.release_date }}</span>
            <span class="text-right">Score: {{ data.rt_score }}</span>
          </div>
        </v-col>
      </v-row>
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

    filmData () {
      return this.$store.getters['home/film']
    }
  },
  created () {
    this.getDataFilm()
  },
  methods: {
    routeToDetailFilm (id) {
      this.$router.push(`/film/${id}`)
    },
    async getDataFilm () {
      try {
        await this.$store.dispatch('home/getFilm', {})
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
.home
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
