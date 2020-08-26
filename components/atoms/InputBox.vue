<template>
  <div>
    <div class="cp_iptxt">
      <input
        :value="text"
        :placeholder="label"
        class="ef"
        type="text"
        @blur="blur"
        @focus="focus"
      >
      <span class="focus_line" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: {
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    focus(e) {
      this.$emit('focus', e.target.value)
    },
    blur(e) {
      this.$emit('blur', e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.cp_iptxt {
  position: relative;
  width: 95%;
  margin: 20px 5px;
}
.cp_iptxt input[type='text'] {
  font: 15px/24px;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 1px;
  padding-left: 2rem;
}
.cp_iptxt input[type='text']:focus {
  outline: none;
}
.ef {
  padding: 4px 0;
  border: 0;
  border-bottom: 1px solid #1b2538;
  background-color: transparent;
}
.ef ~ .focus_line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  transition: 0.4s;
  background-color: $black;
}
.ef:focus ~ .focus_line,
.cp_iptxt.ef ~ .focus_line {
  width: 100%;
  transition: 0.4s;
}
.ef ~ label {
  position: absolute;
  z-index: -1;
  top: 4px;
  left: 0;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 0.5px;
  color: #aaaaaa;
}
.ef:focus ~ label,
.cp_iptxt.ef ~ label {
  font-size: 12px;
  top: -16px;
  transition: 0.3s;
  color: #da3c41;
}
</style>
