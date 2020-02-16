<template>
  <div class="about">
    <div class="column-link">
      <a href="" target="_brunk">一覧をみる　　＞</a>
    </div>
    <div class="column-container">
      <div class="column-inner">
        <div class="column-image">
          <figure class="image">
            <img src="https://eggsystem.co.jp/wp-content/uploads/2018/04/ceo-1-1200x900.jpg">
          </figure>
        </div>
        <p>2020年は葵・フーバー・河野さんのデ<br class="sp">ザインに</p>
        <p class="column-message"> - 取り組み</p>
      </div>
      <div class="column-inner">
        <div class="column-image">
          <figure class="image">
            <img src="https://eggsystem.co.jp/wp-content/uploads/2018/04/ceo-1-1200x900.jpg">
          </figure>
        </div>
        <p>Soup Friends vol.102/氷室有里さん</p>
        <br class="sp">
        <p class="column-message"> - Soup Friends</p>
      </div>
      <div class="column-inner">
        <div class="column-image">
          <figure class="image">
            <img src="https://eggsystem.co.jp/wp-content/uploads/2018/04/ceo-1-1200x900.jpg">
          </figure>
        </div>
        <p>Soup Friends vol.101/川上ミホさん</p>
        <br class="sp">
        <p class="column-message"> - Soup Friends</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  border-bottom: 2px solid #f5f5f5;
  padding-bottom: 80px;
}
.column-link {
  width: auto;
  margin: 30px auto;
  text-align: right;
}
.column-link a {
  display: inline-block;
  font-size: 12px;
  color: #000;
}
.column-page {
  margin-right: 0;
}
.column-container {
  display: flex;
  justify-content: space-between;
}
.column-inner {
  width: 25%;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 15px;
}
.image {
  margin: 0;
}
.column-message {
  font-size: 12px;
  color: #808080;
  font-family: 'PT Sans', sans-serif;
}
.column-inner:first-child .column-message {
  font-size: 10px;
}
@media screen and (max-width: 600px) {
  .column-link {
    margin: 10px 0;
  }
  .column-container {
    display: block;
  }
  .column-inner {
    width: 100%;
    padding-bottom: 30px;
  }
  .column-inner p {
    text-align: center;
    margin-block-end: 10px;
  }
  .sp {
    display: none;
  }
}
</style>
