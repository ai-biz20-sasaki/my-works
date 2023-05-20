<template>
  <div class="getintouch">
    <h3 class="caption">Get in Touch</h3>
    <h4>
      <a href="https://zenn.dev/aibiz20sasaki" target="_blank" rel="noopener noreferrer">
        Zennダッシュボード
      </a>
    </h4>
    <p>Zenn を使ってまとめ記事など書いてます</p>
    <h4>
      <!--<font-awesome-icon icon="fa-solid fa-github" />-->
      <font-awesome-icon :icon="['fab', 'github']" />
      <a href="https://github.com/ai-biz20-sasaki?tab=repositories" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </h4>
    <p>ai biz sasakiのリポジトリ</p>
    <h4>
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <a href="https://twitter.com/ai_biz20_sasak" target="_blank" rel="noopener noreferrer">
        twitter
      </a>
    </h4>
    <p>twitter ai biz sasaki</p>
    <h4>
      <font-awesome-icon :icon="['fab', 'youtube']" />
      <a href="https://www.youtube.com/@aibizsasaki/featured " target="_blank" rel="noopener noreferrer">
        youtube
      </a>
    </h4>
    <p>youtube ai biz sasaki</p>

       
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3.caption {
  text-align: center;
}

</style>
