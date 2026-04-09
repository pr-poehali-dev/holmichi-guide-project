import { useState } from "react";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/e340bf6d-2f2d-4d09-9b46-826d38535042.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "history", label: "История" },
  { id: "nature", label: "Природа" },
  { id: "sights", label: "Достопримечательности" },
];

const SIGHTS = [
  {
    id: 1,
    name: "Братская могила",
    emoji: "🕯️",
    address: "ул. Будённого, пос. Холмечи",
    mapUrl: "https://yandex.ru/maps/?text=улица+Будённого+посёлок+Холмечи+Брянская+область",
    desc: "Захоронение 21 воина Советской Армии и партизан, павших в годы Великой Отечественной войны. Место памяти и скорби — символ мужества защитников Холмечи.",
    detail: "Великая Отечественная война оставила глубокий след в судьбе посёлка. В братской могиле покоятся 21 солдат и партизан — те, кто ценой своей жизни защищал эту землю."
  },
  {
    id: 2,
    name: "Церковь Тихвинской иконы Божией Матери",
    emoji: "⛪",
    address: "Вокзальная улица, 11, пос. Холмечи",
    mapUrl: "https://yandex.ru/maps/?text=Вокзальная+улица+11+посёлок+Холмечи+Брянская+область",
    desc: "Православный храм посёлка Холмечи, посвящённый чудотворной Тихвинской иконе Божией Матери — одной из главных православных святынь России.",
    detail: "Церковь является духовным центром Холмечи. Тихвинская икона Божией Матери издавна почитается как покровительница и заступница — особенно воинов и путников. Настоятель храма — отец Андрей Масленников."
  },
];

const HISTORY_CARDS = [
  {
    year: "Конец XIX века",
    title: "Рождение посёлка",
    text: "Холмечи возникли на месте стоянки артели лесорубов из деревни Холмечь Брасовского края. Густые брянские леса привлекали заготовителей, и временный лагерь постепенно превратился в постоянное поселение.",
    icon: "🪓",
  },
  {
    year: "1897 год",
    title: "Железная дорога",
    text: "Строительство железнодорожной ветки Навля — Конотоп дало посёлку новый импульс роста. Лесозаготовки вышли на промышленный масштаб, появились новые жители и постройки. Посёлок входил в приход Макарьевской церкви села Крупец.",
    icon: "🚂",
  },
  {
    year: "1920 год",
    title: "Советская власть",
    text: "С образованием Брянской губернии Холмечи вошли в состав Холмечского сельского совета Крупецкой волости Севского уезда. Начиналась новая административная жизнь посёлка.",
    icon: "📋",
  },
  {
    year: "1929 год",
    title: "Западная область",
    text: "После создания Западной области с центром в Смоленске посёлок перешёл в состав Гаврилово-Гутского сельсовета Суземского района Брянского округа. Лесная промышленность продолжала развиваться.",
    icon: "🗺️",
  },
  {
    year: "1937 год",
    title: "Орловская область",
    text: "27 сентября Западная область была расформирована. Холмечи оказались в составе Холмечского сельсовета Суземского района уже Орловской области — очередная страница административных перемен.",
    icon: "📜",
  },
  {
    year: "1944 год",
    title: "Брянская область",
    text: "5 июля 1944 года была образована Брянская область. Посёлок вернулся в состав Холмечского сельсовета Суземского района — теперь уже окончательно как часть Брянщины.",
    icon: "🏛️",
  },
  {
    year: "Сегодня",
    title: "Наши дни",
    text: "Холмечи сохраняют связь с лесным прошлым. Посёлок живёт в окружении брянских лесов, хранит память о лесорубах-первопоселенцах и железнодорожной истории края.",
    icon: "🌲",
  },
];

const NATURE_ITEMS = [
  { emoji: "🌲", title: "Живописные леса", desc: "Холмечи окружены густыми брянскими лесами — соснами, дубами и елями. Здесь можно часами идти по лесным тропам, наслаждаясь тишиной и свежим воздухом." },
  { emoji: "🥾", title: "Тропинки для прогулок", desc: "По окрестностям проходит множество лесных тропинок на любой вкус — от коротких прогулок до многочасовых маршрутов вглубь леса. Подходит для всей семьи." },
  { emoji: "🏕️", title: "Места для отдыха", desc: "В лесу и у воды есть уютные поляны и берега, где можно остановиться, развести костёр, устроить пикник или просто отдохнуть от городской суеты." },
  { emoji: "🍄", title: "Грибные места", desc: "Смешанные леса вокруг посёлка богаты белыми грибами, подосиновиками и лисичками — особенно урожайно в конце лета и осенью." },
  { emoji: "🐟", title: "Рыбалка", desc: "Река и местные водоёмы привлекают любителей рыбалки. Тихое утро с удочкой на берегу — одно из главных удовольствий отдыха в Холмечи." },
  { emoji: "🦅", title: "Богатый птичий мир", desc: "В лесах и на лугах обитают десятки видов птиц. Ранним утром лес наполняется пением — настоящее удовольствие для тех, кто любит природу." },
];

const BIRDS = [
  {
    name: "Белый аист",
    latin: "Ciconia ciconia",
    photo: "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/20c80017-6993-4401-a71d-26ee34f22b49.jpg",
    desc: "Символ удачи и семейного счастья. Гнездится на крышах домов и столбах, прилетает весной из Африки.",
  },
  {
    name: "Зимородок",
    latin: "Alcedo atthis",
    photo: "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/728425c8-c2da-4a61-aedc-54e4903e127a.jpg",
    desc: "Ярко-синяя птица с оранжевым брюшком. Обитает по берегам рек, молниеносно ныряет за рыбой.",
  },
  {
    name: "Филин",
    latin: "Bubo bubo",
    photo: "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/da034a45-99ef-42e6-b5c9-62b20af17597.jpg",
    desc: "Крупнейшая сова России. Ведёт ночной образ жизни, гнездится в глухих лесах Брянщины.",
  },
  {
    name: "Чёрный дятел",
    latin: "Dryocopus martius",
    photo: "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/2ad992c4-8133-49fb-a42f-5766e7a02411.jpg",
    desc: "Самый крупный дятел Европы. Долбит стволы старых деревьев, его стук слышен далеко по лесу.",
  },
  {
    name: "Серый журавль",
    latin: "Grus grus",
    photo: "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/2e54661e-51e1-4070-a67f-0a0beafe10b2.jpg",
    desc: "Величественная птица, гнездящаяся на болотах и лугах. Осенью собирается в стаи перед перелётом.",
  },
  {
    name: "Соловей",
    latin: "Luscinia luscinia",
    photo: "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/e5ac99d2-3666-4133-9dfa-6439110321d4.jpg",
    desc: "Знаменитый певец русских лесов. Прилетает в мае и наполняет окрестности Холмечи своими трелями.",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);
  const [selectedPin, setSelectedPin] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* Декоративные фоновые элементы */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 right-10 text-6xl opacity-5 animate-float">🌿</div>
        <div className="absolute top-1/3 left-5 text-5xl opacity-5 animate-float delay-300">🍃</div>
        <div className="absolute bottom-1/4 right-8 text-4xl opacity-5 animate-float delay-500">🌾</div>
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(245, 239, 224, 0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(212, 168, 67, 0.3)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏡</span>
            <span className="font-display text-xl font-bold" style={{ color: "var(--earth)" }}>Холмечи</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link font-body text-sm font-medium transition-colors"
                style={{ color: activeSection === item.id ? "var(--wheat)" : "var(--earth)" }}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Мобильная навигация */}
          <div className="md:hidden flex gap-3">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs font-medium" style={{ color: "var(--earth)" }}>
                {item.label.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Холмечи" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(245,239,224,0.1) 0%, rgba(92,61,46,0.45) 55%, rgba(245,239,224,1) 100%)" }} />
        </div>

        {/* Декоративная рамка */}
        <div className="absolute inset-8 border pointer-events-none hidden lg:block" style={{ borderColor: "rgba(212,168,67,0.35)", borderRadius: "2px" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="font-handwritten text-xl" style={{ color: "var(--wheat)" }}>деревня в сердце России</span>
          </div>
          <h1 className="font-display font-bold mb-6 animate-fade-slide" style={{ color: "var(--cream)", textShadow: "0 4px 30px rgba(92,61,46,0.5)", lineHeight: 1, fontSize: "clamp(4rem, 12vw, 9rem)" }}>
            Холмечи
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(to right, transparent, var(--wheat))" }} />
            <span className="font-handwritten text-xl" style={{ color: "var(--wheat)" }}>✦</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(to left, transparent, var(--wheat))" }} />
          </div>
          <p className="font-body text-lg md:text-xl animate-fade-slide delay-200" style={{ color: "rgba(245,239,224,0.92)", maxWidth: 480, margin: "0 auto 2.5rem" }}>
            Путеводитель по старинной деревне — история, природа и живые достопримечательности
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-slide delay-300">
            <button
              onClick={() => scrollTo("sights")}
              className="px-8 py-3 font-body font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--wheat)", color: "var(--earth)" }}
            >
              Исследовать
            </button>
            <button
              onClick={() => scrollTo("history")}
              className="px-8 py-3 font-body font-semibold rounded-full border-2 transition-all hover:scale-105"
              style={{ borderColor: "rgba(245,239,224,0.8)", color: "var(--cream)", background: "transparent" }}
            >
              История
            </button>
          </div>
        </div>

        {/* Прокрутка вниз */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-handwritten text-sm" style={{ color: "rgba(245,239,224,0.55)" }}>листай вниз</span>
          <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, transparent, var(--wheat))" }} />
        </div>
      </section>

      {/* История */}
      <section id="history" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-handwritten text-2xl" style={{ color: "var(--bark)" }}>с древних времён</span>
            <h2 className="font-display font-bold mt-2" style={{ color: "var(--earth)", fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>История</h2>
            <div className="flex items-center justify-center gap-4 mt-4 max-w-sm mx-auto">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--wheat))" }} />
              <span style={{ color: "var(--wheat)" }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--wheat))" }} />
            </div>
          </div>

          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: "linear-gradient(to bottom, transparent, var(--wheat) 5%, var(--wheat) 95%, transparent)" }} />
            <div className="space-y-8">
              {HISTORY_CARDS.map((card, i) => (
                <div key={i} className={`flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-0 md:gap-0`}>
                  {/* Мобиль: иконка + карточка в ряд */}
                  <div className="flex md:hidden items-start gap-4 pl-2 w-full">
                    <div className="flex flex-col items-center flex-shrink-0 mt-1">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-base z-10 shadow border-2 flex-shrink-0" style={{ backgroundColor: "var(--cream)", borderColor: "var(--wheat)" }}>
                        {card.icon}
                      </div>
                    </div>
                    <div className="section-card p-5 flex-1">
                      <div className="font-handwritten text-2xl mb-0.5" style={{ color: "var(--wheat)" }}>{card.year}</div>
                      <h3 className="font-display text-xl font-semibold mb-1.5" style={{ color: "var(--earth)" }}>{card.title}</h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "var(--bark)" }}>{card.text}</p>
                    </div>
                  </div>

                  {/* Десктоп: чередование сторон */}
                  <div className="hidden md:flex flex-1">
                    {i % 2 === 0 ? (
                      <div className="section-card p-7 mr-10 ml-auto w-full max-w-md">
                        <div className="font-handwritten text-2xl mb-1" style={{ color: "var(--wheat)" }}>{card.year}</div>
                        <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--earth)" }}>{card.title}</h3>
                        <p className="font-body text-base leading-relaxed" style={{ color: "var(--bark)" }}>{card.text}</p>
                      </div>
                    ) : <div className="max-w-md w-full" />}
                  </div>

                  {/* Точка на линии (десктоп) */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-6 z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md border-2" style={{ backgroundColor: "var(--cream)", borderColor: "var(--wheat)" }}>
                      {card.icon}
                    </div>
                  </div>

                  <div className="hidden md:flex flex-1">
                    {i % 2 !== 0 ? (
                      <div className="section-card p-7 ml-10 mr-auto w-full max-w-md">
                        <div className="font-handwritten text-2xl mb-1" style={{ color: "var(--wheat)" }}>{card.year}</div>
                        <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--earth)" }}>{card.title}</h3>
                        <p className="font-body text-base leading-relaxed" style={{ color: "var(--bark)" }}>{card.text}</p>
                      </div>
                    ) : <div className="max-w-md w-full" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Природа */}
      <section id="nature" className="py-24 px-6 relative z-10" style={{ background: "linear-gradient(180deg, transparent, rgba(74,103,65,0.05), transparent)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-handwritten text-2xl" style={{ color: "var(--moss)" }}>окружающий мир</span>
            <h2 className="font-display font-bold mt-2" style={{ color: "var(--earth)", fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>Природа</h2>
            <div className="flex items-center justify-center gap-4 mt-4 max-w-sm mx-auto">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--wheat))" }} />
              <span style={{ color: "var(--wheat)" }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--wheat))" }} />
            </div>
            <p className="font-body mt-5 text-lg max-w-xl mx-auto" style={{ color: "var(--bark)" }}>
              Холмечи окружена нетронутой природой — реками, лесами и полями в первозданном виде
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NATURE_ITEMS.map((item, i) => (
              <div key={i} className="section-card p-7 group cursor-default">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--earth)" }}>{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--bark)" }}>{item.desc}</p>
                <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded" style={{ backgroundColor: "var(--moss)" }} />
              </div>
            ))}
          </div>

          {/* Птицы Брянской области */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="font-handwritten text-2xl" style={{ color: "var(--moss)" }}>пернатые соседи</span>
              <h3 className="font-display font-bold mt-2 text-4xl" style={{ color: "var(--earth)" }}>Птицы Брянской области</h3>
              <div className="flex items-center justify-center gap-4 mt-4 max-w-sm mx-auto">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--wheat))" }} />
                <span style={{ color: "var(--wheat)" }}>✦</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--wheat))" }} />
              </div>
              <p className="font-body mt-4 text-base max-w-lg mx-auto" style={{ color: "var(--bark)" }}>
                Леса и водоёмы вокруг Холмечи — дом для множества птиц, многие из которых занесены в Красную книгу
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BIRDS.map((bird, i) => (
                <div key={i} className="section-card overflow-hidden group cursor-default">
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={bird.photo}
                      alt={bird.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(92,61,46,0.6) 0%, transparent 50%)" }} />
                    <div className="absolute bottom-3 left-4">
                      <div className="font-body text-xs italic" style={{ color: "rgba(245,239,224,0.75)" }}>{bird.latin}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--earth)" }}>{bird.name}</h4>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "var(--bark)" }}>{bird.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Достопримечательности + Карта */}
      <section id="sights" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-handwritten text-2xl" style={{ color: "var(--bark)" }}>места, которые стоит увидеть</span>
            <h2 className="font-display font-bold mt-2" style={{ color: "var(--earth)", fontSize: "clamp(2rem, 6vw, 4rem)" }}>Достопримечательности</h2>
            <div className="flex items-center justify-center gap-4 mt-4 max-w-sm mx-auto">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--wheat))" }} />
              <span style={{ color: "var(--wheat)" }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--wheat))" }} />
            </div>
          </div>

          {/* Карточки достопримечательностей */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {SIGHTS.map((sight, i) => (
              <div
                key={sight.id}
                className="section-card p-7 flex flex-col gap-4 cursor-pointer transition-all duration-200"
                style={{
                  outline: selectedPin === sight.id ? "2px solid var(--wheat)" : "2px solid transparent",
                }}
                onClick={() => setSelectedPin(selectedPin === sight.id ? null : sight.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="text-4xl flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: "var(--fog)" }}
                  >
                    {sight.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-body text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "var(--wheat)", color: "var(--earth)" }}
                      >
                        №{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-tight" style={{ color: "var(--earth)" }}>
                      {sight.name}
                    </h3>
                    <a
                      href={sight.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 mt-1 hover:opacity-70 transition-opacity"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-xs">📍</span>
                      <span className="font-body text-xs underline underline-offset-2" style={{ color: "var(--wheat)" }}>{sight.address}</span>
                    </a>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--bark)" }}>
                  {sight.desc}
                </p>
                {selectedPin === sight.id && (
                  <div
                    className="rounded-xl p-4 mt-1 animate-fade-slide"
                    style={{ backgroundColor: "var(--fog)", borderLeft: "3px solid var(--wheat)" }}
                  >
                    <p className="font-body text-sm leading-relaxed" style={{ color: "var(--earth)" }}>
                      {sight.detail}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Карта посёлка */}
          <div className="section-card overflow-hidden p-0">
            <div className="px-7 pt-6 pb-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(212,168,67,0.25)" }}>
              <span className="text-2xl">🗺️</span>
              <div>
                <h3 className="font-display text-xl font-semibold" style={{ color: "var(--earth)" }}>Карта посёлка Холмечи</h3>
                <p className="font-body text-xs mt-0.5" style={{ color: "var(--bark)" }}>Брянская область, Суземский район</p>
              </div>
            </div>
            <div className="relative" style={{ height: "460px" }}>
              <iframe
                title="Карта посёлка Холмечи"
                src="https://yandex.ru/map-widget/v1/?ll=34.255%2C52.558&z=14&l=map&pt=34.255%2C52.558%2Cpm2rdm"
                className="w-full h-full border-0"
                allowFullScreen
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href="https://yandex.ru/maps/?ll=34.255%2C52.558&z=14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs px-3 py-1.5 rounded-full shadow transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "rgba(245,239,224,0.95)", color: "var(--earth)", border: "1px solid var(--wheat)" }}
                >
                  Открыть в Яндекс Картах →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 px-6 text-center" style={{ borderTop: "1px solid rgba(212,168,67,0.3)" }}>
        <div className="font-display text-4xl font-bold mb-2" style={{ color: "var(--earth)" }}>Холмечи</div>
        <div className="flex items-center justify-center gap-4 mb-4 max-w-48 mx-auto">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--wheat))" }} />
          <span className="font-handwritten text-sm" style={{ color: "var(--wheat)" }}>∿</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--wheat))" }} />
        </div>
        <p className="font-body text-sm" style={{ color: "var(--bark)" }}>Деревня с историей · Живая природа · Настоящая Россия</p>
      </footer>
    </div>
  );
}