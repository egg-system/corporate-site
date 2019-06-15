<template>
  <div>news</div>
</template>

<script>
export default {
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
  }
}
</script>
