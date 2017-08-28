<template>
  <section id="homepage">
    <h1>Welcome to Homepage</h1>
    <h2>This site is for demo of Vue components</h2>
    <h3><a href="https://github.com/no1xsyzy/vue-utils">Github repo</a></h3>
  </section>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#homepage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
