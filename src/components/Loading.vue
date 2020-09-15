<template>
  <div v-if="loading">
    <!-- @slot custom loading layout, replaces all the layout -->
    <slot name="layout-loading">
      <v-layout column class="wrap-loading">
        <div class="container-loading">
          <div class="load-1">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </v-layout>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ReusableLoading',
  data: () => ({
  }),
  methods: {
    start () {
      this.$loading = true
    },
    finish () {
      this.$loading = false
    }
  },
  computed: {
    loading: function () {
      return this.$store.getters['temporary/loading']
    }
  }
}
</script>

<style>

.container-loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #4b9cdb;
  opacity: 0.8;
  position: relative;
}

.wrap-loading {
  position: fixed;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5) none no-repeat fixed 0 0;
  z-index: 1000 !important;
}

.load-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
.line {
  z-index: 1001 !important;
  display: inline-block;
  width: 8px;
  height: 15px;
  border-radius: 15px;
  background-color: white;
  opacity: 0.8;
  margin-right: 10px;
}

.line:nth-child(3) {
  margin-right: 0 !important
}

.load-1 .line:nth-last-child(1) {animation: loadingA 1.5s 1s infinite;}
.load-1 .line:nth-last-child(2) {animation: loadingA 1.5s .5s infinite;}
.load-1 .line:nth-last-child(3) {animation: loadingA 1.5s 0s infinite;}

@keyframes loadingA {
  0% {height: 15px;}
  50% {height: 35px;}
  100% {height: 15px;}
}

</style>
