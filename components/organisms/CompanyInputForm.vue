<template>
  <div class="center form">
    <company-name-input />
    <user-name-input />
    <mail-address-input />
  </div>
</template>

<script>
import CompanyNameInput from '~/components/molecules/InputItem/CompanyNameInput.vue'
import UserNameInput from '~/components/molecules/InputItem/UserNameInput.vue'
import MailAddressInput from '~/components/molecules/InputItem/MailAddressInput.vue'

export default {
  name: 'CompanyInputForm',
  components: {
    CompanyNameInput,
    UserNameInput,
    MailAddressInput
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
  margin: auto;
}
.form {
  width: 80%;
}
</style>
