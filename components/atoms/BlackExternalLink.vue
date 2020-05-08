<template>
  <div class="link">
    <a :href="href" target="_blank" class="button is-dark">
      <span class="link-message">{{ label }}</span>
      <span class="column-arrow" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>
