<template>
  <v-flex xs8>
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{on}">
        <v-btn depressed flat color="white" 
               class="primary--text subtitle-1 font-weight-bold" 
               v-on="on">
          会社情報
        </v-btn>
      </template>

      <v-list dense>
        <v-list-item v-for="(company, index) in companies" :key="index" @click="on">
          <v-list-tile-title href="company.link">{{ company.title }}</v-list-tile-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{on}">
        <v-btn depressed flat color="white" 
               class="primary--text subtitle-1 font-weight-bold" 
               v-on="on">
          サービス
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(service, index) in services" :key="index" @click="on">
          <v-list-tile-title href="service.link">{{ service.title }}</v-list-tile-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{on}">
        <v-btn depressed flat color="white" 
               class="primary--text subtitle-1 font-weight-bold" 
               v-on="on">
          事例
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(example, index) in examples" :key="index" @click="on">
          <v-list-tile-title>{{ example.title }}</v-list-tile-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn depressed flat color="white" 
           class="primary--text subtitle-1 font-weight-bold" 
           href="https://eggsystem.co.jp/member/">メンバー紹介</v-btn>
    <v-btn depressed flat color="white" 
           class="primary--text subtitle-1 font-weight-bold" 
           href="https://eggsystem.co.jp/news/">ニュース</v-btn>
    <v-btn depressed flat color="white" 
           class="primary--text subtitle-1 font-weight-bold" 
           href="https://eggsystem.co.jp/columns/">コラム</v-btn>
    <v-btn depressed flat color="white" 
           class="primary--text subtitle-1 font-weight-bold" 
           href="https://eggsystem.co.jp/recruit/">採用情報</v-btn>
    <v-btn depressed flat color="white" 
           class="primary--text subtitle-1 font-weight-bold" 
           href="https://eggsystem.co.jp/contact/">お問い合わせ</v-btn>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    companies: [
      { title: '会社概要', link: 'https://eggsystem.co.jp/company-data/' },
      { title: '経営理念', link: 'https://eggsystem.co.jp/vision/' },
      { title: '代表メッセージ', link: 'https://eggsystem.co.jp/message/' }
    ],
    services: [
      {
        title: 'ホームページ・Webシステム開発',
        link: 'https://eggsystem.co.jp/member/'
      },
      { title: 'システムコンサルティング' },
      { title: 'サロン開業支援サービス' }
    ],
    examples: [
      { title: 'システムコンサルティング・Webシステム開発' },
      { title: 'Webサイト製作事例' }
    ]
  })
}
</script>
