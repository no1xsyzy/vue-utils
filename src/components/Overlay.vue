<template>
  <div class="overlay" v-show="showing">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  props: {
    showing: Boolean
  }
}
</script>

<style lang="scss">
.overlay {
  position:fixed;
  z-index:10;
  height:100%;
  width:100%;
  background-color: grey;

  * {
    z-index:20;
  }
}
</style>
