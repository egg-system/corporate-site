<template>
  <div>
    <the-hero-image />
    <the-sub-header text="顧客インタビュー・事例紹介" />
    <div class="column-list page-content">
      <the-case-list :cases="cases" />
      <div class="btn-area">
        <div class="Heading__cta">
          <nuxt-link class="next-button" to="/cases">
            <the-link-button />
          </nuxt-link>
        </div>
      </div>
    </div>
    <the-about />
    
    <the-main-message />
    <the-sub-header text="顧客構成・内訳" />
    <the-about-client />
    <the-sub-header text="『初月無料』のコンサルティングサービスです" />
    <the-about-consultation />
    <the-contact />
    <the-service />
    <the-sub-header text="メンバー" />
    <the-member />
    <the-sub-header text="お知らせ" />
    <div class="news-list page-content">
      <p class="back">
        <nuxt-link to="/news">
          <i class=""/>一覧を見る<span>></span>
        </nuxt-link>
      </p>
      <the-news-list :news="news" />
    </div>
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
import { fetchCmsListDataCase, fetchCmsListDataNews } from '~/lib/cms'
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'

export default {
  components: {
    TheHeroImage,
    TheSubHeader,
    TheCaseList,
    TheMainMessage,
    TheAboutClient,
    TheAboutConsultation,
    TheService,
    TheAbout,
    TheContact,
    TheMember,
    TheNewsList,
    TheLinkButton
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
.btn-area {
  display: flex;
  justify-content: flex-end;
}
.Heading__cta {
  width: 45%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $lightgray;
  text-align: right;
}
.next-button {
  color: $black;
}
.back a {
  display: block;
  text-align: right;
  font-size: 14px;
  color: $black;
}
.back i {
  margin-right: 5px;
}
.back span {
  margin-left: 20px;
}
/deep/ .news-image img {
  display: none;
}
@media screen and (max-width: 769px) {
  .Heading__cta {
    width: 100%;
  }
}
</style>
