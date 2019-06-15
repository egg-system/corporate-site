<template>
  <div>test</div>
</template>

<script>
import moment from 'moment'

export default {
  validate({ params }) {
    if (!/\d{4}/.test(params.year)) {
      return false
    }

    return /\d{2}/.test(params.month) && /\d{2}/.test(params.day)
  },
  async fetch({ store, params, error }) {
    const posts = await store.dispatch('posts/show', {
      postType: 'posts',
      slug: params.pathMatch
    })
    if (posts.length === 0) {
      error({ statusCode: 404, message: '該当URLの投稿は存在しません。' })
      return
    }

    // momentのmonthは11~0のため、-1
    const urlDate = moment({
      year: params.year,
      month: params.month - 1,
      day: params.day
    })
    const postDate = moment(posts[0].date)
    if (!urlDate.isSame(postDate, 'days')) {
      error({ statusCode: 404, message: '該当URLの投稿は存在しません。' })
      return
    }

    store.commit('posts/setDisplayPost', posts[0])
  }
}
</script>
