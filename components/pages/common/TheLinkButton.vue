<template>
  <div>
    <span class="ReadMore__label">詳しくみる</span>
    <svg class="Icon -arrow-right-rounded" aria-hidden="true" focusable="false">
      <use xlink:href="#icon-arrow-right-rounded">
        <svg id="icon-arrow-right-rounded" viewBox="0 0 18 18">
          <path d="M0 9c0-4.967 4.033-9 9-9s9 4.033 9 9-4.033 9-9 9-9-4.033-9-9z">*</path>
          <path d="M8.017 6l3.554 3.193-3.554 3.193" vector-effect="non-scaling-stroke">*</path>
        </svg>
      </use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.ReadMore {
  color: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  text-decoration: none;
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
  vertical-align: text-bottom;
}
.Icon.-arrow-right-rounded {
  stroke: #fff;
}
</style>
