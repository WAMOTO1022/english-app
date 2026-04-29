/**
 * 旅行・日常英会話 ステージ別データ
 *
 * 構造:
 *   STAGES[*].situations[*].dialogue[*] = ターン
 *   - speaker: 'npc' (相手) または 'you' (自分)
 *   - en: 英語
 *   - ja: 日本語訳 (ボタンで表示する用)
 *   - choices: 自分のターンのみ。3択。choices[0] が正解。
 *
 * 設計:
 *   5ステージ × 5シュチュエーション = 25会話
 *   レベルが上がるほどターン数が大幅に増える
 *   - Stage 1 (Lv  1-20): 入門      6-8   往復
 *   - Stage 2 (Lv 21-40): 初級      10-12 往復
 *   - Stage 3 (Lv 41-60): 中級      14-16 往復
 *   - Stage 4 (Lv 61-80): 上級      22-26 往復
 *   - Stage 5 (Lv 81-100): マスター 30-34 往復
 *
 * 文体方針:
 *   - "please" の使いすぎを避け、ネイティブが自然に使う表現に
 *   - お願いは "Could I..." / "Can I get..." / "I'll have..." を多用
 *   - "thanks" を文末に置く軽い丁寧さも採用
 */
const STAGES = [
  // ============================================================
  // STAGE 1: 入門 (Lv 1-20) — 6〜8往復
  // ============================================================
  {
    id: 'st1', level: 1, levelRange: [1, 20],
    title: 'Beginner', ja: '入門', emoji: '🌱', color: '#66bb6a',
    description: '基本のひとこと。自然な英語に触れる',
    turnHint: '6〜8往復',
    situations: [
      {
        id: 'st1s1', title: 'コーヒーを注文', icon: '☕',
        situation: 'カフェで注文してサイズまで決める',
        dialogue: [
          { speaker: 'npc', en: 'Hi! What can I get for you?', ja: 'いらっしゃい!何にしますか?' },
          { speaker: 'you', en: 'I\'ll have a coffee.', ja: 'コーヒーをお願いします。',
            choices: ['I\'ll have a coffee.', 'Coffee yes me.', 'I drink coffee always.'] },
          { speaker: 'npc', en: 'Sure. Hot or iced?', ja: 'はい。ホットですかアイスですか?' },
          { speaker: 'you', en: 'Hot, thanks.', ja: 'ホットでお願いします。',
            choices: ['Hot, thanks.', 'I am hot now.', 'Yes hot.'] },
          { speaker: 'npc', en: 'What size would you like?', ja: 'サイズはどうしますか?' },
          { speaker: 'you', en: 'Small, please.', ja: 'スモールでお願いします。',
            choices: ['Small, please.', 'I am small.', 'Big big yes.'] },
          { speaker: 'npc', en: 'Coming right up.', ja: 'すぐにお持ちします。' },
          { speaker: 'you', en: 'Thanks!', ja: 'ありがとう!',
            choices: ['Thanks!', 'You me thank.', 'Right up me.'] }
        ]
      },
      {
        id: 'st1s2', title: 'お会計', icon: '💳',
        situation: 'カードで支払いをして退店',
        dialogue: [
          { speaker: 'npc', en: 'Your total comes to ten dollars.', ja: '合計10ドルになります。' },
          { speaker: 'you', en: 'Can I pay by card?', ja: 'カードで払えますか?',
            choices: ['Can I pay by card?', 'Card card me.', 'I have money no.'] },
          { speaker: 'npc', en: 'Of course. Just tap here.', ja: 'もちろん。ここにタッチしてください。' },
          { speaker: 'you', en: 'Like this?', ja: 'こんな感じ?',
            choices: ['Like this?', 'I no know.', 'Tap tap me.'] },
          { speaker: 'npc', en: 'Perfect. Do you need a receipt?', ja: '完璧。レシートは要りますか?' },
          { speaker: 'you', en: 'No, I\'m good. Thanks.', ja: 'いえ大丈夫です、ありがとう。',
            choices: ['No, I\'m good. Thanks.', 'Yes me good no.', 'Receipt no me.'] },
          { speaker: 'npc', en: 'Have a great day!', ja: '良い一日を!' },
          { speaker: 'you', en: 'You too!', ja: 'あなたも!',
            choices: ['You too!', 'Yes day me good.', 'Day day yes.'] }
        ]
      },
      {
        id: 'st1s3', title: 'トイレを聞く', icon: '🚻',
        situation: 'トイレの場所を聞いて見つける',
        dialogue: [
          { speaker: 'you', en: 'Excuse me, where\'s the bathroom?', ja: 'すみません、トイレはどこですか?',
            choices: ['Excuse me, where\'s the bathroom?', 'Toilet toilet me.', 'I want pee.'] },
          { speaker: 'npc', en: 'It\'s down the hall, on your left.', ja: '廊下の先、左側です。' },
          { speaker: 'you', en: 'Down the hall, left. Got it.', ja: '廊下の先、左ですね。',
            choices: ['Down the hall, left. Got it.', 'Hall left no me.', 'Down down where?'] },
          { speaker: 'npc', en: 'You\'ll see a sign on the door.', ja: 'ドアに看板がありますよ。' },
          { speaker: 'you', en: 'Got it. Thanks a lot!', ja: 'わかりました。ありがとう!',
            choices: ['Got it. Thanks a lot!', 'Sign sign me?', 'I no understand.'] },
          { speaker: 'npc', en: 'No problem.', ja: 'いえいえ。' }
        ]
      },
      {
        id: 'st1s4', title: '何名様ですか?', icon: '🍴',
        situation: 'レストランで席に案内されるまで',
        dialogue: [
          { speaker: 'npc', en: 'Welcome in! How many?', ja: 'いらっしゃい!何名様?' },
          { speaker: 'you', en: 'Just two of us.', ja: '2人です。',
            choices: ['Just two of us.', 'I am two.', 'Two o\'clock.'] },
          { speaker: 'npc', en: 'Do you have a reservation?', ja: 'ご予約は?' },
          { speaker: 'you', en: 'No, we don\'t.', ja: 'いえ、ありません。',
            choices: ['No, we don\'t.', 'Yes me am.', 'Reserve no me.'] },
          { speaker: 'npc', en: 'No problem. Right this way.', ja: '大丈夫です。こちらへどうぞ。' },
          { speaker: 'you', en: 'Thanks.', ja: 'ありがとう。',
            choices: ['Thanks.', 'No way.', 'Right yes.'] },
          { speaker: 'npc', en: 'Here\'s your menu. Enjoy!', ja: 'メニューです。ごゆっくり!' },
          { speaker: 'you', en: 'Thank you!', ja: 'ありがとう!',
            choices: ['Thank you!', 'Enjoy enjoy.', 'Sorry me.'] }
        ]
      },
      {
        id: 'st1s5', title: '機内でチキンを選ぶ', icon: '✈️',
        situation: 'CAの食事の問いかけに答える',
        dialogue: [
          { speaker: 'npc', en: 'Would you like chicken or beef?', ja: 'チキンと牛肉どちらに?' },
          { speaker: 'you', en: 'Chicken, thanks.', ja: 'チキンでお願いします。',
            choices: ['Chicken, thanks.', 'I love chicken.', 'Yes please two.'] },
          { speaker: 'npc', en: 'And to drink?', ja: 'お飲み物は?' },
          { speaker: 'you', en: 'Just water for me.', ja: 'お水で大丈夫です。',
            choices: ['Just water for me.', 'I drink water always.', 'Water no thank.'] },
          { speaker: 'npc', en: 'Ice in your water?', ja: '氷は入れますか?' },
          { speaker: 'you', en: 'No ice, thanks.', ja: '氷なしで。',
            choices: ['No ice, thanks.', 'Yes ice cold.', 'Cold no me.'] },
          { speaker: 'npc', en: 'Here you are. Enjoy your meal.', ja: 'どうぞ。お食事を楽しんで。' },
          { speaker: 'you', en: 'Thank you so much.', ja: '本当にありがとう。',
            choices: ['Thank you so much.', 'You me so.', 'Eat eat me.'] }
        ]
      }
    ]
  },

  // ============================================================
  // STAGE 2: 初級 (Lv 21-40) — 10〜12往復
  // ============================================================
  {
    id: 'st2', level: 21, levelRange: [21, 40],
    title: 'Elementary', ja: '初級', emoji: '🌿', color: '#26a69a',
    description: '一往復で終わらない継続したやり取り',
    turnHint: '10〜12往復',
    situations: [
      {
        id: 'st2s1', title: '道を聞く', icon: '🗺️',
        situation: '駅までの行き方を詳しく聞く',
        dialogue: [
          { speaker: 'you', en: 'Excuse me, do you know how to get to the station?', ja: 'すみません、駅への行き方ご存知ですか?',
            choices: ['Excuse me, do you know how to get to the station?', 'Station where me?', 'I want station now.'] },
          { speaker: 'npc', en: 'Sure. Go straight down this street.', ja: 'はい。この道をまっすぐ。' },
          { speaker: 'you', en: 'Straight, okay.', ja: 'まっすぐ、はい。',
            choices: ['Straight, okay.', 'Straight no me.', 'I no understand.'] },
          { speaker: 'npc', en: 'At the second light, turn left.', ja: '2つ目の信号で左に曲がります。' },
          { speaker: 'you', en: 'Second light, turn left. Got it.', ja: '2つ目で左、わかりました。',
            choices: ['Second light, turn left. Got it.', 'Light light yes.', 'Two two left.'] },
          { speaker: 'npc', en: 'Then walk for about three minutes.', ja: 'そして3分ほど歩いてください。' },
          { speaker: 'you', en: 'How will I know I\'m there?', ja: '着いたらどうわかりますか?',
            choices: ['How will I know I\'m there?', 'I know there how?', 'There there me?'] },
          { speaker: 'npc', en: 'You\'ll see a big blue sign.', ja: '大きな青い看板が見えますよ。' },
          { speaker: 'you', en: 'Got it. Thanks so much.', ja: 'わかりました、本当にありがとう。',
            choices: ['Got it. Thanks so much.', 'Blue blue good.', 'Sign sign yes.'] },
          { speaker: 'npc', en: 'No problem. Have a good one.', ja: 'いえいえ。よい一日を。' },
          { speaker: 'you', en: 'You too!', ja: 'あなたも!',
            choices: ['You too!', 'Day day yes.', 'Bye bye!'] }
        ]
      },
      {
        id: 'st2s2', title: 'タクシーで行き先', icon: '🚕',
        situation: '空港まで乗車して所要時間を確認',
        dialogue: [
          { speaker: 'npc', en: 'Hi, where to?', ja: 'こんにちは、どちらまで?' },
          { speaker: 'you', en: 'To the airport, please.', ja: '空港までお願いします。',
            choices: ['To the airport, please.', 'Airport airport.', 'I go fly now.'] },
          { speaker: 'npc', en: 'Sure. Which terminal?', ja: 'はい。どのターミナル?' },
          { speaker: 'you', en: 'Terminal one.', ja: 'ターミナル1です。',
            choices: ['Terminal one.', 'One one one.', 'I no know.'] },
          { speaker: 'npc', en: 'Got it. About thirty minutes with traffic.', ja: 'わかりました。渋滞込みで30分ほど。' },
          { speaker: 'you', en: 'Is the traffic usually this bad?', ja: '渋滞はいつもこんな感じ?',
            choices: ['Is the traffic usually this bad?', 'Traffic traffic me?', 'Bad bad always?'] },
          { speaker: 'npc', en: 'Yeah, this time of day it\'s pretty heavy.', ja: 'ええ、この時間は混みますね。' },
          { speaker: 'you', en: 'I see. I should leave earlier next time.', ja: 'なるほど。次は早めに出ますね。',
            choices: ['I see. I should leave earlier next time.', 'I leave early me.', 'Yes early next.'] },
          { speaker: 'npc', en: 'Good idea. Just sit back and relax.', ja: 'いいですね。リラックスしてください。' },
          { speaker: 'you', en: 'Thanks!', ja: 'ありがとう!',
            choices: ['Thanks!', 'You me good.', 'Relax relax me.'] },
          { speaker: 'npc', en: 'My pleasure.', ja: 'いえいえ。' }
        ]
      },
      {
        id: 'st2s3', title: '自己紹介', icon: '🤝',
        situation: '初対面で趣味やおすすめまで話す',
        dialogue: [
          { speaker: 'npc', en: 'Hi, I don\'t think we\'ve met. I\'m John.', ja: 'こんにちは、初対面ですね。ジョンです。' },
          { speaker: 'you', en: 'Nice to meet you. I\'m Tanaka.', ja: 'こちらこそ、タナカです。',
            choices: ['Nice to meet you. I\'m Tanaka.', 'I am Tanaka me.', 'You me Tanaka.'] },
          { speaker: 'npc', en: 'Tanaka. Where are you from?', ja: 'タナカさん。どちらの出身?' },
          { speaker: 'you', en: 'I\'m from Japan.', ja: '日本です。',
            choices: ['I\'m from Japan.', 'Japan I am yes.', 'I live Japan.'] },
          { speaker: 'npc', en: 'Cool! What brings you here?', ja: 'いいですね!こちらには何で?' },
          { speaker: 'you', en: 'I\'m here on vacation.', ja: '休暇で来てます。',
            choices: ['I\'m here on vacation.', 'Vacation vacation.', 'I sleep tour.'] },
          { speaker: 'npc', en: 'How are you liking it so far?', ja: 'これまでの感想は?' },
          { speaker: 'you', en: 'I love it. The food is amazing.', ja: '最高です。食事が素晴らしい。',
            choices: ['I love it. The food is amazing.', 'Food food yes.', 'I like eat much.'] },
          { speaker: 'npc', en: 'Right? Wait until you try the local desserts.', ja: 'でしょ?地元のデザートも試して。' },
          { speaker: 'you', en: 'Any recommendations?', ja: 'おすすめは?',
            choices: ['Any recommendations?', 'Tell me good?', 'You like dessert?'] },
          { speaker: 'npc', en: 'Definitely the chocolate cake at Maria\'s.', ja: 'マリアのチョコケーキは絶対。' },
          { speaker: 'you', en: 'I\'ll check it out. Thanks!', ja: '行ってみます、ありがとう!',
            choices: ['I\'ll check it out. Thanks!', 'Cake cake me yes.', 'Maria Maria!'] }
        ]
      },
      {
        id: 'st2s4', title: 'ホテルチェックイン', icon: '🏨',
        situation: '予約確認から朝食情報まで',
        dialogue: [
          { speaker: 'npc', en: 'Welcome to the Grand Hotel. Checking in?', ja: 'ようこそ。チェックインですか?' },
          { speaker: 'you', en: 'Yes, I have a reservation under Tanaka.', ja: 'はい、タナカで予約しています。',
            choices: ['Yes, I have a reservation under Tanaka.', 'Yes me check Tanaka.', 'Tanaka me reserve.'] },
          { speaker: 'npc', en: 'Let me find that for you.', ja: '確認します。' },
          { speaker: 'you', en: 'Take your time.', ja: 'ゆっくりで大丈夫です。',
            choices: ['Take your time.', 'Quick quick please.', 'Time time me wait.'] },
          { speaker: 'npc', en: 'Found it. May I see your ID?', ja: 'ありました。身分証を見せてもらえますか?' },
          { speaker: 'you', en: 'Sure, here you go.', ja: 'はい、どうぞ。',
            choices: ['Sure, here you go.', 'ID ID me have.', 'I have card.'] },
          { speaker: 'npc', en: 'Thanks. You\'re in room 305 on the third floor.', ja: 'ありがとう。3階の305号室です。' },
          { speaker: 'you', en: 'What time does breakfast start?', ja: '朝食は何時から?',
            choices: ['What time does breakfast start?', 'Eat morning when?', 'Breakfast me when?'] },
          { speaker: 'npc', en: 'Seven to ten in the morning.', ja: '朝7時から10時までです。' },
          { speaker: 'you', en: 'Where\'s the breakfast room?', ja: '朝食会場はどこ?',
            choices: ['Where\'s the breakfast room?', 'Eat room where?', 'I find food where?'] },
          { speaker: 'npc', en: 'Second floor, next to the elevator.', ja: '2階のエレベーター横です。' },
          { speaker: 'you', en: 'Got it. Thank you!', ja: 'わかりました、ありがとう!',
            choices: ['Got it. Thank you!', 'Two two yes.', 'Elevator yes me.'] }
        ]
      },
      {
        id: 'st2s5', title: '機内で物を頼む', icon: '🥤',
        situation: 'お水と毛布を頼む',
        dialogue: [
          { speaker: 'you', en: 'Excuse me, could I get some water?', ja: 'すみません、お水もらえますか?',
            choices: ['Excuse me, could I get some water?', 'Water me thirsty.', 'I drink now me.'] },
          { speaker: 'npc', en: 'Of course. Still or sparkling?', ja: 'もちろん。普通?炭酸?' },
          { speaker: 'you', en: 'Still, thanks.', ja: '普通でお願いします。',
            choices: ['Still, thanks.', 'I am still.', 'Yes water.'] },
          { speaker: 'npc', en: 'With ice?', ja: '氷は?' },
          { speaker: 'you', en: 'No ice.', ja: '氷なしで。',
            choices: ['No ice.', 'Yes cold.', 'Ice ice no.'] },
          { speaker: 'npc', en: 'Here you are.', ja: 'どうぞ。' },
          { speaker: 'you', en: 'Thanks. One more thing.', ja: 'ありがとう。もう一つ。',
            choices: ['Thanks. One more thing.', 'More more please.', 'I want one me.'] },
          { speaker: 'npc', en: 'Yes?', ja: 'はい?' },
          { speaker: 'you', en: 'Could I get a blanket too?', ja: '毛布ももらえますか?',
            choices: ['Could I get a blanket too?', 'Blanket me cold.', 'Cover cover please.'] },
          { speaker: 'npc', en: 'Sure, I\'ll bring one right away.', ja: 'はい、すぐお持ちします。' },
          { speaker: 'you', en: 'Thanks so much.', ja: '本当にありがとう。',
            choices: ['Thanks so much.', 'You me good.', 'Right right yes.'] }
        ]
      }
    ]
  },

  // ============================================================
  // STAGE 3: 中級 (Lv 41-60) — 14〜16往復
  // ============================================================
  {
    id: 'st3', level: 41, levelRange: [41, 60],
    title: 'Intermediate', ja: '中級', emoji: '🌳', color: '#42a5f5',
    description: '標準的な旅行シーンを完結まで',
    turnHint: '14〜16往復',
    situations: [
      {
        id: 'st3s1', title: 'レストラン入店〜席案内', icon: '🍽️',
        situation: 'カフェに入って席に案内されメニューまで',
        dialogue: [
          { speaker: 'npc', en: 'Hey there, welcome in! How\'s it going?', ja: 'いらっしゃい!調子どう?' },
          { speaker: 'you', en: 'Pretty good, thanks.', ja: '元気です、ありがとう。',
            choices: ['Pretty good, thanks.', 'Yes I am good.', 'Going good me.'] },
          { speaker: 'npc', en: 'How many in your party?', ja: '何名様?' },
          { speaker: 'you', en: 'Just two of us.', ja: '2人です。',
            choices: ['Just two of us.', 'I am two.', 'Two o\'clock yes.'] },
          { speaker: 'npc', en: 'Do you have a reservation?', ja: 'ご予約は?' },
          { speaker: 'you', en: 'No, we don\'t.', ja: 'いえ、ありません。',
            choices: ['No, we don\'t.', 'Yes I have no.', 'Reservation me?'] },
          { speaker: 'npc', en: 'That\'s fine, we have tables open. Booth or table?', ja: '大丈夫です。ボックスとテーブルどちら?' },
          { speaker: 'you', en: 'A table works.', ja: 'テーブルで。',
            choices: ['A table works.', 'Table table.', 'I want booth no.'] },
          { speaker: 'npc', en: 'Inside or out on the patio?', ja: '店内?テラス?' },
          { speaker: 'you', en: 'Inside, it\'s a bit chilly outside.', ja: '店内で。外は少し寒い。',
            choices: ['Inside, it\'s a bit chilly outside.', 'Cold cold outside.', 'I no like patio.'] },
          { speaker: 'npc', en: 'I hear you. Right this way.', ja: 'わかります。こちらへ。' },
          { speaker: 'you', en: 'Thanks.', ja: 'ありがとう。',
            choices: ['Thanks.', 'Hear hear me.', 'No this way.'] },
          { speaker: 'npc', en: 'Here are your menus. Specials are on the back.', ja: 'メニューです。本日のおすすめは裏面に。' },
          { speaker: 'you', en: 'Could we have some water to start?', ja: 'まずお水もらえますか?',
            choices: ['Could we have some water to start?', 'Water me first.', 'Start water yes.'] },
          { speaker: 'npc', en: 'Sure thing. I\'ll be right back.', ja: 'はい。すぐ戻ります。' },
          { speaker: 'you', en: 'Thank you.', ja: 'ありがとう。',
            choices: ['Thank you.', 'Right back me.', 'You me sure.'] }
        ]
      },
      {
        id: 'st3s2', title: '料理を注文', icon: '🍔',
        situation: 'メニューから飲み物・料理・サイドまで',
        dialogue: [
          { speaker: 'npc', en: 'Are you guys ready to order?', ja: 'ご注文お決まりですか?' },
          { speaker: 'you', en: 'Yes, I think so.', ja: 'はい、たぶん。',
            choices: ['Yes, I think so.', 'Yes me ready.', 'Order order me.'] },
          { speaker: 'npc', en: 'What can I get you?', ja: '何にしましょう?' },
          { speaker: 'you', en: 'I\'ll have the cheeseburger.', ja: 'チーズバーガーで。',
            choices: ['I\'ll have the cheeseburger.', 'Burger burger me.', 'I love cheese.'] },
          { speaker: 'npc', en: 'How would you like it cooked?', ja: '焼き加減は?' },
          { speaker: 'you', en: 'Medium, please.', ja: 'ミディアムで。',
            choices: ['Medium, please.', 'I cook well.', 'Yes please good.'] },
          { speaker: 'npc', en: 'And what side?', ja: 'サイドは?' },
          { speaker: 'you', en: 'Fries, thanks.', ja: 'ポテトで。',
            choices: ['Fries, thanks.', 'Side side yes.', 'I love potato much.'] },
          { speaker: 'npc', en: 'Anything to drink?', ja: '飲み物は?' },
          { speaker: 'you', en: 'Just water for now.', ja: '今のところお水だけで。',
            choices: ['Just water for now.', 'Water water.', 'I drink later me.'] },
          { speaker: 'npc', en: 'Sparkling or still?', ja: '炭酸入り?普通?' },
          { speaker: 'you', en: 'Still is fine.', ja: '普通で大丈夫。',
            choices: ['Still is fine.', 'Still still.', 'I am still.'] },
          { speaker: 'npc', en: 'Got it. Anything else?', ja: 'はい。他には?' },
          { speaker: 'you', en: 'Not for now.', ja: 'これで大丈夫です。',
            choices: ['Not for now.', 'No no me.', 'Else else no.'] },
          { speaker: 'npc', en: 'I\'ll get that started right away.', ja: 'すぐお作りします。' },
          { speaker: 'you', en: 'Thanks!', ja: 'ありがとう!',
            choices: ['Thanks!', 'Started right me.', 'Yes way.'] }
        ]
      },
      {
        id: 'st3s3', title: '道に迷ったとき', icon: '🆘',
        situation: '迷って通行人に詳しく聞く',
        dialogue: [
          { speaker: 'you', en: 'Excuse me, I think I\'m lost.', ja: 'すみません、道に迷ったみたいで。',
            choices: ['Excuse me, I think I\'m lost.', 'I lose place.', 'Where me here?'] },
          { speaker: 'npc', en: 'Oh, where are you trying to go?', ja: 'どちらに行きたいんですか?' },
          { speaker: 'you', en: 'I\'m looking for Central Park.', ja: 'セントラルパークを探しています。',
            choices: ['I\'m looking for Central Park.', 'Park park me.', 'I see park.'] },
          { speaker: 'npc', en: 'You\'re not too far. About ten minutes from here.', ja: 'そんなに遠くないよ。ここから10分くらい。' },
          { speaker: 'you', en: 'Which direction?', ja: 'どっち方向ですか?',
            choices: ['Which direction?', 'Way way me?', 'I go where?'] },
          { speaker: 'npc', en: 'Head north on this street.', ja: 'この道を北に。' },
          { speaker: 'you', en: 'Which way is north?', ja: '北はどっちですか?',
            choices: ['Which way is north?', 'North north me?', 'I no compass.'] },
          { speaker: 'npc', en: 'That way, with the tall buildings.', ja: 'あちら、高いビルがある方。' },
          { speaker: 'you', en: 'Got it. Then what?', ja: 'なるほど。それから?',
            choices: ['Got it. Then what?', 'Then me?', 'Tall tall yes.'] },
          { speaker: 'npc', en: 'Walk straight for five blocks.', ja: 'まっすぐ5ブロック。' },
          { speaker: 'you', en: 'Five blocks, north.', ja: '5ブロック、北、はい。',
            choices: ['Five blocks, north.', 'Block block five.', 'I count five me.'] },
          { speaker: 'npc', en: 'Then turn right at the museum.', ja: '美術館で右に。' },
          { speaker: 'you', en: 'I won\'t miss the museum, I hope.', ja: '美術館はわかると思う。',
            choices: ['I won\'t miss the museum, I hope.', 'Museum museum where?', 'I no see art.'] },
          { speaker: 'npc', en: 'It\'s a big white building. You can\'t miss it.', ja: '大きな白い建物だからすぐ見つかる。' },
          { speaker: 'you', en: 'Thanks so much for your help!', ja: '本当にありがとう!',
            choices: ['Thanks so much for your help!', 'White white good.', 'Big big yes me.'] }
        ]
      },
      {
        id: 'st3s4', title: 'ホテル部屋トラブル', icon: '🛏️',
        situation: 'Wi-Fi・タオル・追加リクエストまで',
        dialogue: [
          { speaker: 'you', en: 'Hi, sorry to bother you.', ja: 'すみません、ちょっと。',
            choices: ['Hi, sorry to bother you.', 'Sorry sorry me.', 'You me bad.'] },
          { speaker: 'npc', en: 'No bother at all. What\'s up?', ja: '大丈夫ですよ。どうしました?' },
          { speaker: 'you', en: 'My room\'s Wi-Fi isn\'t working.', ja: '部屋のWi-Fiが使えなくて。',
            choices: ['My room\'s Wi-Fi isn\'t working.', 'Wi-Fi me bad.', 'No internet me.'] },
          { speaker: 'npc', en: 'I\'m sorry about that. What room are you in?', ja: '申し訳ありません。何号室ですか?' },
          { speaker: 'you', en: 'Room 502.', ja: '502号室です。',
            choices: ['Room 502.', 'Five oh two.', 'Five hundred two.'] },
          { speaker: 'npc', en: 'Have you tried restarting your device?', ja: '端末を再起動してみました?' },
          { speaker: 'you', en: 'Yes, but it still won\'t connect.', ja: 'はい、でも繋がらないです。',
            choices: ['Yes, but it still won\'t connect.', 'Yes restart no.', 'Connect connect bad.'] },
          { speaker: 'npc', en: 'Let me send a technician up.', ja: '技術者を送りますね。' },
          { speaker: 'you', en: 'How long will it take?', ja: 'どれくらいかかります?',
            choices: ['How long will it take?', 'Long long me?', 'Time time how?'] },
          { speaker: 'npc', en: 'About fifteen minutes.', ja: '15分ほど。' },
          { speaker: 'you', en: 'Okay. Could I also get more towels?', ja: 'はい。あとタオルも追加で。',
            choices: ['Okay. Could I also get more towels?', 'Towel give now.', 'Wash wash me.'] },
          { speaker: 'npc', en: 'Sure, how many?', ja: 'はい、何枚?' },
          { speaker: 'you', en: 'Just two extras would be great.', ja: '2枚追加してもらえると。',
            choices: ['Just two extras would be great.', 'Two o\'clock please.', 'Many many thank.'] },
          { speaker: 'npc', en: 'I\'ll send those up too.', ja: '一緒に送ります。' },
          { speaker: 'you', en: 'Thanks for your help.', ja: '助かります、ありがとう。',
            choices: ['Thanks for your help.', 'Help help good.', 'You me thank yes.'] },
          { speaker: 'npc', en: 'My pleasure. Sorry for the trouble.', ja: 'いえいえ。ご迷惑をおかけしました。' }
        ]
      },
      {
        id: 'st3s5', title: '友達と昨日のテレビの話', icon: '📺',
        situation: '映画・俳優・他の番組まで話題が広がる',
        dialogue: [
          { speaker: 'npc', en: 'Hey, did you watch anything good last night?', ja: 'ねえ、昨夜何かいいの見た?' },
          { speaker: 'you', en: 'Yeah, I watched a movie on Netflix.', ja: 'うん、Netflixで映画見た。',
            choices: ['Yeah, I watched a movie on Netflix.', 'I no see TV.', 'Netflix Netflix.'] },
          { speaker: 'npc', en: 'Oh, what was it?', ja: 'へえ、何?' },
          { speaker: 'you', en: 'It was an action movie called Speed Run.', ja: '「スピードラン」っていうアクション。',
            choices: ['It was an action movie called Speed Run.', 'Action action.', 'Movie name no.'] },
          { speaker: 'npc', en: 'Never heard of it. Was it any good?', ja: '聞いたことない。面白かった?' },
          { speaker: 'you', en: 'It was pretty fun. The action was great.', ja: '結構楽しかった。アクションが良くて。',
            choices: ['It was pretty fun. The action was great.', 'Fun fun me.', 'Yes good action good.'] },
          { speaker: 'npc', en: 'Who was in it?', ja: '誰が出てた?' },
          { speaker: 'you', en: 'I forget the lead actor\'s name.', ja: '主役の名前忘れちゃった。',
            choices: ['I forget the lead actor\'s name.', 'Name name no me.', 'I no remember.'] },
          { speaker: 'npc', en: 'Maybe I\'ll check it out tonight.', ja: '今夜見てみようかな。' },
          { speaker: 'you', en: 'You should. Let me know what you think.', ja: 'ぜひ。感想教えて。',
            choices: ['You should. Let me know what you think.', 'Yes you me know.', 'Think movie tonight.'] },
          { speaker: 'npc', en: 'Will do. Anything else worth watching?', ja: '了解。他にもおすすめは?' },
          { speaker: 'you', en: 'There\'s a new comedy show too.', ja: '新しいコメディ番組もあるよ。',
            choices: ['There\'s a new comedy show too.', 'Comedy comedy.', 'I laugh much show.'] },
          { speaker: 'npc', en: 'What\'s it called?', ja: '何ていうの?' },
          { speaker: 'you', en: 'I think it\'s called Office Hours.', ja: '「オフィスアワーズ」だったかな。',
            choices: ['I think it\'s called Office Hours.', 'Name yes office.', 'Office work me.'] },
          { speaker: 'npc', en: 'Cool, I\'ll add it to my list.', ja: 'いいね、リストに入れる。' }
        ]
      }
    ]
  },

  // ============================================================
  // STAGE 4: 上級 (Lv 61-80) — 22〜26往復
  // ============================================================
  {
    id: 'st4', level: 61, levelRange: [61, 80],
    title: 'Advanced', ja: '上級', emoji: '🏔️', color: '#7b4fd6',
    description: '複数の場面が連結した長い会話',
    turnHint: '22〜26往復',
    situations: [
      {
        id: 'st4s1', title: 'レストラン通し会話', icon: '🍷',
        situation: '入店〜注文〜食事中〜会計〜退店まで全部',
        dialogue: [
          { speaker: 'npc', en: 'Welcome! Table for how many?', ja: 'いらっしゃい!何名?' },
          { speaker: 'you', en: 'Two of us.', ja: '2人です。',
            choices: ['Two of us.', 'I am two.', 'Two clock.'] },
          { speaker: 'npc', en: 'Right this way. Here are your menus.', ja: 'こちらへ。メニューです。' },
          { speaker: 'you', en: 'Thank you. Could we get a few minutes?', ja: 'ありがとう。少し時間もらえる?',
            choices: ['Thank you. Could we get a few minutes?', 'Minute minute me.', 'Wait me think.'] },
          { speaker: 'npc', en: 'Of course. I\'ll be right back.', ja: 'もちろん。また戻ります。' },
          { speaker: 'npc', en: 'Are you guys ready to order now?', ja: 'ご注文お決まり?' },
          { speaker: 'you', en: 'Yes. I\'ll have the steak.', ja: 'はい。ステーキで。',
            choices: ['Yes. I\'ll have the steak.', 'Steak yes me.', 'I love beef food.'] },
          { speaker: 'npc', en: 'How would you like it cooked?', ja: '焼き加減は?' },
          { speaker: 'you', en: 'Medium rare.', ja: 'ミディアムレアで。',
            choices: ['Medium rare.', 'Rare medium yes.', 'I cook half.'] },
          { speaker: 'npc', en: 'Great choice. And to drink?', ja: 'いいですね。飲み物は?' },
          { speaker: 'you', en: 'A glass of red wine.', ja: '赤ワインを1杯。',
            choices: ['A glass of red wine.', 'Wine wine red.', 'I drink grape.'] },
          { speaker: 'npc', en: 'Coming right up.', ja: 'すぐお持ちします。' },
          { speaker: 'npc', en: 'How is everything tasting?', ja: 'お味はいかがですか?' },
          { speaker: 'you', en: 'It\'s delicious, thanks.', ja: '美味しいです、ありがとう。',
            choices: ['It\'s delicious, thanks.', 'Yes food good.', 'Eat eat yes.'] },
          { speaker: 'npc', en: 'Glad to hear it. Save room for dessert?', ja: '良かった。デザートはいかが?' },
          { speaker: 'you', en: 'Maybe just coffee for me.', ja: 'コーヒーだけお願いします。',
            choices: ['Maybe just coffee for me.', 'Coffee coffee yes.', 'I drink hot.'] },
          { speaker: 'npc', en: 'I\'ll bring that out.', ja: 'お持ちします。' },
          { speaker: 'you', en: 'Excuse me, could we get the check?', ja: 'すみません、お会計お願いします。',
            choices: ['Excuse me, could we get the check?', 'Check check me.', 'I want money go.'] },
          { speaker: 'npc', en: 'Of course. Cash or card?', ja: 'はい。現金?カード?' },
          { speaker: 'you', en: 'Card. And could we split it?', ja: 'カードで。あと別会計できる?',
            choices: ['Card. And could we split it?', 'Card split two please.', 'I you money two.'] },
          { speaker: 'npc', en: 'Absolutely. One moment.', ja: 'もちろん。少々お待ちを。' },
          { speaker: 'npc', en: 'Here you go. Have a great night!', ja: 'こちらです。良い夜を!' },
          { speaker: 'you', en: 'You too. Thanks for everything.', ja: 'あなたも。色々ありがとう。',
            choices: ['You too. Thanks for everything.', 'Night night yes.', 'Yes thank you.'] },
          { speaker: 'npc', en: 'Come back soon!', ja: 'また来てください!' }
        ]
      },
      {
        id: 'st4s2', title: '空港チェックイン〜入国', icon: '🛂',
        situation: 'カウンター〜搭乗案内〜入国審査',
        dialogue: [
          { speaker: 'npc', en: 'Good morning. Passport and ticket?', ja: 'おはようございます。パスポートとチケット。' },
          { speaker: 'you', en: 'Here you go.', ja: 'はい、どうぞ。',
            choices: ['Here you go.', 'I have me.', 'Yes papers.'] },
          { speaker: 'npc', en: 'Are you checking any bags today?', ja: '預ける荷物は?' },
          { speaker: 'you', en: 'Just one suitcase.', ja: 'スーツケース1つだけ。',
            choices: ['Just one suitcase.', 'One one yes.', 'I have many.'] },
          { speaker: 'npc', en: 'Place it on the scale.', ja: '量りに乗せて。' },
          { speaker: 'you', en: 'Sure. Is it under the weight limit?', ja: 'はい。重さは大丈夫?',
            choices: ['Sure. Is it under the weight limit?', 'Heavy heavy bag.', 'Weight no know me.'] },
          { speaker: 'npc', en: 'You\'re good. Where would you like to sit?', ja: '大丈夫です。お席は?' },
          { speaker: 'you', en: 'Window seat, if possible.', ja: 'できれば窓側で。',
            choices: ['Window seat, if possible.', 'Window I want.', 'I sit anywhere me.'] },
          { speaker: 'npc', en: 'I have one available. Vegetarian or regular meal?', ja: '空きがあります。ベジタリアン?通常食?' },
          { speaker: 'you', en: 'Regular is fine.', ja: '通常で大丈夫。',
            choices: ['Regular is fine.', 'Yes meat eat.', 'Vegetable no me.'] },
          { speaker: 'npc', en: 'Here\'s your boarding pass. Gate B12.', ja: '搭乗券です。B12ゲートです。' },
          { speaker: 'you', en: 'What time does boarding start?', ja: '搭乗は何時から?',
            choices: ['What time does boarding start?', 'Boarding when me?', 'Time time fly?'] },
          { speaker: 'npc', en: 'Around eleven thirty.', ja: '11時半頃です。' },
          { speaker: 'you', en: 'How early should I be there?', ja: 'どれくらい前に行けば?',
            choices: ['How early should I be there?', 'Early me how?', 'I go when me?'] },
          { speaker: 'npc', en: 'Thirty minutes before.', ja: '30分前には。' },
          { speaker: 'you', en: 'Got it. Thanks for your help!', ja: 'わかりました、ありがとう!',
            choices: ['Got it. Thanks for your help!', 'Thirty before yes.', 'Help help good.'] },
          { speaker: 'npc', en: '[Immigration] Passport. Purpose of visit?', ja: '【入国審査】パスポート。訪問目的は?' },
          { speaker: 'you', en: 'Just sightseeing for a week.', ja: '1週間の観光です。',
            choices: ['Just sightseeing for a week.', 'Week week see thing.', 'I see see week.'] },
          { speaker: 'npc', en: 'Where are you staying?', ja: 'どこに滞在?' },
          { speaker: 'you', en: 'At the Grand Hotel downtown.', ja: 'ダウンタウンのグランドホテル。',
            choices: ['At the Grand Hotel downtown.', 'Hotel hotel grand.', 'I sleep good place.'] },
          { speaker: 'npc', en: 'First time in this country?', ja: 'この国は初めて?' },
          { speaker: 'you', en: 'Yes, my first visit.', ja: 'はい、初めてです。',
            choices: ['Yes, my first visit.', 'First first me.', 'No I come.'] },
          { speaker: 'npc', en: 'Welcome. Enjoy your stay.', ja: 'ようこそ。よい滞在を。' }
        ]
      },
      {
        id: 'st4s3', title: 'ホテル部屋変更', icon: '🔑',
        situation: 'チェックイン後トラブル発覚〜部屋変更交渉',
        dialogue: [
          { speaker: 'npc', en: 'Welcome. Checking in?', ja: 'ようこそ。チェックインですか?' },
          { speaker: 'you', en: 'Yes, my name is Tanaka.', ja: 'はい、タナカです。',
            choices: ['Yes, my name is Tanaka.', 'Yes me Tanaka.', 'Name me Tanaka.'] },
          { speaker: 'npc', en: 'Found you. Here\'s your key for room 502.', ja: 'ありました。502号室の鍵です。' },
          { speaker: 'you', en: 'Where are the elevators?', ja: 'エレベーターはどこ?',
            choices: ['Where are the elevators?', 'Up up where?', 'Elevator I go.'] },
          { speaker: 'npc', en: 'Just around the corner.', ja: '角を曲がってすぐ。' },
          { speaker: 'you', en: 'Thanks!', ja: 'ありがとう!',
            choices: ['Thanks!', 'Corner corner.', 'Yes yes go.'] },
          { speaker: 'you', en: 'Hi, sorry to come back. I\'m having trouble with my room.', ja: 'すみません、戻りました。部屋に問題が。',
            choices: ['Hi, sorry to come back. I\'m having trouble with my room.', 'Back back me.', 'Room bad now.'] },
          { speaker: 'npc', en: 'Oh no. What\'s wrong?', ja: 'ええ。どうしました?' },
          { speaker: 'you', en: 'The air conditioning isn\'t working.', ja: 'エアコンが動かなくて。',
            choices: ['The air conditioning isn\'t working.', 'Hot hot room me.', 'Air no good.'] },
          { speaker: 'npc', en: 'I\'m so sorry. Let me send someone up.', ja: '申し訳ありません。すぐ人を送ります。' },
          { speaker: 'you', en: 'How long until it\'s fixed?', ja: 'どれくらいで直る?',
            choices: ['How long until it\'s fixed?', 'Fix fix when me?', 'Long long time?'] },
          { speaker: 'npc', en: 'About fifteen minutes.', ja: '15分ほどです。' },
          { speaker: 'you', en: 'Could I switch rooms instead?', ja: '代わりに部屋変えてもらえる?',
            choices: ['Could I switch rooms instead?', 'Other room me.', 'Change change please.'] },
          { speaker: 'npc', en: 'Of course. We have a similar room available.', ja: 'もちろん。似た部屋があります。' },
          { speaker: 'you', en: 'That would be great. What room?', ja: '助かります。何号室?',
            choices: ['That would be great. What room?', 'Great great yes.', 'Room what me?'] },
          { speaker: 'npc', en: 'Room 510, same floor.', ja: '510号室、同じ階です。' },
          { speaker: 'you', en: 'Same view?', ja: '景色も同じ?',
            choices: ['Same view?', 'See see same?', 'Window window?'] },
          { speaker: 'npc', en: 'Yes, even better actually.', ja: 'はい、むしろ良いくらい。' },
          { speaker: 'you', en: 'Perfect. Thank you so much.', ja: '完璧、本当にありがとう。',
            choices: ['Perfect. Thank you so much.', 'Perfect view yes.', 'Better better good.'] },
          { speaker: 'npc', en: 'Sorry for the inconvenience. Here\'s your new key.', ja: 'ご迷惑をおかけしました。新しい鍵です。' },
          { speaker: 'you', en: 'No worries. Thanks again.', ja: '大丈夫です、改めてありがとう。',
            choices: ['No worries. Thanks again.', 'Worry no me.', 'Again again me.'] }
        ]
      },
      {
        id: 'st4s4', title: '友達と映画相談', icon: '🎬',
        situation: '映画選び〜時間〜食事〜待ち合わせまで',
        dialogue: [
          { speaker: 'npc', en: 'Hey, want to see a movie tonight?', ja: 'ねえ、今夜映画見ない?' },
          { speaker: 'you', en: 'Sure, what\'s playing?', ja: 'いいね、何やってる?',
            choices: ['Sure, what\'s playing?', 'Yes I see what.', 'Movie play me.'] },
          { speaker: 'npc', en: 'There\'s a new sci-fi at the Plaza.', ja: 'プラザで新しいSFが。' },
          { speaker: 'you', en: 'What\'s it called?', ja: '何ていうの?',
            choices: ['What\'s it called?', 'Name me?', 'Title title?'] },
          { speaker: 'npc', en: 'Star Bound. It\'s getting good reviews.', ja: '「スターバウンド」。評判いいよ。' },
          { speaker: 'you', en: 'Sounds cool. What time?', ja: 'いいね、何時?',
            choices: ['Sounds cool. What time?', 'Cool me yes.', 'Time time when?'] },
          { speaker: 'npc', en: 'Seven or nine.', ja: '7時か9時。' },
          { speaker: 'you', en: 'Let\'s do nine. I want to eat first.', ja: '9時にしよう。先にご飯。',
            choices: ['Let\'s do nine. I want to eat first.', 'Nine yes me eat.', 'Food first nine.'] },
          { speaker: 'npc', en: 'Good plan. Where do you want to eat?', ja: 'いいね。どこで食べる?' },
          { speaker: 'you', en: 'How about Italian?', ja: 'イタリアンは?',
            choices: ['How about Italian?', 'Italy Italy yes.', 'I love pasta you?'] },
          { speaker: 'npc', en: 'There\'s a great place near the cinema.', ja: '映画館の近くに良い店ある。' },
          { speaker: 'you', en: 'What\'s it called?', ja: '何ていう店?',
            choices: ['What\'s it called?', 'Place place me?', 'Tell name me.'] },
          { speaker: 'npc', en: 'Mama Lucia\'s.', ja: '「ママルチアズ」。' },
          { speaker: 'you', en: 'Perfect. What time should we meet?', ja: 'いいね。何時に集合?',
            choices: ['Perfect. What time should we meet?', 'Meet meet when?', 'Time we how?'] },
          { speaker: 'npc', en: 'Six thirty?', ja: '6時半?' },
          { speaker: 'you', en: 'Works for me.', ja: '大丈夫。',
            choices: ['Works for me.', 'Six work yes.', 'I am six.'] },
          { speaker: 'npc', en: 'I\'ll book the movie tickets.', ja: '映画のチケット取るね。' },
          { speaker: 'you', en: 'Cool, I\'ll book the restaurant.', ja: 'いいね、お店予約するよ。',
            choices: ['Cool, I\'ll book the restaurant.', 'I take place yes.', 'Restaurant me book.'] },
          { speaker: 'npc', en: 'Sounds good. See you then.', ja: '了解。じゃあその時に。' },
          { speaker: 'you', en: 'Looking forward to it!', ja: '楽しみ!',
            choices: ['Looking forward to it!', 'Look look me!', 'Forward yes go!'] },
          { speaker: 'npc', en: 'Me too. Bye!', ja: '私も。じゃあね!' },
          { speaker: 'you', en: 'Bye!', ja: 'バイ!',
            choices: ['Bye!', 'See me yes.', 'Go home now.'] }
        ]
      },
      {
        id: 'st4s5', title: '服を試着して購入', icon: '👕',
        situation: '探す〜試着〜サイズ違う〜購入〜ラッピング',
        dialogue: [
          { speaker: 'npc', en: 'Hi! Looking for anything specific?', ja: 'いらっしゃい!何かお探し?' },
          { speaker: 'you', en: 'Yes, a jacket for fall.', ja: 'はい、秋のジャケットを。',
            choices: ['Yes, a jacket for fall.', 'Jacket jacket me.', 'I want fall thing.'] },
          { speaker: 'npc', en: 'We have new arrivals over here.', ja: 'こちらに新作が。' },
          { speaker: 'you', en: 'I like this one. Do you have it in medium?', ja: 'これがいい。Mサイズある?',
            choices: ['I like this one. Do you have it in medium?', 'Medium medium yes?', 'I am medium me.'] },
          { speaker: 'npc', en: 'Let me check. Yes, here you go.', ja: '確認します。ありました。' },
          { speaker: 'you', en: 'Could I try it on?', ja: '試着できる?',
            choices: ['Could I try it on?', 'Try try wear me.', 'I wear now please.'] },
          { speaker: 'npc', en: 'Of course. The fitting room is on the right.', ja: 'もちろん。試着室は右です。' },
          { speaker: 'you', en: 'Thanks.', ja: 'ありがとう。',
            choices: ['Thanks.', 'Right right yes.', 'Fit fit me.'] },
          { speaker: 'you', en: 'It\'s a bit tight in the shoulders.', ja: '肩がちょっときつい。',
            choices: ['It\'s a bit tight in the shoulders.', 'Shoulder shoulder me.', 'Big big no.'] },
          { speaker: 'npc', en: 'Want to try the next size up?', ja: '一つ上のサイズ試す?' },
          { speaker: 'you', en: 'Yes, please. A large.', ja: 'お願いします。Lで。',
            choices: ['Yes, please. A large.', 'Large yes me.', 'L L L please.'] },
          { speaker: 'npc', en: 'Here you are.', ja: 'どうぞ。' },
          { speaker: 'you', en: 'This one fits perfectly!', ja: 'これピッタリ!',
            choices: ['This one fits perfectly!', 'Fit fit good!', 'Yes me good!'] },
          { speaker: 'npc', en: 'It looks great on you.', ja: 'お似合いですよ。' },
          { speaker: 'you', en: 'Thanks. I\'ll take it.', ja: 'ありがとう。これにします。',
            choices: ['Thanks. I\'ll take it.', 'I take this me.', 'Buy buy yes.'] },
          { speaker: 'npc', en: 'Anything else for you today?', ja: '他にも何か?' },
          { speaker: 'you', en: 'Not today. How much is it?', ja: '今日はこれだけ。いくら?',
            choices: ['Not today. How much is it?', 'How much me?', 'Money money tell.'] },
          { speaker: 'npc', en: 'It\'s eighty dollars.', ja: '80ドルです。' },
          { speaker: 'you', en: 'I\'ll pay by card.', ja: 'カードで。',
            choices: ['I\'ll pay by card.', 'Card card me.', 'I have money no.'] },
          { speaker: 'npc', en: 'Would you like it gift wrapped?', ja: 'プレゼント包装されますか?' },
          { speaker: 'you', en: 'Yes, that would be great.', ja: 'はい、お願いします。',
            choices: ['Yes, that would be great.', 'Gift gift yes.', 'Wrap wrap please.'] },
          { speaker: 'npc', en: 'Coming right up!', ja: 'すぐご用意します!' }
        ]
      }
    ]
  },

  // ============================================================
  // STAGE 5: マスター (Lv 81-100) — 30〜34往復
  // ============================================================
  {
    id: 'st5', level: 81, levelRange: [81, 100],
    title: 'Master', ja: 'マスター', emoji: '👑', color: '#f5b400',
    description: '超長文の複合シーンを最後まで完走',
    turnHint: '30〜34往復',
    situations: [
      {
        id: 'st5s1', title: '海外到着〜ホテル', icon: '🌍',
        situation: '入国〜タクシー〜ホテルチェックインの完全通し',
        dialogue: [
          { speaker: 'npc', en: 'Passport, please.', ja: 'パスポートを。' },
          { speaker: 'you', en: 'Here you are.', ja: 'はい、どうぞ。',
            choices: ['Here you are.', 'Yes me here.', 'Passport passport.'] },
          { speaker: 'npc', en: 'Purpose of your visit?', ja: '訪問目的は?' },
          { speaker: 'you', en: 'I\'m here on vacation for a week.', ja: '1週間の観光で。',
            choices: ['I\'m here on vacation for a week.', 'Vacation week one.', 'I see thing seven.'] },
          { speaker: 'npc', en: 'Where will you be staying?', ja: 'どこに滞在?' },
          { speaker: 'you', en: 'At the Grand Plaza Hotel downtown.', ja: 'ダウンタウンのグランドプラザホテル。',
            choices: ['At the Grand Plaza Hotel downtown.', 'Hotel hotel grand.', 'I sleep good place.'] },
          { speaker: 'npc', en: 'First time in this country?', ja: 'この国は初めて?' },
          { speaker: 'you', en: 'Yes, my first time.', ja: 'はい、初めてです。',
            choices: ['Yes, my first time.', 'First first me.', 'Yes I no come.'] },
          { speaker: 'npc', en: 'Do you have any food or plants in your luggage?', ja: '荷物に食品や植物は?' },
          { speaker: 'you', en: 'No, just clothes and toiletries.', ja: 'いえ、服と洗面用具だけ。',
            choices: ['No, just clothes and toiletries.', 'No food me.', 'Plant plant no.'] },
          { speaker: 'npc', en: 'Welcome. Enjoy your stay.', ja: 'ようこそ。よい滞在を。' },
          { speaker: 'you', en: 'Thank you.', ja: 'ありがとう。',
            choices: ['Thank you.', 'Yes welcome.', 'You stay yes.'] },
          { speaker: 'you', en: 'Excuse me, are you available?', ja: 'すみません、空いてますか?',
            choices: ['Excuse me, are you available?', 'Taxi taxi me?', 'You free yes?'] },
          { speaker: 'npc', en: 'Yes, where to?', ja: 'はい、どちらまで?' },
          { speaker: 'you', en: 'To the Grand Plaza Hotel downtown.', ja: 'ダウンタウンのグランドプラザホテル。',
            choices: ['To the Grand Plaza Hotel downtown.', 'Hotel grand please.', 'I want hotel.'] },
          { speaker: 'npc', en: 'Sure. Do you know which street?', ja: 'はい。住所はわかります?' },
          { speaker: 'you', en: 'Main Street, I think.', ja: 'メインストリート、たぶん。',
            choices: ['Main Street, I think.', 'Street street main.', 'I no know street.'] },
          { speaker: 'npc', en: 'Got it. About thirty minutes with traffic.', ja: 'わかりました。渋滞込みで30分ほど。' },
          { speaker: 'you', en: 'How much will it cost?', ja: 'いくらかかる?',
            choices: ['How much will it cost?', 'Money money?', 'Cost cost tell me.'] },
          { speaker: 'npc', en: 'Around forty dollars.', ja: '40ドルくらい。' },
          { speaker: 'you', en: 'That\'s fine. I\'ll pay by card.', ja: '大丈夫です。カードで。',
            choices: ['That\'s fine. I\'ll pay by card.', 'Card card good.', 'Forty good me.'] },
          { speaker: 'npc', en: 'We accept cards in the back seat.', ja: '後部座席でカード使えます。' },
          { speaker: 'you', en: 'Perfect.', ja: '完璧。',
            choices: ['Perfect.', 'Good good me.', 'Card back seat.'] },
          { speaker: 'npc', en: 'Welcome to the Grand Plaza. Checking in?', ja: 'ようこそ。チェックインですか?' },
          { speaker: 'you', en: 'Yes, my name is Tanaka.', ja: 'はい、タナカです。',
            choices: ['Yes, my name is Tanaka.', 'Yes me check.', 'Tanaka me yes.'] },
          { speaker: 'npc', en: 'Found you. Here\'s your key for room 1205.', ja: 'ありました。1205号室の鍵です。' },
          { speaker: 'you', en: 'What time does breakfast start?', ja: '朝食は何時から?',
            choices: ['What time does breakfast start?', 'Eat morning when?', 'Breakfast time?'] },
          { speaker: 'npc', en: 'Six thirty in the main restaurant.', ja: 'メインレストランで6時半から。' },
          { speaker: 'you', en: 'Where\'s the elevator?', ja: 'エレベーターは?',
            choices: ['Where\'s the elevator?', 'Up up where?', 'Elevator me?'] },
          { speaker: 'npc', en: 'Right behind you, on your left.', ja: 'すぐ後ろ、左側です。' },
          { speaker: 'you', en: 'Thank you so much.', ja: '本当にありがとう。',
            choices: ['Thank you so much.', 'You me thank.', 'So me thank.'] },
          { speaker: 'npc', en: 'Have a wonderful stay!', ja: '素敵な滞在を!' }
        ]
      },
      {
        id: 'st5s2', title: 'ビジネス会食での雑談', icon: '🥂',
        situation: '紹介〜雑談〜商談〜デザートまでの長丁場',
        dialogue: [
          { speaker: 'npc', en: 'Tanaka-san, thanks for joining us tonight.', ja: 'タナカさん、今夜はありがとう。' },
          { speaker: 'you', en: 'Thank you for the invitation.', ja: 'お招きありがとうございます。',
            choices: ['Thank you for the invitation.', 'You me thank invite.', 'Yes I come thank.'] },
          { speaker: 'npc', en: 'How was your flight from Tokyo?', ja: '東京からのフライトは?' },
          { speaker: 'you', en: 'It was long but smooth.', ja: '長かったけど快適でした。',
            choices: ['It was long but smooth.', 'Long long me yes.', 'Plane good me.'] },
          { speaker: 'npc', en: 'First time in New York?', ja: 'ニューヨークは初めて?' },
          { speaker: 'you', en: 'Yes, I\'m excited to be here.', ja: 'はい、嬉しいです。',
            choices: ['Yes, I\'m excited to be here.', 'Yes first happy me.', 'I happy first.'] },
          { speaker: 'npc', en: 'Let me introduce my colleague Sarah.', ja: '同僚のサラを紹介します。' },
          { speaker: 'you', en: 'Nice to meet you, Sarah.', ja: 'はじめまして、サラさん。',
            choices: ['Nice to meet you, Sarah.', 'Sarah me hello.', 'You sister you?'] },
          { speaker: 'npc', en: 'Pleasure to meet you, Tanaka-san.', ja: 'こちらこそ、タナカさん。' },
          { speaker: 'you', en: 'Likewise.', ja: 'こちらこそ。',
            choices: ['Likewise.', 'You good me.', 'Yes nice yes.'] },
          { speaker: 'npc', en: 'Please order whatever looks good.', ja: 'お好きなものをどうぞ。' },
          { speaker: 'you', en: 'I\'ll have the salmon.', ja: 'サーモンで。',
            choices: ['I\'ll have the salmon.', 'Salmon salmon me eat.', 'I want fish yes.'] },
          { speaker: 'npc', en: 'Excellent choice. So, about the project...', ja: 'いいですね。さて、プロジェクトの件で。' },
          { speaker: 'you', en: 'Yes, I wanted to discuss the timeline.', ja: 'はい、スケジュールの相談を。',
            choices: ['Yes, I wanted to discuss the timeline.', 'Time line yes me.', 'I talk plan now.'] },
          { speaker: 'npc', en: 'We\'re hoping to launch by Q3.', ja: '第3四半期にローンチしたい。' },
          { speaker: 'you', en: 'That\'s tight. Is there room for adjustment?', ja: 'タイトですね。調整の余地は?',
            choices: ['That\'s tight. Is there room for adjustment?', 'Tight no room?', 'I no can fast.'] },
          { speaker: 'npc', en: 'What do you propose?', ja: 'ご提案は?' },
          { speaker: 'you', en: 'Maybe push to October to ensure quality.', ja: '品質確保で10月まで延ばしては。',
            choices: ['Maybe push to October to ensure quality.', 'October good quality.', 'Push push yes.'] },
          { speaker: 'npc', en: 'Let me discuss with my team.', ja: 'チームと話します。' },
          { speaker: 'you', en: 'Sounds good. Thanks for being flexible.', ja: '柔軟にありがとう。',
            choices: ['Sounds good. Thanks for being flexible.', 'Flex flex thank.', 'Sound good me you.'] },
          { speaker: 'npc', en: 'Of course. Now, let\'s enjoy dinner.', ja: 'もちろん。さあ食事を。' },
          { speaker: 'you', en: 'This salmon looks amazing.', ja: 'このサーモン美味しそう。',
            choices: ['This salmon looks amazing.', 'Look look food.', 'Eat eat happy!'] },
          { speaker: 'npc', en: 'Their food is the best in the area.', ja: 'この辺で一番美味しいよ。' },
          { speaker: 'you', en: 'I can see why.', ja: 'わかります。',
            choices: ['I can see why.', 'Why why?', 'I see why me.'] },
          { speaker: 'npc', en: 'How long are you staying in town?', ja: '滞在はどれくらい?' },
          { speaker: 'you', en: 'Just three days, then back to Tokyo.', ja: '3日だけで東京に戻ります。',
            choices: ['Just three days, then back to Tokyo.', 'Three day me Tokyo.', 'I go back yes.'] },
          { speaker: 'npc', en: 'That\'s a quick trip. Any sightseeing planned?', ja: '短いですね。観光の予定は?' },
          { speaker: 'you', en: 'Just whatever I can fit in.', ja: '入れられる分だけ。',
            choices: ['Just whatever I can fit in.', 'Fit fit me yes.', 'See see when?'] },
          { speaker: 'npc', en: 'I can recommend a few spots.', ja: 'いくつかおすすめできますよ。' },
          { speaker: 'you', en: 'That would be wonderful, thank you.', ja: 'それは助かります、ありがとう。',
            choices: ['That would be wonderful, thank you.', 'Recommend yes me.', 'Spot spot good!'] }
        ]
      },
      {
        id: 'st5s3', title: '飛行機遅延の対応', icon: '⏰',
        situation: '遅延発覚から代替便・ミール券まで',
        dialogue: [
          { speaker: 'npc', en: 'Attention passengers, flight 723 is delayed.', ja: 'ご案内、723便は遅延中です。' },
          { speaker: 'you', en: 'Excuse me, what\'s the new departure time?', ja: 'すみません、新しい出発時間は?',
            choices: ['Excuse me, what\'s the new departure time?', 'When go now me?', 'Plane time when?'] },
          { speaker: 'npc', en: 'We don\'t have an exact time yet.', ja: 'まだ確定していません。' },
          { speaker: 'you', en: 'Why is the flight delayed?', ja: 'なぜ遅延?',
            choices: ['Why is the flight delayed?', 'Why why slow?', 'Plane bad me?'] },
          { speaker: 'npc', en: 'Mechanical issues. The team is working on it.', ja: '機材トラブルです。対応中。' },
          { speaker: 'you', en: 'How long do you expect the delay?', ja: 'どれくらいの遅延見込み?',
            choices: ['How long do you expect the delay?', 'Long long me?', 'Wait time how?'] },
          { speaker: 'npc', en: 'At least four hours.', ja: '最低4時間。' },
          { speaker: 'you', en: 'Are there any alternative flights?', ja: '別の便はあります?',
            choices: ['Are there any alternative flights?', 'Other plane yes me?', 'Different fly?'] },
          { speaker: 'npc', en: 'Let me check. There\'s one in two hours.', ja: '確認します。2時間後に1便。' },
          { speaker: 'you', en: 'Could I switch to that one?', ja: 'それに変えられる?',
            choices: ['Could I switch to that one?', 'Change me that?', 'Switch please.'] },
          { speaker: 'npc', en: 'Yes, but it has a layover in Seoul.', ja: 'はい、ソウル経由になります。' },
          { speaker: 'you', en: 'That\'s fine, as long as I get home today.', ja: '今日帰れるなら大丈夫。',
            choices: ['That\'s fine, as long as I get home today.', 'Today home good.', 'Yes Seoul okay.'] },
          { speaker: 'npc', en: 'Okay. I\'ll change your booking.', ja: 'では変更します。' },
          { speaker: 'you', en: 'What about my luggage?', ja: '荷物はどうなる?',
            choices: ['What about my luggage?', 'Bag bag where?', 'Luggage you?'] },
          { speaker: 'npc', en: 'We\'ll transfer it for you.', ja: 'こちらで移送します。' },
          { speaker: 'you', en: 'Will I have time to make the connection?', ja: '乗り継ぎ時間は足りる?',
            choices: ['Will I have time to make the connection?', 'Time time enough?', 'Connect quick me?'] },
          { speaker: 'npc', en: 'Yes, there\'s a two-hour layover.', ja: 'はい、2時間あります。' },
          { speaker: 'you', en: 'That sounds manageable.', ja: 'なんとかなりそう。',
            choices: ['That sounds manageable.', 'Manage me good.', 'Two hour okay me.'] },
          { speaker: 'npc', en: 'Here\'s your new boarding pass.', ja: '新しい搭乗券です。' },
          { speaker: 'you', en: 'Thank you so much.', ja: '本当にありがとう。',
            choices: ['Thank you so much.', 'You thank big.', 'So thank yes.'] },
          { speaker: 'npc', en: 'Is there anything else?', ja: '他にご質問は?' },
          { speaker: 'you', en: 'Where can I get a meal?', ja: '食事はどこで?',
            choices: ['Where can I get a meal?', 'Food food me where?', 'Eat eat where?'] },
          { speaker: 'npc', en: 'There\'s a food court on the second floor.', ja: '2階にフードコートが。' },
          { speaker: 'you', en: 'Will the airline cover it?', ja: '航空会社が負担してくれる?',
            choices: ['Will the airline cover it?', 'Airline pay me?', 'Free food me?'] },
          { speaker: 'npc', en: 'Yes, here\'s a meal voucher for the wait.', ja: 'はい、お待たせした食事券です。' },
          { speaker: 'you', en: 'That\'s very kind. Thank you.', ja: 'ご親切に、ありがとう。',
            choices: ['That\'s very kind. Thank you.', 'Voucher voucher yes!', 'Kind kind you me.'] },
          { speaker: 'npc', en: 'We\'re sorry again for the inconvenience.', ja: '改めてご迷惑をお詫びします。' },
          { speaker: 'you', en: 'It happens. I appreciate your help.', ja: 'よくあることです。助かりました。',
            choices: ['It happens. I appreciate your help.', 'Happen happen yes.', 'Help help thank.'] },
          { speaker: 'npc', en: 'Have a safe trip home.', ja: '気をつけて帰ってください。' },
          { speaker: 'you', en: 'Thank you. You too.', ja: 'ありがとう。あなたも。',
            choices: ['Thank you. You too.', 'You me too.', 'Safe yes home.'] }
        ]
      },
      {
        id: 'st5s4', title: '観光ガイドツアー', icon: '🏰',
        situation: 'ガイドさんと巡るお城ツアー長尺版',
        dialogue: [
          { speaker: 'npc', en: 'Welcome to the Grand Castle Tour. I\'m your guide.', ja: 'グランドキャッスルツアーへ。ガイドです。' },
          { speaker: 'you', en: 'Hi! I\'m excited to see it.', ja: '見るのが楽しみ!',
            choices: ['Hi! I\'m excited to see it.', 'Excite me!', 'Hello hello me.'] },
          { speaker: 'npc', en: 'Have you been here before?', ja: '初めて?' },
          { speaker: 'you', en: 'No, this is my first time.', ja: 'はい、初めて。',
            choices: ['No, this is my first time.', 'Yes I no come.', 'First first me.'] },
          { speaker: 'npc', en: 'Where are you visiting from?', ja: 'どちらから?' },
          { speaker: 'you', en: 'I\'m from Japan.', ja: '日本から。',
            choices: ['I\'m from Japan.', 'Japan Japan me.', 'I live Japan.'] },
          { speaker: 'npc', en: 'Welcome! How long is your trip?', ja: 'ようこそ!旅は何日?' },
          { speaker: 'you', en: 'Just one week.', ja: '1週間です。',
            choices: ['Just one week.', 'Week week me.', 'Yes one me.'] },
          { speaker: 'npc', en: 'Plenty of time to explore. Let\'s start.', ja: '十分ですね。さあ始めましょう。' },
          { speaker: 'npc', en: 'This castle was built in 1450.', ja: 'このお城は1450年築。' },
          { speaker: 'you', en: 'Wow, that\'s old. Who lived here?', ja: '古い!誰が住んでた?',
            choices: ['Wow, that\'s old. Who lived here?', 'Old old who?', 'Live live me?'] },
          { speaker: 'npc', en: 'A royal family for over 500 years.', ja: '500年以上、王室が。' },
          { speaker: 'you', en: 'How big is the castle?', ja: 'どのくらいの大きさ?',
            choices: ['How big is the castle?', 'Big big how?', 'Castle me size?'] },
          { speaker: 'npc', en: 'Over 200 rooms.', ja: '200部屋以上。' },
          { speaker: 'you', en: 'Two hundred? That\'s incredible.', ja: '200?信じられない。',
            choices: ['Two hundred? That\'s incredible.', 'Two hundred wow!', 'Many many room.'] },
          { speaker: 'npc', en: 'We\'ll only see the most important ones.', ja: '今日は重要な部屋だけ見ます。' },
          { speaker: 'you', en: 'How long is the tour?', ja: 'ツアー時間は?',
            choices: ['How long is the tour?', 'Tour tour time?', 'I time tour?'] },
          { speaker: 'npc', en: 'About one and a half hours.', ja: '1時間半ほど。' },
          { speaker: 'you', en: 'Can I take pictures inside?', ja: '中で写真撮れる?',
            choices: ['Can I take pictures inside?', 'Picture me yes?', 'Camera camera no?'] },
          { speaker: 'npc', en: 'Yes, but no flash.', ja: 'はい、フラッシュなしで。' },
          { speaker: 'you', en: 'Got it. What\'s the most famous room?', ja: 'はい。一番有名な部屋は?',
            choices: ['Got it. What\'s the most famous room?', 'Famous famous me?', 'Best best room?'] },
          { speaker: 'npc', en: 'The Grand Hall, where balls were held.', ja: 'グランドホール、舞踏会の。' },
          { speaker: 'you', en: 'I\'d love to see that.', ja: 'ぜひ見たい。',
            choices: ['I\'d love to see that.', 'See see me.', 'Ball ball me!'] },
          { speaker: 'npc', en: 'We\'ll be there in about ten minutes.', ja: '10分後に到着します。' },
          { speaker: 'you', en: 'Are there any local sweets to try afterward?', ja: 'あとで地元のお菓子は試せる?',
            choices: ['Are there any local sweets to try afterward?', 'Sweet sweet me?', 'Cake cake here?'] },
          { speaker: 'npc', en: 'The cafe sells traditional cookies.', ja: 'カフェで伝統クッキーを。' },
          { speaker: 'you', en: 'Sounds delicious!', ja: '美味しそう!',
            choices: ['Sounds delicious!', 'Yum yum me!', 'Cookie cookie!'] },
          { speaker: 'npc', en: 'They go great with the local tea.', ja: '地元のお茶と相性抜群。' },
          { speaker: 'you', en: 'I\'ll definitely try them. Thanks for the recommendation.', ja: 'ぜひ試します、ありがとう。',
            choices: ['I\'ll definitely try them. Thanks for the recommendation.', 'Tea tea yes me.', 'Recommend yes me.'] },
          { speaker: 'npc', en: 'My pleasure. Now, let\'s continue the tour.', ja: 'いえ。さあ続けましょう。' }
        ]
      },
      {
        id: 'st5s5', title: '財布紛失の総合対応', icon: '😱',
        situation: '通行人〜警察〜大使館〜カード会社まで',
        dialogue: [
          { speaker: 'you', en: 'Excuse me, I need help. I lost my wallet.', ja: 'すみません、財布をなくしました。',
            choices: ['Excuse me, I need help. I lost my wallet.', 'Wallet me no.', 'Help help money.'] },
          { speaker: 'npc', en: 'Oh no. Where did you have it last?', ja: '大変。最後に持ってたのは?' },
          { speaker: 'you', en: 'At the museum, about an hour ago.', ja: '美術館で、1時間前くらい。',
            choices: ['At the museum, about an hour ago.', 'Museum hour ago.', 'I no know me.'] },
          { speaker: 'npc', en: 'Have you contacted the museum?', ja: '美術館には連絡した?' },
          { speaker: 'you', en: 'Yes, but they haven\'t found it.', ja: 'はい、でも見つかってない。',
            choices: ['Yes, but they haven\'t found it.', 'Yes but no find.', 'Find no me.'] },
          { speaker: 'npc', en: 'You should report it to the police.', ja: '警察に届けたほうがいい。' },
          { speaker: 'you', en: 'Where\'s the nearest police station?', ja: '最寄りの警察署は?',
            choices: ['Where\'s the nearest police station?', 'Police police me?', 'I want police where?'] },
          { speaker: 'npc', en: 'Two blocks east on Main Street.', ja: 'メインストリートを東へ2ブロック。' },
          { speaker: 'you', en: 'Thank you so much.', ja: '本当にありがとう。',
            choices: ['Thank you so much.', 'You help me thank.', 'So thank you me.'] },
          { speaker: 'npc', en: 'Hello, can I help you?', ja: 'こんにちは、ご用件は?' },
          { speaker: 'you', en: 'I\'d like to report a lost wallet.', ja: '紛失届を出したいです。',
            choices: ['I\'d like to report a lost wallet.', 'Wallet report me.', 'Lose wallet I want.'] },
          { speaker: 'npc', en: 'I see. Can you describe it?', ja: 'はい。どんな財布?' },
          { speaker: 'you', en: 'A black leather wallet.', ja: '黒い革財布。',
            choices: ['A black leather wallet.', 'Black wallet me.', 'Leather color black.'] },
          { speaker: 'npc', en: 'What was inside?', ja: '中身は?' },
          { speaker: 'you', en: 'My passport, credit cards, and some cash.', ja: 'パスポート、カード、現金少し。',
            choices: ['My passport, credit cards, and some cash.', 'Passport card cash me.', 'Many many thing.'] },
          { speaker: 'npc', en: 'Your passport too? You\'ll need to contact your embassy.', ja: 'パスポートも?大使館に連絡を。' },
          { speaker: 'you', en: 'How can I do that?', ja: 'どうやって?',
            choices: ['How can I do that?', 'How how me?', 'I no know.'] },
          { speaker: 'npc', en: 'Here\'s the number for the Japanese embassy.', ja: '日本大使館の番号です。' },
          { speaker: 'you', en: 'Thank you. What about my credit cards?', ja: 'ありがとう。クレジットカードは?',
            choices: ['Thank you. What about my credit cards?', 'Card card me?', 'Money card you?'] },
          { speaker: 'npc', en: 'Call your card company immediately to cancel.', ja: 'すぐカード会社に電話して止めて。' },
          { speaker: 'you', en: 'I\'ll do that right away.', ja: 'すぐやります。',
            choices: ['I\'ll do that right away.', 'Yes me call now.', 'Now now me do.'] },
          { speaker: 'npc', en: 'Take this report number for insurance.', ja: '保険用にこの届け番号を。' },
          { speaker: 'you', en: 'Got it. Thank you for your help.', ja: 'はい。助かりました。',
            choices: ['Got it. Thank you for your help.', 'Number good me.', 'Help help good.'] },
          { speaker: 'npc', en: 'Is there anything else?', ja: '他には?' },
          { speaker: 'you', en: 'Do I need to do anything else right now?', ja: '他に今やることは?',
            choices: ['Do I need to do anything else right now?', 'More more me?', 'Other other do?'] },
          { speaker: 'npc', en: 'Just contact the embassy and your bank.', ja: '大使館と銀行に連絡だけ。' },
          { speaker: 'you', en: 'Okay. How long for a new passport?', ja: 'はい。新パスポートはどれくらい?',
            choices: ['Okay. How long for a new passport?', 'New passport me when?', 'Long long passport?'] },
          { speaker: 'npc', en: 'Usually a few days at the embassy.', ja: '大使館で数日です。' },
          { speaker: 'you', en: 'That\'s faster than I thought.', ja: '思ったより早い。',
            choices: ['That\'s faster than I thought.', 'Fast fast yes!', 'I think slow.'] },
          { speaker: 'npc', en: 'I hope you find your wallet. Stay safe.', ja: '見つかるといいですね。気をつけて。' },
          { speaker: 'you', en: 'Thank you. I really appreciate your help.', ja: 'ありがとう、本当に感謝します。',
            choices: ['Thank you. I really appreciate your help.', 'Help help me thank!', 'Safe safe me yes!'] }
        ]
      }
    ]
  }
];

/* =====================================================
   音声 (TTS) ヘルパー — iOS Safari対応 + 高品質音声優先版
   - voices読み込みが非同期なのを考慮して await で取得
   - Premium / Enhanced / Siri 等の高品質音声を自動選択
   - ユーザーが選んだ声を localStorage に保存して優先
===================================================== */
const VOICE_PREF_KEY = 'tts_voice_pref';
let _voicesCache = null;
let _ttsWarmedUp = false;

function _getVoicePref() {
  try { return localStorage.getItem(VOICE_PREF_KEY) || ''; } catch { return ''; }
}
function _setVoicePref(name) {
  try { localStorage.setItem(VOICE_PREF_KEY, name || ''); } catch {}
}

/** 音声品質スコア — 高いほど自然な声 */
function _scoreVoice(v) {
  if (!v || !v.lang) return -1;
  let s = 0;
  const name = v.name || '';
  // 高品質バリエーション
  if (/premium/i.test(name)) s += 200;
  if (/enhanced/i.test(name)) s += 150;
  if (/siri/i.test(name)) s += 100;
  if (/neural/i.test(name)) s += 80;
  // 地域 (米英豪を優先)
  if (/^en[-_]US/i.test(v.lang)) s += 30;
  else if (/^en[-_](GB|AU)/i.test(v.lang)) s += 20;
  else if (/^en/i.test(v.lang)) s += 10;
  // 既知の良質な声 (デフォルトでも比較的綺麗)
  const goodNames = ['Ava', 'Allison', 'Samantha', 'Tom', 'Susan', 'Joelle', 'Daniel', 'Karen', 'Moira', 'Nicky'];
  if (goodNames.some(n => name.includes(n))) s += 15;
  // 端末ローカル音声 (ネット不要・低レイテンシ)
  if (v.localService) s += 5;
  return s;
}

/** ノベルティ/効果音ボイスを除外 (macOS 等の Bad News, Boing 等) */
const NOVELTY_VOICE_NAMES = new Set([
  'Albert', 'Bad News', 'Bahh', 'Boing', 'Bubbles', 'Cellos', 'Good News',
  'Junior', 'Kathy', 'Ralph', 'Zarvox', 'Fred', 'Grandma', 'Grandpa', 'Eddy', 'Reed',
  'Rocko', 'Sandy', 'Shelley', 'Flo', 'Organ', 'Whisper',
  'ささやき声', 'オルガン', 'スーパースター', 'トリノイド', 'ベル', '道化', '震え'
]);
function _isUsefulVoice(v) {
  if (!v.name) return false;
  // ベース名 (locale部分を除いた) でチェック
  const baseName = v.name.replace(/\s*\(.*\)\s*$/, '').trim();
  return !NOVELTY_VOICE_NAMES.has(baseName);
}

/** 全英語音声を品質順にソート、ノベルティは除外 */
function getEnglishVoicesSorted() {
  const voices = (_voicesCache && _voicesCache.length)
    ? _voicesCache
    : (window.speechSynthesis ? window.speechSynthesis.getVoices() : []);
  return voices
    .filter(v => v.lang && v.lang.toLowerCase().startsWith('en'))
    .filter(_isUsefulVoice)
    .sort((a, b) => _scoreVoice(b) - _scoreVoice(a));
}

/** ベスト音声を選ぶ。ユーザー指定があれば優先 */
function _pickBestVoice(voices) {
  if (!voices || !voices.length) return null;
  const pref = _getVoicePref();
  if (pref) {
    const found = voices.find(v => v.name === pref);
    if (found) return found;
  }
  const en = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en')).filter(_isUsefulVoice);
  if (!en.length) {
    // フォールバック: ノベルティ含めて英語のもの
    const any = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
    return any[0] || voices[0];
  }
  return en.sort((a, b) => _scoreVoice(b) - _scoreVoice(a))[0];
}

function _getVoicesAsync(timeoutMs = 1500) {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) { resolve([]); return; }
    if (_voicesCache && _voicesCache.length) { resolve(_voicesCache); return; }
    const tryNow = window.speechSynthesis.getVoices();
    if (tryNow && tryNow.length) {
      _voicesCache = tryNow;
      resolve(tryNow);
      return;
    }
    const handler = () => {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length) {
        _voicesCache = v;
        cleanup();
        resolve(v);
      }
    };
    const cleanup = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
    };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
    setTimeout(() => {
      cleanup();
      resolve(window.speechSynthesis.getVoices() || []);
    }, timeoutMs);
  });
}

/** iOS Safari の TTS は最初のユーザータップで一度起動する必要がある。
 *  画面のどこかをタップすると呼ばれるようイベントを仕込む。 */
function warmUpTTS() {
  if (_ttsWarmedUp || !('speechSynthesis' in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(' ');
    u.volume = 0;
    u.lang = 'en-US';
    window.speechSynthesis.speak(u);
    _ttsWarmedUp = true;
  } catch (e) { /* noop */ }
}

async function speak(text, { rate = 0.95 } = {}) {
  if (!('speechSynthesis' in window)) return;
  warmUpTTS();
  // 既存の発話を止める。iOS では cancel 直後の speak が無音になることがあるため少し待つ
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
    await new Promise(r => setTimeout(r, 80));
  }
  const voices = await _getVoicesAsync();
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    u.pitch = 1.0;
    const enVoice = _pickBestVoice(voices);
    if (enVoice) {
      u.voice = enVoice;
      u.lang = enVoice.lang;
    }
    let resolved = false;
    const done = () => { if (!resolved) { resolved = true; resolve(); } };
    u.onend = done;
    u.onerror = done;
    // iOS ではまれに onend が発火しないので fallback タイマー
    const estimatedMs = Math.max(800, text.length * 70 / rate);
    setTimeout(done, estimatedMs + 1500);
    try {
      window.speechSynthesis.speak(u);
    } catch (e) {
      done();
    }
  });
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) { /* noop */ }
  }
}

if ('speechSynthesis' in window) {
  // 早めに voices をキャッシュ
  _getVoicesAsync(0);
  // ユーザーが最初にどこかをタップしたら TTS をウォームアップ
  const handler = () => {
    warmUpTTS();
    document.removeEventListener('touchstart', handler);
    document.removeEventListener('click', handler);
  };
  document.addEventListener('touchstart', handler, { once: true, passive: true });
  document.addEventListener('click', handler, { once: true });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  }
};

/* =====================================================
   カリキュラム / レベル / 星
===================================================== */
const MAX_LEVEL = 100;
const PROGRESS_KEY = 'curriculum_v2';

const Curriculum = {
  defaultProgress() { return { situations: {}, attempts: 0, lastSituationId: null }; },
  load() { return Store.get(PROGRESS_KEY, this.defaultProgress()); },
  save(p) { Store.set(PROGRESS_KEY, p); },

  allSituations() {
    const list = [];
    STAGES.forEach(stage => stage.situations.forEach(sit => list.push({ stage, situation: sit })));
    return list;
  },

  totalStars() {
    const p = this.load();
    const all = this.allSituations();
    const got = all.reduce((s, x) => s + (p.situations[x.situation.id]?.stars || 0), 0);
    const max = all.length * 3;
    return { got, max };
  },

  level() {
    const { got, max } = this.totalStars();
    if (max === 0) return 1;
    return Math.min(MAX_LEVEL, Math.round((got / max) * (MAX_LEVEL - 1)) + 1);
  },

  stageProgress(stage) {
    const p = this.load();
    const sits = stage.situations;
    const cleared = sits.filter(s => (p.situations[s.id]?.stars || 0) >= 1).length;
    const mastered = sits.filter(s => (p.situations[s.id]?.stars || 0) >= 3).length;
    return { cleared, mastered, total: sits.length };
  },

  isStageUnlocked(stageIdx) {
    if (stageIdx === 0) return true;
    const prev = STAGES[stageIdx - 1];
    const prog = this.stageProgress(prev);
    return prog.cleared >= prog.total;
  },

  isStageCleared(stage) {
    const prog = this.stageProgress(stage);
    return prog.cleared >= prog.total;
  },

  starsFor(sitId) {
    return (this.load().situations[sitId]?.stars) || 0;
  },

  awardSituation(sitId, score, total) {
    const p = this.load();
    const oldLevel = this.level();

    const pct = total > 0 ? score / total : 1;
    let stars = 1;
    if (pct >= 0.8) stars = 2;
    if (pct >= 1.0) stars = 3;

    const prev = p.situations[sitId] || { stars: 0, attempts: 0, bestScore: 0 };
    const starsGained = Math.max(0, stars - prev.stars);
    p.situations[sitId] = {
      stars: Math.max(prev.stars, stars),
      attempts: prev.attempts + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score, lastTotal: total
    };
    p.attempts = (p.attempts || 0) + 1;
    p.lastSituationId = sitId;
    this.save(p);

    const newLevel = this.level();
    return {
      stars, starsGained,
      levelUp: newLevel > oldLevel,
      oldLevel, newLevel,
      perfect: stars === 3
    };
  },

  recommend() {
    const p = this.load();
    for (let i = 0; i < STAGES.length; i++) {
      if (!this.isStageUnlocked(i)) break;
      const stage = STAGES[i];
      const fresh = stage.situations.find(s => !p.situations[s.id]);
      if (fresh) {
        return {
          item: { stage, situation: fresh },
          reason: stage.id === 'st1' ? 'まずはここから' : 'このステージの次の課題',
          subtitle: `${stage.emoji} ${stage.title} (${stage.turnHint})`
        };
      }
      const partial = stage.situations.find(s => (p.situations[s.id]?.stars || 0) < 3);
      if (partial) {
        const cur = p.situations[partial.id]?.stars || 0;
        return {
          item: { stage, situation: partial },
          reason: 'マスターまであと一歩',
          subtitle: `${stage.emoji} 現在 ${cur}/3星`
        };
      }
    }
    const all = this.allSituations();
    const random = all[Math.floor(Math.random() * all.length)];
    return { item: random, reason: '復習で実力をキープ', subtitle: '全マスター達成済み!' };
  },

  milestones: [
    { lv: 20,  msg: '入門ステージクリア!基本の一言が身についた' },
    { lv: 40,  msg: '初級クリア!短い会話が成立する' },
    { lv: 60,  msg: '中級到達!旅行の標準シーンOK' },
    { lv: 80,  msg: '上級者!連結した長い会話を切り抜ける' },
    { lv: 100, msg: '🎉 マスター達成!超長文会話まで対応!' }
  ],

  reset() { this.save(this.defaultProgress()); }
};

function findSituation(sitId) {
  for (const stage of STAGES) {
    const sit = stage.situations.find(s => s.id === sitId);
    if (sit) return { stage, situation: sit };
  }
  return null;
}
