<template>
  <div class="about-consulting-engineer">
    <div class="content page-content">
      <the-hero-title main-text="『コンサルティングエンジニア』とは" />
      <the-descripsion />
      <the-reasons />
      <the-value />
      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheDescripsion from '~/components/pages/about/consulting-engineer/TheDescripsion.vue'
import TheReasons from '~/components/pages/about/consulting-engineer/TheReasons.vue'
import TheValue from '~/components/pages/about/consulting-engineer/TheValue.vue'
import TheContact from '~/components/pages/about/consulting-engineer/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheDescripsion,
    TheReasons,
    TheValue,
    TheContact
  }
}
</script>
