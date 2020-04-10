<template>
  <div>
    <the-hero-image />
    <the-sub-header text="最近の活動・コラム" />
    <div class="column-list page-content">
      <the-column-list :columns="columns" />
      <div class="btn-area">
        <div class="more-btn">
          <nuxt-link class="column-button" to="/column">詳しくみる　　　<p class="column-arrow">></p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <the-about />
    <the-sub-header text="x-faCEの強み" />
    <the-strength />
    <the-service />
    <the-contact />
    <the-sub-header text="メンバー" />
    <the-member />
    <!--
    <the-sub-header text="お知らせ" />
    <div class="news-list page-content">
      <p class="back">
        <nuxt-link to="/news">
          <i class=""/>一覧を見る<span>></span>
        </nuxt-link>
      </p>
      <the-news-list :news="news" />
    </div>
  -->
  </div>
</template>

<script>
import TheHeroImage from '~/components/pages/top/TheHeroImage.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import TheService from '~/components/pages/top/TheService.vue'
import TheAbout from '~/components/pages/top/TheAbout.vue'
import TheStrength from '~/components/pages/top/TheStrength.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheMember from '~/components/pages/top/TheMember.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import { fetchCmsListDataColumn, fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroImage,
    TheSubHeader,
    TheColumnList,
    TheService,
    TheAbout,
    TheStrength,
    TheContact,
    TheMember,
    TheNewsList
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
.back a {
  display: block;
  text-align: right;
}
.back i {
  margin-right: 5px;
}
.back span {
  margin-left: 20px;
}
</style>
