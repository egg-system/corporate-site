<template>
  <div>
    <the-hero-title main-text="ジブンゴトで働こう" />
    <div class="content page-content">
      <the-main-image />
      <the-main-message />
      <div class="btn">
        <a href="https://www.find-job.net/fj/showjob.cgi?id=125695" target="_blank">
          <button class="button is-primary has-text-white has-background-black is-large">エントリーする
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
        </a>
      </div>
      <the-contact />
    </div>
    <the-about-us />
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheMainImage from '~/components/pages/recruit/TheMainImage.vue'
import TheMainMessage from '~/components/pages/recruit/TheMainMessage.vue'
import TheAboutUs from '~/components/pages/recruit/TheAboutUs.vue'
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheMainImage,
    TheMainMessage,
    TheAboutUs,
    TheContact
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 50%;
  margin: 30px auto 30px;
  text-align: center;
}
</style>
