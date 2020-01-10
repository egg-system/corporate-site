<template>
  <div>
    <the-hero-title main-text="メンバー" />

    <div class="content">
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
        role: '代表取締役　CEO',
        nameJP: '高橋 翼',
        nameEN: 'TSUBASA TAKAHASHI',
        profile:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        role: 'CTO',
        nameJP: '高橋 光',
        nameEN: 'HIKARU TAKAHASHI',
        profile:
          'エッグシステム社員。ITエンジニア／マネージャー。複業社員としてWebサイト開発やセミナー講師などを行う。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/hikaru01-min-1024x1024.jpg'
      },
      {
        role: 'コンサルティングエンジニア',
        nameJP: '布村 武大',
        nameEN: 'TAKEHIRO NUNOMURA',
        profile: 'エッグシステム社員。さすらいのシステムエンジニア。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/nunomura01-min-1024x1024.jpg'
      },
      {
        role: 'スペシャルコーダー',
        nameJP: 'O',
        nameEN: 'O',
        profile:
          '「生涯サラリーマン」と思い込んでいた普通の人。本業では分野的に出来ない事でも、ここは、やってみようの精神で挑戦出来る素敵なところ！自分の市場価値を高めながら、どう生きていくかを考え中。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/papa02-768x768.jpg'
      },
      {
        role: 'システムエンジニア',
        nameJP: 'Q',
        nameEN: 'QOOMEN',
        profile: 'システムエンジニアとしてエッグシステムへ参画中。',
        img: 'https://eggsystem.co.jp/wp-content/uploads/2019/04/qoomen.png'
      },
      {
        role: 'システムエンジニア',
        nameJP: 'K',
        nameEN: 'KATO',
        profile: 'システムエンジニアとしてエッグシステムへ参画中。',
        img: 'https://eggsystem.co.jp/wp-content/uploads/2019/04/kato.png'
      },
      {
        role: 'ディレクター／システムエンジニア',
        nameJP: 'Ｊ',
        nameEN: 'J',
        profile:
          'web系サービスのマネージャー職を経て、エッグシステムに参画。デザイン、コーディング、ディレクションまで幅広い視点で仕事を担当。好きな言葉は論理と愛。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/04/zack-768x960.png'
      },
      {
        role: 'システムエンジニア',
        nameJP: 'K',
        nameEN: 'KYOU',
        profile: 'システムエンジニアとしてエッグシステムへ参画中。',
        img: 'https://eggsystem.co.jp/wp-content/uploads/2019/04/kyo-chan.png'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 0 auto;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    width: 90%;
    margin: 0 auto;
  }
}
.member {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
