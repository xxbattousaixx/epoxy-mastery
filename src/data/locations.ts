import { MORE } from './locationsMore';
export interface LocFaq { q: string; a: string }
export interface LocContent {
  intro: string[];              // hero intro paragraphs (2–3 sentences total)
  optionsIntro: string;
  optionFit: Record<OptionKey, string>; // where each option fits best in this place
  pricing: string[];
  why: { title: string; paras: string[] };
  processNote: string;
  compareNote: string;
  neighborhoods: string[];
  faqs: LocFaq[];
  cta: string;
}
export type OptionKey = 'flake' | 'metallic' | 'solid' | 'commercial' | 'polyaspartic';
export interface Area {
  slug: string;
  name: string;
  group: Group;
  zips: string[];
  nearby: string[];
  content?: LocContent; // pages without content are not built yet
}
export type Group = 'St. Petersburg Neighborhoods' | 'Beaches' | 'Mid-Pinellas';
export const GROUPS: { name: Group; intro: string }[] = [
  { name: 'St. Petersburg Neighborhoods', intro: 'From historic Old Northeast to the Gateway business parks.' },
  { name: 'Beaches', intro: 'Sand, salt and sun-ready floors for the barrier islands.' },
  { name: 'Mid-Pinellas', intro: 'Garages, shops and offices across central Pinellas County.' },
];

export const locationPath = (slug: string) => `/epoxy-flooring-${slug}-fl`;

const SHORE_ACRES: LocContent = {
  intro: [
    'Shore Acres and Venetian Isles sit right on the water in north St. Petersburg, ZIP 33703. After the 2024 storms, a lot of homes here are being dried out, repaired or raised.',
    'We coat garages and ground-level floors with systems built to handle moisture and clean up fast — whether you\'re rebuilding on Venetian Isles or upgrading a block home off Shore Acres Boulevard.',
  ],
  optionsIntro: 'Most Shore Acres projects are garages and ground floors that may see water again. These are the systems we recommend most, and why.',
  optionFit: {
    flake: 'Our go-to for rebuilt garages. The texture hides grit tracked in from the yard and the seamless surface rinses clean after a storm.',
    metallic: 'Best for raised living areas and finished first floors where you want a high-end look over a fully dried, moisture-tested slab.',
    solid: 'A simple, bright floor for storage rooms, laundry areas and workshops under elevated homes.',
    commercial: 'For the small offices, clinics and shops along 4th Street North and nearby corridors that need a hard-wearing floor.',
    polyaspartic: 'The topcoat we use where sun hits the floor — open garage doors, carports and covered entries. It stays clear instead of yellowing.',
  },
  pricing: [
    'In Shore Acres the biggest price driver is usually the slab itself. Concrete that sat under storm surge can carry salt and moisture, and both have to be dealt with before any coating goes down.',
    'Beyond that, price depends on square footage, how much crack and spall repair the slab needs, whether a moisture-tolerant primer is required, the coating system you choose and how many coats it takes.',
  ],
  why: {
    title: 'Why Shore Acres floors need the right coating',
    paras: [
      'Shore Acres is one of the lowest-lying neighborhoods in St. Pete, and Helene and Milton pushed surge water into many garages and ground floors in 2024. Concrete that has been underwater can hold moisture and salt for months. A coating rolled over a slab like that — especially a thin store-bought kit — tends to bubble and lift. That\'s why every Shore Acres job starts with a moisture test and a thorough grind to open the surface and pull out contamination.',
      'Homes that are being elevated change how the ground level gets used: parking, storage, a workbench, sometimes a gym. Those spaces need a floor that shrugs off water, doesn\'t trap mold like carpet or grout, and can be hosed and squeegeed if water comes back. A seamless flake system with a moisture-tolerant primer and a UV-stable topcoat checks all three boxes. No floor stops a flood, but the right one makes cleanup a hose-down instead of a tear-out.',
    ],
  },
  processNote: 'On storm-affected slabs we let the concrete dry, re-test moisture and only then pick the primer.',
  compareNote: 'For a flood-prone garage, the gap between a real coating system and paint shows up after the first wet season.',
  neighborhoods: ['Shore Acres', 'Venetian Isles', 'Bayou Grande area', 'Shore Acres Boulevard corridor', 'Edgemoor & surrounding blocks'],
  faqs: [
    { q: 'What does epoxy flooring cost in Shore Acres?', a: 'It depends on the slab more than anything. Storm-exposed concrete may need extra grinding, salt removal and a moisture-tolerant primer. We measure, test and give you a written price at a free on-site visit.' },
    { q: 'How long does installation take?', a: 'Most garages take two to three days: prep and repair, then base and broadcast coats, then the topcoat. Slabs that need extra drying after water exposure can take longer to start.' },
    { q: 'When can I park on my new floor?', a: 'You can usually walk on it about a day after the topcoat. Plan on several more days before driving on it, depending on the system and the weather.' },
    { q: 'My garage flooded in 2024. Can you still coat it?', a: 'Usually, yes. We wait until the slab is dry, run a moisture test, clean out salt and contamination during grinding, and use a moisture-tolerant primer if readings call for it.' },
    { q: 'Will it be slippery when wet?', a: 'Not if it\'s built for grip. Flake adds texture, and we can mix an anti-slip additive into the topcoat — important on ground floors that see water.' },
    { q: 'Will it yellow in the Florida sun?', a: 'Plain epoxy can yellow under UV. Where the floor gets sun, we finish with a UV-stable polyaspartic topcoat that stays clear.' },
    { q: 'Can you coat over cracked or stained concrete?', a: 'Yes. We repair cracks and spalls and grind stained areas before coating. Grinding — not acid etching — gives the coating something solid to bond to.' },
    { q: 'How long does it last?', a: 'A properly prepped, multi-coat system lasts many years in normal home use. Prep, moisture control and the topcoat matter far more than the color you pick.' },
    { q: 'Do you do commercial floors too?', a: 'Yes. We coat offices, shops, clinics and storage spaces around north St. Pete.' },
  ],
  cta: 'Rebuilding or just ready for a better garage? Get a written price for your Shore Acres floor.',
};

const GATEWAY: LocContent = {
  intro: [
    'Gateway and Carillon, ZIP 33716, is the business side of St. Petersburg: warehouses, light industrial space, offices and showrooms between Roosevelt Boulevard and the bay.',
    'We install heavy-duty epoxy that stands up to forklifts, chemicals and long shifts — and we plan the work around your operation so the doors stay open.',
  ],
  optionsIntro: 'Gateway floors work hard. Here\'s how we match the coating to what your space actually does every day.',
  optionFit: {
    flake: 'A good fit for breakrooms, locker rooms and employee entrances where you want texture and a floor that hides daily dirt.',
    metallic: 'For showrooms, lobbies and client-facing suites that need to look sharp and hold up to steady foot traffic.',
    solid: 'Bright gray or tan high-build coats for warehouses and production floors — they reflect light and make line striping pop.',
    commercial: 'Thick, chemical-resistant systems for distribution, light manufacturing, labs and shops that see pallet jacks, forklifts and spills.',
    polyaspartic: 'A fast-curing, UV-stable topcoat for loading areas and spaces near roll-up doors, and when you need the floor back in service sooner.',
  },
  pricing: [
    'Commercial pricing in Gateway comes down to the size of the area, how worn the existing concrete is and how much downtime you can afford.',
    'We look at square footage, slab damage and old coatings that must be removed, crack and joint repair, moisture readings, the system thickness your traffic needs, line striping, and whether work has to happen in phases, at night or on weekends.',
  ],
  why: {
    title: 'Why Gateway floors need the right coating',
    paras: [
      'A warehouse floor in Carillon doesn\'t fail because of how it looks. It fails at the joints where forklift wheels slam, in the aisles where pallets drag, and in the corner where someone sets down a drum of solvent. Thin coatings chip at the edges, then peel in sheets. The fix is a thicker, high-solids system, joint repair done properly, and a chemical-resistant topcoat chosen for what actually gets spilled in your building.',
      'Downtime costs money, so planning matters as much as product. We can split a floor into zones, work after hours, or use faster-curing coats where it makes sense. Safety is part of the job too: aisle striping, walkways and marked hazard zones go down with the coating, and we can add texture where floors get wet or oily.',
    ],
  },
  processNote: 'For commercial jobs we agree on phasing and access times before the first grinder starts.',
  compareNote: 'In a busy facility, bare concrete dusts and stains, and paint lasts weeks under forklift traffic.',
  neighborhoods: ['Gateway', 'Carillon business district', 'Roosevelt Boulevard corridor', 'Ulmerton Road east', 'Koger & Gandy-area business parks'],
  faqs: [
    { q: 'What does a commercial epoxy floor cost in Gateway?', a: 'It depends on area, slab condition, the system thickness your traffic needs, striping and scheduling. We walk the space and give you a written quote.' },
    { q: 'How long will my facility be down?', a: 'Many floors can be done in phases or after hours so part of the building keeps running. We map the schedule with you before starting.' },
    { q: 'When can forklifts drive on it?', a: 'Foot traffic usually returns about a day after the topcoat. Forklifts and heavy loads need a longer cure; we give you the exact timing for the product used.' },
    { q: 'Can you add line striping and safety zones?', a: 'Yes. Aisles, walkways, parking for equipment and hazard areas are built into the coating.' },
    { q: 'Will it be slippery when wet or oily?', a: 'We can add a broadcast or anti-slip additive to the topcoat for areas that see water, oil or washdowns.' },
    { q: 'Will it yellow near the bay doors?', a: 'Standard epoxy can yellow under UV. Near roll-up doors and windows we use a UV-stable polyaspartic topcoat.' },
    { q: 'Can you coat over cracked, stained or previously coated floors?', a: 'Yes. We grind off failing coatings, repair cracks and joints, and diamond-grind the slab so the new system bonds.' },
    { q: 'How long does an industrial floor last?', a: 'A properly built system lasts for years under daily traffic. Recoating the topcoat when it wears extends the life even further.' },
    { q: 'Do you also do the offices and showrooms?', a: 'Yes. We often do the warehouse in a solid industrial coat and the front office or showroom in flake or metallic.' },
  ],
  cta: 'Let\'s plan a Gateway floor that fits your schedule. Get a written quote.',
};

const STPB: LocContent = {
  intro: [
    'St. Pete Beach, ZIP 33706, runs from Pass-a-Grille up Gulf Boulevard past the resorts and canal homes. Sand, salt and strong sun are part of every floor here.',
    'We coat garages, ground-level storage and covered outdoor spaces with slip-resistant, UV-stable systems — including the many properties still rebuilding after 2024.',
  ],
  optionsIntro: 'At the beach, what works indoors in a mainland garage isn\'t always enough. These are the systems we match to beach homes, rentals and businesses.',
  optionFit: {
    flake: 'The best choice for under-house garages and rental storage. It hides sand between cleanings and gives bare feet some grip.',
    metallic: 'For raised living spaces and shops along Corey Avenue where you want a coastal, glossy look indoors.',
    solid: 'A clean, simple floor for utility rooms, bike and kayak storage, and pool-equipment areas.',
    commercial: 'For restaurants, rental check-in areas and beach shops that need slip resistance and fast cleanup.',
    polyaspartic: 'Our standard topcoat at the beach. It handles direct sun on lanais and covered entries without yellowing, and resists salt.',
  },
  pricing: [
    'Beach projects are priced on square footage, the slab\'s condition after salt and water exposure, crack and spall repair, whether a moisture-tolerant primer is needed, the coating system and the number of coats.',
    'Outdoor or sun-exposed areas usually call for a UV-stable topcoat, and rental properties may need work scheduled between bookings.',
  ],
  why: {
    title: 'Why St. Pete Beach floors need the right coating',
    paras: [
      'Three things wear down beach floors: sand that acts like sandpaper underfoot, salt that works its way into bare concrete, and sun that yellows and chalks ordinary epoxy. A floor that looks fine in a shaded mainland garage can fade within a season on a sunny lanai in Pass-a-Grille. That\'s why we finish sun-exposed areas with a UV-stable polyaspartic topcoat and use textured systems where people walk wet or barefoot.',
      'Many St. Pete Beach homes are raised, which turns the ground level into parking, storage and the path to the beach. After the 2024 storms, a lot of these spaces are being rebuilt from bare slab. That\'s a chance to put down a seamless floor with no grout lines to trap water or sand. Before we do, we make sure the slab is dry, salt is ground out, and moisture readings are where they need to be.',
    ],
  },
  processNote: 'Beach slabs get extra attention during grinding to remove salt before primer.',
  compareNote: 'Under strong beach sun, paint and plain epoxy are the first to chalk and yellow.',
  neighborhoods: ['Pass-a-Grille', 'Corey Avenue area', 'Gulf Boulevard resorts & condos', 'Vina del Mar', 'Belle Vista', 'Don CeSar area'],
  faqs: [
    { q: 'What does epoxy flooring cost on St. Pete Beach?', a: 'It depends on size, slab condition after salt and water exposure, repairs and the system. Sun-exposed areas need a UV-stable topcoat. We give you a written price after a free visit.' },
    { q: 'How long does installation take?', a: 'Most garages and under-house areas take two to three days. Rentals can be scheduled between bookings.' },
    { q: 'When can I park or use the space?', a: 'Light foot traffic about a day after the topcoat; cars and heavy items after several more days.' },
    { q: 'Can you coat the floor under my elevated beach house?', a: 'Yes. Under-house garages and storage get a slip-resistant flake or solid system with a salt- and UV-resistant topcoat.' },
    { q: 'Will it be slippery with wet feet?', a: 'We add texture — flake, quartz or an anti-slip additive — so floors stay grippy when people come in wet from the beach.' },
    { q: 'Will it yellow in the beach sun?', a: 'Plain epoxy can. That\'s why sun-exposed floors here get a UV-stable polyaspartic topcoat.' },
    { q: 'Can it go over cracked or salt-stained concrete?', a: 'Yes, after repair. We grind out salt and stains, fill cracks and spalls, and test moisture first.' },
    { q: 'How long will a beach floor last?', a: 'With proper prep and a UV-stable topcoat, many years. Rinsing off sand and salt regularly helps it last longer.' },
    { q: 'Do you work on restaurants and rental properties?', a: 'Yes. We coat restaurants, shops, condos and rentals, and plan around guests and opening hours.' },
  ],
  cta: 'Sun, sand and salt-ready. Get a written price for your St. Pete Beach floor.',
};

export const AREAS: Area[] = [
  { slug: 'snell-isle-old-northeast', name: 'Snell Isle & Old Northeast', group: 'St. Petersburg Neighborhoods', zips: ['33704', '33701'], nearby: ['shore-acres', 'downtown-st-petersburg', 'kenwood-crescent-lake', 'riviera-bay-placido-bayou'] },
  { slug: 'shore-acres', name: 'Shore Acres & Venetian Isles', group: 'St. Petersburg Neighborhoods', zips: ['33703'], nearby: ['snell-isle-old-northeast', 'riviera-bay-placido-bayou', 'gateway-carillon', 'feather-sound'], content: SHORE_ACRES },
  { slug: 'riviera-bay-placido-bayou', name: 'Riviera Bay & Placido Bayou', group: 'St. Petersburg Neighborhoods', zips: ['33702'], nearby: ['shore-acres', 'gateway-carillon', 'snell-isle-old-northeast', 'feather-sound'] },
  { slug: 'kenwood-crescent-lake', name: 'Kenwood & Crescent Lake', group: 'St. Petersburg Neighborhoods', zips: ['33713', '33704'], nearby: ['downtown-st-petersburg', 'snell-isle-old-northeast', 'pasadena-south-pasadena', 'gulfport'] },
  { slug: 'downtown-st-petersburg', name: 'Downtown St. Pete', group: 'St. Petersburg Neighborhoods', zips: ['33701'], nearby: ['snell-isle-old-northeast', 'kenwood-crescent-lake', 'gateway-carillon', 'gulfport'] },
  { slug: 'gateway-carillon', name: 'Gateway & Carillon', group: 'St. Petersburg Neighborhoods', zips: ['33716'], nearby: ['feather-sound', 'pinellas-park', 'riviera-bay-placido-bayou', 'largo'], content: GATEWAY },
  { slug: 'pasadena-south-pasadena', name: 'Pasadena & South Pasadena', group: 'St. Petersburg Neighborhoods', zips: ['33707'], nearby: ['gulfport', 'st-pete-beach', 'kenwood-crescent-lake', 'tierra-verde-isla-del-sol'] },
  { slug: 'tierra-verde-isla-del-sol', name: 'Tierra Verde & Isla del Sol', group: 'St. Petersburg Neighborhoods', zips: ['33715'], nearby: ['st-pete-beach', 'pasadena-south-pasadena', 'gulfport', 'treasure-island'] },
  { slug: 'st-pete-beach', name: 'St. Pete Beach', group: 'Beaches', zips: ['33706'], nearby: ['treasure-island', 'tierra-verde-isla-del-sol', 'pasadena-south-pasadena', 'madeira-beach'], content: STPB },
  { slug: 'treasure-island', name: 'Treasure Island', group: 'Beaches', zips: ['33706'], nearby: ['st-pete-beach', 'madeira-beach', 'pasadena-south-pasadena', 'seminole'] },
  { slug: 'madeira-beach', name: 'Madeira Beach', group: 'Beaches', zips: ['33708'], nearby: ['treasure-island', 'seminole', 'st-pete-beach', 'largo'] },
  { slug: 'gulfport', name: 'Gulfport', group: 'Mid-Pinellas', zips: ['33707'], nearby: ['pasadena-south-pasadena', 'kenwood-crescent-lake', 'downtown-st-petersburg', 'tierra-verde-isla-del-sol'] },
  { slug: 'seminole', name: 'Seminole', group: 'Mid-Pinellas', zips: ['33772', '33776', '33777'], nearby: ['largo', 'madeira-beach', 'pinellas-park', 'treasure-island'] },
  { slug: 'pinellas-park', name: 'Pinellas Park', group: 'Mid-Pinellas', zips: ['33781', '33782'], nearby: ['gateway-carillon', 'largo', 'seminole', 'kenwood-crescent-lake'] },
  { slug: 'largo', name: 'Largo', group: 'Mid-Pinellas', zips: ['33770', '33771', '33774'], nearby: ['seminole', 'pinellas-park', 'feather-sound', 'gateway-carillon'] },
  { slug: 'feather-sound', name: 'Feather Sound', group: 'Mid-Pinellas', zips: ['33762'], nearby: ['gateway-carillon', 'largo', 'pinellas-park', 'riviera-bay-placido-bayou'] },
];

AREAS.forEach(a => { if (!a.content && MORE[a.slug]) a.content = MORE[a.slug]; });
export const LIVE_AREAS = AREAS.filter(a => a.content);
export const getArea = (slug: string) => AREAS.find(a => a.slug === slug);
export const isLive = (slug: string) => !!getArea(slug)?.content;
