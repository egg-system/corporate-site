<template>
  <div>
    <span class="font-20 pointer" @click="previous">前の質問へ戻る</span>
  </div>
</template>

<script>
export default {
  name: 'PreviousButton',
  methods: {
    previous() {
      this.$emit('previous')
    }
  }
}
</script>
<style lang="scss" scoped>
.font-20 {
  font-size: 20px;
}
.pointer {
  cursor: pointer;
}
</style>
