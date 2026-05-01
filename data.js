/**
 * Native-style adult English curriculum
 * Goal: understand and speak natural everyday adult English.
 * Higher stages include longer but still realistic native-style turns.
 * Script-only updates live in data.js. UI/flow updates live in index.html or pattern-c.html.
 */
const STAGES = [
  {
    "id": "st1",
    "level": 1,
    "levelRange": [
      1,
      20
    ],
    "title": "基礎",
    "ja": "基礎",
    "emoji": "🌱",
    "color": "#66bb6a",
    "description": "短い日常フレーズで自然な会話に慣れる",
    "turnHint": "5〜8語・短く自然に",
    "situations": [
      {
        "id": "st1s1",
        "title": "コーヒーを注文",
        "icon": "☕",
        "situation": "コーヒーを注文してサイズを選ぶ",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi, what can I get for you?",
            "ja": "こんにちは。ご注文は何にしますか？"
          },
          {
            "speaker": "you",
            "en": "Could I get an iced coffee?",
            "ja": "アイスコーヒーをもらえますか？",
            "choices": [
              "Could I get an iced coffee?",
              "Could I book a room for tonight?",
              "Could I change my seat, please?",
              "Could I return this jacket today?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Sure, what size would you like?",
            "ja": "もちろんです。サイズはどうしますか？"
          },
          {
            "speaker": "you",
            "en": "A medium would be great, thanks.",
            "ja": "ミディアムでお願いします。",
            "choices": [
              "A medium would be great, thanks.",
              "The train should arrive around noon.",
              "I left my umbrella at home.",
              "The bill looks a little high."
            ]
          },
          {
            "speaker": "npc",
            "en": "Any milk or sugar in that?",
            "ja": "ミルクや砂糖は入れますか？"
          },
          {
            "speaker": "you",
            "en": "Just a little milk, please.",
            "ja": "ミルクを少しだけお願いします。",
            "choices": [
              "Just a little milk, please.",
              "I have a reservation under Tanaka.",
              "I need to speak with my manager.",
              "The Wi-Fi password is not working."
            ]
          },
          {
            "speaker": "npc",
            "en": "Great, it will be right out.",
            "ja": "かしこまりました。すぐご用意します。"
          },
          {
            "speaker": "you",
            "en": "Thanks, I appreciate it.",
            "ja": "ありがとうございます。助かります。",
            "choices": [
              "Thanks, I appreciate it.",
              "I prefer the window seat.",
              "I think we missed our stop.",
              "I already paid for parking."
            ]
          }
        ]
      },
      {
        "id": "st1s2",
        "title": "道を聞く",
        "icon": "🗺️",
        "situation": "駅までの行き方を確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "You look a little lost.",
            "ja": "少し迷っているようですね。"
          },
          {
            "speaker": "you",
            "en": "Is the station near here?",
            "ja": "駅はこの近くですか？",
            "choices": [
              "Is the station near here?",
              "Is the coffee still hot?",
              "Is the room ready yet?",
              "Is the receipt in the bag?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Yes, it is about five minutes away.",
            "ja": "はい、ここから5分くらいです。"
          },
          {
            "speaker": "you",
            "en": "Which way should I go?",
            "ja": "どちらに行けばいいですか？",
            "choices": [
              "Which way should I go?",
              "Which size do you recommend?",
              "Which card did I use?",
              "Which table is available now?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Go straight, then turn right.",
            "ja": "まっすぐ行ってから右に曲がってください。"
          },
          {
            "speaker": "you",
            "en": "Straight, then right. Got it.",
            "ja": "まっすぐ行って右ですね。分かりました。",
            "choices": [
              "Straight, then right. Got it.",
              "Medium, no sugar. Got it.",
              "Two tickets, please. Got it.",
              "The blue one, please. Got it."
            ]
          }
        ]
      },
      {
        "id": "st1s3",
        "title": "お会計",
        "icon": "💳",
        "situation": "カードで支払ってレシートを確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Your total is eighteen dollars.",
            "ja": "合計18ドルです。"
          },
          {
            "speaker": "you",
            "en": "Can I pay by card?",
            "ja": "カードで払えますか？",
            "choices": [
              "Can I pay by card?",
              "Can I see the dessert menu?",
              "Can I get directions downtown?",
              "Can I check in early?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Of course, just tap here.",
            "ja": "もちろんです。ここにタッチしてください。"
          },
          {
            "speaker": "you",
            "en": "Like this, or another way?",
            "ja": "こんな感じですか？それとも別の方法ですか？",
            "choices": [
              "Like this, or another way?",
              "Is this seat taken already?",
              "Are you open on Sundays?",
              "Did the flight leave yet?"
            ]
          },
          {
            "speaker": "npc",
            "en": "That worked. Need a receipt?",
            "ja": "できました。レシートは必要ですか？"
          },
          {
            "speaker": "you",
            "en": "No receipt is fine, thanks.",
            "ja": "レシートなしで大丈夫です。ありがとう。",
            "choices": [
              "No receipt is fine, thanks.",
              "No onions on mine, please.",
              "No bags are missing today.",
              "No rooms are available tonight."
            ]
          }
        ]
      },
      {
        "id": "st1s4",
        "title": "自己紹介",
        "icon": "🤝",
        "situation": "初対面で相手とのつながりを話す",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi, I do not think we have met.",
            "ja": "こんにちは。初対面ですよね。"
          },
          {
            "speaker": "you",
            "en": "Nice to meet you. I am Ken.",
            "ja": "はじめまして。ケンです。",
            "choices": [
              "Nice to meet you. I am Ken.",
              "Nice to order coffee right now.",
              "Nice to return this item today.",
              "Nice to check my flight status."
            ]
          },
          {
            "speaker": "npc",
            "en": "Nice to meet you too, Ken.",
            "ja": "こちらこそ、ケンさん。"
          },
          {
            "speaker": "you",
            "en": "How do you know everyone here?",
            "ja": "ここにいる皆さんとはどういう知り合いですか？",
            "choices": [
              "How do you know everyone here?",
              "How much is the chicken sandwich?",
              "How late is the train running?",
              "How big is the hotel room?"
            ]
          },
          {
            "speaker": "npc",
            "en": "I work with Sarah. What about you?",
            "ja": "サラと一緒に働いています。あなたは？"
          },
          {
            "speaker": "you",
            "en": "Sarah is an old friend of mine.",
            "ja": "サラは昔からの友人です。",
            "choices": [
              "Sarah is an old friend of mine.",
              "The station is down this street.",
              "The receipt is in my bag.",
              "Dinner starts at seven tonight."
            ]
          }
        ]
      },
      {
        "id": "st1s5",
        "title": "席に案内される",
        "icon": "🍽️",
        "situation": "レストランで人数と予約有無を伝える",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Welcome in. How many tonight?",
            "ja": "いらっしゃいませ。今夜は何名様ですか？"
          },
          {
            "speaker": "you",
            "en": "Just two of us tonight.",
            "ja": "今夜は2人です。",
            "choices": [
              "Just two of us tonight.",
              "Just coffee with no sugar.",
              "Just directions to the airport.",
              "Just the receipt is missing."
            ]
          },
          {
            "speaker": "npc",
            "en": "Do you have a reservation?",
            "ja": "ご予約はありますか？"
          },
          {
            "speaker": "you",
            "en": "No, we just walked in.",
            "ja": "いえ、予約なしで来ました。",
            "choices": [
              "No, we just walked in.",
              "No, we already checked out.",
              "No, the train left early.",
              "No, I paid with cash."
            ]
          },
          {
            "speaker": "npc",
            "en": "No problem, we have a table open.",
            "ja": "問題ありません。空いている席があります。"
          },
          {
            "speaker": "you",
            "en": "Great, thank you very much.",
            "ja": "よかったです。ありがとうございます。",
            "choices": [
              "Great, thank you very much.",
              "Great, I missed my flight.",
              "Great, I forgot my password.",
              "Great, the shirt is too small."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "st2",
    "level": 21,
    "levelRange": [
      21,
      40
    ],
    "title": "初級",
    "ja": "初級",
    "emoji": "🌿",
    "color": "#26a69a",
    "description": "Slightly longer adult exchanges with context.",
    "turnHint": "8–12 words, one clear detail added",
    "situations": [
      {
        "id": "st2s1",
        "title": "カフェでおすすめを聞く",
        "icon": "☕",
        "situation": "いつもの注文以外の飲み物を相談する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi, what are you in the mood for today?",
            "ja": "こんにちは。今日はどんな気分ですか？"
          },
          {
            "speaker": "you",
            "en": "I usually get iced coffee, but I want to try something different.",
            "ja": "普段はアイスコーヒーですが、今日は違うものを試したいです。",
            "choices": [
              "I usually get iced coffee, but I want to try something different.",
              "I usually take the train, but today I need a taxi.",
              "I usually stay downtown, but tonight I booked near the airport.",
              "I usually pay by card, but I left my wallet at home."
            ]
          },
          {
            "speaker": "npc",
            "en": "If you like coffee, our cold brew latte is popular.",
            "ja": "コーヒーが好きなら、コールドブリューラテが人気です。"
          },
          {
            "speaker": "you",
            "en": "That sounds good. Is it sweet, or more on the strong side?",
            "ja": "よさそうですね。甘いですか？それとも濃いめですか？",
            "choices": [
              "That sounds good. Is it sweet, or more on the strong side?",
              "That sounds good. Is this train going toward the city center?",
              "That sounds good. Is the hotel breakfast included with the room?",
              "That sounds good. Is this jacket available in a smaller size?"
            ]
          },
          {
            "speaker": "npc",
            "en": "It is pretty smooth, but not too sweet.",
            "ja": "かなり飲みやすいですが、甘すぎません。"
          },
          {
            "speaker": "you",
            "en": "Perfect. I will try that in a medium, please.",
            "ja": "ちょうどいいです。ミディアムでそれをお願いします。",
            "choices": [
              "Perfect. I will try that in a medium, please.",
              "Perfect. I will meet them at the station entrance.",
              "Perfect. I will check out before eleven tomorrow.",
              "Perfect. I will return this after I call support."
            ]
          }
        ]
      },
      {
        "id": "st2s2",
        "title": "ホテルチェックイン",
        "icon": "🏨",
        "situation": "予約確認・身分証・朝食とWi-Fiを確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Good evening. Are you checking in with us tonight?",
            "ja": "こんばんは。本日チェックインですか？"
          },
          {
            "speaker": "you",
            "en": "Yes, I have a reservation under the name Tanaka.",
            "ja": "はい、田中の名前で予約しています。",
            "choices": [
              "Yes, I have a reservation under the name Tanaka.",
              "Yes, I would like the salmon with vegetables.",
              "Yes, I need to take the subway downtown.",
              "Yes, I am returning this because it is damaged."
            ]
          },
          {
            "speaker": "npc",
            "en": "I found it. May I see your ID and card?",
            "ja": "確認できました。身分証とカードを拝見できますか？"
          },
          {
            "speaker": "you",
            "en": "Sure, here they are. Is breakfast included with the room?",
            "ja": "もちろんです。こちらです。朝食は部屋代に含まれていますか？",
            "choices": [
              "Sure, here they are. Is breakfast included with the room?",
              "Sure, here they are. Is this coffee made with oat milk?",
              "Sure, here they are. Is the next train still on time?",
              "Sure, here they are. Is this shirt machine washable?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Yes, breakfast is served downstairs from seven to ten.",
            "ja": "はい、朝食は階下で7時から10時までです。"
          },
          {
            "speaker": "you",
            "en": "Great. Could I also get the Wi-Fi information?",
            "ja": "よかったです。Wi-Fi情報もいただけますか？",
            "choices": [
              "Great. Could I also get the Wi-Fi information?",
              "Great. Could I also get fries instead of salad?",
              "Great. Could I also get a receipt by email?",
              "Great. Could I also get directions to the museum?"
            ]
          }
        ]
      },
      {
        "id": "st2s3",
        "title": "タクシーに乗る",
        "icon": "🚕",
        "situation": "空港までの移動と時間を確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi there, where are we headed today?",
            "ja": "こんにちは。今日はどちらまで行きますか？"
          },
          {
            "speaker": "you",
            "en": "Could you take me to the airport, Terminal Two?",
            "ja": "空港のターミナル2までお願いできますか？",
            "choices": [
              "Could you take me to the airport, Terminal Two?",
              "Could you bring me a glass of water?",
              "Could you check whether my room is ready?",
              "Could you tell me which size fits better?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Sure thing. Do you have a flight soon?",
            "ja": "もちろんです。すぐフライトですか？"
          },
          {
            "speaker": "you",
            "en": "It boards in about two hours, so I have some time.",
            "ja": "搭乗は約2時間後なので、少し時間があります。",
            "choices": [
              "It boards in about two hours, so I have some time.",
              "It tastes a little too salty, so I need water.",
              "It opens in about two hours, so I may wait.",
              "It fits pretty well, so I might buy it."
            ]
          },
          {
            "speaker": "npc",
            "en": "Traffic is light right now, so we should be fine.",
            "ja": "今は渋滞が少ないので、大丈夫だと思います。"
          },
          {
            "speaker": "you",
            "en": "That is a relief. I was worried about rush hour.",
            "ja": "安心しました。ラッシュアワーが心配でした。",
            "choices": [
              "That is a relief. I was worried about rush hour.",
              "That is a relief. I was worried about the room key.",
              "That is a relief. I was worried about the coffee order.",
              "That is a relief. I was worried about the shirt color."
            ]
          }
        ]
      },
      {
        "id": "st2s4",
        "title": "商品の交換",
        "icon": "🛍️",
        "situation": "買った商品のサイズ交換を相談する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi, how can I help you today?",
            "ja": "こんにちは。今日はどうされましたか？"
          },
          {
            "speaker": "you",
            "en": "I bought this yesterday, but it does not fit well.",
            "ja": "昨日これを買ったのですが、サイズが合いません。",
            "choices": [
              "I bought this yesterday, but it does not fit well.",
              "I booked this yesterday, but the room was canceled.",
              "I ordered this yesterday, but the coffee was too sweet.",
              "I called this yesterday, but the line was busy."
            ]
          },
          {
            "speaker": "npc",
            "en": "No problem. Do you have the receipt with you?",
            "ja": "問題ありません。レシートはお持ちですか？"
          },
          {
            "speaker": "you",
            "en": "Yes, I have it here in the bag.",
            "ja": "はい、袋の中に入っています。",
            "choices": [
              "Yes, I have it here in the bag.",
              "Yes, I parked it behind the hotel.",
              "Yes, I ordered it without onions.",
              "Yes, I wrote it on the map."
            ]
          },
          {
            "speaker": "npc",
            "en": "Would you like a refund or an exchange?",
            "ja": "返金と交換、どちらをご希望ですか？"
          },
          {
            "speaker": "you",
            "en": "An exchange would be great if you have a larger size.",
            "ja": "大きいサイズがあれば交換したいです。",
            "choices": [
              "An exchange would be great if you have a larger size.",
              "A window seat would be great if the flight is full.",
              "A quiet room would be great if the hotel is busy.",
              "A cold drink would be great if the wait is long."
            ]
          }
        ]
      },
      {
        "id": "st2s5",
        "title": "夕食の予定を決める",
        "icon": "🍝",
        "situation": "友人と時間・予算・店を決める",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Are you still free for dinner tonight?",
            "ja": "今夜の夕食はまだ空いていますか？"
          },
          {
            "speaker": "you",
            "en": "Yes, I am free after work around seven.",
            "ja": "はい、仕事後の7時ごろなら空いています。",
            "choices": [
              "Yes, I am free after work around seven.",
              "Yes, I paid the bill with my card.",
              "Yes, I found the bathroom near the elevator.",
              "Yes, I booked the flight for tomorrow."
            ]
          },
          {
            "speaker": "npc",
            "en": "Great. Do you feel like Italian or something lighter?",
            "ja": "よかったです。イタリアンがいいですか、それとも軽めがいいですか？"
          },
          {
            "speaker": "you",
            "en": "Italian sounds good, but nothing too expensive tonight.",
            "ja": "イタリアンがいいですが、今夜はあまり高くない店がいいです。",
            "choices": [
              "Italian sounds good, but nothing too expensive tonight.",
              "Iced coffee sounds good, but nothing too sweet today.",
              "The hotel sounds good, but nothing too far from downtown.",
              "The jacket sounds good, but nothing too formal for work."
            ]
          },
          {
            "speaker": "npc",
            "en": "I know a casual place near the station.",
            "ja": "駅の近くにカジュアルなお店を知っています。"
          },
          {
            "speaker": "you",
            "en": "Perfect. Send me the address, and I will meet you there.",
            "ja": "いいですね。住所を送ってください。そこで会いましょう。",
            "choices": [
              "Perfect. Send me the address, and I will meet you there.",
              "Perfect. Send me the receipt, and I will return it tomorrow.",
              "Perfect. Send me the menu, and I will order a taxi.",
              "Perfect. Send me the key, and I will check the gate."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "st3",
    "level": 41,
    "levelRange": [
      41,
      60
    ],
    "title": "中級",
    "ja": "中級",
    "emoji": "🌳",
    "color": "#42a5f5",
    "description": "Longer natural exchanges with preferences, reasons, and follow-up questions.",
    "turnHint": "12–18 words, reason or condition included",
    "situations": [
      {
        "id": "st3s1",
        "title": "カフェで飲み物相談",
        "icon": "☕",
        "situation": "カフェイン少なめの飲み物を相談する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi, welcome in. Are you looking for coffee, tea, or something cold today?",
            "ja": "いらっしゃいませ。今日はコーヒー、紅茶、冷たい飲み物のどれをお探しですか？"
          },
          {
            "speaker": "you",
            "en": "I usually get iced coffee, but I am trying not to drink too much caffeine today.",
            "ja": "普段はアイスコーヒーですが、今日はカフェインを取りすぎないようにしています。",
            "choices": [
              "I usually get iced coffee, but I am trying not to drink too much caffeine today.",
              "I usually take the subway, but I am trying not to arrive too early today.",
              "I usually stay near downtown, but I am trying not to spend too much tonight.",
              "I usually buy this brand, but I am trying not to wear dark colors today."
            ]
          },
          {
            "speaker": "npc",
            "en": "In that case, you might like our half-caf latte or the hibiscus iced tea.",
            "ja": "それなら、ハーフカフェのラテかハイビスカスアイスティーが合うかもしれません。"
          },
          {
            "speaker": "you",
            "en": "The half-caf latte sounds good. Can you make it iced with oat milk?",
            "ja": "ハーフカフェのラテがよさそうです。オーツミルクでアイスにできますか？",
            "choices": [
              "The half-caf latte sounds good. Can you make it iced with oat milk?",
              "The hotel breakfast sounds good. Can you make the room quiet at night?",
              "The later flight sounds good. Can you make the connection easier for me?",
              "The blue jacket sounds good. Can you make sure it fits over a sweater?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Absolutely. Would you like it sweetened at all, or just plain?",
            "ja": "もちろんです。少し甘くしますか？それともそのままにしますか？"
          },
          {
            "speaker": "you",
            "en": "Just plain is fine. I want something easy to drink while I work.",
            "ja": "そのままで大丈夫です。仕事中に飲みやすいものがいいです。",
            "choices": [
              "Just plain is fine. I want something easy to drink while I work.",
              "Just email is fine. I want something easy to show at the desk.",
              "Just walking is fine. I want something easy to reach before dinner.",
              "Just black is fine. I want something easy to wear with jeans."
            ]
          }
        ]
      },
      {
        "id": "st3s2",
        "title": "料理を注文",
        "icon": "🥗",
        "situation": "アレルギーを確認して料理を注文する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Are you ready to order, or would you like a few more minutes?",
            "ja": "ご注文はお決まりですか？それとももう少しお時間が必要ですか？"
          },
          {
            "speaker": "you",
            "en": "I am almost ready, but I wanted to ask about the chicken salad first.",
            "ja": "ほぼ決まっていますが、先にチキンサラダについて聞きたいです。",
            "choices": [
              "I am almost ready, but I wanted to ask about the chicken salad first.",
              "I am almost ready, but I wanted to ask about the train schedule first.",
              "I am almost ready, but I wanted to ask about the hotel deposit first.",
              "I am almost ready, but I wanted to ask about the return policy first."
            ]
          },
          {
            "speaker": "npc",
            "en": "Of course. What would you like to know about it?",
            "ja": "もちろんです。どの点を知りたいですか？"
          },
          {
            "speaker": "you",
            "en": "Does it have any nuts in the dressing, or are they only on top?",
            "ja": "ドレッシングにナッツは入っていますか？それとも上に乗っているだけですか？",
            "choices": [
              "Does it have any nuts in the dressing, or are they only on top?",
              "Does it have any stops before downtown, or does it go straight there?",
              "Does it have any fees after checkout, or are they all included?",
              "Does it have any damage on the sleeve, or is it only wrinkled?"
            ]
          },
          {
            "speaker": "npc",
            "en": "They are just on top, but I can ask the kitchen to be sure.",
            "ja": "上に乗っているだけですが、念のためキッチンに確認できます。"
          },
          {
            "speaker": "you",
            "en": "I would appreciate that, because I have a mild nut allergy.",
            "ja": "助かります。軽いナッツアレルギーがあるので。",
            "choices": [
              "I would appreciate that, because I have a mild nut allergy.",
              "I would appreciate that, because I have an early meeting tomorrow.",
              "I would appreciate that, because I have a tight flight connection.",
              "I would appreciate that, because I have a receipt in my email."
            ]
          },
          {
            "speaker": "npc",
            "en": "No problem. I will check and make sure it is handled safely.",
            "ja": "問題ありません。確認して安全に対応します。"
          },
          {
            "speaker": "you",
            "en": "Thanks. If it is easier, I can order something without dressing.",
            "ja": "ありがとうございます。もし簡単なら、ドレッシングなしのものを注文しても大丈夫です。",
            "choices": [
              "Thanks. If it is easier, I can order something without dressing.",
              "Thanks. If it is easier, I can take a taxi from the station.",
              "Thanks. If it is easier, I can check in after dinner.",
              "Thanks. If it is easier, I can exchange it next week."
            ]
          }
        ]
      },
      {
        "id": "st3s3",
        "title": "飛行機遅延の確認",
        "icon": "✈️",
        "situation": "遅延時間と乗り継ぎへの影響を確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "I am sorry, but your flight has been delayed by about ninety minutes.",
            "ja": "申し訳ありませんが、お客様の便は約90分遅れています。"
          },
          {
            "speaker": "you",
            "en": "Thanks for letting me know. Do you think the departure time might change again?",
            "ja": "知らせてくれてありがとうございます。出発時間はまた変わる可能性がありますか？",
            "choices": [
              "Thanks for letting me know. Do you think the departure time might change again?",
              "Thanks for letting me know. Do you think the coffee order might be ready soon?",
              "Thanks for letting me know. Do you think the hotel room might be quieter tonight?",
              "Thanks for letting me know. Do you think the jacket might go on sale tomorrow?"
            ]
          },
          {
            "speaker": "npc",
            "en": "It is possible, but right now the airline expects this update to hold.",
            "ja": "可能性はありますが、現時点ではこの予定で進む見込みです。"
          },
          {
            "speaker": "you",
            "en": "I have a connection after this flight, so I am a little worried.",
            "ja": "この後に乗り継ぎがあるので、少し心配です。",
            "choices": [
              "I have a connection after this flight, so I am a little worried.",
              "I have a reservation after this dinner, so I am a little hungry.",
              "I have a meeting after this shower, so I am a little relaxed.",
              "I have a return after this purchase, so I am a little unsure."
            ]
          },
          {
            "speaker": "npc",
            "en": "Let me check your itinerary and see how much time you will have.",
            "ja": "旅程を確認して、どのくらい時間があるか見てみます。"
          },
          {
            "speaker": "you",
            "en": "That would be helpful. I am trying to avoid missing the next flight.",
            "ja": "助かります。次の便に乗り遅れないようにしたいです。",
            "choices": [
              "That would be helpful. I am trying to avoid missing the next flight.",
              "That would be helpful. I am trying to avoid ordering the wrong size.",
              "That would be helpful. I am trying to avoid taking the wrong bus.",
              "That would be helpful. I am trying to avoid paying the same bill twice."
            ]
          }
        ]
      },
      {
        "id": "st3s4",
        "title": "打ち合わせ時間の調整",
        "icon": "📅",
        "situation": "予定時刻を少しずらしてもらう",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Do you still have time to meet at three this afternoon?",
            "ja": "今日の午後3時にまだ打ち合わせできますか？"
          },
          {
            "speaker": "you",
            "en": "I can make three, but I may be a few minutes late.",
            "ja": "3時には行けますが、数分遅れるかもしれません。",
            "choices": [
              "I can make three, but I may be a few minutes late.",
              "I can make coffee, but I may need a little milk.",
              "I can make dinner, but I may order something small.",
              "I can make the train, but I may buy another ticket."
            ]
          },
          {
            "speaker": "npc",
            "en": "No worries. Would three fifteen be better for you?",
            "ja": "大丈夫です。3時15分の方がいいですか？"
          },
          {
            "speaker": "you",
            "en": "Yes, three fifteen would be much easier with my schedule.",
            "ja": "はい、自分の予定だと3時15分の方がかなり楽です。",
            "choices": [
              "Yes, three fifteen would be much easier with my schedule.",
              "Yes, the medium latte would be much easier with less sugar.",
              "Yes, the front desk would be much easier with my luggage.",
              "Yes, the blue shirt would be much easier with dark jeans."
            ]
          },
          {
            "speaker": "npc",
            "en": "Great, I will move it and send you an updated invite.",
            "ja": "では変更して、更新した招待を送ります。"
          },
          {
            "speaker": "you",
            "en": "Thanks. I will review the notes before we start.",
            "ja": "ありがとうございます。始まる前にメモを確認しておきます。",
            "choices": [
              "Thanks. I will review the notes before we start.",
              "Thanks. I will check the gate before we board.",
              "Thanks. I will wash the cup before I leave.",
              "Thanks. I will try the jacket before I pay."
            ]
          }
        ]
      },
      {
        "id": "st3s5",
        "title": "カード請求の確認",
        "icon": "🧾",
        "situation": "見覚えのないカード請求を確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Thanks for calling. What can I help you with today?",
            "ja": "お電話ありがとうございます。本日はどのようなご用件ですか？"
          },
          {
            "speaker": "you",
            "en": "I noticed a charge on my card that I do not recognize.",
            "ja": "カードに見覚えのない請求があることに気づきました。",
            "choices": [
              "I noticed a charge on my card that I do not recognize.",
              "I noticed a coffee on the counter that I did not order.",
              "I noticed a room on my reservation that I did not choose.",
              "I noticed a shirt in my bag that I did not buy."
            ]
          },
          {
            "speaker": "npc",
            "en": "I can take a look. Do you have the date and amount?",
            "ja": "確認します。日付と金額は分かりますか？"
          },
          {
            "speaker": "you",
            "en": "Yes, it was on Monday for thirty-two dollars and fifty cents.",
            "ja": "はい、月曜日で32ドル50セントでした。",
            "choices": [
              "Yes, it was on Monday for thirty-two dollars and fifty cents.",
              "Yes, it was in the lobby near the second-floor elevator.",
              "Yes, it was with no onions and extra sauce on the side.",
              "Yes, it was supposed to arrive before noon tomorrow."
            ]
          },
          {
            "speaker": "npc",
            "en": "Thank you. I see the transaction, and I will check the merchant details.",
            "ja": "ありがとうございます。取引が見えますので、加盟店情報を確認します。"
          },
          {
            "speaker": "you",
            "en": "I appreciate it. I just want to make sure it is not a mistake.",
            "ja": "ありがとうございます。間違いではないか確認したいだけです。",
            "choices": [
              "I appreciate it. I just want to make sure it is not a mistake.",
              "I appreciate it. I just want to make sure it is not too spicy.",
              "I appreciate it. I just want to make sure it is not the wrong gate.",
              "I appreciate it. I just want to make sure it is not too expensive."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "st4",
    "level": 61,
    "levelRange": [
      61,
      80
    ],
    "title": "上級",
    "ja": "上級",
    "emoji": "🏔️",
    "color": "#7b4fd6",
    "description": "Adult conversations with longer context and polite clarification.",
    "turnHint": "18–25 words, context plus request",
    "situations": [
      {
        "id": "st4s1",
        "title": "カフェで細かく注文",
        "icon": "☕",
        "situation": "好み・カフェイン・甘さを伝えて注文する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Hi, welcome in. Are you looking for your usual, or would you like to try something new today?",
            "ja": "いらっしゃいませ。いつものものをお探しですか？それとも今日は新しいものを試したいですか？"
          },
          {
            "speaker": "you",
            "en": "I usually drink iced coffee, but I want something a little smoother that will not keep me awake all night.",
            "ja": "普段はアイスコーヒーを飲みますが、今夜眠れなくならないように、もう少し飲みやすいものがほしいです。",
            "choices": [
              "I usually drink iced coffee, but I want something a little smoother that will not keep me awake all night.",
              "I usually take the subway downtown, but I want something a little faster that will not cost too much.",
              "I usually stay near the airport, but I want something a little quieter that will not feel too far away.",
              "I usually wear darker colors, but I want something a little lighter that will not look too formal."
            ]
          },
          {
            "speaker": "npc",
            "en": "Our half-caf vanilla latte is a good option if you want coffee flavor without too much caffeine.",
            "ja": "カフェインを控えつつコーヒー感がほしいなら、ハーフカフェのバニララテがおすすめです。"
          },
          {
            "speaker": "you",
            "en": "That sounds close to what I need. Could you make it iced and not too sweet?",
            "ja": "ちょうどよさそうです。アイスで、甘すぎないようにできますか？",
            "choices": [
              "That sounds close to what I need. Could you make it iced and not too sweet?",
              "That sounds close to what I need. Could you make the reservation for seven thirty?",
              "That sounds close to what I need. Could you make sure the room is not near the elevator?",
              "That sounds close to what I need. Could you make the return label available by email?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Absolutely. I can do half the usual syrup, or I can leave it out completely.",
            "ja": "もちろんです。シロップを通常の半分にすることも、完全に抜くこともできます。"
          },
          {
            "speaker": "you",
            "en": "Half the syrup is perfect. I still want a little flavor, just not something sugary.",
            "ja": "シロップ半分でちょうどいいです。少し風味はほしいですが、甘すぎるものは避けたいです。",
            "choices": [
              "Half the syrup is perfect. I still want a little flavor, just not something sugary.",
              "Half the fare is perfect. I still want a little time, just not something delayed.",
              "Half the room is perfect. I still want a little space, just not something huge.",
              "Half the refund is perfect. I still want a little help, just not something complicated."
            ]
          }
        ]
      },
      {
        "id": "st4s2",
        "title": "ホテルの部屋トラブル",
        "icon": "🏨",
        "situation": "エアコン不具合を説明して対応を相談する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Good evening, front desk. How can I help you with your room tonight?",
            "ja": "こんばんは、フロントです。今夜のお部屋についてどのようなご用件ですか？"
          },
          {
            "speaker": "you",
            "en": "Hi, I just checked into room 418, and the air conditioner does not seem to be working.",
            "ja": "こんにちは。418号室にチェックインしたばかりですが、エアコンが動いていないようです。",
            "choices": [
              "Hi, I just checked into room 418, and the air conditioner does not seem to be working.",
              "Hi, I just ordered the chicken sandwich, and the dressing does not seem to be on the side.",
              "Hi, I just boarded the train downtown, and the next stop does not seem to be correct.",
              "Hi, I just bought this jacket yesterday, and the zipper does not seem to be closing."
            ]
          },
          {
            "speaker": "npc",
            "en": "I am sorry about that. Is it not turning on at all, or is it just not cooling?",
            "ja": "申し訳ありません。まったく電源が入りませんか？それとも冷えないだけですか？"
          },
          {
            "speaker": "you",
            "en": "The display turns on, but the room is still warm even after I lowered the temperature.",
            "ja": "表示は点きますが、温度を下げても部屋がまだ暑いです。",
            "choices": [
              "The display turns on, but the room is still warm even after I lowered the temperature.",
              "The machine turns on, but the card is still declined even after I tried again.",
              "The app turns on, but the map is still wrong even after I refreshed it.",
              "The light turns on, but the hallway is still noisy even after I closed the door."
            ]
          },
          {
            "speaker": "npc",
            "en": "Thank you for explaining. I can send maintenance up, or we can move you if needed.",
            "ja": "ご説明ありがとうございます。メンテナンスを送ることも、必要ならお部屋を変更することもできます。"
          },
          {
            "speaker": "you",
            "en": "Maintenance is fine if they can come soon, but I would rather move rooms if it will take a while.",
            "ja": "すぐ来られるならメンテナンスで大丈夫ですが、時間がかかるなら部屋を変えたいです。",
            "choices": [
              "Maintenance is fine if they can come soon, but I would rather move rooms if it will take a while.",
              "The receipt is fine if you can email it soon, but I would rather print it if it will take a while.",
              "The salad is fine if it has no nuts, but I would rather order soup if it will take a while.",
              "The taxi is fine if it can arrive soon, but I would rather walk if it will take a while."
            ]
          }
        ]
      },
      {
        "id": "st4s3",
        "title": "会食での雑談",
        "icon": "🍷",
        "situation": "食事の話から仕事の近況につなげる",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "It is nice to finally meet outside the office. Have you been to this restaurant before?",
            "ja": "職場の外でやっと会えて嬉しいです。このレストランには来たことがありますか？"
          },
          {
            "speaker": "you",
            "en": "No, this is my first time here, but I have heard good things about the pasta.",
            "ja": "いえ、ここは初めてですが、パスタが評判だと聞いています。",
            "choices": [
              "No, this is my first time here, but I have heard good things about the pasta.",
              "No, this is my first stop here, but I have heard the train comes often.",
              "No, this is my first room here, but I have heard the hotel is quiet.",
              "No, this is my first return here, but I have heard the policy is simple."
            ]
          },
          {
            "speaker": "npc",
            "en": "The pasta is great, and the seafood dishes are usually good too if you like that.",
            "ja": "パスタはおいしいですし、シーフードが好きならそちらもたいてい良いですよ。"
          },
          {
            "speaker": "you",
            "en": "I might try the seafood, then. I am trying to avoid anything too heavy tonight.",
            "ja": "それならシーフードにしてみるかもしれません。今夜は重すぎるものを避けたいです。",
            "choices": [
              "I might try the seafood, then. I am trying to avoid anything too heavy tonight.",
              "I might try the subway, then. I am trying to avoid anything too expensive tonight.",
              "I might try the lobby, then. I am trying to avoid anything too noisy tonight.",
              "I might try the blue one, then. I am trying to avoid anything too formal tonight."
            ]
          },
          {
            "speaker": "npc",
            "en": "That makes sense. By the way, how has the new project been going for your team?",
            "ja": "それはいいですね。ところで、新しいプロジェクトはチームでどう進んでいますか？"
          },
          {
            "speaker": "you",
            "en": "It has been busy, but the direction is much clearer now than it was at the start.",
            "ja": "忙しいですが、始まった頃より今は方向性がかなり明確になっています。",
            "choices": [
              "It has been busy, but the direction is much clearer now than it was at the start.",
              "It has been sweet, but the coffee is much stronger now than it was at the start.",
              "It has been crowded, but the station is much calmer now than it was at the start.",
              "It has been expensive, but the hotel is much cheaper now than it was at the start."
            ]
          }
        ]
      },
      {
        "id": "st4s4",
        "title": "ネット回線の修理相談",
        "icon": "🔧",
        "situation": "接続不良と訪問修理の希望を伝える",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Thanks for calling. I see you requested service for your internet connection. What seems to be happening?",
            "ja": "お電話ありがとうございます。インターネット接続の修理依頼を確認しています。どのような状況ですか？"
          },
          {
            "speaker": "you",
            "en": "The connection keeps dropping every few minutes, especially when I am on a video call for work.",
            "ja": "接続が数分ごとに切れます。特に仕事のビデオ通話中に起こります。",
            "choices": [
              "The connection keeps dropping every few minutes, especially when I am on a video call for work.",
              "The coffee keeps spilling every few minutes, especially when I am walking to the office.",
              "The train keeps stopping every few minutes, especially when I am close to the airport.",
              "The jacket keeps opening every few minutes, especially when I am carrying a bag."
            ]
          },
          {
            "speaker": "npc",
            "en": "That sounds frustrating. We can send a technician tomorrow morning between eight and ten.",
            "ja": "それは困りますね。明日の午前8時から10時の間に技術者を送れます。"
          },
          {
            "speaker": "you",
            "en": "Tomorrow morning works, but could they call before arriving so I can be ready?",
            "ja": "明日の朝で大丈夫ですが、到着前に電話してもらえますか？準備しておきたいです。",
            "choices": [
              "Tomorrow morning works, but could they call before arriving so I can be ready?",
              "Tomorrow morning works, but could they cook before serving so I can eat quickly?",
              "Tomorrow morning works, but could they board before closing so I can make the flight?",
              "Tomorrow morning works, but could they wash before packing so I can wear it soon?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Yes, I can add that note to the appointment for the technician.",
            "ja": "はい、そのメモを技術者向けの予約情報に追加できます。"
          },
          {
            "speaker": "you",
            "en": "Thank you. If the issue is outside the apartment, will I still need to be home?",
            "ja": "ありがとうございます。もし問題が部屋の外にある場合でも、家にいる必要がありますか？",
            "choices": [
              "Thank you. If the issue is outside the apartment, will I still need to be home?",
              "Thank you. If the sauce is outside the sandwich, will I still need to order more?",
              "Thank you. If the gate is outside the terminal, will I still need to check in?",
              "Thank you. If the label is outside the package, will I still need to return it?"
            ]
          }
        ]
      },
      {
        "id": "st4s5",
        "title": "誤解を解く",
        "icon": "💬",
        "situation": "冷たく見えたメッセージの意図を説明する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "I wanted to ask about yesterday, because I was not sure if I misunderstood your message.",
            "ja": "昨日のことを聞きたかったです。あなたのメッセージを誤解したかもしれないと思ったので。"
          },
          {
            "speaker": "you",
            "en": "I am glad you asked. I think my message came across colder than I meant it to.",
            "ja": "聞いてくれてよかったです。私のメッセージは意図より冷たく伝わったと思います。",
            "choices": [
              "I am glad you asked. I think my message came across colder than I meant it to.",
              "I am glad you asked. I think my coffee came out stronger than I expected it to.",
              "I am glad you asked. I think my train arrived later than the schedule said it would.",
              "I am glad you asked. I think my hotel room looked smaller than the photos showed it would."
            ]
          },
          {
            "speaker": "npc",
            "en": "That makes sense. I just wanted to be sure there was not a problem.",
            "ja": "なるほど。問題がなかったか確認したかっただけです。"
          },
          {
            "speaker": "you",
            "en": "There is no problem at all. I was in a rush and did not choose my words carefully.",
            "ja": "まったく問題ありません。急いでいて、言葉を慎重に選べませんでした。",
            "choices": [
              "There is no problem at all. I was in a rush and did not choose my words carefully.",
              "There is no room at all. I was in a hurry and did not choose the hotel carefully.",
              "There is no train at all. I was in a rush and did not choose the station carefully.",
              "There is no receipt at all. I was in a hurry and did not choose the store carefully."
            ]
          },
          {
            "speaker": "npc",
            "en": "I appreciate you explaining. I did not want to assume anything.",
            "ja": "説明してくれてありがとう。勝手に決めつけたくありませんでした。"
          },
          {
            "speaker": "you",
            "en": "Thanks for checking instead of holding it in. I would rather talk things through directly.",
            "ja": "抱え込まずに確認してくれてありがとう。直接話して解決する方がいいです。",
            "choices": [
              "Thanks for checking instead of holding it in. I would rather talk things through directly.",
              "Thanks for checking instead of charging it again. I would rather pay things through online.",
              "Thanks for checking instead of waiting outside. I would rather take things through security.",
              "Thanks for checking instead of sending it back. I would rather return things through the store."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "st5",
    "level": 81,
    "levelRange": [
      81,
      100
    ],
    "title": "実践",
    "ja": "実践",
    "emoji": "🏆",
    "color": "#f5b400",
    "description": "Long adult native-style turns with context, nuance, and follow-up.",
    "turnHint": "25–35 words, natural extended turns",
    "situations": [
      {
        "id": "st5s1",
        "title": "乗り継ぎ便の変更",
        "icon": "✈️",
        "situation": "遅延で乗り継ぎを逃し代替便と費用を確認する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "I can see your first flight arrived late, so I’m going to check the remaining options while you’re here and see whether we can protect your connection tonight.",
            "ja": "最初の便が遅れて到着したことが確認できますので、残っている選択肢を確認し、今夜の乗り継ぎを確保できるか見てみます。"
          },
          {
            "speaker": "you",
            "en": "Thank you. Since the first flight was delayed, I missed my connection, and I’m hoping there is still another flight I can take tonight without changing airports or losing the whole evening.",
            "ja": "ありがとうございます。最初の便が遅れたため乗り継ぎに間に合わなかったので、空港を変えずに今夜まだ乗れる別便があると助かります。",
            "choices": [
              "Thank you. Since the first flight was delayed, I missed my connection, and I’m hoping there is still another flight I can take tonight without changing airports or losing the whole evening.",
              "Thank you. Since the restaurant was extremely busy, I missed my reservation, and I’m hoping there is still another table we can take tonight without waiting outside.",
              "Thank you. Since the service window was delayed, I missed my appointment, and I’m hoping there is still another technician who can come today.",
              "Thank you. Since the payment system was down, I missed the deadline, and I’m hoping there is still another way to complete it tonight."
            ]
          },
          {
            "speaker": "npc",
            "en": "There is one later tonight with limited seats, but I need to check your fare rules before I can confirm whether the change is covered.",
            "ja": "今夜遅くに座席数の少ない便がありますが、変更が対象になるか確認する前に、お客様の運賃ルールを確認する必要があります。"
          },
          {
            "speaker": "you",
            "en": "That makes sense. If the change is not covered automatically, could you explain the cost before making any changes to my booking?",
            "ja": "分かりました。変更が自動的に対象にならない場合、予約を変更する前に費用を説明してもらえますか？",
            "choices": [
              "That makes sense. If the change is not covered automatically, could you explain the cost before making any changes to my booking?",
              "That makes sense. If the meal is not included automatically, could you explain the price before bringing anything extra to the table?",
              "That makes sense. If the repair is not covered automatically, could you explain the cost before sending anyone to my apartment?",
              "That makes sense. If the refund is not approved automatically, could you explain the reason before closing the request?"
            ]
          },
          {
            "speaker": "npc",
            "en": "Of course. I will not change anything without confirming it with you first, especially since this was caused by an earlier delay.",
            "ja": "もちろんです。特に今回が前の遅延によるものなので、まずお客様に確認せずに何も変更しません。"
          },
          {
            "speaker": "you",
            "en": "I appreciate that. I also need to let my team know whether I will arrive tonight or tomorrow morning, so timing matters.",
            "ja": "ありがとうございます。今夜到着するのか明日の朝になるのかをチームに知らせる必要があるので、時間が重要です。",
            "choices": [
              "I appreciate that. I also need to let my team know whether I will arrive tonight or tomorrow morning, so timing matters.",
              "I appreciate that. I also need to let my friends know whether dinner is happening tonight or tomorrow, so timing matters.",
              "I appreciate that. I also need to let my landlord know whether the repair is happening today or tomorrow, so timing matters.",
              "I appreciate that. I also need to let the store know whether I am returning it today or next week, so timing matters."
            ]
          }
        ]
      },
      {
        "id": "st5s2",
        "title": "水漏れの修理相談",
        "icon": "🏠",
        "situation": "シンク下の水漏れ状況を説明して修理日程を決める",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Thanks for letting me know about the leak. Can you walk me through when you noticed it, where the water appears, and whether it is still coming out now?",
            "ja": "水漏れについて知らせてくれてありがとうございます。いつ気づいたか、今も水が出ているかを順番に説明してもらえますか？"
          },
          {
            "speaker": "you",
            "en": "I first noticed it last night under the kitchen sink, and this morning the cabinet floor was still damp even though I had put a towel down.",
            "ja": "昨夜キッチンのシンク下で最初に気づき、タオルを敷いていたにもかかわらず今朝もキャビネットの床がまだ湿っていました。",
            "choices": [
              "I first noticed it last night under the kitchen sink, and this morning the cabinet floor was still damp even though I had put a towel down.",
              "I first noticed it yesterday at the coffee shop, and this morning the drink still tasted too sweet even though I had asked for less syrup.",
              "I first noticed it last week near the airport, and this morning the flight was still delayed even though the schedule had already changed.",
              "I first noticed it yesterday at the store, and this morning the jacket still felt too small even though I tried a different size."
            ]
          },
          {
            "speaker": "npc",
            "en": "That sounds like it needs attention soon. I can try to send a plumber this afternoon, but I want to make sure it is not an emergency.",
            "ja": "早めの対応が必要そうですね。今日の午後に配管業者を送れるか試しますが、緊急ではないか確認したいです。"
          },
          {
            "speaker": "you",
            "en": "There is not a steady stream, but a small amount keeps collecting, so I am avoiding the sink and keeping a towel underneath it.",
            "ja": "水が流れ続けているわけではありませんが、少量がたまり続けるので、シンクを使わず下にタオルを置いています。",
            "choices": [
              "There is not a steady stream, but a small amount keeps collecting, so I am avoiding the sink and keeping a towel underneath it.",
              "There is not a direct train, but a later one keeps running, so I am avoiding the express line and waiting near the platform.",
              "There is not a regular table, but a small booth keeps opening, so I am avoiding the crowded bar and staying near the host stand.",
              "There is not a full refund, but a store credit keeps applying, so I am avoiding another purchase until I understand the policy."
            ]
          },
          {
            "speaker": "npc",
            "en": "That is the right thing to do for now. If the plumber can come after three, will someone be there to let them in?",
            "ja": "今のところそれで合っています。配管業者が3時以降に来られる場合、誰か中に入れられますか？"
          },
          {
            "speaker": "you",
            "en": "Yes, I can be home after three, and I can also send a photo if that helps the plumber understand the issue before arriving.",
            "ja": "はい、3時以降なら家にいられますし、到着前に配管業者が状況を理解する助けになるなら写真も送れます。",
            "choices": [
              "Yes, I can be home after three, and I can also send a photo if that helps the plumber understand the issue before arriving.",
              "Yes, I can be there after three, and I can also send the address if that helps everyone find the restaurant before dinner.",
              "Yes, I can be available after three, and I can also send the receipt if that helps the store process the return faster.",
              "Yes, I can be online after three, and I can also send the notes if that helps the team prepare before the meeting."
            ]
          }
        ]
      },
      {
        "id": "st5s3",
        "title": "会議後の確認",
        "icon": "💼",
        "situation": "会議後に論点・承認者・期限を整理する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "Thanks again for joining the call earlier. I wanted to follow up now while the main decisions and open questions are still fresh.",
            "ja": "先ほどの通話に参加していただきありがとうございました。主な決定事項と未解決の質問がまだ新しいうちにフォローアップしたいと思いました。"
          },
          {
            "speaker": "you",
            "en": "Thanks for reaching out. My main takeaway is that the timeline is possible, but only if we confirm the requirements, owner, and approval process this week.",
            "ja": "ご連絡ありがとうございます。私の主な理解は、今週中に要件と承認プロセスを確認できればスケジュールは可能だということです。",
            "choices": [
              "Thanks for reaching out. My main takeaway is that the timeline is possible, but only if we confirm the requirements, owner, and approval process this week.",
              "Thanks for reaching out. My main takeaway is that dinner is possible, but only if we confirm the menu and reservation time this week.",
              "Thanks for reaching out. My main takeaway is that the repair is possible, but only if we confirm the parts and appointment window this week.",
              "Thanks for reaching out. My main takeaway is that the refund is possible, but only if we confirm the receipt and original purchase date this week."
            ]
          },
          {
            "speaker": "npc",
            "en": "That matches my understanding. The one piece I am still unsure about is who has final approval if the scope changes slightly.",
            "ja": "私の理解とも一致しています。まだ不明なのは、範囲が少し変わった場合に誰が最終承認するかです。"
          },
          {
            "speaker": "you",
            "en": "I can check that on our side today and send you a clear answer by tomorrow morning, as long as that timing works for you.",
            "ja": "その点はこちら側で今日確認し、もしそのタイミングで問題なければ、明日の朝までに明確な回答を送れます。",
            "choices": [
              "I can check that on our side today and send you a clear answer by tomorrow morning, as long as that timing works for you.",
              "I can check that with the restaurant today and send you a clear menu by tomorrow morning, as long as that timing works for you.",
              "I can check that with the hotel today and send you a clear address by tomorrow morning, as long as that timing works for you.",
              "I can check that with the store today and send you a clear label by tomorrow morning, as long as that timing works for you."
            ]
          },
          {
            "speaker": "npc",
            "en": "That would be perfect. Once we know the approval path, we can decide whether Friday is still realistic or too risky.",
            "ja": "それで完璧です。承認ルートが分かれば、金曜日がまだ現実的か、それともリスクが高すぎるか判断できます。"
          },
          {
            "speaker": "you",
            "en": "Agreed. I do not want to promise Friday before we know the approval path, but I will push for a quick answer.",
            "ja": "同意です。承認ルートが分かる前に金曜日と約束したくありませんが、早い回答を得られるよう進めます。",
            "choices": [
              "Agreed. I do not want to promise Friday before we know the approval path, but I will push for a quick answer.",
              "Agreed. I do not want to order dinner before we know the allergy details, but I will ask for a quick answer.",
              "Agreed. I do not want to book the room before we know the cancellation policy, but I will check for a quick answer.",
              "Agreed. I do not want to return the item before we know the warranty rules, but I will ask for a quick answer."
            ]
          }
        ]
      },
      {
        "id": "st5s4",
        "title": "仕事上の認識合わせ",
        "icon": "🗣️",
        "situation": "会議での不満と必要な情報を冷静に説明する",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "I wanted to check in about the project, because I sensed some frustration in yesterday’s meeting and did not want to ignore it.",
            "ja": "昨日の会議で少し不満があるように感じたので、無視したくなくてプロジェクトについて確認したいと思いました。"
          },
          {
            "speaker": "you",
            "en": "I appreciate you bringing it up. I was frustrated, but mostly because I felt we were making decisions without enough information about the customer impact and possible risks.",
            "ja": "話題にしてくれてありがとうございます。不満はありましたが、主に影響に関する十分な情報なしに決定していると感じたからです。",
            "choices": [
              "I appreciate you bringing it up. I was frustrated, but mostly because I felt we were making decisions without enough information about the customer impact and possible risks.",
              "I appreciate you bringing it up. I was hungry, but mostly because I felt we were ordering dinner without enough information about the ingredients.",
              "I appreciate you bringing it up. I was worried, but mostly because I felt we were booking travel without enough information about the schedule.",
              "I appreciate you bringing it up. I was confused, but mostly because I felt we were returning items without enough information about the policy."
            ]
          },
          {
            "speaker": "npc",
            "en": "That is helpful to hear. What information do you think would have made the decision easier or more comfortable for you?",
            "ja": "それを聞けて助かります。どんな情報があれば、あなたにとって判断しやすく、安心できたと思いますか？"
          },
          {
            "speaker": "you",
            "en": "For me, the biggest gap was the customer impact. I wanted to understand who would be affected and how serious the issue might become.",
            "ja": "私にとって一番の不足は顧客への影響でした。誰に影響が出るのか、その問題がどれほど深刻になり得るのかを理解したかったです。",
            "choices": [
              "For me, the biggest gap was the customer impact. I wanted to understand who would be affected and how serious the issue might become.",
              "For me, the biggest gap was the dinner price. I wanted to understand who would pay and how expensive the meal might become.",
              "For me, the biggest gap was the hotel location. I wanted to understand who would stay and how inconvenient the trip might become.",
              "For me, the biggest gap was the return policy. I wanted to understand who would approve it and how strict the process might become."
            ]
          },
          {
            "speaker": "npc",
            "en": "That is fair. I can see how the conversation moved too quickly, especially if that part was not clearly explained.",
            "ja": "それはもっともです。その部分が明確に説明されていなかったなら、会話が早く進みすぎたと感じるのも分かります。"
          },
          {
            "speaker": "you",
            "en": "I am not trying to slow everything down. I just think a quick impact check would help us avoid much bigger problems later.",
            "ja": "すべてを遅らせたいわけではありません。ただ、簡単な影響確認をすることで、後のもっと大きな問題を避けられると思います。",
            "choices": [
              "I am not trying to slow everything down. I just think a quick impact check would help us avoid much bigger problems later.",
              "I am not trying to change the whole order. I just think a quick ingredient check would help us avoid bigger problems later.",
              "I am not trying to delay the whole trip. I just think a quick traffic check would help us avoid bigger problems later.",
              "I am not trying to return the whole purchase. I just think a quick damage check would help us avoid bigger problems later."
            ]
          }
        ]
      },
      {
        "id": "st5s5",
        "title": "財布紛失の相談",
        "icon": "👛",
        "situation": "財布をなくした状況を説明して対応を聞く",
        "dialogue": [
          {
            "speaker": "npc",
            "en": "I can help you file a lost item report. Can you describe the wallet and tell me where you last remember using it?",
            "ja": "遺失物届の作成をお手伝いできます。財布の特徴と最後に使った場所を説明してもらえますか？"
          },
          {
            "speaker": "you",
            "en": "It is a small black leather wallet, and I last remember using it at the coffee shop near Gate B about twenty minutes ago.",
            "ja": "小さい黒い革の財布で、最後に使ったのは約20分前、Bゲート近くのコーヒーショップです。",
            "choices": [
              "It is a small black leather wallet, and I last remember using it at the coffee shop near Gate B about twenty minutes ago.",
              "It is a small black carry-on bag, and I last remember placing it in the overhead bin near Row B after boarding.",
              "It is a small blue notebook, and I last remember writing in it during the meeting near the window this morning.",
              "It is a small white receipt, and I last remember putting it in the shopping bag near the register yesterday."
            ]
          },
          {
            "speaker": "npc",
            "en": "Thank you. Do you remember whether it had any cards, cash, identification, or anything else important inside?",
            "ja": "ありがとうございます。中にカード、現金、身分証、または他に重要なものが入っていたか覚えていますか？"
          },
          {
            "speaker": "you",
            "en": "Yes, it had two credit cards, my driver’s license, and a little cash, but I do not think there was anything else important.",
            "ja": "はい、クレジットカード2枚、運転免許証、少しの現金が入っていましたが、他に重要なものはなかったと思います。",
            "choices": [
              "Yes, it had two credit cards, my driver’s license, and a little cash, but I do not think there was anything else important.",
              "Yes, it had two sandwiches, a small salad, and a little sauce, but I do not think there was anything else spicy.",
              "Yes, it had two tickets, my boarding pass, and a small note, but I do not think there was anything else urgent.",
              "Yes, it had two shirts, my receipt, and a small label, but I do not think there was anything else expensive."
            ]
          },
          {
            "speaker": "npc",
            "en": "I will enter that now. If someone turns it in, we can contact you by phone or email, whichever you prefer.",
            "ja": "今それを入力します。誰かが届けてくれた場合、電話かメールのどちらでも希望する方法で連絡できます。"
          },
          {
            "speaker": "you",
            "en": "Email is best, because I may need to cancel my cards soon, and my phone could be tied up for a while.",
            "ja": "メールが一番いいです。すぐにカードを停止する必要があるかもしれず、電話はしばらく使っている可能性があるので。",
            "choices": [
              "Email is best, because I may need to cancel my cards soon, and my phone could be tied up for a while.",
              "Email is best, because I may need to change my flight soon, and the gate could be crowded for a while.",
              "Email is best, because I may need to move my room soon, and the front desk could be busy for a while.",
              "Email is best, because I may need to return the item soon, and the store could be crowded for a while."
            ]
          }
        ]
      }
    ]
  }
];

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
      if (typeof window.speechSynthesis.removeEventListener === 'function') {
        window.speechSynthesis.removeEventListener('voiceschanged', handler);
      } else if ('onvoiceschanged' in window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
    if (typeof window.speechSynthesis.addEventListener === 'function') {
      window.speechSynthesis.addEventListener('voiceschanged', handler);
    } else if ('onvoiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = handler;
    }
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


let _audioManifestCache = undefined;
async function _loadManifest() {
  if (_audioManifestCache !== undefined) return _audioManifestCache;
  _audioManifestCache = null;
  if (typeof fetch !== 'function') return null;
  try {
    const res = await fetch('audio/manifest.json', { cache: 'no-store' });
    if (!res || !res.ok) return null;
    _audioManifestCache = await res.json();
    return _audioManifestCache;
  } catch (e) {
    return null;
  }
}

// 直前のオーディオを止めるため、グローバルに参照を持つ
let _currentAudio = null;

/** 録音済みm4aファイルで再生を試みる。成功なら true を返す */
async function _speakFromFile(text, rate) {
  const manifest = await _loadManifest();
  if (!manifest) return false;
  const path = manifest[text];
  if (!path) return false;
  // 既存の音声を止める
  if (_currentAudio) {
    try { _currentAudio.pause(); _currentAudio.src = ''; } catch (e) {}
    _currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  return new Promise((resolve) => {
    const audio = new Audio(path);
    _currentAudio = audio;
    audio.playbackRate = rate;
    let resolved = false;
    const done = (ok) => { if (!resolved) { resolved = true; resolve(ok); } };
    audio.onended = () => done(true);
    audio.onerror = () => done(false);
    // 万一 onended が発火しないケースのフォールバック
    setTimeout(() => done(true), 30000);
    audio.play().catch(() => done(false));
  });
}

async function speak(text, { rate = 0.95 } = {}) {
  // 録音ファイルが使えるならそれを優先 (高品質)。失敗しても必ずTTSへ進む。
  let ok = false;
  try { ok = await _speakFromFile(text, rate); } catch (e) { ok = false; }
  if (ok) return;
  // フォールバック: ブラウザTTS
  if (!('speechSynthesis' in window)) return;
  warmUpTTS();
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
  if (_currentAudio) {
    try { _currentAudio.pause(); _currentAudio.src = ''; } catch (e) {}
    _currentAudio = null;
  }
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
    // All stages are open while testing high-level content.
    return true;
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
