<template>
  <div>
    <the-hero-title main-text="メンバー紹介" />

    <div class="page-content">
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
      members: members.members,
      meta: {
        title: 'メンバー紹介',
        description: 'メンバー紹介ページです',
        type: 'article',
        url: 'https://eggsystem.co.jp/member'
      }
    }
  },
  head() {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url }
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
