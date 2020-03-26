<template>
  <div>
    <the-hero-image />
    <!--<the-sub-header text="最近の活動・コラム" />
    // <the-column-list />-->
    <the-about />
    <the-sub-header text="x-faCEの強み" />
    <the-strength />
    <the-service />
    <the-contact />
    <the-sub-header text="メンバー" />
    <the-member />
    <!--<the-news-list />-->
  </div>
</template>

<script>
import TheHeroImage from '~/components/pages/top/TheHeroImage.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheColumnList from '~/components/pages/top/TheColumnList.vue'
import TheService from '~/components/pages/top/TheService.vue'
import TheAbout from '~/components/pages/top/TheAbout.vue'
import TheStrength from '~/components/pages/top/TheStrength.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheMember from '~/components/pages/top/TheMember.vue'
import TheNewsList from '~/components/pages/top/TheNewsList.vue'

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
  }
}
</script>

<style lang="scss" scoped>
</style>
