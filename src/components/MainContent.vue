<template>
  <div>
    <h3 class="caption">作品一覧</h3>
    <MainContentItem />
  </div>
</template>

<script>
// @ is an alias to /src
import MainContentItem from '@/components/MainContentItem.vue'

export default {
  name: 'MainContent',
  components: {
    MainContentItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
