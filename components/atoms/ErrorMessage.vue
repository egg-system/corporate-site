<template>
  <div>
    <div class="margin-1 center color-red font-150">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
  text-align: center;
}
.margin-1 {
  margin: 1rem;
}
.color-red {
  color: red;
}
.font-150 {
  font-size: 1.5rem;
}
</style>
