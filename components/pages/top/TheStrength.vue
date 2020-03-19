<template>
  <div class="strength-list">
    <the-thing-list :things="things" />
  </div>
</template>

<script>
import TheThingList from '~/components/pages/common/TheThingList.vue'
import method from '~/mixins/method'
import things from '~/assets/js/top-strength.js'

export default {
  components: {
    TheThingList
  },
  data() {
    return {
      things: things.things
    }
  }
}
</script>

<style lang="scss" scoped>
.strength-list {
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
  .more-btn {
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
</style>
