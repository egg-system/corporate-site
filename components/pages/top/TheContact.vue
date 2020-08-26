<template>
  <div class="contact">
    <div class="contact-content">
      <p>「こんな相談してよいのか分からない」</p>
      <p>「まずは話だけ聞いてみたい」</p>
      <p>といった方もお気軽にご相談ください。</p>
    </div>
    <black-link label="お問い合わせ・ご相談はこちらから" link="/contact" />
  </div>
</template>

<script>
import BlackLink from '~/components/atoms/BlackLink.vue'

export default {
  components: {
    BlackLink
  }
}
</script>

<style lang="scss" scoped>
.contact {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.contact-content {
  padding-top: 30px;
}
.contact-content p {
  font-size: 20px;
  text-align: center;
  padding: 10px 5px;
}
.link {
  width: 30rem;
  margin: 30px auto;
}

@media screen and (max-width: 769px) {
  .contact {
    width: 90%;
  }
  .contact-content p {
    font-size: 18px;
  }
  .link {
    width: 100%;
    margin: 50px auto;
  }
}
</style>
