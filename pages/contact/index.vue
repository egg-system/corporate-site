<template>
  <div>
    <the-hero-title main-text="お問い合わせ" />
    <div class="content page-content">
      <the-form />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheForm from '~/components/pages/contact/TheForm.vue'

export default {
  components: {
    TheHeroTitle,
    TheForm
  },
  head() {
    return {
      title: 'お問い合わせ',
      meta: [
        {
          hid: 'contact-description',
          name: 'description',
          content: '株式会社エッグシステム お問い合わせ'
        },
        {
          hid: 'contact-keywords',
          name: 'keywords',
          content: 'お問い合わせ, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'contact-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'contact-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'contact-og:title',
          property: 'og:title',
          content: 'お問い合わせ'
        },
        {
          hid: 'contact-og:description',
          property: 'og:description',
          content: '株式会社エッグシステム お問い合わせ'
        },
        {
          hid: 'contact-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
