<template>
  <div>
    <the-hero-title main-text="サービス紹介" />
    <div class="content page-content">
      <div class="columns">
        <div class="consulting column is-half">
          <figure class="image">
            <img :src="ConsultingImage">
          </figure>
          <div class="is-size-5">システムコンサルティングサービス</div>
          <div class="link">
            <nuxt-link v-scroll-to="'#the-consulting'" to class="button is-dark">
              <div class="link-message">詳細へ</div>
              <div class="arrow">></div>
            </nuxt-link>
          </div>
        </div>
        <div class="development column is-half">
          <figure class="image">
            <img :src="SystemImage">
          </figure>
          <div class="is-size-5">システム開発</div>
          <div class="link">
            <nuxt-link v-scroll-to="'#the-development'" to class="button is-dark">
              <div class="link-message">詳細へ</div>
              <div class="arrow">></div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <the-consulting id="the-consulting" class="lightgray-underline" />
      <the-development id="the-development" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheConsulting from '~/components/pages/service/TheConsulting.vue'
import TheDevelopment from '~/components/pages/service/TheDevelopment.vue'
import ConsultingImage from '~/assets/service/img/service-consult01.JPG'
import SystemImage from '~/assets/service/img/service-system01.JPG'

export default {
  components: {
    TheHeroTitle,
    TheConsulting,
    TheDevelopment
  },
  data: () => ({
    ConsultingImage,
    SystemImage
  })
}
</script>

<style lang="scss" scoped>
.columns {
  text-align: center;
  position: relative;
  margin: auto;
  .column {
    padding: 2rem;
    margin-bottom: 3rem;
  }
}
figure.image {
  margin-bottom: 1rem;
}
.is-size-5 {
  margin-bottom: 1rem;
}
@media screen and (min-width: 769px) {
  .consulting::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 80%;
    top: 5%;
    left: 50%;
    background: $lightgray;
  }
}
@media screen and (max-width: 768px) {
  .consulting::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 1px;
    left: 5%;
    background: $lightgray;
    margin-top: 3rem;
  }
}
.link .button {
  width: 80%;
}
</style>
