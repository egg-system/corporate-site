<template>
  <div class="service">
    <div class="service-columns">
      <div class="btn-area">
        <div class="Heading__cta">
          <nuxt-link class="ReadMore" to="/service">
            <span class="ReadMore__label">x-faCEのサービスへ</span>
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
      <div class="btn-area">
        <div class="Heading__cta">
          <nuxt-link class="ReadMore" to="/request">
            <span class="ReadMore__label">ご依頼の流れ</span>
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
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.service {
  width: 80%;
  margin: 0 auto;
  margin-top: 8%;
  margin-bottom: 8%;
  background: $white;
}
.service-columns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn-area {
  width: 40%;
}
.Heading__cta {
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
@media screen and (max-width: 600px) {
  .service {
    width: 90%;
  }
}
@media screen and (max-width: 769px) {
  .service-columns {
    display: block;
  }
  .btn-area {
    width: 100%;
    margin: 50px auto;
  }
}
</style>
