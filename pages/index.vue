<template>
  <div>
    <the-hero-image />
    <the-sub-header text="最近の活動・コラム" />
    <div class="column-list page-content">
      <the-column-list :columns="columns" />
      <div class="btn-area">
        <div class="Heading__cta">
          <nuxt-link class="next-button" to="/column">
            <the-link-button />
          </nuxt-link>
        </div>
      </div>
    </div>
    <the-about />
    <the-sub-header text="x-faCEの強み" />
    <the-strength />
    <the-service />
    <the-cost-simulation />
    <the-contact />
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
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import TheService from '~/components/pages/top/TheService.vue'
import TheCostSimulation from '~/components/pages/top/TheCostSimulation.vue'
import TheAbout from '~/components/pages/top/TheAbout.vue'
import TheStrength from '~/components/pages/top/TheStrength.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheMember from '~/components/pages/top/TheMember.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import { fetchCmsListDataColumn, fetchCmsListDataNews } from '~/lib/cms'
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'

export default {
  components: {
    TheHeroImage,
    TheSubHeader,
    TheColumnList,
    TheService,
    TheCostSimulation,
    TheAbout,
    TheStrength,
    TheContact,
    TheMember,
    TheNewsList,
    TheLinkButton
  },
  async asyncData() {
    const data = await Promise.all([
      fetchCmsListDataColumn(3),
      fetchCmsListDataNews(3)
    ])
    return { columns: data[0].listData, news: data[1].listData }
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
