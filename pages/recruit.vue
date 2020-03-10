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
    <the-study />
    <the-sub-header class="blank" text="最近の活動・コラム" />
    <the-column class="end" />
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheContact from '~/components/pages/common/TheContact.vue'
import TheMainImage from '~/components/pages/recruit/TheMainImage.vue'
import TheMainMessage from '~/components/pages/recruit/TheMainMessage.vue'
import TheAboutUs from '~/components/pages/recruit/TheAboutUs.vue'
import TheStudy from '~/components/pages/recruit/TheStudy.vue'
import TheColumn from '~/components/pages/about/TheColumn.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheContact,
    TheMainImage,
    TheMainMessage,
    TheColumn,
    TheStudy,
    TheAboutUs
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 50%;
  margin: 30px auto 30px;
  text-align: center;
}
.blank {
  margin-top: 70px;
  margin-bottom: 30px;
}
.end {
  margin: 0 0 50px;
}
@media screen and (max-width: 600px) {
  .end {
    margin: 0;
    padding-bottom: 0;
  }
}
</style>
