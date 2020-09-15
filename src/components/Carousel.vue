<template>
  <div>
    <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover
      class="carousel"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(slide, i) in bannerData"
        :key="i"
      >
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <img :src="slide.src" :alt="`banner-${i}`">
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array,
      default: () => []
    }
  },
  name: 'Carousel',
  data: function () {
    return {
      fullHeight: screen.height - 75
    }
  }
}
</script>

<style lang="sass">
  .carousel
    img
      width: 100%
</style>
