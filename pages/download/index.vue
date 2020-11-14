<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="資料ダウンロード" />
      <the-form />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheForm from '~/components/pages/download/TheForm.vue'

export default {
  components: {
    TheHeroTitle,
    TheForm
  },
  head() {
    return {
      title: '資料ダウンロード',
      meta: [
        {
          hid: 'contact-description',
          name: 'description',
          content: '株式会社エッグシステム 資料ダウンロード'
        },
        {
          hid: 'contact-keywords',
          name: 'keywords',
          content: '資料ダウンロード, eggsystem, 株式会社エッグシステム'
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
          content: '資料ダウンロード'
        },
        {
          hid: 'contact-og:description',
          property: 'og:description',
          content: '株式会社エッグシステム 資料ダウンロード'
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
