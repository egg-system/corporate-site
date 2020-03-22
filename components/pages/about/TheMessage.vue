<template>
  <div class="about">
    <div class="message-container">
      <div class="message-image">
        <figure class="image">
          <img :src="message1">
        </figure>
      </div>
      <div class="message-message">
        <p class="main-message">Mission - 存在理由 - </p>
        <p class="main-message sub-title">
          献身的な人のためにITシステムを活用する
        </p>
        <p class="text web-message">
          株式会社エッグシステムでは、<br>
          《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。<br>現代社会では「自分の保身のために行動する人」が評価され、「献身的に行動する人」が正しく評価を得られない現状があります。しかし我々は、保身に走らず他人の利益のために献身的に行動することこそ、より良い社会を実現する一歩だと考えています。<br>目の前の人、顧客、家族が「喜ぶこと」を自分の喜びと感じ、献身的に頑張る人たちが、正しく喜ばれる（＝成果を得る）ことをMISSIONとしています。
          <br>
        </p>
      </div>
    </div>
    <div class="message-container message-pc">
      <div class="message-message">
        <p class="main-message">Vision - 目標 - </p>
        <p class="main-message sub-title">
          100人のコンサルティングエンジニア集団<br>をつくる
        </p>
        <p class="text">
          会社という枠組みを超え、「チーム」として共に働くシステムエンジニアを増やすことで、立場を気にすることなくフラットに意見を言い合える環境を作ります。目の前の人の利益を考えて「良いものは良い、悪いものは悪い」と話し合えることが、真の貢献であると考えています。
          <br>
          <br>
          コンサルティングエンジニア集団『x-faCE（for all Consulting Engineer、呼名：クロスフェイス）』をつくることは、個人の力を高め会社に依存しない「自立したエンジニア」をつくることでもあります。会社に依存や迎合することなく、自立したエンジニア同士が短所を補完しつつ協働する事で、より本質へと向かい、クライアントの期待値を超えていきます。
        </p>
      </div>   
      <div class="message-image">
        <figure class="image">
          <img :src="message2">
        </figure>
      </div>
    </div>
    <div class="message-container message-sp">
      <div class="message-image">
        <figure class="image">
          <img :src="message2">
        </figure>
      </div>
      <div class="message-message">
        <p class="main-message">Vision - 目標 - </p>
        <p class="main-message sub-title">
          100人のコンサルティングエンジニア集団をつくる
        </p>
        <p class="text">
          会社という枠組みを超え、「チーム」として共に働くシステムエンジニアを増やすことで、立場を気にすることなくフラットに意見を言い合える環境を作ります。目の前の人の利益を考えて「良いものは良い、悪いものは悪い」と話し合えることが、真の貢献であると考えています。<br>
          <br>
          コンサルティングエンジニア集団『x-faCE（for all Consulting Engineer、呼名：クロスフェイス）』をつくることは、個人の力を高め会社に依存しない「自立したエンジニア」をつくることでもあります。<br>
          <br>
          会社に依存や迎合することなく、自立したエンジニア同士が短所を補完しつつ協働する事で、より本質へと向かい、クライアントの期待値を超えていきます。
        </p>
      </div>
    </div>
    <div class="message-container">
      <div class="message-image">
        <figure class="image">
          <img :src="message3">
        </figure>
      </div>
      <div class="message-message">
        <p class="main-message">Value - 価値観 - </p>
        <p class="main-message sub-title">
          圧倒的当事者意識
        </p>
        <p class="text">
          何事も常に自分ごととして捉え、圧倒的な当事者意識で「どうやったらできるか」を考えて行動する。まずは気持ちが大事、次に行動。「そこまでやってくれたんだ！」を目指す。
        </p>
        <p class="main-message sub-title">
          目の前の人を大事に
        </p>
        <p class="text">
          まだ見ぬ1万人よりも、目の前の10人を大事にする。目の前の相手を大事にできずして、その先の人は大事にできない。目の前で一緒に仕事をする相手に対して感謝の気持ちは言葉で示す、相手の立場になって考えて行動するなど、当たり前のことは当たり前に行う。
        </p>
        <p class="main-message sub-title">
          和衷協同
        </p>
        <p class="text">
          心を同じくして共に力を合わせ、仕事や作業に当たる。人には得意・不得意があって当たり前。自分のスキルを最大限に活かし、不得意なところは相互で補完する。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import messages from '~/assets/js/about-message.js'
export default {
  data() {
    return {
      message1: messages.messageImage1,
      message2: messages.messageImage2,
      message3: messages.messageImage3
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
.about {
  border-bottom: 2px solid $whitesmoke;
  padding-bottom: 80px;
}
.message-container {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}
.message-sp {
  display: none;
}
.message-image {
  width: 45%;
  margin-top: 30px;
}
.image {
  margin-left: 0;
}
.message-message {
  width: 45%;
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
  padding: 15px 0;
}
@media screen and (max-width: 600px) {
  .message-container {
    display: block;
    padding: 30px 0;
  }
  .message-image {
    width: 100%;
    margin: 0;
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
}
</style>
