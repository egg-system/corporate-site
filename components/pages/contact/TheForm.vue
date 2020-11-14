<template>
  <div class="google-form">
    <iframe class="form-frame" src="https://docs.google.com/forms/d/e/1FAIpQLScl1MPXpHjWFoyknPUdixv6GOccTxrDdjU8JD7W43yMZ8-vmA/viewform?embedded=true" width="100%"
            height="1000"
            frameborder="0"
            marginheight="0" marginwidth="0">読み込んでいます…</iframe>
  </div>
</template>

<style lang="scss" scoped>
iframe.form-frame {
  height: 1800px;
}
@media screen and (max-width: 600px) {
  iframe.form-frame {
    height: 2200px;
  }
}
</style>
