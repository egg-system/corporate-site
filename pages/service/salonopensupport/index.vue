<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat tile color="primary">
          <v-card-title class="white--text display-2 justify-center">サロン開業支援サービス</v-card-title>
        </v-card>

        <v-img :src="require('@/assets/img/salon-support-top-slide.png')" />

        <v-card flat tile>
          <v-card-title class="display-1 justify-center">「施術以外の不安をゼロ」にする７つのサービス</v-card-title>
        
          <v-layout row wrap justify-center>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">目標や理想の設定</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">顧客層に合わせたメニュー作り</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">差別化できるコンセプト作成</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">ホームページ制作</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout row wrap justify-center>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">集客方法の設計</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">予約〜会計まで一貫したオペレーションの実現</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">他社事例のご提供</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">Problem</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">現場で起きている問題</v-card-title>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/img/problem0.8.png')" />
            </v-flex>
            <!-- <v-layout row align-start> -->
            <v-flex xs10 align-start>
              <v-card-text class="title font-weight-bold">「開業後に集客できるだろうか」</v-card-text>
              <v-card-text class="title font-weight-bold">「漠然とした不安がある」</v-card-text>
              <v-card-text class="title font-weight-bold">「できるだけ費用をかけずに集客できるページを作りたいけど、
              どこに依頼したらいいかわからない」</v-card-text>
            </v-flex>
            <!-- </v-layout> -->
          </v-layout>

          <v-layout row wrap>
            <v-card-text class="title font-weight-bold">良いサービスをより多くのお客様に提供したい</v-card-text>
            <v-card-text class="title font-weight-bold">しかしそれが届かない・・・</v-card-text>
          </v-layout>

          <v-layout row wrap>
            <v-card-text class="title font-weight-bold">専門的な施術の技術では不十分</v-card-text>
            <v-card-text class="title font-weight-bold">それに気付かず続けて行くと、、、</v-card-text>
            <v-card-text class="title font-weight-bold">「1年以内の廃業率60％、3年以内の廃業率90％」、</v-card-text>
            <v-card-text class="title font-weight-bold">という厳しい現実</v-card-text>
          </v-layout>

          <v-layout row wrap>
            <v-card-text class="title font-weight-bold">多くのサロンオーナー様が</v-card-text>
            <v-card-text class="title font-weight-bold">開業後に施術以外の悩みや不安を抱えています。</v-card-text>
          </v-layout>

          <v-layout row wrap justify-space-around>
            <v-flex xs2>
              <v-card flat>
                <v-card-text class="title font-weight-bold">経営知識の不足</v-card-text>
                <v-img :src="require('@/assets/img/knowladge-less.png')" />
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-card-text class="title font-weight-bold">無駄な支出と一貫性の欠如</v-card-text>
                <v-img :src="require('@/assets/img/waste.png')" />
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-card-text class="title font-weight-bold">過度な広告</v-card-text>
                <v-img :src="require('@/assets/img/ad-dependancy.png')" />
              </v-card>
            </v-flex>
          </v-layout>
    
          <v-card-title class="grey--text display-3 justify-center font-weight-bold">Solution</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">解決策</v-card-title>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">当社では『施術以外にかかる不安をゼロ』にすることをお約束します。</v-card-title>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/img/solution0.8.png')" />
            </v-flex>
            <!-- <v-layout row align-start> -->
            <v-flex xs10 align-start>
              <v-card-text class="title font-weight-bold">７つの提供サービス</v-card-text>
              <v-card-text class="title font-weight-bold">◎開業後に実現したい目標やお店について丁寧にヒアリング</v-card-text>
              <v-card-text class="title font-weight-bold">◎来店して欲しい顧客に合わせたメニュー作り</v-card-text>
              <v-card-text class="title font-weight-bold">◎他店と差別化できるお店のコンセプトを一緒に作成</v-card-text>
              <v-card-text class="title font-weight-bold">◎お店のコンセプトに合ったホームページの製作</v-card-text>
              <v-card-text class="title font-weight-bold">◎集客方法の設計</v-card-text>
              <v-card-text class="title font-weight-bold">◎予約から会計まで一貫したオペレーションの実現</v-card-text>
              <v-card-text class="title font-weight-bold">◎豊富な他社事例のご提供</v-card-text>
            </v-flex>
            <!-- </v-layout> -->
          </v-layout>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">過度な広告に頼らず集客する仕組みを作ることが可能です</v-card-title>
          <v-layout row wrap justify-center>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">見込み客リストの収集</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">定期的な情報発信</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat>
                <v-img :src="require('@/assets/img/list.png')" />
                <v-card-text class="title font-weight-bold">見込み客に来店してもらうまでの顧客教育</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">Target</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">対象者</v-card-title>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/img/target.png')" />
            </v-flex>
            <!-- <v-layout row align-start> -->
            <v-flex xs10 align-start>
              <v-card-text class="title font-weight-bold">・これから半年以内にサロン/整体/エステを開業する予定の方</v-card-text>
              <v-card-text class="title font-weight-bold">・自分のサロンを生業とする、開業一年未満のサロンオーナー様</v-card-text>
              <v-card-text class="title font-weight-bold">・月間売上100万を目指し、今後スタッフを雇うことを考えているサロンオーナー様</v-card-text>
              <v-card-text class="title font-weight-bold">・主な業種：エステサロン、整体、接骨院、リラクゼーション、美容室、パーソナルトレーニング</v-card-text>
            </v-flex>
            <!-- </v-layout> -->
          </v-layout>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">Voice</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">お客様の声</v-card-title>
          <!-- TODO 顧客の声 -->
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/img/lp-voice1.png')" />
            </v-flex>
            <!-- <v-layout row align-start> -->
            <v-flex xs4 align-start>
              <v-card-text class="subtitle-1 font-weight-bold">野間 あやこ 様</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">あたまのオアシス (https://atama-oasis.com/)</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">あたまのスクール (https://atama-school.com/)</v-card-text>
            </v-flex>
            <v-card class="grey">
              <v-card-text class="subtitle-2 font-weight-bold">HPが必要だとわかってはいましたが、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">作るならちゃんとしたHPを作りたいし、、、、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">でもHPに多額を投資する余裕もないし、、、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">そんなときにエッグシステムさんに出会いました！</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">完成直後は、一見シンプルに見えましたが</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">「HPを見てくれてる人が、HP内で迷子にならないように。」</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">と、プロならではの視点がたくさん組み込まれてました。</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">また、webコンサルの経験を活かし、集客につながるHPを作って頂けた</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">おかげで、 毎月コンスタントに新規のお客様が来店される様になりました！、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">無知な私の質問や要望にも、親身に丁寧に対応して頂き良きパートナーとして支えてもらっています。</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">いつもありがとうございます！</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">今後ともよろしくお願いします！</v-card-text>
            </v-card>
            <!-- </v-layout> -->
          </v-layout>

          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/img/shimizu.jpg')" />
            </v-flex>
            <!-- <v-layout row align-start> -->
            <v-flex xs4 align-start>
              <v-card-text class="subtitle-1 font-weight-bold">株式会社GOKIGEN</v-card-text>
              <v-card-text class="subtitle-1 font-weight-bold">代表取締役社長　清水 康俊 様</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">株式会社GOKIGEN（https://go-kigen.jp）</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">GOKIGENボクシングジム（https://boxing.go-kigen.jp）</v-card-text>
            </v-flex>
            <div class="ytp-cued-thumbnail-overlay-image" style="background-image: url(https://i.ytimg.com/vi_webp/7qMZF1wfBDI/sddefault.webp);"/>
            <v-card class="grey">
              <v-card-text class="subtitle-2 font-weight-bold">元々はホームページがあれば集客できると思っていました。、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">しかし、エッグシステムの高橋翼さんに</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">「ホームページはリアルをサポートするもの」</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">「まずはリアルのサービスを充実していくことが大事で、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">それを補助するものがホームページ」だと教えてもらいました。</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">サービスの整理から、サービスを加速させるためにどうすればよいか、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">ということまで本気で向き合い、一緒に考えてくれました。</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">実際に新しく設立したボクシングジムも高橋翼さんがいなければ生まれていませんでした。</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">今ではホームページの担当というだけでなく、</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">サービスを進めるにあたって、なくてはならない存在になっています。</v-card-text>
              <v-card-text class="subtitle-2 font-weight-bold">これからもお願いしたいと思っています。</v-card-text>
            </v-card>
            <!-- </v-layout> -->
          </v-layout>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">Subsidy</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">IT導入補助金サービス</v-card-title>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/img/subsidy.png')" />
            </v-flex>
            <!-- <v-layout row align-start> -->
            <v-flex xs10 align-start>
              <v-card-text class="title font-weight-bold">IT導入補助金とは、ITツール導入（ホームページ、ソフトウェア、サービス等）の経費を補助することで、業務効率化や売り上げ向上を図ることを目的とする国の制度です。</v-card-text>
              <v-card-text class="title font-weight-bold">＜補助経費について＞</v-card-text>
              <v-card-text class="title font-weight-bold">・補助対象経費：ホームページ制作などのソフトウェアやクラウド利用費、コンサルティング費用など</v-card-text>
              <br>
              <v-card-text class="title font-weight-bold">・※詳しくはこちら（https://www.it-hojo.jp/） をご覧ください。</v-card-text>
            </v-flex>
            <!-- </v-layout> -->
          </v-layout>

          <v-card-title class="grey--text display-3 justify-center font-weight-bold">当社が無料で申請のサポートをいたします</v-card-title>
  
          <v-card-title class="indigo--text headline justify-center font-weight-bold">2018年IT導入補助金の交付率は100%です</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">弊社から申請をした全てのお客様がIT導入補助金をご利用頂いております</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">・より多くのお客様へサービスを届けたい</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">・店舗を拡大したい</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">・IT導入補助金をぜひ活用したい</v-card-title>
          <v-card-title class="indigo--text headline justify-center font-weight-bold">とお考えの方はまず一度ご相談ください。</v-card-title>
        </v-card>

        <v-card-title class="indigo--text headline justify-center font-weight-bold">個別相談（無料）を依頼する</v-card-title>

      </v-flex>
    </v-layout>
  </v-container>
</template>
