export const state = () => ({
  shouldShow: true,
  convertionComponent: 'DefaultConversionComponent'
})

export const mutations = {
  setShouldShow(state, shouldShow) {
    state.shouldShow = shouldShow
  }
}
