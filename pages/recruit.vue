<template>
  <div>
    <the-hero-title main-text="採用情報" />
    <the-main-image />
    <div class="content page-content">
      <the-main-message />
      <div class="btn">
        <a href="https://www.find-job.net/fj/showjob.cgi?id=125695" target="_blank">
          <button class="button is-primary is-outlined is-large is-fullwidth">エントリーする</button>
        </a>
      </div>
      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheMainImage from '~/components/pages/recruit/TheMainImage.vue'
import TheMainMessage from '~/components/pages/recruit/TheMainMessage.vue'
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheMainImage,
    TheMainMessage,
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
