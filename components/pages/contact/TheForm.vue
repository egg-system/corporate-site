<template>
  <div class="google-form">
    <iframe class="form-frame" src="https://docs.google.com/forms/d/e/1FAIpQLScl1MPXpHjWFoyknPUdixv6GOccTxrDdjU8JD7W43yMZ8-vmA/viewform?embedded=true" width="100%"
            height="1000"
            frameborder="0"
            marginheight="0" marginwidth="0">読み込んでいます…</iframe>
  </div>
<!--

  <div class="field contact-form">
    <label class="label">お名前<span class="attention">（必須）</span></label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="name"
             class="input"
             type="text"
             placeholder="山田　太郎"
             value="">
      <span class="icon is-small is-left">
        <i class="fas fa-user" />
      </span>
    </div>
    <p v-if="nameError !== ''" class="error">{{ nameError }}</p>

    <label class="label">会社名（個人の方は入力不要です）</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="company"
             class="input"
             type="text"
             placeholder="株式会社〇〇"
             value="">
      <span class="icon is-small is-left">
        <i class="fas fa-building" />
      </span>
    </div>

    <label class="label">メールアドレス<span class="attention">（必須）</span></label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="mail"
             class="input"
             type="text"
             placeholder="mail@example.com"
             value="">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope" />
      </span>
    </div>
    <p class="error">{{ mailError }}</p>

    <label class="label">電話番号</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="phonenumber"
             class="input"
             type="number"
             placeholder="0123456789"
             value="">
      <span class="icon is-small is-left">
        <i class="fas fa-phone" />
      </span>
    </div>

    <label class="label">お問い合わせの種類<span class="attention">（必須）</span></label>
    <div class="control">
      <label class="radio">
        <input v-model="question"
               type="radio"
               name="question"
               value="Webシステム開発"
               checked="checked">
        Webシステム開発
      </label><br>
      <label class="radio">
        <input v-model="question" value="システムコンサルティング" type="radio" name="question">
        システムコンサルティング
      </label><br>
      <label class="radio">
        <input v-model="question" value="サロン開業支援サービス" type="radio" name="question">
        サロン開業支援サービス
      </label><br>
      <label class="radio">
        <input v-model="question" value="採用について" type="radio" name="question">
        採用について
      </label><br>
      <label class="radio">
        <input v-model="question" value="その他" type="radio" name="question">
        その他
      </label>
    </div>

    <label class="label">お問合わせ内容<span class="attention">（必須）</span></label>
    <textarea v-model="message" class="textarea" placeholder="お問い合わせ内容" />
    <p class="error">{{ messageError }}</p>

    <label class="label"><nuxt-link to="/privacy">個人情報のお取り扱い</nuxt-link>について同意していただけるお客様は <span class="attention">[同意する]</span> を選択して下さい。</label>
    <label class="checkbox check-center">
      <input v-model="checkbox" type="checkbox">
      同意する
    </label>
    <p class="error">{{ checkboxError }}</p>

    <div class="btn">
      <button class="button is-primary is-large is-fullwidth" @click="next()">送信</button>
      <p class="error">{{ buttonError }}</p>
    </div>

  </div>
-->
</template>
<!--
<script>
export default {
  head: {
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.min.js'
      }
    ]
  },
  data: () => ({
    name: '',
    company: '',
    mail: '',
    phonenumber: '',
    question: 'Webシステム開発',
    message: '',
    checkbox: '',
    nameError: '',
    mailError: '',
    messageError: '',
    checkboxError: '',
    buttonError: ''
  }),
  methods: {
    validation() {
      let isOk = false
      this.nameError = this.name === '' ? '※必須入力です' : ''
      this.mailError = this.mail === '' ? '※必須入力です' : ''
      this.messageError = this.message === '' ? '※必須入力です' : ''
      this.checkboxError =
        this.checkbox === '' || this.checkbox === false
          ? '※ご確認の上、チェックをお願いします'
          : ''

      isOk =
        this.nameError === '' &&
        this.mailError === '' &&
        this.messageError === '' &&
        this.checkboxError === ''
          ? true
          : false

      this.buttonError = !isOk ? '※入力内容に誤りがあります。' : ''

      return isOk
    },
    async next() {
      // 入力チェック
      if (!this.validation()) {
        return false
      }

      const requestUrl =
        'https://docs.google.com/forms/u/1/d/e/1FAIpQLScl1MPXpHjWFoyknPUdixv6GOccTxrDdjU8JD7W43yMZ8-vmA/formResponse'
      // axiosだとうまく行かなかったのでajaxを使っている
      // ajaxだとCORSエラーは出るがアケート自体は送られる
      // エラーハンドリングができないのが課題
      $.ajax({
        url: requestUrl,
        // Googleフォームから項目のinput nameを探す
        data: {
          'entry.337469442': this.name,
          'entry.191390181': this.company,
          // 'entry.1442783425': this.mail,
          'emailAddress' : this.mail,// eslint-disable-line
          'entry.961972315': this.phonenumber,
          'entry.1554647853': this.question,
          'entry.1568037778': this.message
        },
        type: 'POST',
        dataType: 'xml',
        statusCode: {
          0: function() {
            //Success message
            console.log('status 0')
          },
          200: function() {
            //Success Message
            console.log('status 200')
          }
        }
      })
      this.$router.push('/contact/complete')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  width: 60%;
  margin: 0 auto;
}
.button.is-primary {
  background-color: #363636;
}
.attention {
  color: #f0640a;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .contact-form {
    width: 95%;
    margin: 0 auto;
  }
}
.label {
  margin-top: 20px;
}
.check-center {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}
.btn {
  margin-top: 20px;
  margin-bottom: 30px;
}
.error {
  color: red;
}
</style>
-->
<style lang="scss" scoped>
iframe.form-frame {
  height: 1000px;
}
</style>
