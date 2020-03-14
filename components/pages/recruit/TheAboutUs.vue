<template>
  <div class="aboutus has-background-light columns is-vcentered">
    <section class="column">
      <p class="top-message is-size-3">
        わたしたちについて
      </p>
      <p class="sub-message is-size-5">
        わたしたちは、時代の流れに沿ってめまぐるしく変化する価値観や生活形態の中でも、
        一杯のスープに象徴される「豊かな食事」を提案し続けることで、
        人々の生活を豊かで幸せなものにしたいと考えています。
      </p>
      <div class="contact-button has-text-right">
        <button class="button is-light" @click="go('/contact')">
          詳しく見る→
        </button>
      </div>
    </section>
    <figure class="column image">
      <img src="https://eggsystem.co.jp/wp-content/uploads/2019/05/20190518-member01-1024x684.jpg">
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
.top-message {
  margin-bottom: 20px;
}
.about-us {
  padding: 30px;
}
</style>
