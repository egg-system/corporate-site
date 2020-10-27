<template>
  <the-service-sp-menu-table v-if="$device.isMobile" />
  <the-service-pc-menu-table v-else />
</template>

<script>
import TheServicePcMenuTable from './TheServicePcMenuTable'
import TheServiceSpMenuTable from './TheServiceSpMenuTable'

export default {
  components: {
    TheServicePcMenuTable,
    TheServiceSpMenuTable
  }
}
</script>
