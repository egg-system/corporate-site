<template>
  <news-wrapper>
    <template v-slot:title>
      <h1 class="display-2">ニュース</h1>
    </template>
    
    <no-ssr>
      <v-data-table
        :items="postItems"
        hide-default-actions
        hide-default-header
        hide-default-footer
      >
        <template v-slot:body="{ items }">
          <tr v-for="item in items" :key="item.date" >
            <td>{{ item.date }}</td>
            <td><nuxt-link :to="item.postLink">{{ item.title }}</nuxt-link></td>
          </tr>
        </template>
      </v-data-table>
    </no-ssr>
  </news-wrapper>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import NewsWrapper from '~/components/pages/NewsWrapper'

export default {
  components: { NewsWrapper },
  async fetch({ store, params, error }) {
    const posts = await store.dispatch('posts/index', {
      postType: 'news',
      page: 'page' in params ? params.page : 1
    })

    if (posts.length === 0) {
      error({ statusCode: 404, message: '該当URLのニュースは存在しません。' })
      return
    }

    store.commit('posts/setPagePosts', posts)
  },
  computed: {
    postItems() {
      if (!this.pagePosts || this.pagePosts.length === 0) {
        return []
      }

      return this.pagePosts.map(post => {
        return {
          date: moment(post.date).format('YYYY/MM/DD'),
          title: post.title.rendered,
          postLink: `/news/${post.slug}`
        }
      })
    },
    ...mapState('posts', ['pagePosts'])
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/pages/news.scss';

td {
  border-bottom: 1px dashed #ccc;
  font-size: 18px;

  a {
    color: #000;
    text-decoration: none;
  }
}
</style>
