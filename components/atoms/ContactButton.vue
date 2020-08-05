<template>
  <div class="width-7 center">
    <nuxt-link to="/contact" >
      <div class="center padding-1 font-150 font-bold color-white border-radius bg-lightbabyblue">
        ご相談はこちらから
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    lable: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.width-7 {
  width: 70%;
}
.center {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
}
.padding-1 {
  padding: 1rem;
}
.font-150 {
  font-size: 1.5rem;
}
.font-bold {
  font-weight: bold;
}
.color-white {
  color: $white;
}
.border-radius {
  border-radius: 5px;
}
.bg-lightbabyblue {
  background: $orange;
}
</style>
