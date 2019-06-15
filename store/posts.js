const per_page = 12

export const state = () => ({
  displayPost: null,
  pagePosts: []
})

export const mutations = {
  setDisplayPost(state, displayPost) {
    state.displayPost = displayPost
  },
  setPagePosts(state, pagePosts) {
    state.pagePosts = pagePosts
  }
}

export const actions = {
  async index({ commit }, payload) {
    commit('setPagePosts')
    return await this.$axios.$get(
      `/wp-json/wp/v2/${payload.postType}?page=${
        payload.page
      }&per_page=${per_page}`
    )
  },
  async show({ commit }, payload) {
    commit('setDisplayPost')
    return await this.$axios.$get(
      `/wp-json/wp/v2/${payload.postType}?slug=${payload.slug}&status=publish`
    )
  }
}
