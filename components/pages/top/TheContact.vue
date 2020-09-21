<template>
  <section class="contact">
    <div class="contact-content">
      <p>
        「こんな相談してよいのか分からない」<br>
        「まずは話だけ聞いてみたい」<br>
        といった方もお気軽にご相談ください。
      </p>
    </div>
    <h2>
      <black-link label="お問い合わせ・ご相談はこちらから" link="/contact" />
    </h2>
  </section>
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
  line-height: 2.5rem;
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
