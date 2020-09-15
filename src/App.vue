<template>
  <v-app>
    <v-main>
      <!-- <reusable-loading></reusable-loading> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      counter: 0
    }
  }
}
</script>
