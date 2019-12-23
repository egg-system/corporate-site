<template>
  <div>
    <div class="bg-image">
      <div class="bg-mask">
        <h3 class="title is-2">
          <p class="bg-text">
            コンサルティングエンジニア集団
          </p>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('~assets/xface/logo_image_small.png');
  width: 100%;
  height: 500px;
  background-repeat: repeat;
}
.bg-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.bg-text {
  color: $white;
  line-height: 2.5rem;
  padding-top: 200px;
  text-align: center;
}
</style>
