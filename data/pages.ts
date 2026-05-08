export const disputeCategories = [
  "Rodinné spory",
  "Susedské spory",
  "Pracovné spory",
  "Dedičské spory",
  "Obchodné spory",
  "Civilné spory",
  "Nehnuteľnostné spory",
  "Školské spory"
];

export const benefits = [
  "dobrovoľnosť celého konania",
  "väčšia kontrola",
  "mlčanlivosť a dôvernosť",
  "flexibilita a rýchlosť mediačného konania",
  "zníženie nákladov a ich predvídateľnosť",
  "zvýšená podpora",
  "výhra oboch strán sporu v prípade dohody",
  "záväznosť dohody",
  "zachovanie vzťahov a zníženie stresu"
];

export const processSteps = [
  {
    title: "Oslovenie mediátora",
    titleEn: "Contacting the mediator",
    text: "Prvým krokom je kontaktovanie mediátora a stručné opísanie sporu. Mediátor posúdi, či je vec vhodná na mediáciu, vysvetlí postup a možnosti ďalšieho pokračovania.",
    textEn: "The first step is to contact the mediator and briefly describe the dispute. The mediator will assess whether the matter is suitable for mediation, explain the procedure and the options for further proceedings."
  },
  {
    title: "Začatie mediačného konania",
    titleEn: "Initiating the mediation proceedings",
    text: "Mediačné konanie sa začína dohodou o začatí mediácie. V nej sa upravujú základné pravidlá, odmena mediátora, spôsob komunikácie a očakávania strán.",
    textEn: "The mediation proceedings begin with an agreement to commence mediation. This sets out the basic rules, the mediator's fee, the method of communication and the parties' expectations."
  },
  {
    title: "Mediácia",
    titleEn: "Mediation",
    text: "Počas mediácie mediátor vedie strany k vecnému dialógu, pomáha pomenovať záujmy a hľadať riešenia, ktoré môžu byť prijateľné pre obe strany.",
    textEn: "During mediation, the mediator guides the parties towards substantive dialogue, helping them to identify their interests and find solutions that may be acceptable to both parties."
  },
  {
    title: "Uzavretie mediačnej dohody",
    titleEn: "Conclusion of the mediation agreement",
    text: "Ak strany dospejú k dohode, výsledkom je mediačná dohoda. Jej obsah vychádza zo slobodnej vôle strán a môže upraviť praktické kroky riešenia sporu.",
    textEn: "If the parties reach an agreement, the result is a mediation agreement. Its content is based on the free will of the parties and can set out the practical steps for resolving the dispute."
  }
];

export type PriceItem = {
  service: string;
  serviceEn: string;
  price: string;
  priceEn: string;
  featured?: boolean;
};

export const prices: PriceItem[] = [
  {
    service: "Posúdenie sporu",
    serviceEn: "Assessment of the dispute",
    price: "zdarma",
    priceEn: "free of charge",
    featured: true
  },
  {
    service: "Zaslanie ponuky na mediáciu druhej strane sporu",
    serviceEn: "Sending a mediation offer to the other party",
    price: "60 EUR",
    priceEn: "€60"
  },
  {
    service: "Rodinné, rozvodové, susedské spory",
    serviceEn: "Family, divorce, neighbour disputes",
    price: "90–120 EUR / hod.",
    priceEn: "€90–120 / hour"
  },
  {
    service: "Pracovné spory",
    serviceEn: "Employment disputes",
    price: "na základe dohody",
    priceEn: "by agreement"
  },
  {
    service: "Civilné spory",
    serviceEn: "Civil disputes",
    price: "na základe dohody",
    priceEn: "by agreement"
  },
  {
    service: "Obchodné spory",
    serviceEn: "Commercial disputes",
    price: "na základe dohody",
    priceEn: "by agreement"
  },
  {
    service: "Kolektívne vyjednávanie a pracovnoprávne spory",
    serviceEn: "Collective bargaining and employment disputes",
    price: "na základe dohody",
    priceEn: "by agreement"
  },
  {
    service: "Spísanie mediačnej dohody",
    serviceEn: "Drafting the mediation agreement",
    price: "na základe dohody",
    priceEn: "by agreement"
  }
];

export const staticPages = {
  "o-nas": {
    title: "O nás",
    titleEn: "About us",
    subtitle: "Ako Vám môžeme pomôcť v Mediationfirst?",
    subtitleEn: "How can we help you at Mediationfirst?",
    paragraphs: [
      "Náš tím tvoria mediátori, ktorí sú špecialisti a zároveň právnici. Vďaka spojeniu mediačnej a právnickej praxe Vám vieme pomôcť pri hľadaní dohody aj v situáciách, ktoré sú osobne alebo právne náročné.",
      "Naše profesionálne mediačné služby poskytujú vyškolení mediátori, ktorí sú pripravení viesť strany sporu k vecnému dialógu a praktickému riešeniu.",
      "Ovládame mediačný proces a zároveň rozumieme právnemu prostrediu, v ktorom spory vznikajú. Kladieme dôraz na nestrannosť, dôvernosť a dôstojnú komunikáciu.",
      "Mediačné služby poskytujeme v slovenskom a anglickom jazyku."
    ],
    paragraphsEn: [
      "Our team consists of mediators who are specialists and lawyers at the same time. By combining mediation and legal practice, we can help you find an agreement even in situations that are personally or legally challenging.",
      "Our professional mediation services are provided by trained mediators who are ready to guide the parties in dispute towards constructive dialogue and practical solutions.",
      "We command the mediation process and at the same time understand the legal environment in which disputes arise. We place emphasis on impartiality, confidentiality and dignified communication.",
      "We provide mediation services in Slovak and English."
    ]
  },
  "co-je-mediacia": {
    title: "Čo je mediácia?",
    titleEn: "What is mediation?",
    subtitle: "Mimosúdne riešenie sporov s pomocou neutrálnej tretej strany.",
    subtitleEn: "Out-of-court dispute resolution with the help of a neutral third party.",
    paragraphs: [
      "Mediácia je mimosúdne konanie, v ktorom strany riešia spor za účasti a pomoci nezávislého a nestranného mediátora, s cieľom dosiahnuť dohodu akceptovateľnú pre obidve strany.",
      "Mediácia je veľmi efektívna metóda na riešenie sporov a alternatíva k súdnemu konaniu.",
      "Mediácia môže prebiehať nezávisle pred súdnym konaním, počas súdneho konania, ale aj po jeho skončení."
    ],
    paragraphsEn: [
      "Mediation is an out-of-court process in which parties resolve a dispute with the participation and assistance of an independent and impartial mediator, with the aim of reaching an agreement acceptable to both parties.",
      "Mediation is a highly effective method of dispute resolution and an alternative to court proceedings.",
      "Mediation can take place independently before court proceedings, during court proceedings, or even after their conclusion."
    ]
  },
  "spory-riesene-mediaciou": {
    title: "Spory riešené mediáciou",
    titleEn: "Disputes resolved by mediation",
    subtitle: "Mediácia je vhodná pre široké spektrum súkromných, pracovných aj obchodných sporov.",
    subtitleEn: "Mediation is suitable for a wide range of private, employment and commercial disputes.",
    paragraphs: [
      "Spory riešené mediáciou sú spory, ktoré vznikli zo zmluvného alebo iného právneho vzťahu právnických a fyzických osôb.",
      "V praxi ide najmä o rodinné, susedské, pracovné, dedičské, obchodné, spotrebiteľské, komunitné a iné spory.",
      "V niektorých členských štátoch Európskej únie je mediácia pred pojednávaním povinná. Štatistiky zároveň ukazujú, že klienti, ktorí mediáciu využili, by ju pri ďalšom spore využili znova."
    ],
    paragraphsEn: [
      "Disputes resolved by mediation are disputes arising from contractual or other legal relationships between legal entities and natural persons.",
      "In practice, these are mainly family, neighbour, employment, inheritance, commercial, consumer, community and other disputes.",
      "In some EU member states, mediation before a hearing is mandatory. Statistics also show that clients who have used mediation would use it again in a future dispute."
    ]
  },
  "mediacne-sluzby": {
    title: "Mediačné služby",
    titleEn: "Mediation services",
    subtitle: "Pomáhame stranám sporu viesť dialóg a hľadať dohodu.",
    subtitleEn: "We help parties in dispute to engage in dialogue and find an agreement.",
    paragraphs: [
      "Mediačné služby poskytujeme v sporoch, v ktorých strany hľadajú vecné, dôverné a mimosúdne riešenie.",
      "Každý spor najprv posudzujeme individuálne. Následne navrhneme vhodný spôsob komunikácie, postup a podmienky začatia mediácie.",
      "Služby poskytujeme v slovenskom aj anglickom jazyku."
    ],
    paragraphsEn: [
      "We provide mediation services in disputes where the parties are seeking a substantive, confidential and out-of-court resolution.",
      "We first assess each dispute individually. We then propose the appropriate method of communication, procedure and conditions for initiating mediation.",
      "We provide services in both Slovak and English."
    ]
  }
} as const;
