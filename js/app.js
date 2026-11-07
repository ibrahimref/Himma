(function(){
const I = {
 wheel:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4" r="2"/><path d="M11.5 8v6h6l2.5 6"/><path d="M8 11a6 6 0 1 0 8 8"/></svg>',
 sign:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.9-2.6L4 15.5a1.5 1.5 0 0 1 2.4-1.8L7 14.5"/></svg>',
 park:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',
 sensory:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M20 15a8 8 0 1 1-11-11 7 7 0 0 0 11 11z"/></svg>',
 braille:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="8" cy="5" r="2"/><circle cx="16" cy="5" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>',
 audio:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
 pin:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
 clock:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 heart:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/></svg>',
 chev:'<svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
 play:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
 stop:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
 card:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M13 10h5M13 14h3"/></svg>',
 bus:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M8 18v3M16 18v3"/><circle cx="8" cy="14.5" r="1"/><circle cx="16" cy="14.5" r="1"/></svg>',
 phone:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
 cal:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4"/></svg>'
};

const T = {
 ar:{skip:'تخطَّ إلى المحتوى',brand:'همّة',brandSub:'منصة خدمات أصحاب الهمم',navLabel:'القائمة الرئيسية',nav1:'المراكز الصحية',nav2:'الفعاليات',nav3:'الشروحات',nav4:'عن المبادرة',a11y:'الإتاحة',em:'طوارئ',menu:'القائمة',
  a11yTitle:'إعدادات الإتاحة',optSize:'حجم النص',optHc:'تباين عالٍ',optRead:'خط سهل القراءة',optSimple:'الوضع المبسّط',optMotion:'إيقاف الحركة',optReset:'استعادة الإعدادات الافتراضية',
  emTitle:'أرقام الطوارئ في الإمارات',emAmb:'الإسعاف',emPol:'الشرطة',emFire:'الدفاع المدني',emNote:'في التطبيق، يرسل زر الطوارئ موقعك إلى جهة الاتصال التي تحددها في ملفك.',
  eyebrow:'من العين، مدينة الواحات، إلى كل الإمارات',h1a:'خدماتك بين يديك…',h1b:'بلا حواجز',lead:'دليل موحّد يساعدك على إيجاد المركز الصحي المناسب لحالتك وموقعك، ومعرفة الفعاليات المهيأة لك، وتعلّم إنجاز أمورك اليومية خطوة بخطوة.',
  q1:'مركز صحي قريب',q1s:'حسب موقعك وحالتك',q2:'فعاليات تهمّك',q2s:'ثقافية، رياضية، تعليمية',q3:'شروحات خطوة بخطوة',q3s:'إشارة، صوت، صور',q4:'تعرّف على همّة',q4s:'الرؤية وكيف نعمل',
  sceneCap:'مستوحى من واحة العين وجبل حفيت وأبراج الطين والأفلاج، من مواقع العين الثقافية المدرجة في قائمة التراث العالمي.',
  k1:'دليل المراكز الصحية',centersH:'ابحث عن مركز صحي مهيأ لحالتك',centersP:'اختر الإمارة ونوع الحالة وما تحتاجه من تجهيزات، وستظهر المراكز الأقرب إليك.',filterLabel:'تصفية المراكز',fEmirate:'الإمارة',fCond:'نوع الحالة',fFeat:'تجهيزات أحتاجها',clear:'مسح التصفية',
  exNote:'الأسماء والبيانات المعروضة أمثلة توضيحية للنموذج الأولي، وتُستبدل ببيانات الجهات الشريكة عند الإطلاق.',
  count:n=>n===0?'لا توجد نتائج':n===1?'مركز واحد مطابق':n===2?'مركزان مطابقان':n<=10?n+' مراكز مطابقة':n+' مركزًا مطابقًا',
  empty:'لا يوجد مركز يطابق كل الخيارات. جرّب إزالة أحد التجهيزات أو اختيار إمارة أخرى.',
  km:'كم',away:'من موقعك',hours:'ساعات العمل',book:'احجز موعدًا',booked:'تم تسجيل طلب تجريبي. هذه نسخة توضيحية، ولم يُرسل أي حجز فعلي.',fav:'أضف إلى المفضلة',unfav:'إزالة من المفضلة',ex:'مثال',
  k2:'الفعاليات والأنشطة',eventsH:'فعاليات مهيأة لك هذا الموسم',eventsP:'لكل فعالية مؤشر يوضح التجهيزات المتوفرة في المكان، مع التسجيل والتذكير بنقرة.',evType:'نوع الفعالية',
  all:'الكل',cultural:'ثقافية',sports:'رياضية',educational:'تعليمية',register:'سجّلني',registered:'مسجّل — سنذكّرك قبل الموعد',companion:'أحتاج مرافقًا',compOn:'طُلب مرافق متطوع',
  k3:'مركز الشروحات',guidesH:'تعلّم إنجاز أمورك خطوة بخطوة',guidesP:'كل شرح متاح بثلاث صيغ: خطوات مصوّرة بنص مبسّط، ودليل صوتي، وفيديو بلغة الإشارة الإماراتية.',
  fSteps:'خطوات',fAudio:'دليل صوتي',fSign:'لغة الإشارة',listen:'استمع إلى الشرح',stopL:'إيقاف',noVoice:'القراءة الصوتية غير مدعومة في هذا المتصفح. يمكنك استخدام قارئ الشاشة في جهازك.',
  signPh:'يُضاف هنا فيديو الشرح بلغة الإشارة الإماراتية بالتعاون مع مترجمين معتمدين.',audioP:'يقرأ الدليل الصوتي الخطوات بصوت واضح وسرعة هادئة.',
  k4:'عن المبادرة',aboutH:'كيف تعمل همّة',quoteB:'لا شيء عنّا من دوننا',quoteP:'يشارك مجلس استشاري من أصحاب الهمم في تصميم المنصة واختبارها ومراجعة محتواها.',
  footP:'همّة… لأن لكل همّة طريقًا. مبادرة مجتمعية مكمّلة للخدمات الحكومية وليست بديلًا عنها.',fServices:'الخدمات',partnerPortal:'بوابة الجهات الشريكة (قريبًا)',fContact:'تواصل معنا',fAccess:'نلتزم بمعايير WCAG 2.2 بمستوى AA',
  fine1:'نموذج أولي لمشروع تخرج — تخصص العلاقات العامة، جامعة العين، 2026',fine2:'جميع البيانات المعروضة أمثلة توضيحية',art1:'مركز صحي مهيأ بمنحدر ومواقف مخصصة، يصل إليه شاب على كرسي متحرك',art2:'أمسية في فناء قلعة طينية، مع مترجمة لغة إشارة على المسرح وجمهور متنوع',art3:'هاتف بنص مكبّر ودليل صوتي، وشاشة تعرض مترجمة لغة إشارة، وحافلة بمنحدر عند محطة',art4:'عائلات وأصحاب همم يجتمعون تحت شجرة الغاف، الشجرة الوطنية للإمارات',langBtn:'Switch to English'},
 en:{skip:'Skip to content',brand:'Himma',brandSub:'Services for People of Determination',navLabel:'Main menu',nav1:'Health centres',nav2:'Events',nav3:'Guides',nav4:'About',a11y:'Accessibility',em:'Emergency',menu:'Menu',
  a11yTitle:'Accessibility settings',optSize:'Text size',optHc:'High contrast',optRead:'Easy-read font',optSimple:'Simple mode',optMotion:'Stop motion',optReset:'Restore defaults',
  emTitle:'UAE emergency numbers',emAmb:'Ambulance',emPol:'Police',emFire:'Civil Defence',emNote:'In the app, the emergency button sends your location to the contact you choose in your profile.',
  eyebrow:'From Al Ain, the Garden City, to every emirate',h1a:'Your services, within reach.',h1b:'No barriers.',lead:'One guide to find the health centre that fits your condition and location, discover events ready for you, and learn everyday tasks step by step.',
  q1:'A health centre near me',q1s:'By location and condition',q2:'Events for me',q2s:'Cultural, sports, learning',q3:'Step-by-step guides',q3s:'Sign, audio, pictures',q4:'Meet Himma',q4s:'Our vision and how it works',
  sceneCap:'Inspired by Al Ain Oasis, Jebel Hafeet, mud-brick towers and aflaj channels, part of the Cultural Sites of Al Ain on the World Heritage List.',
  k1:'Health centre guide',centersH:'Find a health centre ready for you',centersP:'Choose an emirate, a condition and the facilities you need. The nearest matches appear first.',filterLabel:'Filter centres',fEmirate:'Emirate',fCond:'Condition',fFeat:'Facilities I need',clear:'Clear filters',
  exNote:'Names and details shown are examples for this prototype. Partner data replaces them at launch.',
  count:n=>n===0?'No results':n===1?'1 matching centre':n+' matching centres',
  empty:'No centre matches every option. Try removing a facility or choosing another emirate.',
  km:'km',away:'from you',hours:'Opening hours',book:'Book an appointment',booked:'Sample request recorded. This is a demo, so no real booking was sent.',fav:'Add to favourites',unfav:'Remove from favourites',ex:'Example',
  k2:'Events & activities',eventsH:'Accessible events this season',eventsP:'Each event shows the facilities available at the venue. Register and get a reminder in one tap.',evType:'Event type',
  all:'All',cultural:'Cultural',sports:'Sports',educational:'Learning',register:'Register',registered:'Registered. We will remind you before it starts',companion:'I need a companion',compOn:'Volunteer companion requested',
  k3:'Guides',guidesH:'Learn everyday tasks step by step',guidesP:'Every guide comes in three formats: illustrated steps in plain language, an audio guide, and an Emirati Sign Language video.',
  fSteps:'Steps',fAudio:'Audio guide',fSign:'Sign language',listen:'Listen to this guide',stopL:'Stop',noVoice:'Read-aloud is not supported in this browser. You can use your device screen reader.',
  signPh:'An Emirati Sign Language video of this guide will appear here, produced with certified interpreters.',audioP:'The audio guide reads each step in a clear voice at a calm pace.',
  k4:'About',aboutH:'How Himma works',quoteB:'Nothing about us without us',quoteP:'An advisory council of People of Determination helps design, test and review the platform.',
  footP:'Himma: every determination has a way. A community initiative that complements government services and does not replace them.',fServices:'Services',partnerPortal:'Partner portal (coming soon)',fContact:'Contact',fAccess:'Built to WCAG 2.2 level AA',
  fine1:'Graduation project prototype. Public Relations, Al Ain University, 2026',fine2:'All data shown is illustrative',art1:'An accessible health centre with a ramp and reserved parking, reached by a young man in a wheelchair',art2:'An evening in a mud-brick fort courtyard, with a sign language interpreter on stage and a diverse audience',art3:'A phone with enlarged text and an audio guide, a screen showing a sign language interpreter, and a bus with a ramp at a stop',art4:'Families and People of Determination gathering under a ghaf tree, the national tree of the UAE',langBtn:'التبديل إلى العربية'}
};

const EMIRATES=[['all','كل الإمارات','All emirates'],['auh','أبوظبي (العين)','Abu Dhabi (Al Ain)'],['auh2','أبوظبي (المدينة)','Abu Dhabi (city)'],['dxb','دبي','Dubai'],['shj','الشارقة','Sharjah'],['ajm','عجمان','Ajman'],['uaq','أم القيوين','Umm Al Quwain'],['rak','رأس الخيمة','Ras Al Khaimah'],['fuj','الفجيرة','Fujairah']];
const CONDS=[['mobility','حركية','Mobility'],['visual','بصرية','Visual'],['hearing','سمعية','Hearing'],['intellectual','ذهنية','Intellectual'],['autism','طيف التوحد','Autism'],['chronic','أمراض مزمنة','Chronic illness']];
const FEATS=[['wheel','مداخل للكراسي المتحركة','Wheelchair access'],['sign','مترجم لغة إشارة','Sign interpreter'],['park','مواقف مخصصة','Reserved parking'],['sensory','غرفة هادئة حسيًا','Sensory-quiet room'],['braille','لافتات بطريقة برايل','Braille signage'],['audio','وصف صوتي','Audio description']];

const CENTRES=[
 {ar:'مركز الواحة للتأهيل الطبي',en:'Al Waha Medical Rehabilitation Centre',em:'auh',area:['العين، الجيمي','Al Ain, Al Jimi'],km:2.1,conds:['mobility','autism','intellectual'],feats:['wheel','park','sensory'],hrs:['٨ص – ٨م','8am – 8pm']},
 {ar:'عيادة حفيت للسمع والنطق',en:'Hafeet Hearing & Speech Clinic',em:'auh',area:['العين، الطوية','Al Ain, Al Towayya'],km:4.5,conds:['hearing'],feats:['sign','wheel','park'],hrs:['٩ص – ٩م','9am – 9pm']},
 {ar:'مركز الفلج للعلاج الطبيعي',en:'Al Falaj Physiotherapy Centre',em:'auh',area:['العين، المويجعي','Al Ain, Al Muwaiji'],km:5.8,conds:['mobility','chronic'],feats:['wheel','park','braille'],hrs:['٧ص – ٧م','7am – 7pm']},
 {ar:'عيادة القطّارة العائلية',en:'Al Qattara Family Clinic',em:'auh',area:['العين، القطّارة','Al Ain, Al Qattara'],km:7.3,conds:['chronic','visual','hearing'],feats:['wheel','sign','braille','audio'],hrs:['٨ص – ١٠م','8am – 10pm']},
 {ar:'مركز البصيرة لطب العيون',en:'Al Baseera Eye Centre',em:'auh2',area:['أبوظبي، الخالدية','Abu Dhabi, Al Khalidiya'],km:148,conds:['visual'],feats:['wheel','park','braille','audio'],hrs:['٨ص – ٦م','8am – 6pm']},
 {ar:'مركز نور لاضطراب طيف التوحد',en:'Noor Autism Centre',em:'dxb',area:['دبي، البرشاء','Dubai, Al Barsha'],km:132,conds:['autism','intellectual'],feats:['sensory','park','wheel'],hrs:['٨ص – ٤م','8am – 4pm']},
 {ar:'عيادة الخان للسمعيات',en:'Al Khan Audiology Clinic',em:'shj',area:['الشارقة، الخان','Sharjah, Al Khan'],km:156,conds:['hearing'],feats:['sign','wheel'],hrs:['١٠ص – ١٠م','10am – 10pm']}
];

const EVENTS=[
 {cat:'cultural',d:10,m:['أكتوبر','Oct'],ar:'جولة بالوصف الصوتي في قلعة الجاهلي',en:'Audio-described tour of Al Jahili Fort',place:['العين','Al Ain'],time:['٤:٠٠ م','4:00 pm'],feats:['audio','sign','wheel']},
 {cat:'sports',d:17,m:['أكتوبر','Oct'],ar:'مباراة ودية لكرة السلة على الكراسي المتحركة',en:'Wheelchair basketball friendly match',place:['صالة رياضية، العين','Sports hall, Al Ain'],time:['٦:٣٠ م','6:30 pm'],feats:['wheel','park','sign']},
 {cat:'educational',d:21,m:['أكتوبر','Oct'],ar:'ورشة: استخدام قارئ الشاشة في الهاتف',en:'Workshop: using your phone screen reader',place:['قاعة مجتمعية، العين','Community hall, Al Ain'],time:['٥:٠٠ م','5:00 pm'],feats:['braille','audio','wheel']},
 {cat:'cultural',d:24,m:['أكتوبر','Oct'],ar:'أمسية حكايات شعبية بلغة الإشارة',en:'Folk tales evening in sign language',place:['واحة العين','Al Ain Oasis'],time:['٧:٠٠ م','7:00 pm'],feats:['sign','wheel','sensory']},
 {cat:'sports',d:1,m:['نوفمبر','Nov'],ar:'مشي عائلي دامج عند سفح جبل حفيت',en:'Inclusive family walk at the foot of Jebel Hafeet',place:['جبل حفيت، العين','Jebel Hafeet, Al Ain'],time:['٧:٠٠ ص','7:00 am'],feats:['wheel','park']},
 {cat:'educational',d:3,m:['ديسمبر','Dec'],ar:'لقاء لأولياء الأمور في اليوم الدولي للأشخاص ذوي الإعاقة: الحقوق والخدمات',en:'Parents session on International Day of Persons with Disabilities: rights and services',place:['العين','Al Ain'],time:['١٠:٠٠ ص','10:00 am'],feats:['sign','sensory','wheel']}
];

const TUTS=[
 {ic:'card',ar:'التقديم على بطاقة أصحاب الهمم',en:'Applying for the People of Determination card',sar:'البطاقة تفتح لك خدمات وتسهيلات في جهات كثيرة',sen:'The card unlocks services and discounts across many providers',
  ar_s:['جهّز بطاقة الهوية الإماراتية وصورة شخصية حديثة وتقريرًا طبيًا حديثًا يوضح الحالة.','ادخل إلى القناة الرقمية للجهة المختصة في إمارتك، مثل منصة «تم» في أبوظبي، باستخدام الهوية الرقمية UAE PASS.','اختر خدمة إصدار بطاقة أصحاب الهمم، وحدّد نوع الحالة وأي أجهزة مساعدة تستخدمها.','أرفق المستندات وأرسل الطلب، ثم تابع حالته من حسابك.','تأكد من المتطلبات الحالية لدى الجهة المختصة، فقد تتغير الإجراءات.'],
  en_s:['Prepare your Emirates ID, a recent photo and a recent medical report describing the condition.','Sign in to the relevant digital channel in your emirate, such as TAMM in Abu Dhabi, with UAE PASS.','Choose the People of Determination card service, then select the condition and any assistive devices you use.','Attach the documents, submit, and follow the status from your account.','Check the current requirements with the issuing authority, as procedures can change.']},
 {ic:'bus',ar:'التنقّل بالحافلات العامة في أبوظبي',en:'Getting around by public bus in Abu Dhabi',sar:'استفد من امتيازات بطاقة أصحاب الهمم في التنقل',sen:'Use the card benefits when you travel',
  ar_s:['احمل بطاقة أصحاب الهمم معك، فهي تتيح التنقل مجانًا في الحافلات العامة داخل أبوظبي وضواحيها.','خطّط لرحلتك مسبقًا عبر تطبيق أو موقع أبوظبي للتنقل لمعرفة الخط والمحطة الأقرب.','عند الصعود، أظهر البطاقة للسائق واطلب استخدام المنحدر إن احتجت إليه.','في حافلات التنقل بين المدن، مثل رحلة أبوظبي – العين، يحصل حامل البطاقة على خصم ٥٠٪.'],
  en_s:['Carry your People of Determination card. It gives free travel on public buses in Abu Dhabi and its suburbs.','Plan the trip ahead in the Abu Dhabi Mobility app or website to find your route and nearest stop.','When boarding, show the card to the driver and ask for the ramp if you need it.','On intercity buses, such as Abu Dhabi to Al Ain, card holders get 50% off.']},
 {ic:'phone',ar:'تشغيل قارئ الشاشة في هاتفك',en:'Turning on your phone screen reader',sar:'VoiceOver في آيفون وTalkBack في أندرويد',sen:'VoiceOver on iPhone, TalkBack on Android',
  ar_s:['في آيفون: افتح الإعدادات، ثم تسهيلات الاستخدام، ثم VoiceOver، وفعّل الخيار.','في أندرويد: افتح الإعدادات، ثم إمكانية الوصول، ثم TalkBack، وفعّل الخيار.','المس أي عنصر مرة واحدة ليُقرأ، والمسه مرتين لفتحه.','اسحب بإصبع واحد يمينًا أو يسارًا للانتقال بين العناصر.'],
  en_s:['On iPhone: open Settings, then Accessibility, then VoiceOver, and switch it on.','On Android: open Settings, then Accessibility, then TalkBack, and switch it on.','Tap any item once to hear it, and double-tap to open it.','Swipe right or left with one finger to move between items.']},
 {ic:'cal',ar:'حجز موعد في مركز صحي عبر همّة',en:'Booking a health centre appointment on Himma',sar:'من البحث إلى التذكير في أربع خطوات',sen:'From search to reminder in four steps',
  ar_s:['افتح قسم المراكز الصحية، واختر إمارتك ونوع حالتك.','حدّد التجهيزات التي تحتاجها، مثل مترجم لغة الإشارة أو المواقف المخصصة.','اختر المركز المناسب واضغط «احجز موعدًا»، ثم اختر اليوم والوقت.','ستصلك رسالة تأكيد وتذكير قبل الموعد، مع خيار الملاحة الصوتية حتى باب المركز.'],
  en_s:['Open Health centres and choose your emirate and condition.','Select the facilities you need, such as a sign interpreter or reserved parking.','Pick a centre, tap Book an appointment, then choose a day and time.','You get a confirmation and a reminder, with voice navigation to the centre door.']}
];

const JOURNEY=[['الدخول الآمن','Secure sign-in','عبر الهوية الرقمية UAE PASS','With UAE PASS digital identity'],['ملفك الشخصي','Your profile','حدّد احتياجاتك وتفضيلات العرض','Set your needs and display preferences'],['اقتراحات لك','Suggestions for you','مراكز وفعاليات وشروحات تناسبك','Centres, events and guides that fit you'],['احجز وسجّل','Book and register','موعد أو مقعد بخطوة واحدة','An appointment or a seat in one step'],['قيّم التجربة','Rate the visit','تقييمك يحسّن دقة الدليل','Your rating keeps the guide accurate']];
const ABOUT=[['رؤيتنا','Our vision','مجتمع إماراتي دامج يعيش فيه أصحاب الهمم حياة مستقلة وكريمة بسهولة ويسر.','An inclusive Emirati society where People of Determination live independent, dignified lives with ease.'],['رسالتنا','Our mission','منصة موحدة موثوقة تصل صاحب الهمة بالخدمة المناسبة لحالته وموقعه، وتمنحه المعرفة ليعتمد على نفسه.','One trusted platform that connects each person to the right service for their condition and location, and the know-how to do things independently.'],['لمن همّة؟','Who is Himma for?','أصحاب الهمم بمختلف فئاتهم، وأسرهم ومقدمو الرعاية، والجهات الصحية ومنظمو الفعاليات.','People of Determination of every category, their families and carers, and health providers and event organisers.']];

// ---------- state & prefs ----------
const root=document.documentElement;
const S={lang:'ar',emirate:'all',conds:new Set(),feats:new Set(),cat:'all',booked:new Set(),favs:new Set(),reg:new Set(),comp:new Set(),fs:0,hc:false,readable:false,simple:false,rm:false};
const store={get(){try{return JSON.parse(localStorage.getItem('himma')||'{}')}catch(e){return{}}},set(o){try{localStorage.setItem('himma',JSON.stringify(o))}catch(e){}}};
const saved=store.get(); ['lang','fs','hc','readable','simple','rm'].forEach(k=>{if(k in saved)S[k]=saved[k]});
function persist(){store.set({lang:S.lang,fs:S.fs,hc:S.hc,readable:S.readable,simple:S.simple,rm:S.rm})}
const L=()=>S.lang==='ar'?0:1;
const t=k=>T[S.lang][k];
const $=s=>document.querySelector(s);
const announce=m=>{const l=$('#live');l.textContent='';setTimeout(()=>l.textContent=m,50)};

function applyPrefs(){
  root.classList.remove('fs-1','fs-2','fs-3'); if(S.fs) root.classList.add('fs-'+S.fs);
  ['hc','readable','simple','rm'].forEach(k=>root.classList.toggle(k,!!S[k]));
  document.querySelectorAll('[data-fs]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.fs===S.fs)));
  document.querySelectorAll('.switch').forEach(b=>b.setAttribute('aria-checked',String(!!S[b.dataset.opt])));
}
function applyLang(){
  root.lang=S.lang; root.dir=S.lang==='ar'?'rtl':'ltr';
  document.title=S.lang==='ar'?'همّة · Himma':'Himma · همّة';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=t(el.dataset.i18n); if(typeof v==='string') el.textContent=v});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
  const lb=$('#langBtn'); lb.textContent=S.lang==='ar'?'EN':'ع'; lb.lang=S.lang==='ar'?'en':'ar'; lb.setAttribute('aria-label',t('langBtn'));
  $('#sceneT').textContent=S.lang==='ar'?'رسم لواحة العين: جبل حفيت، برج طيني، نخيل، وقناة فلج':'Illustration of Al Ain Oasis: Jebel Hafeet, a mud-brick tower, palms and a falaj channel';
  buildFilters(); renderCentres(); renderEvents(); renderTuts(); renderAbout();
}

// ---------- centres ----------
function buildFilters(){
  const sel=$('#emirate'); sel.innerHTML=EMIRATES.map(e=>`<option value="${e[0]}">${e[1+L()]}</option>`).join(''); sel.value=S.emirate;
  $('#condChips').innerHTML=CONDS.map(c=>`<button type="button" class="chip" data-cond="${c[0]}" aria-pressed="${S.conds.has(c[0])}">${c[1+L()]}</button>`).join('');
  $('#featChecks').innerHTML=FEATS.map(f=>`<label class="check"><input type="checkbox" id="f-${f[0]}" value="${f[0]}" ${S.feats.has(f[0])?'checked':''}>${I[f[0]]}<span>${f[1+L()]}</span></label>`).join('');
}
const featLabel=k=>FEATS.find(f=>f[0]===k)[1+L()];
function renderCentres(){
  const list=CENTRES.filter(c=>(S.emirate==='all'||c.em===S.emirate)&&(!S.conds.size||[...S.conds].some(x=>c.conds.includes(x)))&&[...S.feats].every(f=>c.feats.includes(f))).sort((a,b)=>a.km-b.km);
  $('#cCount').textContent=t('count')(list.length);
  const box=$('#cList');
  if(!list.length){box.innerHTML=`<div class="empty">${t('empty')}</div>`;return}
  box.innerHTML=list.map(c=>{const id=c.en; const nm=S.lang==='ar'?c.ar:c.en; const conds=c.conds.map(k=>CONDS.find(x=>x[0]===k)[1+L()]).join(' · ');
   return `<article class="card"><div class="card-top"><div style="display:grid;gap:6px"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><h3>${nm}</h3><span class="ex">${t('ex')}</span></div>
    <div class="meta"><span>${I.pin}${c.area[L()]}</span><span>${I.clock}${c.hrs[L()]}</span></div><div class="meta secondary"><span>${conds}</span></div></div>
    <div class="dist" aria-label="${c.km} ${t('km')} ${t('away')}">${c.km}<small style="font-size:.7em"> ${t('km')}</small></div></div>
    <div class="feat">${c.feats.map(f=>`<span>${I[f]}${featLabel(f)}</span>`).join('')}</div>
    <div class="actions"><button class="btn primary" data-book="${id}">${t('book')}</button>
     <button class="btn outline fav" data-fav="${id}" aria-pressed="${S.favs.has(id)}" aria-label="${S.favs.has(id)?t('unfav'):t('fav')}">${I.heart}</button>
     ${S.booked.has(id)?`<span class="status" role="status">${t('booked')}</span>`:''}</div></article>`}).join('');
}

// ---------- events ----------
function renderEvents(){
  $('#evTabs').innerHTML=['all','cultural','sports','educational'].map(c=>`<button class="chip" data-cat="${c}" aria-pressed="${S.cat===c}">${t(c)}</button>`).join('');
  const list=EVENTS.filter(e=>S.cat==='all'||e.cat===S.cat);
  $('#evList').innerHTML=list.map(e=>{const id=e.en;
   return `<article class="card ev cat-${e.cat}"><svg class="ev-art" viewBox="0 0 320 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#ev-${e.cat}" width="320" height="90"/></svg><div class="date" aria-hidden="true"><b>${e.d}</b><span>${e.m[L()]}</span></div>
    <div style="display:grid;gap:8px"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="tag">${t(e.cat)}</span><span class="ex">${t('ex')}</span></div>
     <h3 style="font-size:1.1rem">${S.lang==='ar'?e.ar:e.en}</h3><span class="sr-only">${e.d} ${e.m[L()]}</span>
     <div class="meta"><span>${I.pin}${e.place[L()]}</span><span>${I.clock}${e.time[L()]}</span></div>
     <div class="feat">${e.feats.map(f=>`<span>${I[f]}${featLabel(f)}</span>`).join('')}</div>
     <div class="actions"><button class="btn ${S.reg.has(id)?'':'primary'}" data-reg="${id}" aria-pressed="${S.reg.has(id)}">${S.reg.has(id)?t('registered'):t('register')}</button>
      <button class="btn outline" data-comp="${id}" aria-pressed="${S.comp.has(id)}">${S.comp.has(id)?t('compOn'):t('companion')}</button></div></div></article>`}).join('');
}

// ---------- tutorials ----------
function renderTuts(){
  $('#tutList').innerHTML=TUTS.map((g,i)=>{const steps=S.lang==='ar'?g.ar_s:g.en_s;
   return `<details class="card tut" ${i===0?'open':''}><summary><span class="ic">${I[g.ic]}</span><span><h3>${S.lang==='ar'?g.ar:g.en}</h3><p class="secondary">${S.lang==='ar'?g.sar:g.sen}</p></span>${I.chev}</summary>
   <div class="tut-body"><div class="fmt" role="tablist">
     <button role="tab" aria-selected="true" aria-controls="p${i}s" data-tab="${i}s">${t('fSteps')}</button>
     <button role="tab" aria-selected="false" aria-controls="p${i}a" data-tab="${i}a">${I.audio}${t('fAudio')}</button>
     <button role="tab" aria-selected="false" aria-controls="p${i}g" data-tab="${i}g">${I.sign}${t('fSign')}</button></div>
    <div role="tabpanel" id="p${i}s"><ol class="steps">${steps.map(s=>`<li><span>${s}</span></li>`).join('')}</ol></div>
    <div role="tabpanel" id="p${i}a" hidden><div class="audio-box"><p>${t('audioP')}</p><div class="actions"><button class="btn primary" data-speak="${i}">${I.play}${t('listen')}</button><button class="btn outline" data-stop>${I.stop}${t('stopL')}</button></div><p class="status" data-vmsg="${i}"></p></div></div>
    <div role="tabpanel" id="p${i}g" hidden><div class="sign-box">${I.sign.replace(/18/g,'40')}<p>${t('signPh')}</p></div></div>
   </div></details>`}).join('');
}
function renderAbout(){
  $('#journey').innerHTML=JOURNEY.map((j,i)=>`<li><span class="n">${S.lang==='ar'?['١','٢','٣','٤','٥'][i]:i+1}</span><b>${j[L()]}</b><p>${j[2+L()]}</p></li>`).join('');
  $('#aboutCards').innerHTML=ABOUT.map(a=>`<div class="card"><h3>${a[L()]}</h3><p>${a[2+L()]}</p></div>`).join('');
}

// ---------- events wiring ----------
document.addEventListener('click',e=>{
  const b=e.target.closest('button,a'); if(!b)return;
  if(b.dataset.cond){const k=b.dataset.cond;S.conds.has(k)?S.conds.delete(k):S.conds.add(k);b.setAttribute('aria-pressed',S.conds.has(k));renderCentres();announce($('#cCount').textContent)}
  else if(b.id==='clearC'){S.emirate='all';S.conds.clear();S.feats.clear();buildFilters();renderCentres();announce($('#cCount').textContent)}
  else if(b.dataset.book){S.booked.add(b.dataset.book);renderCentres();announce(t('booked'))}
  else if(b.dataset.fav){const k=b.dataset.fav;S.favs.has(k)?S.favs.delete(k):S.favs.add(k);b.setAttribute('aria-pressed',S.favs.has(k));b.setAttribute('aria-label',S.favs.has(k)?t('unfav'):t('fav'))}
  else if(b.dataset.cat){S.cat=b.dataset.cat;renderEvents();$(`[data-cat="${S.cat}"]`).focus()}
  else if(b.dataset.reg){const k=b.dataset.reg;S.reg.has(k)?S.reg.delete(k):S.reg.add(k);renderEvents();const nb=$(`[data-reg="${CSS.escape(k)}"]`);nb&&nb.focus();if(S.reg.has(k))announce(t('registered'))}
  else if(b.dataset.comp){const k=b.dataset.comp;S.comp.has(k)?S.comp.delete(k):S.comp.add(k);renderEvents();const nb=$(`[data-comp="${CSS.escape(k)}"]`);nb&&nb.focus()}
  else if(b.dataset.tab){const body=b.closest('.tut-body');body.querySelectorAll('[role=tab]').forEach(x=>x.setAttribute('aria-selected',String(x===b)));body.querySelectorAll('[role=tabpanel]').forEach(p=>p.hidden=p.id!=='p'+b.dataset.tab)}
  else if(b.dataset.speak){const i=+b.dataset.speak;const msg=$(`[data-vmsg="${i}"]`);
    try{if(!('speechSynthesis' in window))throw 0;speechSynthesis.cancel();const g=TUTS[i];const txt=[S.lang==='ar'?g.ar:g.en,...(S.lang==='ar'?g.ar_s:g.en_s)].join('. ');const u=new SpeechSynthesisUtterance(txt);u.lang=S.lang==='ar'?'ar-AE':'en-GB';u.rate=.9;speechSynthesis.speak(u)}catch(err){msg.textContent=t('noVoice')}}
  else if(b.hasAttribute('data-stop')){try{speechSynthesis.cancel()}catch(err){}}
  else if(b.id==='langBtn'){S.lang=S.lang==='ar'?'en':'ar';persist();applyLang();announce(S.lang==='ar'?'العربية':'English')}
  else if(b.id==='a11yBtn'||b.id==='emBtn'){const pop=$(b.id==='a11yBtn'?'#a11yPop':'#emPop'),other=$(b.id==='a11yBtn'?'#emPop':'#a11yPop');other.hidden=true;document.querySelectorAll('#a11yBtn,#emBtn').forEach(x=>x!==b&&x.setAttribute('aria-expanded','false'));pop.hidden=!pop.hidden;b.setAttribute('aria-expanded',String(!pop.hidden));if(!pop.hidden)(pop.querySelector('button')||pop).focus()}
  else if(b.id==='menuBtn'){const n=$('#nav');n.classList.toggle('open');b.setAttribute('aria-expanded',String(n.classList.contains('open')))}
  else if(b.dataset.fs){S.fs=+b.dataset.fs;applyPrefs();persist()}
  else if(b.classList.contains('switch')){const k=b.dataset.opt;S[k]=!S[k];applyPrefs();persist()}
  else if(b.id==='resetA11y'){S.fs=0;S.hc=S.readable=S.simple=S.rm=false;applyPrefs();persist()}
  else if(b.closest('nav.main')){$('#nav').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false')}
});
document.addEventListener('change',e=>{
  if(e.target.id==='emirate'){S.emirate=e.target.value;renderCentres();announce($('#cCount').textContent)}
  else if(e.target.closest('#featChecks')){const k=e.target.value;e.target.checked?S.feats.add(k):S.feats.delete(k);renderCentres();announce($('#cCount').textContent)}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){['#a11yPop','#emPop'].forEach(s=>{const p=$(s);if(!p.hidden){p.hidden=true;const btn=$(s==='#a11yPop'?'#a11yBtn':'#emBtn');btn.setAttribute('aria-expanded','false');btn.focus()}})}});

applyPrefs(); applyLang();
})();
