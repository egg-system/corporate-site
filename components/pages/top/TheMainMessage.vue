<template>
  <section class="main-message-area">
    <h2 class="main-message">
      『あなたじゃないと困る。』<br>
      そう言っていただける関係を目指しています
    </h2>
    <p>
      中小企業が抱える「経験豊富なIT人材の不足」「システムを有効活用できない」という課題を解決する<br>
      コンサルティングからシステム開発まで一貫して行うコンサルティングエンジニア集団です。
    </p>
    <div class="issue-button" @click="isOpened = !isOpened">
      詳しく見る {{ isOpened ? '-' : '+' }}
    </div>
    <the-issues v-if="isOpened" />
    <nuxt-link to="/service" class="link service-button button is-dark">
      <span class="link-message">サービス詳細へ</span>
    </nuxt-link>
  </section>
</template>

<script>
import TheIssues from './TheIssues.vue'

export default {
  components: { TheIssues },
  data: () => ({ isOpened: false })
}
</script>

<style lang="scss" scoped>
.main-message-area {
  width: 90%;
  margin: 0 auto 10rem;
  text-align: center;

  .main-message {
    font-size: 1.5rem;
    line-height: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  .issue-button {
    cursor: pointer;
  }

  .service-button {
    width: 33.3333%;
    height: 49px;
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 600px) {
    .service-button {
      width: 100%;
    }
  }
}
</style>
