<template>
  <div>
    <div class="button" @click="select">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    select() {
      this.$emit('genre')
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  background: $white;
  color: rgba(25, 92, 165, 0.9);
  height: 200px;
  width: 200px;
  border-radius: 100px;
  border: 10px solid rgba(25, 92, 165, 0.9);
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  padding: 5px;
  text-align: center;
  white-space: pre-wrap;
  &:hover {
    background: rgba(25, 92, 165, 0.9);
    color: $white;
  }
}
</style>
