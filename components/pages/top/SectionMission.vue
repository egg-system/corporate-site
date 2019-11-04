<template>
  <div class="container has-text-white">
    <div class="triangle-pattern08-2"/>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.mission {
  // background-color: $blue;
}
.space {
  background: $blue;
  transform: skewY(-6deg);
}
section {
  // position: relative;
  box-sizing: border-box;
  .inner {
    position: relative;
    padding: 20px;
    max-width: 1024px;
    margin: auto;
  }
}
.slant-section {
  margin: 15px auto;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -50px;
    z-index: -1;
    width: 100%;
    height: 150%;
    background: $blue;
    transform: skewY(-6deg);
  }
  + section {
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: -50px;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: $blue;
      transform: skewY(-12deg);
    }
  }
}
.triangle-pattern08-2 {
  border-bottom: 150px solid transparent;
  border-left: 350px solid $blue;
}
</style>
