<template>
  <div class="entry">
    <div class="entry-columns">
      <a href="https://www.green-japan.com/company/6999" target="_blank">
        <div class="entry-column">
          <p>エントリー<span>></span></p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import method from '~/mixins/method'
export default {
  mixins: [method]
}
</script>

<style lang="scss" scoped>
.entry {
  width: 80%;
  margin: 0 auto;
  margin-top: 8%;
  margin-bottom: 10%;
  background: $white;
}
.entry-columns {
  width: 100%;
  display: flex;
  justify-content: center;
}
.entry-columns a {
  width: 60%;
}
.entry-column {
  padding: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
  background: $darkblack;
  border-radius: 4px;
}
.entry-column p {
  color: $lightgray;
  font-size: 18px;
}
.entry-column p span {
  margin-left: 15px;
}
@media screen and (max-width: 600px) {
  .entry-columns {
    display: block;
  }
  .entry-column {
    width: 100%;
    margin: 15px auto;
  }
}
</style>
