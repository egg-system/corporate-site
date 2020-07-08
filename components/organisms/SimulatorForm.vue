<template>
  <div class="google-form">
    <iframe
      class="form-frame"
      src="https://docs.google.com/forms/d/e/1FAIpQLSeutp7xwFNdKC4-RNpAibye4OeYhOZzXwBBycux-t1kFNC5KA/viewform?embedded=true"
      width="100%"
      height="1200"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >読み込んでいます…</iframe>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ITコストシミュレーション',
      meta: [
        {
          hid: 'company-description',
          name: 'description',
          content: 'ITコスト シミュレーション利用登録フォーム'
        },
        {
          hid: 'company-keywords',
          name: 'keywords',
          content:
            '株式会社エッグシステム, エッグシステム, EGG SYSTEM, ITコスト, シミュレーション, システム費用'
        },
        {
          hid: 'company-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'company-og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'company-og:title',
          property: 'og:title',
          content: 'ITコストシミュレーション'
        },
        {
          hid: 'company-og:description',
          property: 'og:description',
          content: 'ITコスト シミュレーション利用登録フォーム'
        },
        {
          hid: 'company-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/'
        },
        {
          hid: 'company-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/top00.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
iframe.form-frame {
  height: 1400px;
}
@media screen and (max-width: 600px) {
  iframe.form-frame {
    height: 1800px;
  }
}
</style>
