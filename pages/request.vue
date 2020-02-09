<template>
  <div>
    <the-hero-title main-text="ご依頼について" />
    <div class="content">
      <table class="table">
        <tbody>
          <tr>
            <the-about />
          </tr>
          <tr>
            <the-sub-header :is-line="true" text="ご依頼の流れ" />
            <the-flow />
          </tr>
          <tr>
            <the-sub-header :is-line="true" text="当社サービスについて" />
            <the-service :services="services" class="service"/>
          </tr>
          <tr>
            <the-message />
          </tr>
          <tr>
            <the-sub-header :is-line="true" text="最近の活動・コラム" />
            <a href="/column" class="link">一覧を見る</a>
            <the-column />
            <p class="tmp">(Coming soon)</p>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/request/TheSubHeader.vue'
import TheAbout from '~/components/pages/request/TheAbout.vue'
import TheFlow from '~/components/pages/request/TheFlow.vue'
import TheService from '~/components/pages/request/TheService.vue'
import TheMessage from '~/components/pages/request/TheMessage.vue'
import TheColumn from '~/components/pages/request/TheColumn.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheAbout,
    TheFlow,
    TheService,
    TheMessage,
    TheColumn
  },
  data: () => ({
    services: [
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
      },
      {
        title: '代表取締役　CEO',
        description:
          '「献身的な人のためにITシステムを活用する」という理念を元に、株式会社エッグシステムを創業。強みは真面目さだけ。',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/05/201905-tsubasa02-1024x1024.jpg'
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
.table tr {
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}
.link {
  text-align: right;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    width: 90%;
    margin: 0 auto;
  }
}
.blank {
  margin-top: 100px;
  margin-bottom: 30px;
}
.end {
  margin-bottom: 50px;
}
.tmp {
  text-align: center;
  padding-bottom: 50px;
}
</style>
