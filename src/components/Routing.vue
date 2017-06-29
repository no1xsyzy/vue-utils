<template>
  <div id="app">
    <nav>
      <ul>
        <router-link tag="li" to="/">Homepage</router-link>
        <router-link tag="li" to="/todos">Todos</router-link>
        <router-link tag="li" to="/register">Register</router-link>
        <!-- <li><router-link to="/users">Users</router-link></li> -->
      </ul>
    </nav>
    <router-view class="mainContent"></router-view>
  </div>
</template>

<script>
export default {
  name: 'routing'
}
</script>

<style lang="scss" scoped>
#app {
  padding: 0;
  border: none;
  margin: 0;

  nav {
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    ul {
      list-style: none;
      margin:0;
      background-color: #ccc;
      height: 50px;
      padding: 0;

      li {
        float: left;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        cursor: pointer;

        &:hover{
          background-color: #ddd;
        }
        &.router-link-exact-active{
          background-color: white;
          cursor: default;
        }
      }
    }
  }

  .mainContent {
    position: relative;
    top:50px;
    width:100%;
  }
}
</style>
