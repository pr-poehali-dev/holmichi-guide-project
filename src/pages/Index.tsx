import { useState } from "react";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7906f011-65d4-4c4c-a552-fdee1206d99d/files/e340bf6d-2f2d-4d09-9b46-826d38535042.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "history", label: "История" },
  { id: "nature", label: "Природа" },
  { id: "sights", label: "Достопримечательности" },
];

const SIGHTS = [
  { id: 1, name: "Церковь Николая Чудотворца", emoji: "⛪", x: 42, y: 30, desc: "Деревянная церковь XIX века, памятник архитектуры" },
  { id: 2, name: "Старая мельница", emoji: "🌾", x: 65, y: 45, desc: "Восстановленная водяная мельница на реке" },
  { id: 3, name: "Дуб-великан", emoji: "🌳", x: 28, y: 60, desc: "Трёхсотлетний дуб, символ деревни" },
  { id: 4, name: "Родник «Серебряный»", emoji: "💧", x: 72, y: 25, desc: "Целебный источник у подножия холма" },
  { id: 5, name: "Купеческий дом", emoji: "🏠", x: 50, y: 68, desc: "Усадьба купца Рябова, 1887 год" },
  { id: 6, name: "Смотровой холм", emoji: "👁️", x: 18, y: 38, desc: "Панорамный вид на всю округу" },
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
  { emoji: "🌿", title: "Пойменные луга", desc: "Разнотравные луга вдоль реки с редкими видами растений" },
  { emoji: "🦅", title: "Птичий рай", desc: "Более 60 видов птиц, гнездящихся в округе" },
  { emoji: "🍄", title: "Грибные леса", desc: "Смешанные леса богаты белыми грибами и лисичками" },
  { emoji: "🐟", title: "Чистая река", desc: "Река Воронь с прозрачной водой и богатым рыбным миром" },
  { emoji: "🌸", title: "Весенние сады", desc: "Вишнёвые и яблоневые сады, цветущие каждую весну" },
  { emoji: "❄️", title: "Зимние тропы", desc: "Лыжные маршруты через сосновый бор" },
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

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Интерактивная карта */}
            <div className="section-card p-2 overflow-hidden">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, #d4e6c0 0%, #b8d4a0 25%, #8fba78 40%, #e0d4a8 60%, #d4c07a 75%, #c0a850 100%)" }}>
                {/* SVG рельеф карты */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  {/* Холмы */}
                  <ellipse cx="80" cy="100" rx="70" ry="50" fill="#a8c890" opacity="0.4" />
                  <ellipse cx="320" cy="80" rx="80" ry="55" fill="#a8c890" opacity="0.4" />
                  {/* Лес */}
                  <circle cx="55" cy="75" r="38" fill="#5a8050" opacity="0.45" />
                  <circle cx="85" cy="58" r="28" fill="#4A6741" opacity="0.5" />
                  <circle cx="335" cy="85" r="42" fill="#5a8050" opacity="0.45" />
                  <circle cx="360" cy="65" r="28" fill="#4A6741" opacity="0.5" />
                  {/* Река */}
                  <path d="M 0 185 Q 70 165 115 188 Q 165 215 215 198 Q 275 178 335 198 Q 368 208 400 192" stroke="#7BA7BC" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.7" />
                  {/* Поля */}
                  <rect x="150" y="205" width="110" height="65" rx="5" fill="#D4C89A" opacity="0.55" />
                  <rect x="270" y="215" width="85" height="55" rx="5" fill="#C4B478" opacity="0.5" />
                  {/* Дороги */}
                  <path d="M 200 0 L 198 300" stroke="#8B6347" strokeWidth="2.5" fill="none" strokeDasharray="7 4" opacity="0.45" />
                  <path d="M 0 148 Q 200 155 400 148" stroke="#8B6347" strokeWidth="2.5" fill="none" strokeDasharray="7 4" opacity="0.45" />
                  {/* Граница */}
                  <rect x="1" y="1" width="398" height="298" fill="none" stroke="rgba(212,168,67,0.4)" strokeWidth="1.5" rx="8" />
                </svg>

                {/* Метки на карте */}
                {SIGHTS.map((sight) => (
                  <button
                    key={sight.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 focus:outline-none"
                    style={{ left: `${sight.x}%`, top: `${sight.y}%`, zIndex: selectedPin === sight.id ? 20 : 10 }}
                    onClick={() => setSelectedPin(selectedPin === sight.id ? null : sight.id)}
                    onMouseEnter={() => setHoveredPin(sight.id)}
                    onMouseLeave={() => setHoveredPin(null)}
                  >
                    <div className={`relative flex flex-col items-center transition-transform duration-200 ${hoveredPin === sight.id || selectedPin === sight.id ? "scale-125" : "scale-100"}`}>
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-base shadow-lg border-2"
                        style={{
                          backgroundColor: selectedPin === sight.id ? "var(--wheat)" : "rgba(245,239,224,0.95)",
                          borderColor: selectedPin === sight.id ? "var(--earth)" : "var(--wheat)",
                        }}
                      >
                        {sight.emoji}
                      </div>
                      {/* Попап */}
                      {selectedPin === sight.id && (
                        <div
                          className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-xl px-4 py-3 shadow-2xl text-left pointer-events-none animate-fade-slide"
                          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--wheat)", width: "180px", minWidth: "180px" }}
                        >
                          <div className="font-display text-sm font-semibold mb-1" style={{ color: "var(--earth)" }}>{sight.name}</div>
                          <div className="font-body text-xs leading-relaxed" style={{ color: "var(--bark)" }}>{sight.desc}</div>
                          <div className="absolute" style={{ bottom: "-6px", left: "50%", transform: "translateX(-50%) rotate(45deg)", width: "10px", height: "10px", backgroundColor: "var(--cream)", borderRight: "1px solid var(--wheat)", borderBottom: "1px solid var(--wheat)" }} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}

                {/* Компас */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-md" style={{ backgroundColor: "rgba(245,239,224,0.95)", color: "var(--earth)", border: "1px solid var(--wheat)", fontFamily: "'Cormorant', serif" }}>
                  С
                </div>
                {/* Подпись карты */}
                <div className="absolute bottom-3 left-3 font-handwritten text-sm px-3 py-1 rounded-full shadow" style={{ backgroundColor: "rgba(245,239,224,0.9)", color: "var(--earth)" }}>
                  карта Холмечи
                </div>
              </div>
              <p className="font-body text-xs text-center py-3" style={{ color: "var(--bark)" }}>
                Нажмите на метку, чтобы узнать подробнее
              </p>
            </div>

            {/* Список достопримечательностей */}
            <div className="space-y-3">
              {SIGHTS.map((sight, i) => (
                <button
                  key={sight.id}
                  className="section-card p-5 flex items-center gap-4 w-full text-left transition-all duration-200"
                  style={{
                    outline: selectedPin === sight.id ? `2px solid var(--wheat)` : "2px solid transparent",
                  }}
                  onClick={() => setSelectedPin(selectedPin === sight.id ? null : sight.id)}
                  onMouseEnter={() => setHoveredPin(sight.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                >
                  <div className="text-3xl flex-shrink-0">{sight.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-lg font-semibold" style={{ color: "var(--earth)" }}>{sight.name}</div>
                    <div className="font-body text-sm mt-0.5 line-clamp-1" style={{ color: "var(--bark)" }}>{sight.desc}</div>
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-body" style={{ backgroundColor: "var(--fog)", color: "var(--moss)" }}>
                    {i + 1}
                  </div>
                </button>
              ))}
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