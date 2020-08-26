<template>
  <div class="div-image">
    <img :src="img">
  </div>
</template>

<script>
import img from '~/assets/service/img/result-example.PNG'

export default {
  name: 'DivImage',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    img: img
  })
}
</script>
<style lang="scss" scoped>
.div-image {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
