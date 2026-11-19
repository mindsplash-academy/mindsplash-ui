type Props = { title: string; category: string; slug?: string; className?: string };

const colors: Record<string, { main: string; pale: string }> = {
  "IB MYP": { main: "#168bd2", pale: "#d9efff" },
  "IB DP": { main: "#1263af", pale: "#dceeff" },
  IGCSE: { main: "#e88319", pale: "#fff0d6" },
  Olympiads: { main: "#078dbe", pale: "#d8f3ff" },
  "SAT & Prep": { main: "#168bd2", pale: "#e4f2ff" },
  Parents: { main: "#168bd2", pale: "#e5f3ff" },
};

export default function BlogIllustration({ title, category, slug = "", className = "" }: Props) {
  const color = colors[category] ?? colors["IB DP"];
  const seed = [...slug].reduce((value, char) => value + char.charCodeAt(0), 0);
  const titleKey = `${slug} ${title}`.toLowerCase();
  const accent = ["#087fd0", "#f28a19", "#10a5d8", "#32a852"][seed % 4];
  const label = title
    .replace(/^Illustrated\s+/i, "")
    .replace(/^(A|An|The)\s+/i, "")
    .replace(/\b(preparation|preparing)\b/ig, "Prep")
    .replace(/\b(mathematics)\b/ig, "Maths")
    .replace(/\b(illustration|illustrated|study|student|books|book|with|and|for|through|from|using|around|about|guide|habits|skills|materials|practice|practising)\b/ig, " ")
    .replace(/[,:;.!?]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 34);
  const scene = titleKey.includes("ioqm") ? "ioqm"
    : titleKey.includes("amc") ? "amc"
    : titleKey.includes("sat") ? "sat"
    : titleKey.includes("biology") ? "biology"
    : titleKey.includes("chemistry") ? "chemistry"
    : titleKey.includes("physics") ? "physics"
    : titleKey.includes("olympiad") ? "olympiad"
    : titleKey.includes("online-vs-offline") ? "online"
    : titleKey.includes("small-batch") ? "classroom"
    : titleKey.includes("branch") || titleKey.includes("hyderabad") ? "hyderabad"
    : titleKey.includes("ib-vs-igcse") || titleKey.includes("igcse-vs-cbse") ? "compare"
    : titleKey.includes("myp-vs-ib-dp") ? "pathway"
    : titleKey.includes("internal-assessment") ? "research"
    : titleKey.includes("parent") || titleKey.includes("support") ? "parent"
    : titleKey.includes("exam") || titleKey.includes("preparation") ? "checklist"
    : titleKey.includes("math") || titleKey.includes("score-7") || titleKey.includes("grades") ? "math"
    : titleKey.includes("personalised") ? "personal"
    : "study";
  return (
    <svg className={className} viewBox="0 0 960 520" role="img" aria-label={title} title={title} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={color.pale} />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient id="book" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={color.main} />
          <stop offset="1" stopColor="#31316d" />
        </linearGradient>
      </defs>
      <rect width="960" height="520" rx="36" fill="url(#wash)" />
      <circle cx="805" cy="116" r={80 + seed % 40} fill={color.pale} />
      <path d="M0 400 Q210 330 420 406 T960 390 V520 H0Z" fill="#fff" opacity=".7" />
      <rect x="18" y="18" width="924" height="484" rx="28" fill="none" stroke="#fff" strokeWidth="12" opacity=".72" />
      {scene === "physics" ? (
        <g>
          <circle cx="480" cy="265" r="128" fill="#fff" stroke={color.main} strokeWidth="9" />
          <circle cx="480" cy="265" r="18" fill={accent} />
          <ellipse cx="480" cy="265" rx="185" ry="75" fill="none" stroke={accent} strokeWidth="8" transform="rotate(-28 480 265)" />
          <circle cx="640" cy="185" r="19" fill={color.main} />
          <path d="M342 332h276M370 366h220" stroke="#b7bfd2" strokeWidth="11" strokeLinecap="round" />
        </g>
      ) : scene === "chemistry" ? (
        <g stroke={color.main} strokeWidth="12">
          <path d="m480 158 112 64v128l-112 64-112-64V222z" fill="#fff" />
          <path d="m480 222 112 64M480 222v128M480 350l-112 64" fill="none" />
          <circle cx="480" cy="158" r="30" fill={accent} stroke="none" /><circle cx="592" cy="222" r="30" fill={color.pale} /><circle cx="592" cy="350" r="30" fill={accent} /><circle cx="368" cy="350" r="30" fill={color.pale} />
        </g>
      ) : scene === "biology" ? (
        <g>
          <circle cx="480" cy="268" r="150" fill="#fff" stroke={color.main} strokeWidth="10" />
          <circle cx="480" cy="268" r="44" fill={accent} />
          <ellipse cx="480" cy="268" rx="100" ry="48" fill="none" stroke="#69b78e" strokeWidth="15" transform="rotate(35 480 268)" />
          <ellipse cx="480" cy="268" rx="100" ry="48" fill="none" stroke="#f3b65d" strokeWidth="15" transform="rotate(-35 480 268)" />
          <circle cx="372" cy="210" r="13" fill="#69b78e" /><circle cx="582" cy="320" r="13" fill="#f3b65d" />
        </g>
      ) : scene === "sat" ? (
        <g>
          <rect x="320" y="115" width="320" height="280" rx="34" fill="#fff" stroke={color.main} strokeWidth="9" />
          <rect x="350" y="148" width="260" height="36" rx="12" fill={color.pale} />
          <path d="M365 225h210M365 265h170M365 305h195" stroke="#b7bfd2" strokeWidth="12" strokeLinecap="round" />
          <circle cx="567" cy="355" r="23" fill={accent} /><path d="m558 355 8 8 14-18" fill="none" stroke="#fff" strokeWidth="6" />
        </g>
      ) : scene === "ioqm" || scene === "amc" || scene === "olympiad" ? (
        <g>
          <path d="m480 108 190 300H290z" fill="#fff" stroke={color.main} strokeWidth="10" strokeLinejoin="round" />
          <path d="M390 330h180M420 270h120M450 210h60" stroke={accent} strokeWidth="12" strokeLinecap="round" />
          <circle cx="480" cy="348" r="24" fill={color.main} /><circle cx="480" cy="270" r="19" fill={accent} />
        </g>
      ) : scene === "online" ? (
        <g>
          <rect x="305" y="128" width="350" height="236" rx="22" fill="#fff" stroke={color.main} strokeWidth="10" />
          <rect x="335" y="158" width="170" height="174" rx="16" fill={color.pale} />
          <circle cx="420" cy="215" r="34" fill={accent} /><path d="M365 300q55-74 110 0" fill={color.main} />
          <path d="M530 198h83M530 239h83M530 280h58" stroke="#b7bfd2" strokeWidth="12" strokeLinecap="round" />
          <path d="M450 366v28m-80 0h160" stroke="#31316d" strokeWidth="12" strokeLinecap="round" />
        </g>
      ) : scene === "hyderabad" ? (
        <g>
          <path d="M310 380V240l80-52v52l95-80v220M500 380V220l85-50v50l80-46v206" fill="#fff" stroke={color.main} strokeWidth="10" strokeLinejoin="round" />
          <path d="M370 380v-75h55v75M535 380v-72h48v72M610 380v-74h38v74" fill={color.pale} stroke={accent} strokeWidth="8" />
          <path d="M270 385h470" stroke="#31316d" strokeWidth="12" strokeLinecap="round" />
        </g>
      ) : scene === "parent" ? (
        <g>
          <circle cx="420" cy="210" r="52" fill={accent} /><circle cx="540" cy="210" r="52" fill={color.main} />
          <path d="M330 375q20-130 90-130t90 130M470 375q20-130 90-130t90 130" fill="#fff" stroke={color.main} strokeWidth="10" />
          <rect x="420" y="310" width="120" height="76" rx="10" fill={color.pale} stroke={accent} strokeWidth="8" />
          <path d="M445 335h68M445 356h48" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
        </g>
      ) : scene === "compare" || scene === "pathway" ? (
        <g>
          <rect x="285" y="155" width="175" height="230" rx="20" fill="#fff" stroke={color.main} strokeWidth="9" />
          <rect x="500" y="155" width="175" height="230" rx="20" fill="#fff" stroke={accent} strokeWidth="9" />
          <path d="M320 205h105M320 245h105M320 285h80M535 205h105M535 245h105M535 285h80" stroke="#b7bfd2" strokeWidth="12" strokeLinecap="round" />
          <path d="M460 270h40m-15-18 18 18-18 18" stroke="#31316d" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : scene === "checklist" || scene === "research" ? (
        <g>
          <rect x="342" y="108" width="276" height="310" rx="24" fill="#fff" stroke={color.main} strokeWidth="9" />
          <rect x="420" y="92" width="120" height="38" rx="14" fill={accent} />
          <path d="m380 190 12 12 22-25M435 190h140m-195 70 12 12 22-25m21 13h140m-195 70 12 12 22-25m21 13h140" fill="none" stroke={color.main} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : scene === "math" ? (
        <g>
          <rect x="320" y="120" width="320" height="285" rx="26" fill="#fff" stroke={color.main} strokeWidth="9" />
          <path d="M365 190h220M365 250h220M365 310h220" stroke="#d6d9e4" strokeWidth="7" />
          <text x="385" y="238" fill={accent} fontSize="52" fontWeight="700">x² + y²</text>
          <text x="400" y="300" fill={color.main} fontSize="45" fontWeight="700">∑  f(x)</text>
          <path d="m430 350 30 26 65-62" fill="none" stroke="#4eaa79" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : scene === "personal" ? (
        <g>
          <rect x="320" y="138" width="320" height="255" rx="28" fill="#fff" stroke={color.main} strokeWidth="9" />
          <circle cx="480" cy="218" r="42" fill={accent} />
          <path d="M392 350q15-85 88-85t88 85" fill={color.pale} stroke={color.main} strokeWidth="9" />
          <path d="M370 175h40m140 0h40M370 215h30m160 0h30" stroke="#b7bfd2" strokeWidth="9" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <rect x="310" y="116" width="340" height="270" rx="26" fill="#fff" stroke={color.main} strokeWidth="8" />
          <path d="M360 178h220M360 220h160M360 262h200" stroke="#b7bfd2" strokeWidth="12" strokeLinecap="round" />
          <path d="m385 326 62-55 50 27 76-86" fill="none" stroke={accent} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="573" cy="212" r="12" fill={accent} />
        </g>
      )}
      <g transform="translate(42 414)">
        <rect width="190" height="68" rx="14" fill="#fff" opacity=".94" />
        <image href="/footer_logo.png" x="10" y="9" width="170" height="50" preserveAspectRatio="xMinYMid meet" />
      </g>
      <g>
        <rect x="690" y="330" width="220" height="116" rx="22" fill="#fff" opacity=".94" />
        <rect x="710" y="350" width="10" height="76" rx="5" fill={color.main} />
        <text x="740" y="378" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="#12386a">
          {label.length > 20 ? <><tspan x="740">{label.slice(0, 19)}</tspan><tspan x="740" dy="30">{label.slice(19)}</tspan></> : label}
        </text>
        <text x="740" y="424" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" letterSpacing="1.3" fill={color.main}>{category.toUpperCase()}</text>
      </g>
    </svg>
  );
}
