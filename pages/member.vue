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
import members from '~/assets/member.json'

export default {
  components: {
    TheHeroTitle,
    TheMember
  },
  data: () => ({
    members: members
  })
}
</script>

<style lang="scss" scoped>
.member {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
