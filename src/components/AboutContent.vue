<template>
  <div class="about">
    <div class="container">
      <MyProfile />
      <MySkill />
      <GetInTouch />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from '@/components/MyProfile.vue'
import MySkill from '@/components/MySkill.vue'
import GetInTouch from '@/components/GetInTouch.vue'
//import HeaderMain from '@/components/HeaderMain.vue'

export default {
  name: 'HomeView',
  components: {
    MyProfile,
    MySkill,
    GetInTouch
    //HeaderMain,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  text-align: start;
}
</style>