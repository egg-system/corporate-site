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
        <div class="study-button">
          <a href="https://connpass.com/user/eggsystem/" target="_blank">
            <div class="study-column">
              <p>connpas(外部サイト)へ<span>></span></p>
            </div>
          </a>
          <a href="https://techplay.jp/community/egg" target="_blank">
            <div class="study-column">
              <p>TECH PLAY(外部サイト)へ<span>></span></p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import method from '~/mixins/method'
import recruitStudy from '~/assets/recruit/recruit-study.JPG'

export default {
  mixins: [method],
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
.study-columns {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.study-columns a {
  width: 60%;
}
.study-column {
  padding: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
  background: $darkblack;
  border-radius: 4px;
}
.study-column p {
  color: $lightgray;
  font-size: 18px;
  margin: 15px;
}
.study-column p span {
  margin-left: 15px;
}
@media screen and (max-width: 600px) {
  .study-columns {
    display: block;
  }
  .study-column {
    width: 100%;
    margin: 15px auto;
  }
}
</style>
