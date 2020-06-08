<template>
  <div>
    <div class="button" @click="next">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'LandscapeButton',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    next() {
      this.$emit('next')
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  background: white;
  color: rgba(25, 92, 165, 0.9);
  height: 50px;
  width: 500px;
  border-radius: 100px;
  border: 8px solid rgba(25, 92, 165, 0.9);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  text-align: center;
  white-space: pre-wrap;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 50px;
}
.button:hover {
  background: rgba(25, 92, 165, 0.9);
  color: white;
}
</style>
