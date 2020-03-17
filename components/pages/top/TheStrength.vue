<template>
  <div class="strength-list">
    <the-thing-list :things="things" />
  </div>
</template>

<script>
import TheThingList from '~/components/pages/common/TheThingList.vue'
import method from '~/mixins/method'

export default {
  components: {
    TheThingList
  },
  mixins: [method],
  data: () => ({
    things: [
      {
        title: '実現可能性を重視',
        content:
          '弊社メンバーは「コンサルティングエンジニア集団」で、全員がシステム設計・開発の経験があります。そのため、コンサルティングの観点だけでなく、システム設計の観点から、計画が実行可能かどうかを見極めることができます。策定した計画が絵に描いた餅にならず、実現可能な「ToBe（あるべき姿）」「CanBe（現実的な解）」を策定します。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/201910-dx3-1024x682.jpg'
      },
      {
        title: '圧倒的なコストパフォーマンス',
        content:
          '間接部門や営業部門がなく、全員がプレイヤーとして動くことで間接費用を抑えています。大手コンサルティング会社や大手システム会社の約半分という報酬額で、圧倒的なコストパフォーマンスをご提供することが可能です。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/20190910-08-1024x683.jpg'
      },
      {
        title: '中立的な立場',
        content:
          '弊社は大手企業や特定の製品・サービスを有する企業と資本関係がなく、独立した組織です。また、代理店ビジネスはやっておりませんので、特定の製品・サービスに依存せず、中立的な立場からシステムコンサルティングやシステム開発を行います。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/08/20190622-DSC_3506-min-1024x684.jpg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.strength-list {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 5%;
}
.btn-area {
  text-align: right;
  width: 100%;
}
.more-btn {
  width: 50%;
  margin-left: 50%;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid $lightgray;
}
.column-button {
  font-size: 16px;
  display: inline-block;
  color: $black;
}
.column-arrow {
  display: inline-block;
  width: 17px;
  height: 17px;
  font-size: 12px;
  background: $black;
  border-radius: 50%;
  color: $white;
  text-align: center;
  line-height: 17px;
  vertical-align: 2px;
}
@media screen and (max-width: 600px) {
  .more-btn {
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
</style>
