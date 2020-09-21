<template>
  <div>
    <the-hero-image />
    <section class="case-section">
      <the-sub-header text="顧客インタビュー・事例紹介" />
      <div class="column-list page-content">
        <the-case-list :cases="cases" />
        <the-to-details-button to="/cases" />
      </div>
    </section>
    <the-about />
    <the-main-message />
    <section>
      <the-sub-header text="顧客構成・内訳" />
      <the-about-client />
    </section>
    <section>
      <the-sub-header text="『初月無料』のコンサルティングサービスです" />
      <the-about-consultation />
    </section>
    <the-contact />
    <the-service />
    <section>
      <the-sub-header text="メンバー" />
      <the-member />
    </section>
    <section class="news-section">
      <the-sub-header text="お知らせ" />
      <div class="news-list page-content">
        <p class="back">
          <nuxt-link to="/news">
            <i class=""/>一覧を見る<span>></span>
          </nuxt-link>
        </p>
        <the-news-list :news="news" />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeroImage from '~/components/pages/top/TheHeroImage.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import TheMainMessage from '~/components/pages/top/TheMainMessage.vue'
import TheAboutClient from '~/components/pages/top/TheAboutClient.vue'
import TheAboutConsultation from '~/components/pages/top/TheAboutConsultation.vue'
import TheService from '~/components/pages/top/TheService.vue'
import TheAbout from '~/components/pages/top/TheAbout.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheMember from '~/components/pages/top/TheMember.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import TheToDetailsButton from '~/components/pages/common/TheToDetailsButton.vue'
import { fetchCmsListDataCase, fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroImage,
    TheSubHeader,
    TheCaseList,
    TheToDetailsButton,
    TheMainMessage,
    TheAboutClient,
    TheAboutConsultation,
    TheService,
    TheAbout,
    TheContact,
    TheMember,
    TheNewsList
  },
  async asyncData() {
    const data = await Promise.all([
      fetchCmsListDataCase(3),
      fetchCmsListDataNews(3)
    ])
    return { cases: data[0].listData, news: data[1].listData }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .news-image img {
  display: none;
}

@media screen and (max-width: 769px) {
  .Heading__cta {
    width: 100%;
  }
}

.case-section {
  margin-bottom: 9rem;
}

.news-section {
  margin-bottom: 3rem;

  .back {
    text-align: right;
    margin-bottom: 1rem;

    a {
      color: #0a0716;
    }
  }
}
</style>
