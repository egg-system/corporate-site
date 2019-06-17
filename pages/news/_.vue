<template>
  <news-wrapper>
    <template v-slot:title>
      <h1 class="display-2">{{ displayPost.title.rendered }}</h1>
    </template>

    <v-flex row>
      <h4><time>{{ publishDate }}</time>&nbsp;お知らせ</h4>
    </v-flex>

  </news-wrapper>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import NewsWrapper from '~/components/pages/NewsWrapper'

export default {
  components: { NewsWrapper },
  async fetch({ store, params, error }) {
    const posts = await store.dispatch('posts/show', {
      postType: 'news',
      slug: params.pathMatch
    })
    if (posts.length === 0) {
      error({ statusCode: 404, message: '該当URLのニュースは存在しません。' })
      return
    }

    store.commit('posts/setDisplayPost', posts[0])
  },
  computed: {
    publishDate() {
      return moment(this.displayPost.date).format('YYYY年MM月DD日')
    },
    ...mapState('posts', ['displayPost'])
  }
}
</script>

<style>
@import '~/assets/pages/news.scss';
</style>
