<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in things" :key="i" class="column is-one-third">
        <div class="strength">
          <div class="strength-image">
            <figure class="image">
              <img :src="item.img" :alt="item.title">
            </figure>
          </div>
          <div class="strength-content">
            <p class="strength-title">{{ item.title }}</p>
            <p class="strength-store">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    things: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  position: relative;
}
.strength::after {
  position: absolute;
  content: '';
  width: 95%;
  height: 1px;
  background: $lightgray;
  margin-top: 0.5rem;
  bottom: 1rem;
}
.column:last-child::after {
  height: 0px;
}
.strength-content {
  padding: 10px 5px;
}
.strength-title {
  margin-top: 10px;
  font-size: 20px;
  height: 50px;
  text-align: center;
}
.strength-store {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 32px;
}
@media screen and (max-width: 600px) {
  .strength-content {
    height: auto;
  }
  .strength-title {
    font-size: 16px;
  }
}
</style>
