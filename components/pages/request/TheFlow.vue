<template>
  <div>
    <div class="columns">
      <div class="column is-third-fifths">
        <div class="column">
          <p class="message">Step&nbsp;1&nbsp;&nbsp;&nbsp;<nuxt-link to="/free-contact">無料相談フォーム</nuxt-link>からお問い合わせ</p>
          <p>Step&nbsp;2&nbsp;&nbsp;&nbsp;弊社よりご連絡</p>
          <p>Step&nbsp;3&nbsp;&nbsp;&nbsp;初回お打ち合わせ</p>
          <p>Step&nbsp;4&nbsp;&nbsp;&nbsp;ご提案書およびお見積書のご提示</p>
          <p>Step&nbsp;5&nbsp;&nbsp;&nbsp;ご契約</p>
          <p class="note">※ご契約確定前（Step&nbsp;4まで）は費用は発生しません。</p>
        </div>
      </div>
      <div class="column">
        <figure>
          <img :src="flowImage">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import flowImage from '~/assets/request/img/request-top.JPG'

export default {
  data: () => ({
    flowImage
  })
}
</script>

<style lang="scss" scoped>
figure {
  margin: 0;
}
.note {
  margin-left: 1rem;
}
.message {
  background-color: inherit;
}
.columns {
  margin-bottom: 3rem;
}
</style>
