<template>
  <div v-for="item in myworkItems" :key="item.id">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          <a :href="item.link" class="card-link" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
        </h4>
        <h5 class="card-subtitle mb-2 text-muted">{{ item.skill }}</h5>
        <p class="card-text">{{ item.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContentItem',
  data() {
    return {
      myworkItems: [
        {
          id: 1,
          title: "Video Libraly",
          link: "https://videolibrary.0gravity0.com/",
          skill: "Laravel+PHP/MySQL",
          overview: "Amazon Prime Videoをスクレイピングして表示するWebサイト"
        },
        {
          id: 2,
          title: "Kabuboard",
          link: "https://kabuboard2.0gravity0.com/",
          skill: "PHP/Laravel/MySQL",
          overview: "Yahooファイナンスをスクレイピングし株価を表示などするWebサイト"
        },
        {
          id: 3,
          title: "Resume",
          link: "https://resume-0gravity.an.r.appspot.com/",
          skill: "vue.js+JavaScript/Flask+python/GCP(GAE+Datastore)",
          overview: "履歴書の作成支援Webサイト"
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
