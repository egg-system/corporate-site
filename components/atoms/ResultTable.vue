<template>
  <div class="margin-3 padding-3 bg-lightbabyblue border-radius-1">
    <div class="columns">
      <div class="column is-4" />
      <div class="column is-4" />
      <div class="column is-4 center border-bottom-1">
        参考
      </div>
    </div>
    <div class="columns">
      <div class="column is-4" />
      <div class="column is-2 center border-bottom-2">
        貴社
      </div>
      <div class="column is-2 center border-bottom-2">
        {{ industry }}
      </div>
      <div class="column is-2 center border-bottom-2">
        {{ genre }}全体
      </div>
      <div class="column is-2 center border-bottom-2">
        全業種
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 center">
        売上高に対するシステムコストの割合
      </div>
      <div class="column is-2 center">
        {{ clientVal }}%
      </div>
      <div class="column is-2 center">
        {{ industryVal }}<span v-if="industryVal !='NO DATA'">%</span>
      </div>
      <div class="column is-2 center">
        {{ genreVal }}<span v-if="genreVal !='NO DATA'">%</span>
      </div>
      <div class="column is-2 center">
        {{ allVal }}<span v-if="allVal !='NO DATA'">%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultTable',
  props: {
    industry: {
      type: String,
      default: ''
    },
    genre: {
      type: String,
      default: ''
    },
    clientVal: {
      type: Number,
      default: 0
    },
    industryVal: {
      type: Number,
      default: 0
    },
    genreVal: {
      type: Number,
      default: 0
    },
    allVal: {
      type: Number,
      default: 0
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
.margin-3 {
  margin: 3rem;
}
.padding-3 {
  padding: 3rem;
}
.bg-lightbabyblue {
  background: $lightBabyBlue;
}
.border-radius-1 {
  border-radius: 1rem;
}
.border-bottom-1 {
  border-bottom: 1px solid;
}
.border-bottom-2 {
  border-bottom: 2px solid;
}
</style>
