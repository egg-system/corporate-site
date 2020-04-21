<template>
  <div>
    <the-hero-image />
    <the-sub-header text="最近の活動・コラム" />
    <div class="column-list page-content">
      <the-column-list :columns="columns" />
      <div class="btn-area">
        <div class="Heading__cta">
          <nuxt-link class="ReadMore" to="/column">
            <span class="ReadMore__label">詳しくみる</span>
            <svg class="Icon -arrow-right-rounded" aria-hidden="true" focusable="false">
              <use xlink:href="#icon-arrow-right-rounded">
                <svg id="icon-arrow-right-rounded" viewBox="0 0 18 18">
                  <path d="M0 9c0-4.967 4.033-9 9-9s9 4.033 9 9-4.033 9-9 9-9-4.033-9-9z">*</path>
                  <path d="M8.017 6l3.554 3.193-3.554 3.193" vector-effect="non-scaling-stroke">*</path>
                </svg>
              </use>
            </svg>
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
.ReadMore > * {
  vertical-align: middle;
}
.ReadMore {
  color: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  text-decoration: none;
}
.ReadMore__label {
  margin-right: 5px;
  font-size: 14px;
}
.Icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: inherit;
  stroke: transparent;
  fill: currentColor;
}
.Icon.-arrow-right-rounded {
  stroke: #fff;
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
@media screen and (max-width: 769px) {
  .Heading__cta {
    width: 100%;
  }
}
</style>
