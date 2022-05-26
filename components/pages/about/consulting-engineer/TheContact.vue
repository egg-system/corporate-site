<template>
  <section class="contact-section">
    <div>
      <p>
        まずはお気軽に無料相談をご利用ください。
      </p>
    </div>
    <div class="link-area">
      <black-link label="無料相談へ" link="/free-contact" />
      <black-link
        label="コンサルティングサービス詳細へ"
        link="/service/consulting-engineer"
      />
    </div>
  </section>
</template>

<script>
import BlackLink from '~/components/atoms/BlackLink.vue'

export default {
  components: { BlackLink }
}
</script>

<style lang="scss" scoped>
.contact-section {
  margin: 2rem 0;
  padding: 2rem 0 6rem;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;

  p {
    text-align: center;
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  .link-area {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-around;
    }

    margin-top: 6rem;

    .link {
      @media screen and (min-width: 768px) {
        width: 18rem;
      }
      margin: 2rem 0;
    }
  }
}
</style>
