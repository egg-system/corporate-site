<template>
  <div class="about">
    <div class="message-container">
      <div class="logo-image">
        <img :src="xface_logo_rgb_mark">
      </div>
      <div class="message-message">
        <p class="main-message sub-title">
          ３つの価値観＋１
        </p>
        <p class="text web-message">
          ４本線は、弊社の価値観『圧倒的当事者意識』『目の前の人を<br>
          大事に』『和衷協同』に加えて、各メンバーが持つ個人の価値<br>
          観を指しています。同じ価値観は共有しながらも個性を活かし<br>
          ます。
          <br>
        </p>
        <br>
        <p class="main-message sub-title">
          "掛け算"の価値を提供する
        </p>
        <p class="text web-message">
          我々コンサルティングエンジニア集団のことを<br>
          『x-faCE（for all Consulting Engineer、呼名：クロスフェイ<br>
          ス）』と名乗っています。お客様に対して後ろから支える存在<br>
          となる、そして足し算ではなく掛け算で価値を提供するように<br>
          『クロス（x）』をモチーフにしています。
          <br>
        </p>
      </div>
    </div>
    <div class="logo-message">
      <p class="logo-explanation-title sub-title">
        単体では完結しない
      </p>
      <div class="logo-explanation">
        <div class="text logo-explanation-body">
          実はこのロゴは単体では完結しません。一人の力では限界があ<br>
          るため、複数のロゴが集まることで一つの形を作れるように<br>
          なっています。<br>
          『チーム』で提供する価値を大事にしています。
        </div>
      </div>
    </div>
    <div class="logo-pattern">
      <div class="make-logo">
        <img :src="xface_multi02">
      </div>
      <p class="image-message">
        100人（100個のロゴ）が集まると、格子のように<br>
        より大きい期待に答えられることができます
      </p>
    </div>
    <div class="logo-pattern">
      <div class="make-logo">
        <img :src="xface_multi03">
      </div>
      <p class="image-message">
        組み方を変えると、全く別の表現ができます。<br>
        こちらの方がより集中的に、より速く動くことができそうです。
      </p>
    </div>
    <div class="logo-pattern">
      <div class="make-logo">
        <img :src="xface_multi04">
      </div>
      <p class="image-message">
        全員が自走しながら動き回ることで、独創性のある形を表現することもでき<br>
        ます。この組織ではゼロからイチを生み出すことができそうです。
      </p>
    </div>
  </div>
</template>

<script>
import messages from '~/assets/js/about-message.js'
import xface_logo_rgb_mark from '~/assets/about/x-face_logo_rgb_mark.png'
import xface_multi02 from '~/assets/about/x-face_Multi02.png'
import xface_multi03 from '~/assets/about/x-face_Multi03.png'
import xface_multi04 from '~/assets/about/x-face_Multi04.png'
export default {
  data() {
    return {
      message1: messages.messageImage1,
      message2: messages.messageImage2,
      message3: messages.messageImage3,
      xface_logo_rgb_mark: xface_logo_rgb_mark,
      xface_multi02: xface_multi02,
      xface_multi03: xface_multi03,
      xface_multi04: xface_multi04
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
*:not(br) {
  line-height: 1.2;
}
.make-logo img {
  display: block;
  margin: 0 auto;
  object-fit: contain;
  width: 500px;
  height: 300px;
}
.about {
  border-bottom: 1px solid $lightgray;
  padding-bottom: 80px;
}
.message-container {
  display: flex;
  justify-content: space-between;
  // padding: 50px 0;
}
.message-sp {
  display: none;
}
.web-message {
  width: 1000px;
  padding-right: 200px;
}
.logo-image {
  display: block;
  width: 100%;
}
.logo-image img {
  display: block;
  margin-top: 20px;
  margin-left: 10px;
  object-fit: contain;
  height: 400px;
}
.logo-explanation {
  text-align: left;
  margin: 0 auto;
}
.logo-explanation-title {
  font-weight: normal;
  color: $black;
  margin-top: 0;
}
.logo-explanation-body {
  width: 550px;
  margin: 30px auto;
  line-height: 32px;
}
.image {
  margin-left: 0;
}
.message-message {
  width: 45%;
}
.logo-message {
  margin-top: 10%;
  text-align: center;
}
.image-message {
  text-align: center;
  line-height: 32px;
}
.message br {
  line-height: initial;
}
.content p {
  margin-bottom: 0;
}
.main-message {
  font-weight: normal;
  text-align: left;
  color: $black;
  margin-top: 0;
}
.text {
  line-height: 32px;
}
.sub-title {
  font-size: 24px;
  padding: 30px 0;
}
.logo-pattern {
  margin: 50px;
}
@media screen and (max-width: 768px) {
  .message-container {
    display: block;
    padding: 30px 0;
  }
  .message-image {
    width: 100%;
    margin: 0;
  }
  .text {
    font-size: 0.875rem;
  }
  .image {
    margin: 0;
  }
  .message-message {
    width: 100%;
    padding-top: 15px;
  }
  .message-pc {
    display: none;
  }
  .message-sp {
    display: block;
  }
  .web-message {
    width: 300px;
    margin: 30px auto;
    padding: 0;
  }
  .logo-explanation-body {
    width: 300px;
    margin: 30px auto;
  }
  .logo-image {
    margin: 0;
    display: inline;
  }
  .logo-image img {
    object-fit: contain;
    width: 300px;
    height: 200px;
    margin: 0 auto;
  }
}
</style>
