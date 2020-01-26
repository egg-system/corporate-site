<template>
  <div class="field contact-form">
    <label class="label">お名前(必須)</label>
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

    <label class="label">会社名(個人の方は入力不要です)</label>
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

    <label class="label">メールアドレス(必須)</label>
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

    <label class="label">お問い合わせの種類(必須)</label>
    <div class="control">
      <label class="radio">
        <input v-model="question"
               type="radio"
               name="question"
               value="hp"
               checked="checked">
        ホームページ・Webシステム開発
      </label><br>
      <label class="radio">
        <input v-model="question" value="consulting" type="radio" name="question">
        システムコンサルティング
      </label><br>
      <label class="radio">
        <input v-model="question" value="salon" type="radio" name="question">
        サロン開業支援サービス
      </label><br>
      <label class="radio">
        <input v-model="question" value="community" type="radio" name="question">
        システムエンジニアコミュニティ
      </label><br>
      <label class="radio">
        <input v-model="question" value="recruit" type="radio" name="question">
        採用について
      </label><br>
      <label class="radio">
        <input v-model="question" value="other" type="radio" name="question">
        その他
      </label>
    </div>

    <label class="label">お問合わせ内容(必須)</label>
    <textarea v-model="message" class="textarea" placeholder="お問い合わせ内容" />

    <label class="label"><nuxt-link to="/privacy">個人情報のお取り扱い</nuxt-link>について同意していただけるお客様は、<br>[同意する]を選択して下さい。</label>
    <label class="checkbox check-center">
      <input v-model="checkbox" type="checkbox">
      同意する
    </label>

    <div class="btn">
      <button class="button is-primary is-large is-fullwidth" @click="next()">送信</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    name: '',
    company: '',
    mail: '',
    phonenumber: '',
    question: 'hp',
    message: '',
    checkbox: ''
  }),
  methods: {
    async next() {
      console.log('next')
      console.log(this.name)
      console.log(this.company)
      console.log(this.mail)
      console.log(this.phonenumber)
      console.log(this.question)
      console.log(this.message)
      console.log(this.checkbox)

      const requestUrl =
        'https://docs.google.com/forms/u/2/d/e/1FAIpQLSchfU461dMhTDxk-EZs0G-ZM4HLsROZ8jY5rSM2dqIS0s6eYw/formResponse'
      const result = await axios
        .post(requestUrl, {
          params: {
            // Googleフォームから項目のinput nameを探す
            'entry.1528476759': this.name
          },
          dataType: 'xml'
        })
        .catch(error => {
          // TODO:エラーハンドリング
          console.log('error')
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
</style>
