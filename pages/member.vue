<template>
  <div>
    <div class="page-content">
      <the-hero-title main-text="メンバー紹介" />
      <the-member :members="members" class="member"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheMember from '~/components/pages/common/TheMember.vue'
import members from '~/assets/js/member.js'

export default {
  components: {
    TheHeroTitle,
    TheMember
  },
  data() {
    return {
      members: members.members
    }
  },
  head() {
    return {
      title: 'メンバー紹介',
      meta: [
        {
          hid: 'member-description',
          name: 'description',
          content: 'メンバー紹介ページです'
        },
        {
          hid: 'member-keywords',
          name: 'keywords',
          content:
            '高橋 翼, 高橋 光, 布村 武大, 横田 峻, 廣海, 望月　康彦, 黒田 麻衣子, 小谷 征司, 渡辺 千亜希, 三浦 健太郎, 小川, 粂, 川島'
        },
        {
          hid: 'recruit-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'member-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'member-og:title',
          property: 'og:title',
          content: 'メンバー紹介'
        },
        {
          hid: 'member-og:description',
          property: 'og:description',
          content: 'メンバー紹介ページです'
        },
        {
          hid: 'member-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/member'
        },
        {
          hid: 'member-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/tsubasa-ogp.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
