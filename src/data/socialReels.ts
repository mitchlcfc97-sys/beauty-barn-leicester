export interface SocialReel {
  id: string;
  category: 'massage' | 'facials' | 'eyes' | 'retreat' | 'nails' | 'fireside';
  categoryLabel: string;
  title: string;
  badge: string;
  src: string;
  poster?: string;
  downloadName: string;
  fileSize: string;
  duration: string;
  overlayText: string;
  audioSuggestion: string;
  bestPostingTime: string;
  reelsCaption: string;
  feedCaption: string;
  storyScript: string;
  hashtags: string;
}

export const SOCIAL_REELS: SocialReel[] = [
  {
    id: 'lash-lift',
    category: 'eyes',
    categoryLabel: 'Eye Artistry & Lashes',
    title: 'Precision Lash Lift & Tint',
    badge: 'Fan Favourite',
    src: '/videos/lash-lift-treatment.mp4',
    downloadName: 'Beauty-Barn-Lash-Lift.mp4',
    fileSize: '1.5 MB',
    duration: '6s loop',
    overlayText: 'POV: Waking up every morning looking effortlessly awake with zero mascara ✨🤍',
    audioSuggestion: 'Soft dreamy acoustic / Aesthetic morning sound',
    bestPostingTime: 'Tuesday 7:00 PM or Saturday 10:00 AM',
    reelsCaption: `POV: You threw away your eyelash curlers and stopped wearing mascara… ✨👁️

Our precision Lash Lift & Tint gently curls and darkens your natural lashes from root to tip. Lasts up to 6–8 weeks with zero damage, zero extensions, and zero upkeep!

Pair with our fluffy brow lamination for the ultimate "All About Eyes" package (£60).

🔗 Tap the link in our bio to book your lash appointment on Fresha!

#TheBeautyBarnLeicester #LashLiftLeicester #LeicesterBeauty #Scraptoft #BrowLaminationLeicester #NaturalLashes #LeicesterLashes #LVLLashes`,
    feedCaption: `Effortless lashes, zero morning maintenance required. ✨

If you love the look of freshly curled lashes and mascara but hate the clumping, smudging, and daily removal routine — a Lash Lift & Tint is your new secret weapon.

Therapists Fran and Matilda use gentle, dermatologically-approved restructuring solutions to lift your natural lashes from the base, creating instant eye-opening length and definition.

✨ Why you’ll love it:
• Immediate root lift and deep midnight tint
• Waterproof, gym-proof, and holiday-ready
• Lasts 6 to 8 full weeks
• 100% your own natural lashes — zero extensions

✨ Price: £40 (45 mins) or upgrade to our full "All About Eyes" package including bespoke brow wax & tint for £60.

Note: Patch test required 24 hours prior for all first-time lash & brow appointments.

Reserve your slot online via our bio link or visit thebeautybarnleicester.co.uk 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Lash Lift Clip):
• Text: "Zero mascara, zero extensions, 100% natural lashes ✨"
• Poll Sticker: "Are you a lash lift girl or mascara girl?" ➡️ [Lash Lift Always! / Still wearing mascara 😭]

SLIDE 2:
• Text: "Lasts 6-8 weeks • Waterproof • Gym-proof • £40"

SLIDE 3:
• Link Sticker: "BOOK LASH LIFT ON FRESHA" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments)`,
    hashtags: `#TheBeautyBarnLeicester #LashLiftLeicester #LeicesterLashes #BrowLaminationLeicester #LVLLashLift #LeicesterBeautySalon #Scraptoft #NaturalBeauty #Leicestershire`,
  },
  {
    id: 'hot-stones-gliding',
    category: 'massage',
    categoryLabel: 'Massage & Hot Stones',
    title: 'Heated Volcanic Basalt Stones',
    badge: 'Cold Weather Sanctuary',
    src: '/videos/hot-stone-massage-treatment.mp4',
    poster: '/images/treatments/hot-stone-massage-poster.jpg',
    downloadName: 'Beauty-Barn-Hot-Stones-Gliding.mp4',
    fileSize: '3.0 MB',
    duration: '8s loop',
    overlayText: 'When you can physically feel the shoulder tension melting away under heated basalt stones… 🌋🔥',
    audioSuggestion: 'Warm crackling fireplace / Deep tranquil spa sound',
    bestPostingTime: 'Sunday 6:30 PM (Self-care Sunday) or Wednesday 12:30 PM',
    reelsCaption: `Freezing outside in Leicestershire? Step inside the barn… 🔥

Smooth heated volcanic basalt stones gliding along your back, melting stubborn knots faster than hands alone ever could.

Add hot stones onto any back or full-body massage for just £5, or book our dedicated Hot Stone Ritual.

🔗 Tap the link in our bio to warm up on Fresha today!

#TheBeautyBarnLeicester #HotStoneMassage #LeicesterMassage #ScraptoftSpa #BackPainRelief #LeicestershireWellness #AutumnWinterSanctuary`,
    feedCaption: `Heat is the ultimate antidote to everyday tension. 🍂🔥

When temperature drops, our shoulders instinctively creep towards our ears, creating tight knots across the neck, traps, and lower back.

During our Hot Stone Massage, heated black volcanic basalt stones are paired with warmed Bramley botanical oils. The heat penetrates deep into muscle fibres 4x faster than standard manual massage, encouraging blood circulation, flushing toxins, and leaving you in a state of tranquil slumber.

✨ Available as:
• 30 min Back Massage with Hot Stones — £40
• 45 min Back, Neck & Shoulders with Hot Stones — £52
• 60 min Full Body Hot Stone Relaxation — £65

Heated couches, fleece blankets, and candlelit tranquility await.

Tap the bio link to secure your warm table on Fresha 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Hot Stones Gliding):
• Text: "Current craving on a chilly Leicester afternoon… 🔥"
• Slider Sticker: "How much do your shoulders need this right now?" [🔥 0 - 100%]

SLIDE 2:
• Text: "Heated volcanic basalt stones + warm Bramley botanical oils = instant tension melt 🍯"

SLIDE 3:
• Link Sticker: "BOOK HOT STONES ON FRESHA" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments/massage)`,
    hashtags: `#TheBeautyBarnLeicester #TheBeautyBarn #HotStoneMassage #HotStonesLeicester #LeicesterSpa #Scraptoft #BackMassage #LeicestershireMassage #DeepTissueLeicester`,
  },
  {
    id: 'hot-stones-placement',
    category: 'massage',
    categoryLabel: 'Massage & Hot Stones',
    title: 'Spinal Basalt Stone Placement',
    badge: 'Deep Nervous System Reset',
    src: '/videos/hot-stones-placement.mp4',
    downloadName: 'Beauty-Barn-Hot-Stones-Placement.mp4',
    fileSize: '2.3 MB',
    duration: '7s loop',
    overlayText: 'The exact moment your central nervous system switches off and deeply relaxes… 🕯️💤',
    audioSuggestion: 'Soft piano chimes / Ambient spa meditation',
    bestPostingTime: 'Thursday 8:00 PM or Sunday 7:30 PM',
    reelsCaption: `The sound of silence and the feel of heated basalt stones along your spine… 🕯️✨

When did you last give your mind permission to do absolutely nothing for an hour?

Heated couches, soft lighting, and pure unhurried care at our countryside stone barn in Scraptoft.

🔗 Link in bio to reserve your quiet hour.

#TheBeautyBarnLeicester #NervousSystemReset #LeicesterSpa #Scraptoft #MindfulMassage #SelfCareLeicester`,
    feedCaption: `Why heated basalt stone placement works magic on the spine: 🌿🔥

Placing heated volcanic stones along the spine’s energy meridians gently warms the deep postural muscles of the back, easing compressed vertebrae and signalling the parasympathetic nervous system that it is safe to rest.

At The Beauty Barn, every stone is carefully hand-selected for weight and thermal retention, cocooning you in restorative warmth from head to toe.

✨ Experience it in:
• The Bramley Full Indulgence Ritual (90 mins — £100)
• The Fireside Seasonal Ritual (from £70)
• Tailored Full Body Massage with Hot Stone upgrade (£60–£65)

Appointments are available throughout the week with our therapists Fran, Matilda & team.

Tap the link in bio to book 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Stone Placement):
• Text: "Turn down the noise of the world for 60 minutes… 🕯️"
• Question Sticker: "When was the last time you had a proper massage?"

SLIDE 2:
• Text: "Unhurried, peaceful, heated couches in our Scraptoft barn sanctuary."

SLIDE 3:
• Link Sticker: "RESERVE ON FRESHA" 🔗 (Link to: thebeautybarnleicester.co.uk)`,
    hashtags: `#TheBeautyBarnLeicester #LeicesterMassage #SpinalAlignment #HotStones #ScraptoftSpa #Leicestershire #StressRelief`,
  },
  {
    id: 'warm-bamboo-massage',
    category: 'massage',
    categoryLabel: 'Massage & Deep Tissue',
    title: 'Warm Bamboo Canes Deep Tissue Flow',
    badge: 'Deep Knot Release',
    src: '/videos/bamboo-deep-tissue-flow.mp4',
    poster: '/images/treatments/bamboo-deep-flow-poster.jpg',
    downloadName: 'Beauty-Barn-Warm-Bamboo-Massage.mp4',
    fileSize: '22.5 MB',
    duration: '43s reel cut',
    overlayText: 'When stubborn shoulder knots that standard massage couldn’t shift meet warm bamboo canes… 🎋🔥',
    audioSuggestion: 'Deep rhythmic spa drums / Relaxing lofi instrumental',
    bestPostingTime: 'Wednesday 6:00 PM or Sunday 7:00 PM',
    reelsCaption: `Say goodbye to deep muscular tension! 🎋✨

Heated solid bamboo canes deliver elongated, firm pressure along tight muscle bands, melting stubborn posture knots faster than hands alone ever could.

Upgrade any Back or Full Body Massage with natural Bamboo Canes for just £5 on Fresha!

🔗 Tap the link in our bio to book your bamboo massage escape.

#TheBeautyBarnLeicester #BambooMassage #DeepTissueMassage #LeicesterMassage #ScraptoftSpa #BackPainRelief #TensionRelief #LeicestershireWellness`,
    feedCaption: `Why warm bamboo massage is our therapist secret for stubborn knots: 🎋🌿

If you suffer from chronic shoulder tightness, desk stiffness, or tension headaches — standard manual pressure sometimes can’t reach deep enough without causing discomfort.

Heated natural bamboo canes distribute smooth, even, sustained pressure across large muscle groups. The therapeutic warmth softens tight fascia, allowing your therapist to work into deep trigger points effortlessly.

✨ Benefits of Bamboo Massage:
• Deep muscular tension and knot release
• Stimulates blood circulation and lymphatic drainage
• Relieves postural fatigue from desk work & driving
• Promotes profound whole-body relaxation

✨ Available as:
• +£5 add-on to any 30m, 45m, or 60m Massage
• Incorporated into our 90-min Full Indulgence Ritual

Tap the link in our bio to book on Fresha 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Bamboo Rolling on Back):
• Text: "When your shoulder knots need more than standard hands… 🎋🔥"
• Slider Sticker: "How tight are your shoulders right now?" [🎋 0 - 100%]

SLIDE 2:
• Text: "Warm bamboo canes roll along tight muscle bands to dissolve deep knots."

SLIDE 3:
• Link Sticker: "BOOK BAMBOO MASSAGE +£5" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments/massage)`,
    hashtags: `#TheBeautyBarnLeicester #BambooMassage #WarmBamboo #DeepTissueLeicester #LeicesterMassage #Scraptoft #BackPain #MassageTherapy`,
  },
  {
    id: 'facial-gua-sha',
    category: 'facials',
    categoryLabel: 'Facials & Skincare',
    title: 'Rose Quartz Gua Sha Sculpting',
    badge: 'Viral Radiance',
    src: '/videos/facial-gua-sha-ritual.mp4',
    downloadName: 'Beauty-Barn-Facial-Gua-Sha.mp4',
    fileSize: '1.0 MB',
    duration: '5s loop',
    overlayText: 'Watch stubborn facial puffiness instantly drain under chilled rose quartz & botanical elixir… 🌸🧖‍♀️',
    audioSuggestion: 'ASMR spa breathing / Lo-fi beauty aesthetic',
    bestPostingTime: 'Monday 8:00 AM (Monday morning de-puff) or Friday 6:00 PM',
    reelsCaption: `The most relaxing jawline contouring you’ll ever experience… 🧖‍♀️✨

Our botanical Gua Sha facial uses genuine rose quartz stones and cold-pressed botanical oils to drain lymphatic fluid, release clenching jaw tension, and restore natural contour.

Available as part of our Bramley Probiotic Facial or as an add-on to any facial treatment!

🔗 Tap the link in bio to book your glow on Fresha.

#TheBeautyBarnLeicester #GuaShaFacial #LymphaticDrainage #LeicesterFacials #SculptingFacial #Scraptoft #RoseQuartzGuaSha #GlowingSkin`,
    feedCaption: `More than just a skincare trend — the ancient art of Gua Sha. 🌸

If you hold tension in your jaw from stress, grind your teeth at night, or wake up with tired puffy eyes, this is your holy grail ritual.

Our therapists use precision sweeping motions with genuine rose quartz tools to:
🌿 Stimulate lymphatic drainage and eliminate morning puffiness
🌿 Release deep facial muscle tension along the jawline and temples
🌿 Boost collagen synthesis and cellular circulation
🌿 Naturally sculpt cheekbones and neck contours

Paired with pure Bramley British botanicals and warm herbal compresses.

✨ Experience it in:
• The Bramley Probiotic Rose Quartz Facial (60 mins — £65)
• The Full Indulgence Ritual (90 mins — £100)
• Add-on Gua Sha sculpting to any facial (£15)

Book your glow online via Fresha (link in bio) 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Gua Sha Sculpting):
• Text: "Instant jaw release & lymphatic drainage ✨"
• Poll Sticker: "Do you clench your jaw or grind teeth when stressed?" ➡️ [GUILTY 🙋‍♀️ / NOPE]

SLIDE 2:
• Text: "Chilled rose quartz stones contour, de-puff, and melt jawline tension."

SLIDE 3:
• Link Sticker: "BOOK GUA SHA FACIAL" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments/facials)`,
    hashtags: `#TheBeautyBarnLeicester #GuaShaFacial #LeicesterFacials #LymphaticDrainageLeicester #RoseQuartzFacial #BramleySkincare #ScraptoftBeauty #FacialContour`,
  },
  {
    id: 'facial-botanical',
    category: 'facials',
    categoryLabel: 'Facials & Skincare',
    title: 'Bramley Botanical Facial Ritual',
    badge: '100% British Botanicals',
    src: '/videos/facial-botanical-ritual.mp4',
    downloadName: 'Beauty-Barn-Botanical-Facial.mp4',
    fileSize: '1.5 MB',
    duration: '6s loop',
    overlayText: 'When your facialist applies warm British botanical seed oils and the outside world disappears… 🌿🤍',
    audioSuggestion: 'Gentle nature rain & harp / Calm ambient',
    bestPostingTime: 'Wednesday 7:00 PM or Sunday 11:00 AM',
    reelsCaption: `Glowing skin starts with pure British botanicals. 🌿✨

Every facial at The Beauty Barn is powered by Bramley — wild-crafted seed oils, rosehip, apple AHA fruit enzymes, and soothing chamomile.

No harsh chemicals, no rushing. Just radiant, dewy, nourished skin.

🔗 Tap the link in our bio to book your facial ritual on Fresha!

#TheBeautyBarnLeicester #BramleyBotanicals #CleanBeauty #LeicesterFacials #Scraptoft #GlowingSkinRoutine #HolisticSkincare`,
    feedCaption: `Why we choose Bramley British Botanicals for your skin: 🍏🌿

Your skin absorbs everything you apply to it. That’s why we partner exclusively with Bramley — harnessing pure flower and seed essential oils, certified cruelty-free, vegan, and blended right here in the British countryside.

From our gentle Apple Peel AHA Facial to our Ultra-Relaxing Lavender & Chamomile Ritual, every step is tailored to restore your skin barrier and calm internal inflammation.

✨ Popular facial options:
• The Mini Bramley Facial (30 mins — £38)
• The Bramley Ultra Relaxing Facial (60 mins — £60)
• The Apple Peel AHA Glow Facial (60 mins — £65)
• The Million Dollar Facial (60 mins — £125)

Leave with radiant, hydrated skin that breathes.

Tap the bio link to reserve your facial on Fresha 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Facial Botanical Application):
• Text: "The dreamiest botanical skincare ritual… 🌿"
• Poll Sticker: "Is your skin feeling dry or dehydrated this season?" ➡️ [YES VERY! / SURVIVING]

SLIDE 2:
• Text: "Pure Bramley flower & seed oils restore your skin barrier under heated couches."

SLIDE 3:
• Link Sticker: "BOOK FACIAL ON FRESHA" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments/facials)`,
    hashtags: `#TheBeautyBarnLeicester #BramleySkincare #BritishBotanicals #LeicesterFacialist #CleanBeautyLeicester #FacialLeicester #GlowUp`,
  },
  {
    id: 'swedish-body-massage',
    category: 'massage',
    categoryLabel: 'Massage & Hot Stones',
    title: 'Candlelit Swedish Bodywork Flow',
    badge: 'Pure Unhurried Care',
    src: '/videos/body-massage-flow.mp4',
    downloadName: 'Beauty-Barn-Swedish-Massage-Flow.mp4',
    fileSize: '5.1 MB',
    duration: '12s loop',
    overlayText: 'Your friendly reminder that taking 60 minutes to just breathe is never a luxury — it’s essential 🌾🤍',
    audioSuggestion: 'Acoustic guitar instrumental / Soothing spa sound',
    bestPostingTime: 'Sunday 7:00 PM or Monday 1:00 PM',
    reelsCaption: `When was the last time you truly paused? 🕯️🌾

No emails. No notifications. Just the subtle scent of sweet orange and lavender, warm botanical oils, and skilled hands easing away the week's tension.

Our 60-minute Relaxing Full Body Massage is our most-loved appointment for a reason (£55).

🔗 Reserve your peaceful hour via the link in our bio!

#TheBeautyBarnLeicester #SwedishMassage #LeicesterMassage #WellnessLeicester #SelfCareSunday #Scraptoft #UnhurriedRelaxation`,
    feedCaption: `Leave the outside world behind the barn door… 🌿✨

At The Beauty Barn, we believe appointments should never feel rushed or clinical. From our heated treatment couches and plush linen to the soothing scent of Bramley botanical essential oils, every detail is curated for restorative calm.

Our classic Swedish Full Body Massage uses rhythmic, flowing strokes to calm the central nervous system, improve lymphatic circulation, and melt away muscular fatigue.

✨ Customise your session:
• Choose your preferred botanical oil blend (Relaxing Lavender, Uplifting Sweet Orange, or Warming Rosemary)
• Tailor pressure from gentle soothing to firm knot release
• Optional add-ons: Warm basalt stones or bamboo canes (£5)

✨ 60 Minutes — £55 | 90 Minutes — £80
Also available in our double room for couples and best friends!

Tap the bio link or visit thebeautybarnleicester.co.uk to book 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Body Massage Flow):
• Text: "If you're reading this, your shoulders need a massage today 🤍"
• Poll Sticker: "Who needs an hour of peace more?" ➡️ [ME! / Someone I love]

SLIDE 2:
• Text: "60 mins full body Swedish relaxation • £55 • In our quiet Scraptoft stone barn."

SLIDE 3:
• Link Sticker: "BOOK FULL BODY MASSAGE" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments/massage)`,
    hashtags: `#TheBeautyBarnLeicester #FullBodyMassage #LeicesterMassageTherapist #Scraptoft #CouplesMassageLeicester #StressRelief #Leicestershire`,
  },
  {
    id: 'private-spa-retreat',
    category: 'retreat',
    categoryLabel: 'Private Spa & Hot Tub',
    title: '100% Private Spa Cabin & Garden Retreat',
    badge: 'Zero Strangers',
    src: '/videos/private-retreat-cabin-tour.mp4',
    downloadName: 'Beauty-Barn-Private-Cabin-Tour.mp4',
    fileSize: '1.0 MB',
    duration: '8s loop',
    overlayText: 'Secret spa retreat in Leicestershire where you get the hot tub, garden cabin & prosecco entirely to yourselves… 🥂🌿',
    audioSuggestion: 'Upbeat luxury lifestyle sound / Celebratory chill music',
    bestPostingTime: 'Friday 5:00 PM or Saturday 11:00 AM',
    reelsCaption: `Tag someone who deserves this private spa day! 🧖‍♀️🥂

Did you know that when you book a Spa Day at The Beauty Barn, you don't share the facilities with anyone else? Zero strangers in the hot tub. Just you, your favourite person, private garden cabin, heated loungers, and prosecco.

Packages from £90pp including treatments & afternoon tea!

🔗 Tap the link in our bio to view packages and enquire.

#TheBeautyBarnLeicester #PrivateSpaDay #LeicesterHotTub #SpaDayLeicester #CouplesSpa #HenPartyLeicester #Scraptoft #SecretLeicestershire`,
    feedCaption: `No crowded public pools. No strangers. Just 100% private indulgence. 🌾✨

Our countryside Spa Day packages offer exclusive access to our secluded garden sanctuary in Scraptoft, Leicestershire. Perfect for birthdays, anniversaries, baby showers, or simply catching up with your closest friends.

🌿 Every Private Spa Package includes:
✨ 100% exclusive private hire of our outdoor hydrotherapy hot tub
✨ Dedicated garden cabin with heated lounge seating & plush robes
✨ Tailored Bramley botanical treatments of your choice
✨ Afternoon tea or artisan grazing boards + chilled prosecco
✨ Groups from 2 to 8 guests

Packages start from £90 per person.

Dates fill weeks in advance, especially for weekends. Tap the link in our bio to enquire about available dates! 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Private Cabin Tour):
• Text: "POV: You booked a spa day with ZERO strangers around you 🥂"
• Question Sticker: "Who are you bringing with you?" ➡️ [Type their name!]

SLIDE 2:
• Text: "Private hot tub + garden cabin + treatments + afternoon tea from £90pp."

SLIDE 3:
• Link Sticker: "VIEW SPA PACKAGES" 🔗 (Link to: thebeautybarnleicester.co.uk/spa-days)`,
    hashtags: `#TheBeautyBarnLeicester #PrivateSpaDay #LeicesterHotTub #SpaBreakUK #Scraptoft #LeicestershireSpa #CouplesRetreat #HenPartySpa`,
  },
  {
    id: 'hot-tub-hydrotherapy',
    category: 'retreat',
    categoryLabel: 'Private Spa & Hot Tub',
    title: 'Outdoor Hydrotherapy Hot Tub',
    badge: 'Countryside Bubble',
    src: '/videos/hot-tub-jets-garden.mp4',
    downloadName: 'Beauty-Barn-Hot-Tub-Jets.mp4',
    fileSize: '0.8 MB',
    duration: '5s loop',
    overlayText: 'Hot tub steaming in the autumn breeze with a chilled glass of prosecco in hand… 🥂🌾',
    audioSuggestion: 'Relaxing vacation / Warm acoustic instrumental',
    bestPostingTime: 'Friday 6:00 PM or Sunday 2:00 PM',
    reelsCaption: `The only place to be this weekend… 🥂🫧

Steam rising in the crisp countryside air, powerful hydrotherapy jets easing muscle fatigue, and not another soul in sight.

All our spa packages include 100% private hot tub hire for you and your group.

🔗 Tap bio link to book your private escape!

#TheBeautyBarnLeicester #PrivateHotTub #HotTubSpa #LeicesterSpaDays #Scraptoft #WeekendEscape #CouplesHotTub`,
    feedCaption: `Hydrotherapy in the heart of the Leicestershire countryside. 🫧🌾

Our sunken garden hot tub is maintained at a perfect 38°C, surrounded by rustic stone barn walls, lavender borders, and open skies.

Whether you're celebrating an anniversary, a baby shower, or needing a restorative afternoon with your best friend, you will never share the water with anyone outside your booking party.

✨ Combined with our Bramley massage treatments, private cabin hire, and chilled refreshments.

Enquire today via our website: thebeautybarnleicester.co.uk/spa-days 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Hot Tub Jets):
• Text: "Autumn breeze + 38°C hot tub = perfection 🫧"
• Poll Sticker: "Hot tub in summer or hot tub in autumn/winter?" ➡️ [SUMMER SUN / WINTER STEAM 🔥]

SLIDE 2:
• Text: "100% private to your booking party — no strangers."

SLIDE 3:
• Link Sticker: "BOOK PRIVATE RETREAT" 🔗 (Link to: thebeautybarnleicester.co.uk/spa-days)`,
    hashtags: `#TheBeautyBarnLeicester #HotTubRetreat #LeicesterSpa #Hydrotherapy #ScraptoftSpa #PrivateHotTubLeicester #CouplesSpa`,
  },
  {
    id: 'gelbottle-biab',
    category: 'nails',
    categoryLabel: 'Nails & BIAB',
    title: 'The GelBottle BIAB (Builder in a Bottle)',
    badge: 'Healthy Natural Nails',
    src: '/videos/gelbottle-polish-carousel.mp4',
    poster: '/images/nail-bar-salon.jpg',
    downloadName: 'Beauty-Barn-GelBottle-BIAB.mp4',
    fileSize: '1.3 MB',
    duration: '6s loop',
    overlayText: 'Why our clients never go back to standard polish after switching to BIAB builder gel… 💅✨',
    audioSuggestion: 'Trendy aesthetic beauty sound / Upbeat pop',
    bestPostingTime: 'Thursday 6:00 PM (Pre-weekend nail inspiration)',
    reelsCaption: `Say goodbye to chipped nails and snapping edges! 💅✨

The GelBottle BIAB (Builder in a Bottle) is formulated to reinforce, strengthen, and nourish your natural nails so they can finally grow long and strong.

Lasts 3–4 weeks with zero lifting. 

🔗 Tap the bio link to book your BIAB manicure on Fresha!

#TheBeautyBarnLeicester #TheGelBottle #BIABLeicester #LeicesterNails #BuilderGel #NaturalNails #ScraptoftNails #NailInspo`,
    feedCaption: `Transform your natural nails with The GelBottle Inc BIAB. 💅✨

If you struggle with weak, bendy, or brittle nails that constantly break when they reach a certain length — Builder in a Bottle (BIAB) will change your nail game forever.

Unlike acrylics that damage the nail plate, BIAB acts as a protective shield of flexible gel that allows your natural nail to thrive and grow beneath.

✨ What your appointment includes:
• Thorough dry cuticle prep and precision nail shaping
• Application of bespoke BIAB shade tailored to your skin tone
• High-shine non-wipe top coat
• Nourishing Bramley botanical hand massage & cuticle oil

✨ Price: £40 (60 mins)
Lasts 3 to 4+ weeks. Regular infills keep your nails pristine year-round.

Book online via Fresha (link in bio) 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Gel Polish Carousel):
• Text: "BIAB: The secret to growing indestructible natural nails 💅"
• Poll Sticker: "Are you team BIAB or still using standard gel?" ➡️ [BIAB convert! / Haven't tried yet]

SLIDE 2:
• Text: "Strengthens, protects, lasts 3-4 weeks with zero chipping."

SLIDE 3:
• Link Sticker: "BOOK BIAB MANICURE £40" 🔗 (Link to: thebeautybarnleicester.co.uk/treatments/nails)`,
    hashtags: `#TheBeautyBarnLeicester #TheGelBottleBIAB #BIABManicure #LeicesterNailTech #BuilderGelLeicester #NailsOfInstagram #ScraptoftNails`,
  },
  {
    id: 'fireside-trailer',
    category: 'fireside',
    categoryLabel: 'Fireside Campaign',
    title: 'The Fireside Ritual Experience Trailer',
    badge: 'Cinematic Trailer',
    src: '/videos/fireside-ritual-trailer.mp4',
    poster: '/videos/fireside-ritual-trailer-poster.jpg',
    downloadName: 'The-Beauty-Barn-Fireside-Ritual-Trailer.mp4',
    fileSize: '16.6 MB',
    duration: '35.5s full reel',
    overlayText: 'Step away from the cold... The Fireside Ritual is officially live at The Beauty Barn 🕯️🍁🔥',
    audioSuggestion: 'Official integrated spa soundtrack included in video',
    bestPostingTime: 'Sunday 6:00 PM or Friday 7:00 PM',
    reelsCaption: `Save this for when the temperature drops below 10°C in Leicester… 🍁🍯🔥

The limited-edition Fireside Ritual is officially live at The Beauty Barn.
Warming cinnamon & honey back polish 🍯
Heated volcanic basalt stones 🔥
Nourishing warm Bramley oils 🌿
Rose quartz gua sha facial & scalp therapy 🧖‍♀️

PLUS a free £35 Bramley skincare cracker to take home on 90m & 120m bookings!

🔗 Tap the link in our bio to book your warming escape on Fresha!

#TheBeautyBarnLeicester #LeicesterSpa #FiresideRitual #HotStoneMassage #BramleyBotanicals #LeicesterBeauty`,
    feedCaption: `Step away from the cold and into the comforting warmth of The Fireside Ritual… 🍁🔥

As the crisp autumn air settles over Leicestershire, we’ve created a limited-edition warming escape designed to melt away deep muscular tension and restore seasonal radiance from head to toe.

✨ What your Fireside Ritual includes:
🍯 Step 1: Warming Cinnamon & Honey Back Exfoliation — A gentle spiced polish that smooths skin texture and awakens circulation.
🔥 Step 2: Heated Basalt Stone Massage & Bramley Botanicals — Smooth volcanic hot stones and warm botanical oils soothe tired shoulders, neck, and back.
🧖‍♀️ Step 3: Botanical Gua Sha Facial & Warm-Oil Scalp Therapy — Pressure-point scalp release and rose quartz contouring under cosy heated blankets.

🎁 Exclusive Take-Home Gift:
Book our 90-minute (£110) or 120-minute (£140) ritual and receive a complimentary luxury Bramley Gift Cracker (worth £35!), containing Bramley Raspberry Seed Facial Oil and a Rose Quartz Gua Sha so you can continue the ritual at home.

🍂 Available Options:
• 60 Minutes — £70
• 90 Minutes — £110 (Includes £35 Bramley Gift Cracker)
• 120 Minutes — £140 (Includes £35 Bramley Gift Cracker)

Appointments are strictly limited for the autumn & winter season. Tap the link in our bio or visit thebeautybarnleicester.co.uk to reserve your sanctuary today 🤍

With warmth,
Mel, Zofia & The Beauty Barn Team x`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Fireside Trailer):
• Text: "When the autumn cold sets in and you just need this... 🔥"
• Poll Sticker: "Ready for hot stones season?" ➡️ [YES PLEASE! / DESPERATELY]

SLIDE 2:
• Text: "Introducing THE FIRESIDE RITUAL 🍁 Warming cinnamon polish, heated volcanic stones, warm scalp therapy & rose quartz gua sha facial."

SLIDE 3:
• Text: "From £70 • Limited autumn & winter appointments. (90m & 120m include a FREE £35 Bramley cracker gift!)"
• Link Sticker: "BOOK ON FRESHA" 🔗 (Link to: thebeautybarnleicester.co.uk/rituals)`,
    hashtags: `#TheBeautyBarnLeicester #TheBeautyBarn #LeicesterSpa #FiresideRitual #HotStoneMassageLeicester #LeicesterBeauty #Scraptoft #BramleyBotanicals #GuaShaFacial #AutumnSanctuary #Leicestershire`,
  },
  {
    id: 'fireside-cinnamon-scrub',
    category: 'fireside',
    categoryLabel: 'Fireside Campaign',
    title: 'Warming Cinnamon & Honey Scrub ASMR',
    badge: 'Sensory ASMR Hook',
    src: '/videos/fireside-promo-cinnamon-honey.mp4',
    poster: '/videos/fireside-promo-cinnamon-poster.jpg',
    downloadName: 'Fireside-Promo-Cinnamon-Honey.mp4',
    fileSize: '4.9 MB',
    duration: '8s loop',
    overlayText: 'Step 1: Warming cinnamon & honey back polish to awaken circulation and smooth skin 🍯🍁',
    audioSuggestion: 'Acoustic guitar / Autumn cozy sounds',
    bestPostingTime: 'Wednesday 12:00 PM or Saturday 9:30 AM',
    reelsCaption: `The sensory start to our Fireside Ritual… 🍯🍁

Warming cinnamon & pure honey whipped polish smoothed across the back, awakening dull circulation and leaving your skin silky soft before heated basalt stones take over.

Available for a limited time as part of The Fireside Ritual (from £70).

🔗 Book your autumn escape via the link in our bio!

#TheBeautyBarnLeicester #FiresideRitual #BodyScrub #CinnamonHoney #AutumnSpa #ScraptoftSpa #Leicestershire`,
    feedCaption: `Why exfoliation is essential before a hot stone massage: 🍯✨

During the colder months, circulation slows and skin builds up a layer of dry, dull cells. Our spiced cinnamon and wildflower honey back polish gently buffs away dry texture while naturally warming the surface capillaries.

This prepares the muscle tissue to receive the therapeutic heat of volcanic basalt stones and absorb deeply nourishing Bramley botanical oils.

✨ Experience it exclusively in The Fireside Ritual:
• 60 mins (£70) | 90 mins (£110 with free £35 gift) | 120 mins (£140 with free £35 gift)

Appointments are limited for the season. Tap the bio link to book on Fresha 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Cinnamon Scoop & Polish):
• Text: "Warming cinnamon & honey back polish 🍯🍁"
• Slider Sticker: "How amazing does this look?" [🍯 0 - 100%]

SLIDE 2:
• Text: "Step 1 of our limited-edition Fireside Ritual at The Beauty Barn."

SLIDE 3:
• Link Sticker: "BOOK FIRESIDE RITUAL" 🔗 (Link to: thebeautybarnleicester.co.uk/rituals)`,
    hashtags: `#TheBeautyBarnLeicester #BodyExfoliation #CinnamonHoney #AutumnSkincare #LeicesterSpa #Scraptoft #FiresideRitual`,
  },
  {
    id: 'prosecco-cheers',
    category: 'retreat',
    categoryLabel: 'Private Spa & Hot Tub',
    title: 'Celebration Toast at the Barn',
    badge: 'Celebrations & Hen Parties',
    src: '/videos/prosecco-cheers-retreat.mp4',
    downloadName: 'Beauty-Barn-Prosecco-Toast.mp4',
    fileSize: '1.2 MB',
    duration: '4s loop',
    overlayText: 'Celebrating life moments where nobody else is around… 🥂🍾✨',
    audioSuggestion: 'Celebratory pop / Upbeat summer/autumn acoustic',
    bestPostingTime: 'Friday 4:00 PM or Saturday 12:00 PM',
    reelsCaption: `Cheers to private pampering! 🥂✨

Whether it’s a milestone birthday, bride-to-be celebration, or a much-needed best friends catchup, our private spa garden is exclusively yours.

Chilled prosecco, heated loungers, hydrotherapy hot tub & bespoke treatments.

🔗 Enquire about our private spa packages via bio link!

#TheBeautyBarnLeicester #HenPartySpa #LeicesterHenParty #BirthdaySpaDay #ProseccoSpa #Scraptoft`,
    feedCaption: `Make your next celebration unforgettable at The Beauty Barn. 🥂🌾

Host your bridal party, birthday gathering, or family wellness day with complete privacy in the Leicestershire countryside.

We cater for intimate groups of 2 to 8, providing:
🍾 Chilled bottles of Italian prosecco or artisan sparkling elderflower
🥐 Decadent afternoon tea or savoury charcuterie grazing boards
🧖‍♀️ Indulgent 30, 45, or 60-minute botanical treatments for each guest
🫧 Unrestricted access to our sunken garden hot tub and heated relaxation cabin

Dates for winter and spring are booking fast!

Tap the link in our bio to browse packages and enquire online 🤍`,
    storyScript: `📱 3-SLIDE INSTAGRAM STORY SEQUENCE

SLIDE 1 (Video: Prosecco Toast):
• Text: "The ultimate private girls' day out in Leicestershire 🥂"
• Question Sticker: "What are you celebrating next?"

SLIDE 2:
• Text: "Private spa packages from £90pp including hot tub, cabin, treatments & afternoon tea."

SLIDE 3:
• Link Sticker: "EXPLORE PACKAGES" 🔗 (Link to: thebeautybarnleicester.co.uk/spa-days)`,
    hashtags: `#TheBeautyBarnLeicester #SpaParty #LeicesterEvents #HenPartyLeicester #CelebrationSpa #ScraptoftSpaDays`,
  },
];
