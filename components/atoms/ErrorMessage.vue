<template>
  <div class="margin-0 margin-left-2">
    <span class="color-red font-150">{{ message }}</span>
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
.font-20 {
  font-size: 20px;
}
.margin-1 {
  margin: 1rem;
}
.margin-left-2 {
  margin-left: 2rem;
}
</style>
