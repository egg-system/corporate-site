<template>
  <div class="sub-header-container">
    <h2 class="sub-header">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-header-container {
  width: 80%;
  margin: 30px auto 0;
}
.sub-header {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: bold;
}
@media screen and (max-width: 600px) {
  .sub-header-container {
    width: 90%;
  }
}
</style>
