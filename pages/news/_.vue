<template>
  <div>news</div>
</template>

<script>
import moment from 'moment'

export default {
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
  }
}
</script>
