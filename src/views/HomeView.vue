<template>
  <div class="home">
    <div class="container">
      <HeaderMain />
      <dev class="row">
        <dev class="col-6">
          <MainContent />
        </dev>
        <dev class="col">
          <AboutContent />
        </dev>
      </dev>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'
import HeaderMain from '@/components/HeaderMain.vue'
import AboutContent from '@/components/AboutContent.vue'
//import GetInTouch from '@/components/GetInTouch.vue'

export default {
  name: 'HomeView',
  components: {
    MainContent,
    HeaderMain,
    AboutContent
    //GetInTouch,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

