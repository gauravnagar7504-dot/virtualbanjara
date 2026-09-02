import { Story, Recipe, VideoItem, FoodTrail, CityFoodTrail, TrailRecommendation, Testimonial, CollaborationService } from '../types';

export const BRAND_INFO = {
 name: 'VIRTUAL BANJARA®',
 founder: 'Ashish Wadhwani',
 founderImage: 'https://virtualbanjara.com/wp-content/uploads/2024/02/IMG_4388.jpg',
 founderFieldImage: 'https://virtualbanjara.com/wp-content/uploads/2024/02/IMG-1693.jpg',
 tagline: 'One Bite, One Story at a Time',
 positioning: 'Born from Rajasthan. Wandering through India.',
 description: 'A premium culinary and cultural storytelling media brand dedicated to discovering, documenting, and promoting India’s lost, hidden, and authentic recipes. We go beyond reviews to create food-led narratives that capture process, heritage, people, hospitality, and real experiences.',
 proverb: {
 hindi: 'जो फिरे सो चरे, खूंटा सु बंधे भूखा मरे।',
 english: 'He who wanders, grazes; he who is tied to the post, starves.',
 origin: 'Ancient Rajasthani Nomadic Proverb'
 },
 metrics: {
 youtubeSubscribers: '726K+',
 youtubeVideos: '807+',
 totalViews: '120M+',
 storiesDocumented: '150+',
 regionsCovered: '18+',
 yearsOfStorytelling: '6+'
 },
   socialLinks: {
    youtube: 'https://www.youtube.com/@VirtualBanjara',
    facebook: 'https://www.facebook.com/virtualbanjara?mibextid=LQQJ4d',
    instagram: 'https://www.instagram.com/virtualbanjara/?igshid=YmMyMTA2M2Y%3D',
    linkedin: 'https://in.linkedin.com/company/virtual-banjara',
    whatsapp: 'https://whatsapp.com/channel/0029Vb7Q9x87IUYcRLcKRb06',
    email: 'collaboration@virtualbanjara.com',
    generalEmail: 'contact@virtualbanjara.com',
    phone: '+91-87679-49131',
    location: 'Jaipur, Rajasthan, India (Available Worldwide)'
  }
};

export const STORIES: Story[] = [
 {
 "id": "story-1",
 "slug": "experiencing-royal-mewari-cuisine-with-shri-ji-huzoor-dr-lakshyaraj-singh-mewar-at-shikarbadi",
 "title": "Experiencing Royal Mewari Cuisine with Shri Ji Huzoor Dr. Lakshyaraj Singh Mewar at Shikarbadi",
 "titleHindi": "शिकारबाड़ी में श्री जी हुजूर डॉ. लक्षराज सिंह मेवाड़ के साथ शाही मेवाड़ी व्यंजनों का अनुभव",
 "excerpt": "There is an old Mewari saying — “बाजरो छोड़ मक्की खानो, और मेवाड़ छोड़ कटे नि जानों।” A phrase that beautifully reflects the deep emotional connection people share with the land, food, and culture of Mewar. | मेवाड़ की ए...",
 "content": [
 "There is an old Mewari saying — “बाजरो छोड़ मक्की खानो, और मेवाड़ छोड़ कटे नि जानों।” A phrase that beautifully reflects the deep emotional connection people share with the land, food, and culture of Mewar. | मेवाड़ की एक पुरानी कहावत है — “बाजरो छोड़ मक्की खानो, और मेवाड़ छोड़ कटे नि जानों।” यह कहावत मेवाड़ की मिट्टी, भोजन और संस्कृति से लोगों के .",
 "गहरे भावनात्मक जुड़ाव को खूबसूरती से दर्शाती है। Perhaps that is exactly what one feels while spending an evening at Shikarbadi with Shri Ji Huzoor Dr. Lakshyaraj Singh Mewar — where royal heritage, lakeside calm, firewood cooking, and heartfelt hospitality come together effortlessly. | शायद यही एहसास शिकारबाड़ी में श्री जी हुजूर डॉ. लक्षराज सिंह म.",
 "ेवाड़ के साथ एक शाम बिताते हुए होता है — जहाँ शाही विरासत, झील किनारे की शांति, लकड़ी की आग पर पकता भोजन और आत्मीय मेहमाननवाज़ी सहज रूप से एक साथ जीवित हो उठते हैं। As coal embers slowly glowed beside the lake and stories of Mewar unfolded through food, the evening felt less like a cooking session and more like stepping into the living soul of Raja."
 ],
 "location": {
 "city": "Jaipur",
 "state": "Rajasthan"
 },
 "category": "Royal & Heritage",
 "author": "Ashish Wadhwani",
 "readTime": "34 min read",
 "date": "Jun 3, 2026",
 "heroImage": "https://virtualbanjara.com/wp-content/uploads/2026/06/STAR5265.jpg",
 "gallery": [
 "https://virtualbanjara.com/wp-content/uploads/2026/06/STAR5716.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/06/STAR5765.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/06/STAR5743.jpg"
 ],
 "youtubeId": "1CmPpkOt_TA",
 "featured": true
 },
 {
 "id": "story-2",
 "slug": "bikaneri-laal-maas-at-chitrakatha-a-tale-of-patience-and-kachri",
 "title": "Bikaneri Laal Maas at ChitraKatha: A Tale of Patience and Kachri",
 "titleHindi": "चित्रकथा में बीकानेरी लाल मांस: सब्र और काचरी की एक कहानी",
 "excerpt": "In Rajasthan, they say water changes every four kos , dialect changes every five, and the recipe for Laal Maas changes every eight kos . | राजस्थान में कहते हैं कि चार कोस पर पानी, पांच कोस पर वाणी और आठ कोस पर लाल मांस ...",
 "content": [
 "In Rajasthan, they say water changes every four kos , dialect changes every five, and the recipe for Laal Maas changes every eight kos . | राजस्थान में कहते हैं कि चार कोस पर पानी, पांच कोस पर वाणी और आठ कोस पर लाल मांस की रेसिपी बदल जाती है। At ChitraKatha , hidden in the shadow of the historic Hathroi Fort in Jaipur, this legendary dish takes on .",
 "an entirely distinct identity. | जयपुर में ऐतिहासिक हथरोई किले की छाया में छिपे चित्रकथा में, इस प्रसिद्ध व्यंजन को एक बिल्कुल अलग पहचान मिलती है। Prepared with an emphasis on time-tested patience, this version defies modern shortcuts to honor the slow, fiery spirit of Bikaner. | समय की कसौटी पर परखे गए सब्र के साथ तैयार किया गया यह संस्करण बीकानेर.",
 " की धीमी और तीखी भावना का सम्मान करने के लिए आधुनिक शॉर्टकट को खारिज करता है। The Keeper of Stories: Welcome to ChitraKatha | कहानियों के संरक्षक: चित्रकथा में आपका स्वागत है ChitraKatha is more than a boutique stay; it is a repository of Jaipur&#8217;s foundational history. | चित्रकथा एक बुटीक स्टे से कहीं अधिक है; यह जयपुर के बुनियादी इतिहा."
 ],
 "location": {
 "city": "Bikaner",
 "state": "Rajasthan"
 },
 "category": "Royal & Heritage",
 "author": "Ashish Wadhwani",
 "readTime": "25 min read",
 "date": "May 18, 2026",
 "heroImage": "https://virtualbanjara.com/wp-content/uploads/2026/05/Chitra-Katha3.jpg",
 "gallery": [
 "https://virtualbanjara.com/wp-content/uploads/2026/05/Chitra-Katha1-1.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/05/Chitra-Katha2.jpg"
 ],
 "youtubeId": "1CmPpkOt_TA",
 "featured": true
 },
 {
 "id": "story-3",
 "slug": "gaon-ri-dhani-indias-first-chemical-free-haven-for-pure-rajasthani-flavors",
 "title": "Gaon Ri Dhani: India’s First Chemical-Free Haven for Pure Rajasthani Flavors",
 "titleHindi": "गाँव री ढाणी: शुद्ध राजस्थानी स्वादों के लिए भारत का पहला केमिकल-मुक्त स्वर्ग",
 "excerpt": "Imagine a place where &#8220;green vegetables&#8221; are off the menu because they aren&#8217;t guaranteed to be organic. | एक ऐसी जगह की कल्पना करें जहाँ &#8220;हरी सब्जियाँ&#8221; मेनू से बाहर हैं क्योंकि उनके जैविक हो...",
 "content": [
 "Imagine a place where &#8220;green vegetables&#8221; are off the menu because they aren&#8217;t guaranteed to be organic. | एक ऐसी जगह की कल्पना करें जहाँ &#8220;हरी सब्जियाँ&#8221; मेनू से बाहर हैं क्योंकि उनके जैविक होने की गारंटी नहीं है। Instead, you are treated to the ancient, sun-dried treasures of the desert, cooked with oils and grains stra.",
 "ight from a chemical-free factory. | इसके बजाय, आपको मरुस्थल के प्राचीन, धूप में सुखाए गए खजानों का स्वाद चखाया जाता है, जिन्हें सीधे केमिकल-मुक्त फैक्ट्री से आए तेलों और अनाजों के साथ पकाया जाता है। Presented by HITECH NATURAL FOODS , Gaon Ri Dhani is located on the Khatushyam Road at the Palsana Bypass. It is a restaurant that doesn&#8217;t just .",
 "serve food, but a promise of health, village heritage, and authentic Satvik flavors. | HITECH NATURAL FOODS द्वारा प्रस्तुत, गाँव री ढाणी पलसाना बाईपास पर खाटूश्याम रोड पर स्थित है। यह एक ऐसा रेस्टोरेंट है जो न केवल भोजन परोसता है, बल्कि स्वास्थ्य, ग्रामीण विरासत और प्रामाणिक सात्विक स्वादों का वादा भी करता है। The Visionary: Ramu Ram Choudhary ."
 ],
 "location": {
 "city": "Jaipur",
 "state": "Rajasthan"
 },
 "category": "Royal & Heritage",
 "author": "Ashish Wadhwani",
 "readTime": "21 min read",
 "date": "May 8, 2026",
 "heroImage": "https://virtualbanjara.com/wp-content/uploads/2026/05/Gaon_Ri_Dhani1.jpg",
 "gallery": [
 "https://virtualbanjara.com/wp-content/uploads/2026/05/Gaon-Ri-Dhani6.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/05/Gaon-Ri-Dhani9.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/05/Gaon-Ri-Dhani5-1.jpg"
 ],
 "youtubeId": "1CmPpkOt_TA",
 "featured": true
 },
 {
 "id": "story-4",
 "slug": "the-golden-hearth-of-rajasthan-a-feast-of-purity-in-the-wild",
 "title": "The Golden Hearth of Rajasthan: A Feast of Purity in the Wild",
 "titleHindi": "राजस्थान का स्वर्ण चूल्हा: जंगल में शुद्धता का एक महाभोज",
 "excerpt": "In the untouched silence of the Rajasthani wild, a fire is stoked not just for warmth, but to celebrate the ancient bond between man, cattle, and the earth. | राजस्थान के अनछुए जंगल की शांति में, आग केवल गर्मी के लिए नही...",
 "content": [
 "In the untouched silence of the Rajasthani wild, a fire is stoked not just for warmth, but to celebrate the ancient bond between man, cattle, and the earth. | राजस्थान के अनछुए जंगल की शांति में, आग केवल गर्मी के लिए नहीं, बल्कि इंसान, पशु और धरती के बीच के प्राचीन बंधन का जश्न मनाने के लिए जलाई जाती है। This is a story of a feast where every drop .",
 "of ghee is a testament to purity and every bite tells a tale of the soil. | यह एक ऐसे भोज की कहानी है जहाँ घी की हर बूंद शुद्धता का प्रमाण है और हर निवाला मिट्टी की एक दास्तान सुनाता है। The Guardians of the Kankrej: Meet the Rabari Community | कांकरेज के रक्षक: रबारी समुदाय से मिलिए We traveled twenty kilometers deep into the scrub forests n.",
 "ear Neem Ka Thana to meet a community of modern-day nomads and guardians of the majestic Kankrej cows. | हम नीम का थाना के पास झाड़ीदार जंगलों में बीस किलोमीटर गहरे तक गए, जहाँ हमारा सामना खानाबदोशों और राजसी कांकरेज गायों के रक्षकों के एक समुदाय से हुआ। Leading this mission of purity is the visionary behind Priyal Dairy, who works hand-in-hand wit."
 ],
 "location": {
 "city": "Jaipur",
 "state": "Rajasthan"
 },
 "category": "Royal & Heritage",
 "author": "Ashish Wadhwani",
 "readTime": "31 min read",
 "date": "Feb 14, 2026",
 "heroImage": "https://virtualbanjara.com/wp-content/uploads/2026/02/Priyal-dairy-Jungle-field.jpg",
 "gallery": [
 "https://virtualbanjara.com/wp-content/uploads/2026/02/Priyal-dairy-Jungle-field1.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/02/Priyal-dairy-Jungle-field2.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/02/Priyal-dairy-Jungle-field3.jpg"
 ],
 "youtubeId": "1CmPpkOt_TA",
 "featured": false
 },
 {
 "id": "story-5",
 "slug": "royal-mutton-do-pyaza-narangi",
 "title": "Royal Mutton Do Pyaza Narangi",
 "titleHindi": "शाही मटन दो प्याज़ा नारंगी",
 "excerpt": "In the heart of Bikaner, inside the historic Cavalry Villa, lies a forgotten royal delicacy of Rajasthan — Mutton Do Pyaza Narangi, a rare “Summer Mutton” recipe designed for desert heat. | बीकानेर के दिल में, ऐतिहासिक क...",
 "content": [
 "In the heart of Bikaner, inside the historic Cavalry Villa, lies a forgotten royal delicacy of Rajasthan — Mutton Do Pyaza Narangi, a rare “Summer Mutton” recipe designed for desert heat. | बीकानेर के दिल में, ऐतिहासिक कैवेलरी विला के भीतर छुपा है राजस्थान का एक भूला-बिसरा शाही व्यंजन — मटन दो प्याज़ा नारंगी, जो रेगिस्तान की गर्मी के लिए बनाई गई एक.",
 " अनोखी “समर मटन” रेसिपी है। Unlike heavy, spice-laden mutton curries, this dish values freshness and citrus aroma over heat, using only desi ghee and cumin to let orange juice shine. | भारी मसालों वाली मटन करी से अलग, यह व्यंजन तीखेपन की बजाय ताज़गी और साइट्रस खुशबू पर ज़ोर देता है, जहाँ देसी घी और जीरा संतरे के स्वाद को उभरने देते हैं। Preserved b.",
 "y an ex-Army officer and his wife at their boutique homestay, this recipe reflects culinary traditions slowly disappearing from modern kitchens. | एक पूर्व आर्मी अधिकारी और उनकी पत्नी द्वारा संचालित बुटीक होमस्टे में संरक्षित यह रेसिपी उन पाक परंपराओं की झलक देती है जो आज की रसोईयों से लुप्त होती जा रही हैं। At the final stage, fresh orange juice i."
 ],
 "location": {
 "city": "Jaipur",
 "state": "Rajasthan"
 },
 "category": "Royal & Heritage",
 "author": "Ashish Wadhwani",
 "readTime": "15 min read",
 "date": "Jan 31, 2026",
 "heroImage": "https://virtualbanjara.com/wp-content/uploads/2026/02/MUTTON-दो-प्याज़ा-Narangi-1-1.jpg",
 "gallery": [
 "https://virtualbanjara.com/wp-content/uploads/2026/02/MUTTON-दो-प्याज़ा-Narangi-2-1.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/02/MUTTON-दो-प्याज़ा-Narangi-4-1.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2026/02/MUTTON-दो-प्याज़ा-Narangi-3-1.jpg"
 ],
 "youtubeId": "1CmPpkOt_TA",
 "featured": false
 },
 {
 "id": "story-6",
 "slug": "a-winter-feast-with-mr-ankur-bedi-the-man-the-host-the-cook",
 "title": "A Winter Feast with Mr. Ankur Bedi — The Man, The Host & The Cook",
 "excerpt": "⭐ Who is Mr. Ankur Bedi? Mr. Ankur Bedi is the kind of person who turns a simple evening into a memory — the warmth of his welcome, the depth of his cooking, and the honesty of his stories make the experience unforgettab...",
 "content": [
 "⭐ Who is Mr. Ankur Bedi? Mr. Ankur Bedi is the kind of person who turns a simple evening into a memory — the warmth of his welcome, the depth of his cooking, and the honesty of his stories make the experience unforgettable. | श्री अंकुर बेदी वह इंसान हैं जो एक साधारण शाम को यादगार बना देते हैं — उनका आतिथ्य, उनकी पाक कला और उनकी सादगी से भरी कहानिय.",
 "ाँ इस अनुभव को अविस्मरणीय बना देती हैं। He comes from Alwar , a city known for its natural beauty, traditional food culture, and warm-hearted people. His family has been in the business of Pre-Engineered Steel Buildings for more than four decades — a business started by his father in 1981. | वे अलवर से हैं — एक ऐसा शहर जो अपनी खूबसूरती, पारंपरिक भो.",
 "जन और बड़े दिल वाले लोगों के लिए मशहूर है। उनका परिवार पिछले चार दशकों से प्री-इंजीनियर्ड स्टील बिल्डिंग्स के व्यवसाय में है — यह काम उनके पिता ने 1981 में शुरू किया था। Despite being a busy and successful entrepreneur, Mr. Bedi never lets go of what grounds him — cooking, friends, stories, and the joy of feeding people. | सफल और व्यस्त उद्यमी होने."
 ],
 "location": {
 "city": "Jaipur",
 "state": "Rajasthan"
 },
 "category": "Royal & Heritage",
 "author": "Ashish Wadhwani",
 "readTime": "25 min read",
 "date": "Dec 9, 2025",
 "heroImage": "https://virtualbanjara.com/wp-content/uploads/2025/12/Alwar-के-बड़े-bussiness-man1.webp",
 "gallery": [
 "https://virtualbanjara.com/wp-content/uploads/2025/12/Alwar-के-बड़े-bussiness-man6.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2025/12/Alwar-के-बड़े-bussiness-man7.jpg",
 "https://virtualbanjara.com/wp-content/uploads/2025/12/Alwar-के-बड़े-bussiness-man5.webp"
 ],
 "youtubeId": "1CmPpkOt_TA",
 "featured": false
 }
];

export const RECIPES: Recipe[] = [
 {
 id: 'recipe-1',
 slug: 'experiencing-royal-mewari-cuisine-with-shri-ji-huzoor-dr-lakshyaraj-singh-mewar-at-shikarbadi',
 title: 'Experiencing Royal Mewari Cuisine with Shri Ji Huzoor Dr. Lakshyaraj Singh Mewar at Shikarbadi',
 youtubeId: 'cbsdcWiNHk0',
 category: 'Fish',
 dietary: 'non-veg',
 cuisine: 'Royal Mewari Heritage',
 region: 'Udaipur, Rajasthan',
 prepTime: '30 mins',
 cookTime: '45 mins',
 servings: '4-6 servings',
 difficulty: 'Royal Sigdi Heritage',
 heroImage: '/recipes/shikarbadi/Banner.jpg',
 gallery: [
 "/recipes/shikarbadi/3S9A0088-1024x1536.jpg",
 "/recipes/shikarbadi/3S9A0099-1024x1536.jpg",
 "/recipes/shikarbadi/3S9A0138-1024x1536.jpg",
 "/recipes/shikarbadi/Screenshot-2026-06-03-at-18.37.08-1536x917.jpg",
 "/recipes/shikarbadi/Screenshot-2026-06-03-at-18.37.45-1536x982.jpg",
 "/recipes/shikarbadi/Screenshot-2026-06-03-at-18.40.55-1536x1179.jpg",
 "/recipes/shikarbadi/Screenshot-2026-06-03-at-18.44.33-1536x942.jpg",
 "/recipes/shikarbadi/STAR5331-1536x1024.jpg",
 "/recipes/shikarbadi/STAR5389-1536x1024.jpg",
 "/recipes/shikarbadi/STAR5477-1536x1024_1_.jpg",
 "/recipes/shikarbadi/STAR5477-1536x1024.jpg",
 "/recipes/shikarbadi/STAR5528-1536x1024.jpg",
 "/recipes/shikarbadi/STAR5597-1024x1536.jpg",
 "/recipes/shikarbadi/STAR5619-1536x1024.jpg",
 "/recipes/shikarbadi/STAR5743-1536x1024.jpg",
 "/recipes/shikarbadi/STAR5765-1536x1024.jpg"
 ],
 story: 'An extraordinary royal evening at Shikarbadi, Udaipur with Shri Ji Huzoor Dr. Lakshyaraj Singh Mewar. More than just food, this is a living culinary heritage — unscripted conversations under the open sky, fresh lake breeze, glowing sigdi charcoal embers, and three ancestral Mewari culinary masterpieces: Sigdi Barbecued Fish, Hand-Chopped Fish Keema in Clay Pot, and rustic Makki Ka Paaniya cooked inside fresh khakra leaves.',
 ingredients: [
 {
 section: 'Recipe I — Shikar-Style Sigdi Barbecued Fish',
 items: [
 { name: 'Fresh Sanwal Fish (Large Steaks/Fillets)', amount: '1 kg' },
 { name: 'Cold-Pressed Mustard Oil', amount: '100 ml' },
 { name: 'Stone Sil-Batta Ginger-Garlic Paste', amount: '2 tbsp' },
 { name: 'Mathania Red Chilli & Coarse Spices', amount: '2 tbsp' },
 { name: 'Fresh Lemon Juice & Rock Salt', amount: 'To taste' }
 ]
 },
 {
 section: 'Recipe II — Hand-Chopped Fish Keema in Clay Pot',
 items: [
 { name: 'Hand-Chopped Sanwal Fish Keema (Coarse Texture)', amount: '800 g' },
 { name: 'Raw Mustard Oil', amount: '150 ml' },
 { name: 'Sliced Onions & Crushed Garlic', amount: '3 medium + 15 cloves' },
 { name: 'Whole Spices: Cloves, Black Pepper, Coriander Seeds, Ajwain, Cardamom, Bay Leaf', amount: '2 tbsp' },
 { name: 'Rock Salt & Basic Spices', amount: 'To taste' },
 { name: 'Fresh Chopped Green Coriander', amount: '1 bunch' }
 ]
 },
 {
 section: 'Recipe III — Makki Ka Paaniya (Rustic Khakra Leaf Bread)',
 items: [
 { name: 'Maize Flour (Makki Ka Atta)', amount: '500 g' },
 { name: 'Whole Milk & Warm Water', amount: 'For kneading' },
 { name: 'Fennel Seeds (Saunf) & Carom Seeds (Ajwain)', amount: '1 tbsp each' },
 { name: 'Fresh Khakra Leaves (for wrapping)', amount: '8-10 large leaves' },
 { name: 'Pure Desi Ghee', amount: 'For serving' }
 ]
 }
 ],
 method: [
 {
 step: 1,
 title: 'Shikar Barbecued Fish on Sigdi',
 instruction: 'Marinate the fresh Sanwal fish fillets in cold-pressed mustard oil, freshly ground ginger-garlic paste, Mathania chillies, lemon juice, and rock salt. Place on an open sigdi grill directly over slow charcoal coals, turning gently until smoky and seared.',
 chefTip: 'The charcoal smoke imparts an earthy, wild hunting camp (shikar) flavor profile that cannot be matched on modern stoves.'
 },
 {
 step: 2,
 title: 'Hand-Chopped Coarse Texture (Fish Keema)',
 instruction: 'Shri Ji insists that fish must always be chopped by hand using a sharp cleaver instead of machine mincing. This gives the keema distinct rustic character and allows it to absorb the whole spices naturally.',
 chefTip: 'Coarse hand chopping keeps the delicate fish succulent and prevents it from turning mushy.'
 },
 {
 step: 3,
 title: 'Clay Pot Tempering & Cooking',
 instruction: 'Heat mustard oil inside a traditional clay handi placed directly on glowing coal embers. Crackle whole cloves, black pepper, crushed coriander seeds, ajwain, cardamom, and bay leaf. Add onions and garlic, cooking gently without over-browning.',
 chefTip: 'Clay handi and live coals create an ancient heat convection that melds flavours together.'
 },
 {
 step: 4,
 title: 'Simmering Keema in Clay Handi',
 instruction: 'Slide the hand-chopped fish keema into the fragrant clay handi. Slow-cook for 10-12 minutes over moderate embers, tossing gently until the fish is cooked through and aromatic oils surface.',
 chefTip: 'Cook briefly; fish cooks quickly and retains maximum sweetness when not overdone.'
 },
 {
 step: 5,
 title: 'Makki Ka Paaniya Dough & Leaf Wrap',
 instruction: 'Knead maize flour with milk, crushed fennel seeds, ajwain, and salt into a soft dough. Shape into thick rounds, wrap inside fresh khakra leaves, and bury directly in glowing hot charcoal embers.',
 chefTip: 'Khakra leaves protect the bread from scorching while infusing the maize with herbal aroma.'
 },
 {
 step: 6,
 title: 'Royal Presentation & Dining',
 instruction: 'Peel back the charred khakra leaves, break open the steaming Makki Ka Paaniya, pour over generous ladles of hot desi ghee, and serve alongside the clay pot fish keema and barbecued fish.',
 chefTip: 'A timeless Mewari dining combination celebrating patience, woodsmoke, and authentic royal hospitality.'
 }
 ],
 featured: true
 },
 {
 id: 'recipe-2',
 slug: 'bikaneri-laal-maas-at-chitrakatha-a-tale-of-patience-and-kachri',
 title: 'Bikaneri Laal Maas at Chitrakatha: A Tale of Patience and Kachri',
 youtubeId: 'DN7unziJ25o',
 category: 'Mutton',
 dietary: 'non-veg',
 cuisine: 'Royal Bikaneri Heritage',
 region: 'Bikaner / Jaipur, Rajasthan',
 prepTime: 'Overnight Marinade',
 cookTime: '2 hrs',
 servings: '6-8 servings',
 difficulty: 'Traditional Sigdi Slow-Cook',
 heroImage: '/recipes/chitrakatha/Banner.jpg',
 gallery: [
 "/recipes/chitrakatha/Chitra-Katha1-1-864x1536.jpg",
 "/recipes/chitrakatha/Chitra-Katha2-1152x1536.jpg",
 "/recipes/chitrakatha/Chitra-Katha3-864x1536.jpg"
 ],
 story: 'Preserved at the historic ChitraKatha Homestay near Hathroi Fort, this authentic Bikaneri Laal Maas honors the ancient tradition of patience and wild desert kachri. Utilizing an unheated raw mustard oil overnight marinade and the legendary two-hour sigdi bhunao in a heavy brass urli, this dish captures the true soul of Marwar cooking.',
 ingredients: [
 {
 section: 'Part I — Overnight Raw Mustard Oil & Kachri Cure',
 items: [
 { name: 'Premium Mutton (90-100g chunky cuts from a 10-12kg goat)', amount: '1.5 kg' },
 { name: 'Coarse Wild Kachri Powder (Thar Desert Melon Tenderizer)', amount: '3 tbsp' },
 { name: 'Raw Unheated Engine Brand Mustard Oil', amount: '150 ml' },
 { name: 'Turmeric Powder & Rock Salt', amount: '1 tsp + 1.5 tbsp' }
 ]
 },
 {
 section: 'Part II — Brass Urli Sigdi Gravy & Aromatics',
 items: [
 { name: 'Cold-Pressed Mustard Oil (for cooking)', amount: '250 ml' },
 { name: 'Finely Sliced Red Onions', amount: '500 g' },
 { name: 'Whole Spices: Javitri (Mace), Star Anise, Cloves, Black Cardamom, Shah Jeera', amount: '2 tbsp' },
 { name: 'Coarse Stone-Ground Garlic & Green Chili Paste', amount: '4 tbsp' },
 { name: 'Vibrant Mathania Red Chili Paste (Soaked & Ground)', amount: '100 g' },
 { name: 'Coriander Powder & Fresh Ginger Juliennes', amount: '3 tbsp + 2 tbsp' },
 { name: 'Fresh Coriander Leaves & Stalks', amount: '1 cup' },
 { name: 'Warm Water or Mutton Broth', amount: '600 ml' }
 ]
 }
 ],
 method: [
 {
 step: 1,
 title: 'Overnight Raw Mustard Oil & Kachri Cure',
 instruction: 'Thoroughly toss hand-cut mutton pieces with coarse kachri powder, turmeric, and rock salt. Massage raw, unheated mustard oil deeply into the meat. Cover and rest overnight in a cool place.',
 chefTip: 'Raw mustard oil and wild kachri break down dense meat fibers while imparting a signature sharp undertone.'
 },
 {
 step: 2,
 title: 'Brass Urli & Whole Spice Tempering',
 instruction: 'Heat mustard oil in a heavy brass urli over glowing charcoal embers until it shimmers. Drop in javitri, star anise, cloves, black cardamom, and shah jeera, immediately followed by sliced onions.',
 chefTip: 'Fry onions patiently until deeply caramelized and reddish-brown to form a rich, sweet base.'
 },
 {
 step: 3,
 title: 'Mutton Searing (Sealing Juices)',
 instruction: 'Add the marinated mutton into the hot urli. Sear on high heat until the exterior turns white and seals. Blend in the coarse garlic-green chili paste and sauté until the raw aroma dissipates.',
 chefTip: 'Vigorous initial searing caramelizes exterior proteins and locks in the natural meat juices.'
 },
 {
 step: 4,
 title: 'Mathania Chilli Paste & The Jaali Effect',
 instruction: 'Pour in the vibrant Mathania red chilli paste. Stir continuously over the charcoal fire until a distinctive net-like oil separation (jaali) begins to form from the center outwards.',
 chefTip: 'The formation of the jaali confirms that the chilli paste has properly cooked into the fat.'
 },
 {
 step: 5,
 title: 'Coriander, Ginger & Slow Embers Simmer',
 instruction: 'Sprinkle coriander powder to adjust gravy body, fold in fresh ginger juliennes, and pour in warm water. Clamp the lid shut and allow the mutton to simmer slowly on low embers for 1.5 hours.',
 chefTip: 'Cook undisturbed with live embers on the lid for gentle, uniform heat.'
 },
 {
 step: 6,
 title: 'Finishing & Dining Tradition',
 instruction: 'Stir in fresh coriander stalks and leaves, allowing them to melt into the rich crimson gravy. Serve piping hot over fresh rotis with sliced raw onions and a squeeze of fresh lemon.',
 chefTip: 'Allow the fiery gravy to saturate into the bread before taking each bite for the ultimate Marwar experience.'
 }
 ],
 featured: true
 },
 {
 id: 'recipe-3',
 slug: 'royal-mutton-do-pyaza-narangi',
 title: 'Royal Mutton Do Pyaza Narangi (Citrus-Infused Summer Mutton)',
 youtubeId: '7AlFlFzeLis',
 category: 'Mutton',
 dietary: 'non-veg',
 cuisine: 'Royal Bikaneri Heritage',
 region: 'Cavalry Villa, Bikaner, Rajasthan',
 prepTime: '20 mins',
 cookTime: '1 hr 15 mins',
 servings: '4-6 servings',
 difficulty: 'Heritage Coal Dum Technique',
 heroImage: '/recipes/narangi/Banner.jpg',
 gallery: [
 "/recipes/narangi/MUTTON-दो-प्याज़ा-Narangi-1-1.jpg",
 "/recipes/narangi/MUTTON-दो-प्याज़ा-Narangi-2-1.jpg",
 "/recipes/narangi/MUTTON-दो-प्याज़ा-Narangi-3-1.jpg",
 "/recipes/narangi/MUTTON-दो-प्याज़ा-Narangi-4-1.jpg",
 "/recipes/narangi/MUTTON-दो-प्याज़ा-Narangi-5-1.jpg",
 "/recipes/narangi/MUTTON-दो-प्याज़ा-Narangi-6-1.jpg"
 ],
 story: 'Preserved at the historic Cavalry Villa in Bikaner by an ex-Army officer and his wife, Mutton Do Pyaza Narangi is a rare royal "Summer Mutton" recipe. Designed for desert heat, it relies on the sweet citrus freshness of fresh orange juice, desi ghee, and roasted cumin seeds rather than heavy garam masala.',
 ingredients: [
 {
 section: 'Mutton & Desi Ghee Base',
 items: [
 { name: 'Fresh Tender Mutton Pieces', amount: '1 kg' },
 { name: 'Pure Desi Ghee', amount: '250 g' },
 { name: 'Whole Cumin Seeds (Sabut Jeera)', amount: '2 tbsp' },
 { name: 'Large Sliced Onions', amount: '4 large (approx. 500 g)' },
 { name: 'Fresh Ginger-Garlic Paste', amount: '2.5 tbsp' }
 ]
 },
 {
 section: 'Spices, Yogurt & Fresh Citrus',
 items: [
 { name: 'Freshly Squeezed Orange Juice (Narangi juice, strained)', amount: '400 ml' },
 { name: 'Whisked Fresh Yogurt (Dahi)', amount: '200 g' },
 { name: 'Kashmiri Red Chilli Powder & Coriander Powder', amount: '2 tsp + 2 tbsp' },
 { name: 'Turmeric Powder & Rock Salt', amount: '1 tsp + to taste' },
 { name: 'Live Charcoal Embers (for Dum lid)', amount: '1 set' }
 ]
 }
 ],
 method: [
 {
 step: 1,
 title: 'Desi Ghee & Cumin Splutter',
 instruction: 'Heat ~250g of pure desi ghee in a heavy-bottomed handi or patila. Add sabut jeera (whole cumin seeds) and allow them to crackle and release their fragrance.',
 chefTip: 'Strictly avoid whole spices (garam masala) in this recipe so the delicate citrus and cumin can dominate.'
 },
 {
 step: 2,
 title: 'Onion Caramelization',
 instruction: 'Add the 4 large sliced onions into the hot ghee. Sauté over medium flame until they turn a light golden brown.',
 chefTip: 'Do not over-fry the onions; light golden sweetness complements the citrus.'
 },
 {
 step: 3,
 title: 'Mutton Bhunao (Roasting)',
 instruction: 'Add the mutton pieces to the pot and bhunao thoroughly with the golden onions for 10-12 minutes until the meat changes color.',
 chefTip: 'Ensure the meat is seared well in ghee before introducing spices.'
 },
 {
 step: 4,
 title: 'Spices & Yogurt Incorporation',
 instruction: 'Add rock salt, turmeric powder, Kashmiri red chilli powder, coriander powder, and ginger-garlic paste. Whisk in the yogurt and mix continuously to prevent curd splitting.',
 chefTip: 'Whisking yogurt smoothly keeps the gravy silky.'
 },
 {
 step: 5,
 title: 'Slow Simmering Phase',
 instruction: 'Cover the pot and allow the mutton to cook on a very slow flame for about 30 minutes in its own juices until almost tender.',
 chefTip: 'Leave just a little firmness in the meat before adding citrus juice.'
 },
 {
 step: 6,
 title: 'Fresh Orange Juice Addition & Coal Dum',
 instruction: 'Pour in ~400 ml of freshly squeezed orange juice. Place a tight lid on the pot and place burning charcoal embers on top of the lid (Dum technique). Simmer on lowest flame for 15-20 minutes.',
 chefTip: 'Adding citrus at the final stage ensures the fresh aroma does not vaporize and infuses a unique sweet-tangy profile.'
 },
 {
 step: 7,
 title: 'Serving with Heavy Batias',
 instruction: 'Unseal the fragrant pot and serve hot, traditionally accompanied by Bikaner\'s special heavy, ghee-laden batias.',
 chefTip: 'The sweet-tangy gravy pairs magnificently with hot, crumbled batias soaked in desi ghee.'
 }
 ],
 featured: true
 },
 {
 id: 'recipe-4',
 slug: 'khatarnaak-laal-maas-taverns-lounge-uncle-nibolsons-kitchen-jaipur-gangs-of-foodies-party',
 title: 'Khatarnaak Laal Maas – Taverns Lounge / Uncle Nibolson’s Kitchen (Jaipur)',
 youtubeId: 'H83HY4a-K38',
 category: 'Mutton',
 dietary: 'non-veg',
 cuisine: 'Rajasthani Hunter Feast',
 region: 'Jaipur, Rajasthan',
 prepTime: '30 mins (Overnight Marinade Best)',
 cookTime: '2 hrs 30 mins',
 servings: '12-15 servings (Party Batch)',
 difficulty: 'Hunter Woodfire Large Batch',
 heroImage: '/recipes/khatarnaak/Banner.jpg',
 gallery: [
 "/recipes/khatarnaak/काकोसा-की-राजवाड़ा3-768x768.webp",
 "/recipes/khatarnaak/पूरी-गैंग-ने-मिलकर-बनाया-खतरनाक-LAAL-MAANS4-866x1536.jpg",
 "/recipes/khatarnaak/पूरी-गैंग-ने-मिलकर-बनाया-खतरनाक-LAAL-MAANS5-768x1024.jpg",
 "/recipes/khatarnaak/पूरी-गैंग-ने-मिलकर-बनाया-खतरनाक-LAAL-MAANS6-1536x1152.jpg"
 ],
 story: 'A legendary party-batch hunter feast created by Uncle Nibolson and Gangs of Foodies at Taverns Lounge, Jaipur. 5 kg of tender mutton slow-roasted in pure mustard oil, rich bone stock, soaked Deghi and Kashmiri chillies, thick hung curd, and finished with the sacred woodsmoke dhungar.',
 ingredients: [
 {
 section: '5 kg Mutton Party Marinade',
 items: [
 { name: 'Mutton (large chunky bone-in cuts, 10–12 kg animal)', amount: '5 kg' },
 { name: 'Pure Desi Ghee (for meat marinade)', amount: '250 g' },
 { name: 'Ginger + Garlic Paste (3-inch ginger + 20-25 large cloves)', amount: '4 tbsp' },
 { name: 'Rock Salt', amount: 'To taste' }
 ]
 },
 {
 section: 'Curry Base & Cooking Fat',
 items: [
 { name: 'Raw Mustard Oil (Kachhi Ghani)', amount: '1 Liter' },
 { name: 'Sliced Onions (for curry base)', amount: '1.5 kg' },
 { name: 'Red Chilli Paste (75g Deghi Mirch + 75g Kashmiri Chilli, soaked & ground)', amount: '150 g' },
 { name: 'Rich Mutton Stock (from bones, "guddiyan", unsalted)', amount: '1.5 Liters' },
 { name: 'Thick Hung Curd (Water-drained Dahi)', amount: '700–800 g' },
 { name: 'Coriander Powder, Cumin Powder, Turmeric Powder', amount: '4-5 tbsp + 2-3 tbsp + 2 tsp' },
 { name: 'Whole Spices: Black Cardamom, Green Cardamom, Cinnamon, Cloves, Peppercorns', amount: 'Coarsely crushed' },
 { name: 'Fresh Coriander Stalks (for aroma) & Leaves (for garnish)', amount: '2 cups' }
 ]
 }
 ],
 method: [
 {
 step: 1,
 title: 'Meat Marination',
 instruction: 'In a large vessel, mix 5 kg mutton with 250g desi ghee, salt, and ginger-garlic paste. Marinate for several hours (overnight is best) to allow the ghee and aromatics to tenderize the meat.',
 chefTip: 'Ghee in the marinade softens the tough collagen of chunky party cuts.'
 },
 {
 step: 2,
 title: 'Mustard Oil Smoking & Water Tempering',
 instruction: 'In a large copper or brass patila (clay-lined if traditional), heat 1 liter mustard oil until smoking, then tame the pungency by splashing with cold water thrice.',
 chefTip: 'Water splashing tempers the mustard oil without muting its signature earthy profile.'
 },
 {
 step: 3,
 title: 'Whole Spices & Pink Onions',
 instruction: 'Add coarsely crushed whole spices and bloom for one minute. Add 1.5 kg sliced onions and cook until light pink — do not fully brown.',
 chefTip: 'Light pink onions melt completely into a silky gravy body during long cooking.'
 },
 {
 step: 4,
 title: 'High-Flame Meat Searing',
 instruction: 'Add the marinated mutton into the vessel. Toss and sear on high heat, then cover and cook for 10 minutes, stirring midway until the meat edges are sealed.',
 chefTip: 'Sealing locks in the natural juices for fall-apart succulence.'
 },
 {
 step: 5,
 title: 'Soaked Red Chilli Paste Bhunao',
 instruction: 'Add the soaked and ground Deghi and Kashmiri chilli paste. Cover and slow cook, stirring as needed, until oil surfaces and a deep crimson color develops.',
 chefTip: 'Never use dry chilli powder; soaked and freshly stone-ground paste creates rich color and aroma.'
 },
 {
 step: 6,
 title: 'Coriander Stalks & Whipped Curd',
 instruction: 'When meat is 70-80% cooked, toss in chopped coriander stalks for a burst of aroma. Whisk hung curd with coriander, cumin, and turmeric powders. Lower the flame and add the spiced curd in 2-3 batches, stirring constantly to prevent splitting.',
 chefTip: 'Coriander stalks provide intense herbal aroma that infuses deeply into the gravy.'
 },
 {
 step: 7,
 title: 'Bone Stock Simmer & Galawat Finish',
 instruction: 'Pour in 1.5 liters of warm mutton bone stock (no plain water). Simmer gently with the lid closed for 2 to 2.5 hours until the meat is fall-apart tender (galawat) and the gravy is thick and latpat. Rest for 15 minutes before serving with bajra rotis and lemon.',
 chefTip: 'Using rich bone stock instead of water gives the gravy unmatched richness and body.'
 }
 ],
 featured: true
 }
];

export const VIDEOS: VideoItem[] = [
 {
 "id": "vid-1",
 "youtubeId": "cbsdcWiNHk0",
 "title": "Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj Singh Mewar",
 "titleHindi": "उदयपुर राज घराने की शिकारबाड़ी — डॉ. लक्ष्यराज सिंह मेवाड़",
 "category": "Royal Feasts",
 "duration": "26:45",
 "views": "890K+ views",
 "publishedDate": "Featured Episode",
 "thumbnail": "https://img.youtube.com/vi/cbsdcWiNHk0/maxresdefault.jpg",
 "description": "An exclusive royal culinary session at the historic Shikarbadi estate with Shri Ji Huzoor Dr. Lakshyaraj Singh Mewar of Udaipur.",
 "location": "Shikarbadi, Udaipur",
 "featured": true
 },
 {
 "id": "vid-2",
 "youtubeId": "DN7unziJ25o",
 "title": "हथियों के गढ़ हथरोइ में बना काचरी वाला Bikaneri Laal Maas | Recipe by ChitraKatha Jaipur",
 "titleHindi": "हथरोई फोर्ट में बना काचरी वाला बीकानेरी लाल मांस",
 "category": "Heritage",
 "duration": "22:15",
 "views": "640K+ views",
 "publishedDate": "Marwar Trail",
 "thumbnail": "https://img.youtube.com/vi/DN7unziJ25o/maxresdefault.jpg",
 "description": "The ancient art of slow-cooking Bikaneri Laal Maas in a brass urli using wild desert kachri tenderizer and raw mustard oil.",
 "location": "ChitraKatha, Hathroi Fort",
 "featured": true
 },
 {
 "id": "vid-3",
 "youtubeId": "7AlFlFzeLis",
 "title": "नारंगी से बनी एक Royal Recipe (MUTTON दो प्याज़ा Narangi) | Bikaner Food Tour",
 "titleHindi": "शाही मटन दो प्याज़ा नारंगी — कैवेलरी विला बीकानेर",
 "category": "Royal Feasts",
 "duration": "18:50",
 "views": "510K+ views",
 "publishedDate": "Bikaner Special",
 "thumbnail": "https://img.youtube.com/vi/7AlFlFzeLis/maxresdefault.jpg",
 "description": "A forgotten Summer Mutton recipe cooked with ~400ml fresh orange juice and coal-lid dum by an ex-Army officer at Cavalry Villa.",
 "location": "Cavalry Villa, Bikaner",
 "featured": true
 },
 {
 "id": "vid-4",
 "youtubeId": "H83HY4a-K38",
 "title": "पूरी गैंग ने मिलकर बनाया खतरनाक (LAAL MAANS) Party With Gangs of Foodies | Jaipur",
 "titleHindi": "खतरनाक लाल मांस — अंकल निबल्सन किचन",
 "category": "Deep Village & Chulha",
 "duration": "31:20",
 "views": "1.2M+ views",
 "publishedDate": "Gangs of Foodies",
 "thumbnail": "https://img.youtube.com/vi/H83HY4a-K38/maxresdefault.jpg",
 "description": "5 kg large-batch hunter feast with Uncle Nibolson and Gangs of Foodies in Jaipur. Pure mustard oil and charcoal dhungar.",
 "location": "Taverns Lounge, Jaipur",
 "featured": true
 },
 {
 "id": "vid-5",
 "youtubeId": "wXUgrQdaEm4",
 "title": "STOP EATING RED MUTTON! Try This Army SAFAQ SHEER Mutton Recipe Instead!",
 "titleHindi": "आर्मी सफ़क शीर मटन रेसिपी — बीकानेर",
 "category": "Heritage",
 "duration": "24:10",
 "views": "580K+ views",
 "publishedDate": "Military Heritage",
 "thumbnail": "https://img.youtube.com/vi/wXUgrQdaEm4/maxresdefault.jpg",
 "description": "Rare heirloom military and royal recipe preserved for over 20 years, slow-cooked in pure desi ghee.",
 "location": "Bikaner, Rajasthan",
 "featured": false
 },
 {
 "id": "vid-6",
 "youtubeId": "Q6_HAVLaV0A",
 "title": "7 बार कोयले से धुंआरा Mutton! बिना तेल का Bhago Chicken & Fursat Ki Kheer | Mount Abu",
 "titleHindi": "माउंट आबू का 7 बार धुंआरा मटन और भागो चिकन",
 "category": "Deep Village & Chulha",
 "duration": "28:15",
 "views": "760K+ views",
 "publishedDate": "Mount Abu Trail",
 "thumbnail": "https://img.youtube.com/vi/Q6_HAVLaV0A/maxresdefault.jpg",
 "description": "Rare 7-times woodsmoke coal dhungar mutton and zero-oil heritage chicken cooked in the hills of Mount Abu.",
 "location": "Mount Abu, Rajasthan",
 "featured": false
 },
 {
 "id": "vid-7",
 "youtubeId": "RrFZKtrzXEQ",
 "title": "पहले गाड़िया बनाते थे अब (Shekhawati Mutton) खेतों में बना देसी मटन | Jaipur Farm",
 "titleHindi": "खेतों में बना देसी शेखावाटी मटन",
 "category": "Deep Village & Chulha",
 "duration": "29:40",
 "views": "940K+ views",
 "publishedDate": "Farm Chulha",
 "thumbnail": "https://img.youtube.com/vi/RrFZKtrzXEQ/maxresdefault.jpg",
 "description": "Farm-to-table rustic earthen pot clay matka mutton cooked in mustard oil under an open sky on an organic farm.",
 "location": "Jaipur Farm, Rajasthan",
 "featured": false
 },
 {
 "id": "vid-8",
 "youtubeId": "g-BOzw0We4M",
 "title": "BANSWARA का सबसे जबरदस्त DESI NON-VEG DHABA | मटन, चिकन, फिश सब एक जगह!",
 "titleHindi": "बांसवाड़ा का देसी नॉन-वेज ढाबा",
 "category": "Street Chronicles",
 "duration": "21:15",
 "views": "670K+ views",
 "publishedDate": "Tribal Belt Trail",
 "thumbnail": "https://img.youtube.com/vi/g-BOzw0We4M/maxresdefault.jpg",
 "description": "Authentic desi Dhaba cooking in the heart of Banswara featuring local tribal spices and fresh river catch.",
 "location": "Banswara, Rajasthan",
 "featured": false
 },
 {
 "id": "vid-9",
 "youtubeId": "BDjq0G9tJAQ",
 "title": "Gajner Palace: एक ऐसा पैलेस जो रेगिस्तान में भी पानी के बीच बना है | Ker Sangri & Lapsi",
 "titleHindi": "गजनेर पैलेस — रेगिस्तान की झील का शाही स्वाद",
 "category": "Royal Feasts",
 "duration": "25:05",
 "views": "830K+ views",
 "publishedDate": "Royal Palaces",
 "thumbnail": "https://img.youtube.com/vi/BDjq0G9tJAQ/maxresdefault.jpg",
 "description": "Stepping into the lakeside sanctuary of Gajner Palace, discovering camel milk delicacies, lapsi, and royal Ker Sangri.",
 "location": "Gajner Palace, Bikaner",
 "featured": false
 }
];

export const FOOD_TRAILS: CityFoodTrail[] = [
 {
 "id": "trail-jaipur",
 "slug": "jaipur",
 "city": "JAIPUR",
 "state": "RAJASTHAN",
 "tagline": "Non-Veg Focused Picks (Real, Not Generic)",
 "categoryTag": "NON-VEG FOCUSED PICKS · REAL, NOT GENERIC",
 "description": "A curated selection of authentic non-vegetarian dining spots across Jaipur — from fiery desi highway sigdis to royal experiential dinners and deep walled-city Mughlai stews.",
 "heroImage": "/photos/IMG_0875.jpg",
 "picksCount": 6,
 "featured": true,
 "places": [
 {
 "id": "jp-1",
 "number": "01",
 "name": "On The Way Restaurant",
 "category": "Authentic Desi Rajasthani",
 "diet": "Non-Veg",
 "experience": "Authentic Desi Rajasthani",
 "city": "Jaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_0875.jpg",
 "whyVBRecommends": "Raw, bold, no-compromise flavors—this is not tourist food",
 "mustTry": [
 "Rajasthani Hadi Mutton",
 "Desi Mutton Curry"
 ],
 "bestFor": "Hardcore non-veg lovers",
 "area": "Tonk Road, Jaipur",
 "mapUrl": "https://maps.google.com/?q=On+The+Way+Restaurant+Tonk+Road+Jaipur"
 },
 {
 "id": "jp-2",
 "number": "02",
 "name": "Magic Miles",
 "category": "Rustic Experience (Chulha Cooking)",
 "diet": "Non-Veg",
 "experience": "Rustic Experience",
 "city": "Jaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_1264.jpg",
 "whyVBRecommends": "Proper village-style cooking with chulhe ki roti",
 "mustTry": [
 "Rajasthani Non-Veg Thali",
 "Chulhe ki Roti"
 ],
 "bestFor": "Authentic + group dining",
 "area": "Ajmer Highway, Jaipur",
 "mapUrl": "https://maps.google.com/?q=Magic+Miles+Ajmer+Highway+Jaipur"
 },
 {
 "id": "jp-3",
 "number": "03",
 "name": "Dawat Nama",
 "category": "Fine Dining (Non-Veg Focus)",
 "diet": "Non-Veg",
 "experience": "Fine Dining",
 "city": "Jaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_1491.jpg",
 "whyVBRecommends": "Rare combo of luxury + authentic taste",
 "mustTry": [
 "Keema Bati",
 "Desi Ghee Mutton"
 ],
 "bestFor": "Premium dining without losing authenticity",
 "area": "C-Scheme, Jaipur",
 "mapUrl": "https://maps.google.com/?q=Dawat+Nama+C+Scheme+Jaipur"
 },
 {
 "id": "jp-4",
 "number": "04",
 "name": "Pratap Bhawan Cuisine",
 "category": "Royal / Experiential Dining",
 "diet": "Non-Veg",
 "experience": "Royal / Experiential Dining",
 "city": "Jaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_1541.jpg",
 "whyVBRecommends": "This is an experience, not just a meal (pre-booking needed)",
 "mustTry": [
 "Khad Murg",
 "Maans ke Kebab"
 ],
 "bestFor": "Special occasions, storytelling dining",
 "area": "Civil Lines, Jaipur",
 "mapUrl": "https://maps.google.com/?q=Pratap+Bhawan+Civil+Lines+Jaipur"
 },
 {
 "id": "jp-5",
 "number": "05",
 "name": "Magic Taste",
 "category": "Homestyle / Made-to-Order",
 "diet": "Non-Veg",
 "experience": "Homestyle / Made-to-Order",
 "city": "Jaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_2100.jpg",
 "whyVBRecommends": "Custom-cooked meals like home, but better execution",
 "mustTry": [
 "Laal Maas",
 "Mutton Stew",
 "Keema Kaleji"
 ],
 "bestFor": "Comfort food + serious meat lovers",
 "area": "Raja Park, Jaipur",
 "mapUrl": "https://maps.google.com/?q=Magic+Taste+Raja+Park+Jaipur"
 },
 {
 "id": "jp-6",
 "number": "06",
 "name": "Muhammadi Palace",
 "category": "Mughlai Legacy",
 "diet": "Non-Veg",
 "experience": "Mughlai Legacy",
 "city": "Jaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_2315.jpg",
 "whyVBRecommends": "Deep, slow-cooked Mughlai flavors—rich & satisfying",
 "mustTry": [
 "Mutton Nihari",
 "Mutton Korma with Khamiri Roti"
 ],
 "bestFor": "Late lunches / heavy meals",
 "area": "Chandpole Bazar, Old Jaipur",
 "mapUrl": "https://maps.google.com/?q=Muhammadi+Palace+Chandpole+Jaipur"
 }
 ]
 },
 {
 "id": "trail-udaipur",
 "slug": "udaipur",
 "city": "UDAIPUR",
 "state": "RAJASTHAN",
 "tagline": "Balanced Picks (Views + Authentic Taste)",
 "categoryTag": "BALANCED PICKS · VIEWS + AUTHENTIC TASTE",
 "description": "A refined selection of lakeside dining, aristocratic Mewari meat specialties, pure ghee vegetarian thalis, and relaxed modern cafés across the City of Lakes.",
 "heroImage": "/recipes/shikarbadi/Banner.jpg",
 "picksCount": 5,
 "featured": true,
 "places": [
 {
 "id": "ud-1",
 "number": "01",
 "name": "Kunwar Kaleva",
 "category": "Authentic Rajasthani",
 "diet": "Non-Veg",
 "experience": "Authentic Rajasthani",
 "city": "Udaipur",
 "region": "Rajasthan",
 "image": "/recipes/shikarbadi/Banner.jpg",
 "whyVBRecommends": "Strong, traditional flavors done right",
 "mustTry": [
 "Laal Maas",
 "Khad Maas",
 "Angoor Makhane ki Sabji"
 ],
 "bestFor": "Pure Rajasthani experience",
 "area": "Panchwati, Udaipur",
 "mapUrl": "https://maps.google.com/?q=Kunwar+Kaleva+Udaipur",
 "youtubeId": "cbsdcWiNHk0",
 "videoTitle": "Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Dr. Lakshyaraj Singh Mewar"
 },
 {
 "id": "ud-2",
 "number": "02",
 "name": "Traditional Khana Restaurant",
 "category": "Veg Thali Specialist",
 "diet": "Pure Veg",
 "experience": "Veg Thali Specialist",
 "city": "Udaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_2982.jpg",
 "whyVBRecommends": "No-frills, high-quality thali experience",
 "mustTry": [
 "Rajasthani Veg Thali"
 ],
 "bestFor": "Authentic vegetarian dining",
 "area": "Near Sukhadia Circle, Udaipur",
 "mapUrl": "https://maps.google.com/?q=Traditional+Khana+Restaurant+Udaipur"
 },
 {
 "id": "ud-3",
 "number": "03",
 "name": "House of Gourmet",
 "category": "Café + Modern Veg",
 "diet": "Pure Veg",
 "experience": "Café + Modern Veg",
 "city": "Udaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_4004.jpg",
 "whyVBRecommends": "Rare mix of global + Indian veg done well",
 "mustTry": [
 "Dal Bukhara with Zaatar Naan",
 "Hummus Platter",
 "Veg Kebabs"
 ],
 "bestFor": "Chill dining + variety",
 "area": "Saheli Marg, Udaipur",
 "mapUrl": "https://maps.google.com/?q=House+of+Gourmet+Udaipur"
 },
 {
 "id": "ud-4",
 "number": "04",
 "name": "Hotel Inder Prakash",
 "category": "Lake View Dining",
 "diet": "Both",
 "experience": "Lake View Dining",
 "city": "Udaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_5367.jpg",
 "whyVBRecommends": "Fateh Sagar views + food + drinks = complete vibe",
 "mustTry": [
 "Rajasthani Non-Veg + Drinks"
 ],
 "bestFor": "Sunset meals, group outings",
 "area": "Fateh Sagar Lake, Udaipur",
 "mapUrl": "https://maps.google.com/?q=Hotel+Inder+Prakash+Fateh+Sagar+Udaipur"
 },
 {
 "id": "ud-5",
 "number": "05",
 "name": "Karohee Haveli",
 "category": "Heritage + View",
 "diet": "Both",
 "experience": "Heritage + View",
 "city": "Udaipur",
 "region": "Rajasthan",
 "image": "/photos/IMG_5393.jpg",
 "whyVBRecommends": "Lake Pichola backdrop with solid food options",
 "mustTry": [
 "Rajasthani + Continental dishes"
 ],
 "bestFor": "Scenic dining",
 "area": "Hanuman Ghat, Lake Pichola, Udaipur",
 "mapUrl": "https://maps.google.com/?q=Karohee+Haveli+Udaipur"
 }
 ]
 }
];

export const TESTIMONIALS: Testimonial[] = [
 {
 id: 'test-1',
 quote: 'Agar Kisi Ko Achii Or Desi Receipe Dekhni Ho Or Rajasthan Ki Nayi Nayi Jagah Ke Baare Me Janna Ho To Virtual Banjara Is The Best ..... Ashish Ji Is Best Person All Food Vlogger.....',
 author: 'VIKAS RATHORE',
 role: 'YouTube Community Member',
 location: 'Rajasthan, India',
 videoContext: 'Jaipur के इस Farm में बनता है (NATURE MUTTON) organic सब्जिया चूल्हे सिल्बट्टे पर कुटे मसालो के साथ'
 },
 {
 id: 'test-2',
 quote: 'आशीष भाई आपका वीडियो खाने का मजा देता ही है लेकिन जो लोकेशनों पर जाते हो उसका जवाब नहीं',
 author: 'Hey Raj Vlogs',
 role: 'YouTube Vlogger & Explorer',
 location: 'Rajasthan',
 videoContext: 'Dundlod राज घराने की अनोखीं रेसिपी(MAAS KE SULE KA SHORBA)Mutton recipe with ROYAL FAMILY Rajasthan'
 },
 {
 id: 'test-3',
 quote: 'Aaj ka video ab tak sabse behtreen video or jo maharaja ka vyaktitav bhi jabardast h mast virtual banzara best wishes ...',
 author: 'Dugu Hatila',
 role: 'YouTube Community Member',
 location: 'Rajasthan, India',
 videoContext: 'Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj singh ji Mewar'
 },
 {
 id: 'test-4',
 quote: 'आपकी आज तक कि सबसे अच्छी video हैं, आपने श्री जी हुज़ूर की सादगी आम जनता को दिखायी हैं जिससे आम आदमी को पता चलता है कि राजा साहब हमारे जैसे ही हैं...',
 author: 'Ravi Raghuvanshi',
 role: 'Heritage & Culture Enthusiast',
 location: 'India',
 videoContext: 'Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj singh ji Mewar'
 },
 {
 id: 'test-5',
 quote: 'Ashish ji I have been regularly following you for years. Your Andaaz is surely the best. You are so respectful towards your host and your presentation is the best. Most of the people who do food vlogs are very loud and are generally talking about themselves. BUT AAP KI BAAT HI KHUCH AUR HAI. I will surely invite you to my house sometime and inform you 3 months in advance of the date. Keep up your presentation Ashish kapoor..',
 author: 'ASHISH KAPOOR',
 role: 'Long-time Viewer & Food Connoisseur',
 location: 'New Delhi, India',
 videoContext: 'Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj singh ji Mewar'
 }
];

export const COLLABORATION_SERVICES: CollaborationService[] = [
 {
 id: 'srv-1',
 title: 'YouTube Long-Form Storytelling',
 subtitle: 'Cinematic, In-Depth Food & Cultural Documentaries',
 badge: 'Flagship Platform',
 icon: 'Video',
 description: 'A 15 to 30-minute cinematic deep-dive into your restaurant, heritage property, resort, or culinary brand. We capture the origins, master chefs, heritage techniques, and real atmosphere, broadcast to our verified 726K+ subscriber audience.',
 deliverables: [
 'Full dedicated 4K YouTube documentary episode',
 'Strategic search-optimized title, description & permanent indexing',
 'Pin comment and direct social/website referral links',
 'High-resolution photography bundle for your brand’s own marketing use',
 'Permanent evergreen digital archive presence'
 ],
 idealFor: 'Heritage hotels, luxury resorts, iconic dining destinations, and established food enterprises.'
 },
 {
 id: 'srv-2',
 title: 'Instagram High-Impact Reels & Stories',
 subtitle: 'Fast, Compelling Short-Form Visual Storytelling',
 badge: 'Viral Engagement',
 icon: 'Flame',
 description: 'Punchy, highly polished 60 to 90-second vertical reels that showcase signature dishes, behind-the-scenes magic, and aesthetic guest experiences to drive immediate reservations and social conversation.',
 deliverables: [
 'Collaborative Instagram Reel posted directly on @virtualbanjara',
 'Story series with direct booking and location links',
 'Raw footage cuts formatted for brand social channels',
 'Targeted demographic reach across food & luxury travel enthusiasts'
 ],
 idealFor: 'Cafes, boutique bistros, new menu launches, cloud kitchens, and gourmet artisanal products.'
 },
 {
 id: 'srv-3',
 title: 'Facebook Long-Form Deep Storytelling',
 subtitle: 'Mass Reach & Community-Driven Food Narratives',
 badge: 'Broad Demographic Reach',
 icon: 'Share2',
 description: 'Engaging long-form video storytelling tailored for Facebook’s high-sharing community, generating massive organic discussions, family recommendations, and regional travel interest.',
 deliverables: [
 'Native Facebook video release with bilingual captions',
 'Community discussion management and location tagging',
 'Cross-posted to active culinary and travel groups'
 ],
 idealFor: 'Family heritage eateries, regional sweet makers, farm resorts, and authentic food trails.'
 },
 {
 id: 'srv-4',
 title: 'Food Business & Brand Consultation',
 subtitle: 'Concept Curation, Heritage Branding & Menu Strategy',
 badge: 'Strategic Advisory',
 icon: 'Compass',
 description: 'Leverage Ashish Wadhwani’s years of field research across India’s traditional kitchens to refine your brand positioning, unearth forgotten heirloom recipes, improve menu storytelling, and elevate guest experiences.',
 deliverables: [
 'Comprehensive culinary positioning & authenticity audit',
 'Heirloom recipe concept development and narrative framing',
 'Staff storytelling & presentation masterclasses',
 'Digital presence and collaboration roadmap'
 ],
 idealFor: 'New restaurant concepts, heritage property hospitality revamps, and FMCG brands launching authentic Indian lines.'
 }
];

export const COLLABORATION_PROCESS = [
 {
 step: '01',
 title: 'Send Your Brief',
 description: 'Share your brand details, location, signature concept, target audience, and preferred collaboration platform via our structured qualification form.'
 },
 {
 step: '02',
 title: 'We Review Requirements',
 description: 'Our creative team evaluates your story against our editorial standards to ensure strong audience resonance and authentic storytelling value.'
 },
 {
 step: '03',
 title: 'Plan the Story & Production',
 description: 'We develop a tailored narrative script, shoot schedule, shot list, and production logistics to capture your property at peak visual brilliance.'
 },
 {
 step: '04',
 title: 'Create & Publish',
 description: 'On-site 4K multi-camera shoot, color-graded post-production, sound design, and coordinated multi-platform launch with permanent archive tracking.'
 }
];

export const WHY_WORK_WITH_VB = [
 {
 title: 'Dedicated, High-Intent Audience',
 description: '726,000+ loyal subscribers and millions of viewers who actively travel and dine based on Virtual Banjara recommendations.'
 },
 {
 title: 'Narrative Over Shallow Promotion',
 description: 'We don’t do generic paid shouting. We tell meaningful human, historical, and culinary stories that build deep credibility for your brand.'
 },
 {
 title: 'Cinematic Production Quality',
 description: 'Professional cinema cameras, gimbal moves, macro food lenses, and expert color grading that elevate your brand to documentary standards.'
 },
 {
 title: 'Permanent Evergreen Asset',
 description: 'Unlike ephemeral social ads that vanish when the budget runs out, Virtual Banjara YouTube documentaries rank in search for years to come.'
 },
 {
 title: 'Multi-Platform Media Ecosystem',
 description: 'Integrated exposure across YouTube, Instagram, Facebook, and our official digital web archive.'
 },
 {
 title: 'Transparent Editorial Standards',
 description: 'We maintain strict authenticity standards and transparent collaboration terms, ensuring our community places unwavering trust in every featured experience.'
 }
];
