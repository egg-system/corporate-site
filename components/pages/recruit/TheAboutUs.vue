<template>
  <div class="aboutus has-background-light columns">
    <section class="column">
      <p class="top-message is-size-3">
        わたしたちについて
      </p>
      <p class="sub-message is-size-5">
        わたしたちは、時代の流れに沿ってめまぐるしく変化する価値観や生活形態の中でも、
        一杯のスープに象徴される「豊かな食事」を提案し続けることで、
        人々の生活を豊かで幸せなものにしたいと考えています。
      </p>
      <div class="contact-button">
        <button class="button is-black is-large is-fullwidth" @click="go('/contact')">
          詳しく見る&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;＞
        </button>
      </div>
    </section>
    <figure class="column img">
      <img src="~/assets/members/tsubasa02.jpg">
    </figure>
  </div>
</template>

<script>
import method from '~/mixins/method'

export default {
  mixins: [method]
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .flexbox {
    display: -webkit-flex;
    display: flex;
  }
}
</style>
