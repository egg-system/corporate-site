<template>
  <section>
    <div>
      <p>
        コンサルティングエンジニアとして、提供する価値を実感して頂くために、<br>
        「初月無料」でサービスを提供しております。<br>
        まずはお気軽に無料相談をご利用ください。
      </p>
    </div>
    <div>
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
