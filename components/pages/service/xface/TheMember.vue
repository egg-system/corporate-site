<template>
  <div class="columns is-multiline">
    <div v-for="(member, i) in members" :key="i" class="column is-one-third">
      <figure class="image">
        <img :src="member.img" class="is-rounded">
      </figure>
      <div>
        {{ member.role }}<br>
        <b>{{ member.nameJP }}</b>  {{ member.nameEN }}<br>
        {{ member.profile }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
b {
  font-size: 22px;
}
.image {
  margin: auto;
  width: 200px;
}
</style>
