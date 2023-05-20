<template>
  <div class="about">
    <MyProfile />
    <MySkill />
    <GetInTouch />
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from '@/components/MyProfile.vue'
import MySkill from '@/components/MySkill.vue'
//import HeaderMain from '@/components/HeaderMain.vue'
import GetInTouch from '@/components/GetInTouch.vue'

export default {
  name: 'HomeView',
  components: {
    MyProfile,
    MySkill,
    //HeaderMain,
    GetInTouch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>