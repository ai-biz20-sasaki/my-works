<template>
  <NavbarMain />
  <router-view/>
</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue'

export default {
  components: {
    NavbarMain
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.caption {
  background-color: #9400d3;
  color: white;
  padding: 0.5rem;
}

.card {
  margin-top: 1rem;
}

div.my-profile, div.my-skill {
  margin-top: 1rem;
}

.header-main {
  margin: 2rem;
}

.footer-main {
  padding: 1rem;
  margin-top: 1rem;
}


</style>
