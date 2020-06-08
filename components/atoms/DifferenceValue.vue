<template>
  <div class="center">
    <div class="width-7 center padding-1 font-150 font-bold bg-lightbabyblue border-radius">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DifferenceValue',
  props: {
    value: {
      type: Number,
      default: 0
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
.bg-lightbabyblue {
  background: $lightBabyBlue;
}
.border-radius {
  border-radius: 5px;
}
</style>
