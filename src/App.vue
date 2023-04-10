<template>
  <div id="app">
    <v-container fluid class="grey lighten-5">
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
@font-face {
  font-family: "kanitregular";
  src: url('./assets/fonts/kanit-regular-webfont.woff2') format('woff2'), url('./assets/fonts/kanit-regular-webfont.woff') format('woff');
}

body,
.v-application {
  font-family: "kanitregular" !important;
  font-weight: normal;
  font-style: normal;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  padding: 0 !important;
}
</style>