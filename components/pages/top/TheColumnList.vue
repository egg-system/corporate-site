<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in columns" :key="i" class="column is-one-third">
        <nuxt-link :to="'/column/' + item.id">
          <div class="column-inner">
            <div class="column-image">
              <figure class="image">
                <img :src="item.img.url" :alt="item.title">
              </figure>
            </div>
            <div class="column-content">
              <p class="column-title">{{ item.title }}</p>
              <br>
              {{ item.display_at | dayjs }}
              <br>
              <p class="column-store">{{ item.store }}</p>
              <span class="tag is-primary">
                {{ item.label.label }}
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="btn-area">
        <div class="more-btn">
          <nuxt-link class="column-button" to="/column">詳しくみる　　　<p class="column-arrow">></p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.column-list {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 5%;
}
.btn-area {
  text-align: right;
  width: 100%;
}
.more-btn {
  width: 50%;
  margin-left: 50%;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid $lightgray;
}
.column-button {
  font-size: 16px;
  display: inline-block;
  color: $black;
}
.column-arrow {
  display: inline-block;
  width: 17px;
  height: 17px;
  font-size: 12px;
  background: $black;
  border-radius: 50%;
  color: $white;
  text-align: center;
  line-height: 17px;
  vertical-align: 2px;
}
@media screen and (max-width: 600px) {
  .column-button {
    position: relative;
  }
  .column-arrow {
    position: absolute;
    top: 4px;
    right: 10px;
  }
  .more-btn {
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
</style>
