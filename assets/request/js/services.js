import serviceImage1 from '~/assets/request/img/top-strong1.JPG'
import serviceImage2 from '~/assets/request/img/service-consult01.JPG'
import serviceImage3 from '~/assets/request/img/request-service3.JPG'
// import serviceImage4 from '~/assets/request/img/request-service4.png'
import serviceImage5 from '~/assets/request/img/request-service5.JPG'

const services = [
  {
    title: 'IT戦略/IT投資計画策定サービス',
    description:
      '-新システム導入や既存システムのリプレイスをご検討されている企業様向け<br>-目安期間：約2～3ヶ月程度',
    img: serviceImage1
  },
  {
    title: 'システム化支援/業務改善<br>コンサルティングサービス',
    description:
      '-既存システムのコスト削減や業務運用の効率化を図りたい企業様<br>-目安期間：約3ヶ月～1年程度',
    img: serviceImage2
  },
  {
    title: 'プロジェクトマネジメントサービス',
    description:
      '-新システム導入が決まっている、既にプロジェクトが進行中の企業様向け<br>-目安期間：約6ヶ月～1年',
    img: serviceImage3
  },
  {
    title: 'システム開発',
    description:
      '-システム導入や改修をご検討されている企業様<br>-準委任・請負いずれも対応可能',
    img: serviceImage5
  }
]

export default { services }
