<template>
  <div class="study">
    <p class="top-message is-size-3">
      システムエンジニア向け勉強会
    </p>
    <div class="columns is-marginless">
      <figure class="column image">
        <img :src="img">
      </figure>
      <section class="column">
        <p class="sub-message">
          システムエンジニア向け勉強会を定期的に開催しています。<br><br>
          弊社の取り組みにご興味のある方だけでなく、スキルアップとしてもご参加いただければ幸いです。
        </p>
        <div class="link">
          <a class="button is-dark" href="https://connpass.com/user/eggsystem/">
            <span class="link-message">connpas(外部サイト)へ</span>
            <span class="column-arrow" />
          </a>
        </div>
        <div class="link">
          <a class="button is-dark" href="https://techplay.jp/community/egg">
            <span class="link-message">TECH PLAY(外部サイト)へ</span>
            <span class="column-arrow" />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import recruitStudy from '~/assets/recruit/recruit-study.JPG'

export default {
  data() {
    return {
      img: recruitStudy
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-message {
  margin-top: 3%;
}
.column {
  margin: 0;
}
.column p {
  margin-bottom: 10%;
}
.study {
  width: 100%;
  margin-top: 8%;
  margin-bottom: 10%;
  background: $white;
}
.link {
  margin-bottom: 1rem;
}
@media screen and (max-width: 600px) {
}
</style>
