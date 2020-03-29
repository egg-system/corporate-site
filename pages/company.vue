<template>
  <div>
    <div class="content page-content">
      <the-sub-header class="blank" text="会社概要" />
      <the-info />
      <the-sub-header class="blank" text="代表メッセージ" />
      <the-message class="end" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheInfo from '~/components/pages/company/TheInfo.vue'
import TheMap from '~/components/pages/company/TheMap.vue'
import TheMission from '~/components/pages/company/TheMission.vue'
import TheVision from '~/components/pages/company/TheVision.vue'
import TheValue from '~/components/pages/company/TheValue.vue'
import TheMessage from '~/components/pages/company/TheMessage.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheInfo,
    TheMission,
    TheVision,
    TheValue,
    TheMessage,
    TheMap
  },
  head() {
    return {
      title: '会社概要',
      meta: [
        {
          hid: 'company-description',
          name: 'description',
          content:
            '私は、ITシステムのプロフェッショナルとして立場に左右されずに良いものは良いと言い、『想い』や『頑張り』を可視化することで、システムエンジニアにとっても、事業者にとっても、真面目に頑張る人が評価される環境をつくります。'
        },
        {
          hid: 'company-keywords',
          name: 'keywords',
          content:
            '株式会社エッグシステム, エッグシステム, EGG SYSTEM, 高橋 翼, 代表メッセージ, 真面目な頑張りが評価される社会へ'
        },
        {
          hid: 'company-og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'company-og:title',
          property: 'og:title',
          content: '会社概要'
        },
        {
          hid: 'company-og:description',
          property: 'og:description',
          content:
            '私は、ITシステムのプロフェッショナルとして立場に左右されずに良いものは良いと言い、『想い』や『頑張り』を可視化することで、システムエンジニアにとっても、事業者にとっても、真面目に頑張る人が評価される環境をつくります。'
        },
        {
          hid: 'request-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/company'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blank {
  margin-top: 100px;
  margin-bottom: 30px;
}
.end {
  margin: 0 40px 50px;
}
@media screen and (max-width: 600px) {
  .end {
    margin: 0;
  }
}
</style>
