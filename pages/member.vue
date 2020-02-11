<template>
  <div>
    <the-hero-title main-text="メンバー紹介" />

    <div class="content page-content">
      <the-member :members="members" class="member"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheMember from '~/components/pages/common/TheMember.vue'

export default {
  components: {
    TheHeroTitle,
    TheMember
  },
  data: () => ({
    members: [
      {
        role: '代表取締役',
        nameJP: '高橋 翼',
        nameEN: 'Tsubasa Takahashi',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        role: '',
        nameJP: '高橋 光',
        nameEN: 'Hikaru Takahashi',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/hikaru01-min-1024x1024.jpg'
      },
      {
        role: '',
        nameJP: '布村 武大',
        nameEN: 'Takehiro Nunomura',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/nunomura01-min-1024x1024.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: '',
        nameJP: '山田 太郎',
        nameEN: 'Tarou Yamada',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.member {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
