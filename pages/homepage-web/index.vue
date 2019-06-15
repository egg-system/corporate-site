<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <main-title />

      <main-img
        link-url="/"
        img-url="https://eggsystem.co.jp/image/btn_homepage.jpg"
        img-title="ホームページ制作"
        img-sub-title="Home Page"
      />
      <main-img
        link-url="/"
        img-url="https://eggsystem.co.jp/image/btn_websystem.jpg"
        img-title="Webシステム開発"
        img-sub-title="Web system development"
      />

      <div class="sub">
        <sub-title main="ホームページ制作 HOME PAGE" sub="高品質なホームページを制作します。"/>
      </div>

      <promise-txt />

      <v-flex xs12>
        <v-card-text class="px-0">promise</v-card-text>
      </v-flex>

      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>

      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">事例はこちら</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">サービス</v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-card-text class="px-0">テーブルで表示</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">Webシステム</v-card-text>
        <v-card-text class="px-0">
          システム開発することが目的ではないため、検討した結果、
          「システム開発は行わずに簡易的な無料ツールを使いましょう」
          というご提案ができることが当社の強みです。
        </v-card-text>
      </v-flex>


      <v-flex xs12>
        <v-card-text class="px-0">Not Doing 当社がやらないこと</v-card-text>
      </v-flex>

      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">サービス</v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-card-text class="px-0">テーブルで表示</v-card-text>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import MainTitle from '~/components/pages/homepage-web/MainTitle.vue'
import MainImg from '~/components/pages/homepage-web/MainImg.vue'
import SubTitle from '~/components/pages/homepage-web/SubTitle.vue'
import PromiseTxt from '~/components/pages/homepage-web/PromiseTxt.vue'

export default {
  components: {
    MainTitle,
    MainImg,
    SubTitle,
    PromiseTxt
  }
}
</script>

<style scoped>
.sub {
  margin-top: 30px;
  width: 100%;
  background-color: #1f55a5;
}
</style>
