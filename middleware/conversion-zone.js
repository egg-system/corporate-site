export default function({ store, route }) {
  const shouldShow = !route.name.startsWith('download')
  store.commit('conversion/setShouldShow', shouldShow)
}
