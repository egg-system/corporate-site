<template>
  <div class="contact">
    <div class="contact-content">
      <p>「こんな相談してよいのか分からない」</p>
      <p>「まずは話だけ聞いてみたい」</p>
      <p>といった方もお気軽にご相談ください。</p>
    </div>
    <div class="btn-area">
      <div class="Heading__cta">
        <nuxt-link class="ReadMore" to="/service">
          <span class="ReadMore__label">お問い合わせ・ご相談はこちらから</span>
          <svg class="Icon -arrow-right-rounded" aria-hidden="true" focusable="false">
            <use xlink:href="#icon-arrow-right-rounded">
              <svg id="icon-arrow-right-rounded" viewBox="0 0 18 18">
                <path d="M0 9c0-4.967 4.033-9 9-9s9 4.033 9 9-4.033 9-9 9-9-4.033-9-9z">*</path>
                <path d="M8.017 6l3.554 3.193-3.554 3.193" vector-effect="non-scaling-stroke">*</path>
              </svg>
            </use>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.contact {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.contact-content {
  padding-top: 30px;
}
.contact-content p {
  font-size: 32px;
  text-align: center;
  padding: 10px 5px;
}
.btn-area {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.Heading__cta {
  width: 45%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $lightgray;
  text-align: right;
}
.ReadMore > * {
  vertical-align: middle;
}
.ReadMore {
  color: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
.ReadMore__label {
  margin-right: 5px;
  font-size: 14px;
}
.Icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: inherit;
  stroke: transparent;
  fill: currentColor;
}
.Icon.-arrow-right-rounded {
  stroke: #fff;
}
.lightgray-underline {
  margin-bottom: 3rem;
}
@media screen and (max-width: 600px) {
  .contact {
    width: 90%;
  }
  .contact-content p {
    font-size: 13px;
    text-align: center;
    padding: 10px 0;
  }
}
@media screen and (max-width: 768px) {
  .Heading__cta {
    width: 100%;
  }
}
</style>
