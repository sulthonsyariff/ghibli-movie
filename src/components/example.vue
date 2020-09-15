<template>
  <div class="card-example pa-4">
    <slot name="custom-card">
      <div>Halo nama saya {{ name }}</div>
      <div>Pekerjaan saya adalah {{ occupationName }}</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'exampleComponent',
  props: {
    name: {
      type: String
    },
    occupationName: {
      type: String
    }
  }
}
</script>
<style lang="sass">
  .card-example
    background-color: salmon
    border-radius: 8px
</style>
