<template>
  <div class="service-perfomance-area-wrapper">
    <div class="service-performance-area">
      <div class="service-performance">
        <h3 class="service-performance-title">
          IT戦略/システム化計画サービス
        </h3>
        <div class="service-performance-content">
          <div class="service-performance-example">
            <div>【実績】</div>
            <ul>
              <li>
                機械製造会社のIT戦略策定
                <div>
                  現状の業務をヒアリングして可視化し、<br>
                  あるべき姿（ToBe）のシステム全体図を策定。
                </div>
              </li>
              <li>
                通信教育運営会社の基幹システム及びECシステム導入計画策定
                <div>
                  基幹システム及びECシステムの導入計画策定。
                  実現性を重視するため段階的なリリース計画とし、
                  各リリースのおける対象範囲やコスト試算などを実施。
                </div>
              </li>
            </ul>
            <div>
              ※下記ステップに沿って進めます。
              <ol>
                <li>Step1 現状分析</li>
                <li>Step2 あるべき姿（ToBeモデル）の策定</li>
                <li>
                  Step3 IT戦略/IT投資計画の策定<br>
                  〈以下、システム導入計画の場合〉
                </li>
                <li>Step4 システム導入計画の策定</li>
                <li>Step5 ソリューション選定・評価</li>
              </ol>
            </div>
          </div>
          <div class="service-performance-example">
            <div>
              【成果物例】
            </div>
            <ul>
              <li>IT戦略/IT投資計画書</li>
              <li>現状の業務およびシステムの分析結果</li>
              <li>課題に対する対応策</li>
              <li>システム全体図（中長期、短期）</li>
              <li>新業務フロー</li>
              <li>システム化ロードマップ</li>
              <li>IT投資スケジュール</li>
              <li>打ち合わせ議事録　など</li>
            </ul>
            <div class="service-performance-notice">
              <span>※その他必要に応じて資料を作成いたします。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-performance-area">
      <div class="service-performance">
        <h3 class="service-performance-title">
          RPA導入サービス
        </h3>
        <div class="service-performance-content">
          <div class="service-performance-example">
            <div>【実績】</div>
            <ul>
              <li>
                会計事務所のRPA導入
                <div>
                  手作業の印刷物、転記作業、データ取り込み作業などをPPAにより自動化。
                  RPAソリューションの選定から導入、構築、運用後のサポートまで実施。
                </div>
              </li>
            </ul>
          </div>
          <div class="service-performance-example">
            <div>【成果物例】</div>
            <ul>
              <li>構築したRPA</li>
              <li>RPA導入による効果測定</li>
              <li>改善後の業務フロー</li>
              <li>社内向け手順書またはマニュアル</li>
            </ul>
            <div>
              ※ その他必要に応じて資料を作成します。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-performance-area">
      <div class="service-performance">
        <h3 class="service-performance-title">
          リモートワーク導入サービス
        </h3>
        <div class="service-performance-content">
          <div class="service-performance-example">
            <div>【実績】</div>
            <ul>
              <li>
                リモートワークの導入
                <div>
                  在宅から社内にアクセスできるようVPNを導入、
                  セキュリティ対策として端末認証ツールを導入。
                  リモートワーク時のセキュリティ教育を社員へ実施。
                </div>
              </li>
            </ul>
            <div>
              ※ その他必要に応じて資料を作成します。
            </div>
          </div>
          <div class="service-performance-example">
            <div>【成果物例】</div>
            <ul>
              <li>システム環境図（ネットワーク構築図含む）</li>
              <li>ツール選定時の比較評価資料</li>
              <li>セキュリティ教育資料</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-performance.scss';

.service-performance-area {
  height: auto;

  @media screen and (min-width: 1024px) {
    .service-performance-example {
      width: 36rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
