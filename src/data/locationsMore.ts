import type { LocContent, LocFaq } from './locations';

/** Shared cost/timing answers, phrased per area. Everything else is area-specific. */
const baseFaqs = (n: string, costNote: string): LocFaq[] => [
  { q: `What does epoxy flooring cost in ${n}?`, a: `${costNote} We measure, test the slab and give you a written price at a free on-site visit.` },
  { q: 'How long does installation take?', a: 'Most garages take two to three days. Polyaspartic systems can be done faster. Larger or commercial floors are scheduled in phases.' },
  { q: 'When can I walk and drive on it?', a: 'Light foot traffic after about a day. Plan several more days before parking, depending on the system and the weather.' },
  { q: 'Will it yellow in the sun?', a: 'Plain epoxy can yellow under UV. Where sun reaches the floor we finish with a UV-stable polyaspartic topcoat.' },
];

type Spec = Omit<LocContent, 'faqs'> & { cost: string; faqs: LocFaq[] };
const build = (n: string, s: Spec): LocContent => {
  const { cost, faqs, ...rest } = s;
  return { ...rest, faqs: [...baseFaqs(n, cost), ...faqs] };
};

export const MORE: Record<string, LocContent> = {
  'snell-isle-old-northeast': build('Snell Isle & Old Northeast', {
    intro: [
      'Snell Isle and Old Northeast pair 1920s bungalows and brick streets with waterfront estates, ZIP 33704 and 33701.',
      'We coat detached garages, carriage-house workshops and modern garages with finishes that suit the house — not just the slab.',
    ],
    optionsIntro: 'Homes here care about looks as much as toughness. These are the finishes owners pick most.',
    optionFit: {
      flake: 'Clean, durable garages on Snell Isle estates. Neutral blends match stucco and brick.',
      metallic: 'Showpiece garages, wine rooms and studios where the floor is part of the design.',
      solid: 'Small detached garages and alley workshops behind Old Northeast bungalows.',
      commercial: 'Boutique offices and studios along the 4th Street and Coffee Pot Bayou edges.',
      polyaspartic: 'Carports and porte-cocheres that sit in full afternoon sun.',
    },
    cost: 'Older detached garages often need more crack repair; newer Snell Isle garages are usually larger.',
    pricing: [
      'Old Northeast garages are often decades old with settlement cracks, oil stains and patched sections. Repair time is the biggest variable.',
      'Price also depends on size, the finish you choose, moisture readings and whether you want cove base up the walls.',
    ],
    why: { title: 'Why Old Northeast and Snell Isle floors need careful prep', paras: [
      'Many garages here were poured long before modern vapor barriers. Old slabs can wick moisture and carry years of oil and paint. We grind, degrease, test moisture and choose a primer to match.',
      'Snell Isle sits low on Coffee Pot Bayou and saw surge in 2024. A seamless coated floor rinses clean and doesn\'t hold water like tile grout.',
    ] },
    processNote: 'On historic slabs we repair before we coat, so old cracks don\'t telegraph through.',
    compareNote: 'For a decades-old slab, a real coating system outlasts paint by a wide margin.',
    neighborhoods: ['Snell Isle', 'Old Northeast', 'Coffee Pot Bayou', 'Crisp Park', 'North Shore'],
    faqs: [
      { q: 'Can you coat a 1920s garage slab?', a: 'Usually, yes. We repair cracks, grind out stains and test moisture first. Badly broken slabs may need patching before coating.' },
      { q: 'Can the floor match my home\'s style?', a: 'Yes. Flake blends, solid colors and metallics come in many tones. We bring samples to your quote.' },
      { q: 'Do you add cove base?', a: 'We can run the coating a few inches up the wall for a seamless, easy-clean edge.' },
      { q: 'Is a metallic floor practical in a garage?', a: 'It can be, with a tough topcoat. For daily parking most owners choose flake; metallic shines in studios and show garages.' },
      { q: 'Do you work in tight alley garages?', a: 'Yes. Small spaces are fine — we plan equipment access at the quote.' },
    ],
    cta: 'Give your Old Northeast or Snell Isle garage a finish that fits the house.',
  }),

  'riviera-bay-placido-bayou': build('Riviera Bay & Placido Bayou', {
    intro: [
      'Riviera Bay and Placido Bayou are quiet waterfront neighborhoods off 4th Street North and Gandy, ZIP 33702.',
      'We coat attached garages, lanai entries and home workshops with floors built for salt air and storm cleanup.',
    ],
    optionsIntro: 'Most projects here are two-car garages and the spaces around them.',
    optionFit: {
      flake: 'The most popular garage floor here: textured, hides sand and rinses clean.',
      metallic: 'Home gyms and bonus rooms in Placido Bayou\'s larger homes.',
      solid: 'Laundry rooms, storage areas and boat-gear rooms.',
      commercial: 'Small businesses along 4th Street North and Gandy Boulevard.',
      polyaspartic: 'Garages that stay open to the sun and covered lanai slabs.',
    },
    cost: 'Most Riviera Bay garages are standard two-car sizes; slab condition and moisture readings drive the rest.',
    pricing: [
      'Price depends on square footage, crack repair, moisture readings, the system you choose and extras like cove base.',
      'Garages that took water in 2024 may need extra drying and a moisture-tolerant primer.',
    ],
    why: { title: 'Why waterfront garages in Riviera Bay need a sealed floor', paras: [
      'Salt air and boat gear bring corrosion and grime into the garage. Bare concrete soaks it up; a sealed floor wipes clean.',
      'Low elevations along the bayous mean water can return. A seamless coating makes cleanup a hose-down, though no floor prevents flooding.',
    ] },
    processNote: 'We test moisture on every slab — near the bayou it matters even more.',
    compareNote: 'Boat trailers and salt rinse-down are where paint fails and coatings hold.',
    neighborhoods: ['Riviera Bay', 'Placido Bayou', 'Patrician Point', 'Gandy corridor', 'Weedon Island area'],
    faqs: [
      { q: 'Will the floor handle a boat trailer?', a: 'Yes. A flake system with a hard topcoat handles trailer tires and the occasional rinse-down.' },
      { q: 'Does salt damage epoxy?', a: 'A sealed, topcoated floor resists salt far better than bare concrete. Rinse it now and then.' },
      { q: 'Can you coat my lanai too?', a: 'Covered lanais, yes — we use a UV-stable polyaspartic with texture for grip.' },
      { q: 'Is it slippery when wet?', a: 'We add texture or anti-slip additive in wet areas so it grips underfoot.' },
      { q: 'Do you serve commercial spaces nearby?', a: 'Yes, including shops and offices along 4th Street North.' },
    ],
    cta: 'Get a salt- and storm-ready garage floor in Riviera Bay or Placido Bayou.',
  }),

  'kenwood-crescent-lake': build('Kenwood & Crescent Lake', {
    intro: [
      'Kenwood and Crescent Lake are full of restored bungalows, artist studios and backyard workshops, ZIP 33713 and 33704.',
      'We coat small garages, studios and converted outbuildings with floors that are tough, colorful and easy to clean.',
    ],
    optionsIntro: 'Spaces here are often small and creative. These systems fit best.',
    optionFit: {
      flake: 'Single-car garages and workshops that see tools, bikes and paint.',
      metallic: 'Art studios, home offices and converted garages turned living space.',
      solid: 'Bright, simple floors for potting sheds, studios and storage.',
      commercial: 'Shops and cafes on Central Avenue\'s Grand Central District.',
      polyaspartic: 'Carports and alley-side parking pads in direct sun.',
    },
    cost: 'Smaller spaces mean less material, but older slabs often need more repair.',
    pricing: [
      'Kenwood\'s older detached garages often have uneven, cracked or patched slabs. Repair and leveling time is the main variable.',
      'Size, the finish and whether you\'re converting the space to living area also affect price.',
    ],
    why: { title: 'Why Kenwood workshops benefit from a coated floor', paras: [
      'Bare concrete in a studio collects paint, dust and spills that never come out. A sealed floor wipes clean and stops concrete dust.',
      'Garage-to-studio conversions need a floor that looks finished. Metallic and solid systems give that look without tearing up the slab.',
    ] },
    processNote: 'Older detached slabs get extra crack repair and leveling before any coating.',
    compareNote: 'In a busy workshop, paint peels and stains; a coated system keeps cleaning simple.',
    neighborhoods: ['Historic Kenwood', 'Crescent Lake', 'Grand Central District', 'Euclid St. Paul', 'Crescent Heights'],
    faqs: [
      { q: 'Can you coat a converted garage studio?', a: 'Yes. Metallic or solid color gives a finished look. We test moisture first since living spaces need a dry slab.' },
      { q: 'Will paint spills come off?', a: 'Most wipe up from a sealed topcoat, especially if cleaned before drying.' },
      { q: 'My slab is uneven. Is that a problem?', a: 'We grind high spots and fill low ones. Major settling may need patching first.' },
      { q: 'Do you coat small single-car garages?', a: 'Yes. Size is never too small.' },
      { q: 'Do you do businesses on Central Avenue?', a: 'Yes — retail, cafes and studios in the Grand Central District.' },
    ],
    cta: 'Turn your Kenwood garage or studio into a clean, finished space.',
  }),

  'downtown-st-petersburg': build('Downtown St. Pete', {
    intro: [
      'Downtown St. Pete mixes condos, restaurants, galleries and offices from the waterfront to the EDGE District, ZIP 33701.',
      'We install commercial and decorative epoxy for businesses that need a durable floor with little downtime.',
    ],
    optionsIntro: 'Downtown projects are mostly commercial. Here\'s what fits each type of space.',
    optionFit: {
      flake: 'Back-of-house areas, stairwells and condo storage rooms.',
      metallic: 'Showrooms, salons, galleries and lobbies where the floor makes an impression.',
      solid: 'Retail stockrooms and clean, modern office floors.',
      commercial: 'Restaurant kitchens, breweries and service areas that need chemical and slip resistance.',
      polyaspartic: 'Fast-cure jobs that must reopen quickly, and sunny storefront entries.',
    },
    cost: 'Commercial price depends on size, downtime limits and the system the space needs.',
    pricing: [
      'Downtown jobs often run after hours or in phases. Scheduling, access and the speed of cure affect price.',
      'The floor type, existing coatings to remove and slip or chemical needs matter too.',
    ],
    why: { title: 'Why downtown businesses choose seamless floors', paras: [
      'Restaurants and breweries need floors that drain, resist grease and won\'t harbor bacteria in grout lines. A seamless system with cove base helps.',
      'Showrooms and salons want a floor that looks premium every day. Metallic epoxy gives a one-of-a-kind look that cleans easily.',
    ] },
    processNote: 'We plan work around your hours, including overnight or phased installs when needed.',
    compareNote: 'For commercial spaces, the comparison that matters most is downtime and lifespan.',
    neighborhoods: ['Downtown core', 'EDGE District', 'Warehouse Arts District', 'Uptown', 'Bayboro / USF St. Pete area'],
    faqs: [
      { q: 'Can you work outside business hours?', a: 'Yes. We schedule nights or phases to keep your doors open.' },
      { q: 'Is epoxy good for restaurant kitchens?', a: 'Yes, with the right system: thicker build, anti-slip texture and cove base for easy cleaning.' },
      { q: 'Can you remove old tile or coatings?', a: 'We grind off old coatings. Tile removal can be arranged before coating.' },
      { q: 'Do you coat condo garages?', a: 'We can, with association approval. We\'ll work with your building manager on access.' },
      { q: 'How fast can a space reopen?', a: 'Fast-cure polyaspartic can allow light traffic within a day. We give exact timing at the quote.' },
    ],
    cta: 'Get a downtown floor that looks sharp and keeps your doors open.',
  }),

  'pasadena-south-pasadena': build('Pasadena & South Pasadena', {
    intro: [
      'Pasadena and South Pasadena sit between Boca Ciega Bay and Gulfport, ZIP 33707 — mid-century homes, golf-course streets and condos.',
      'We coat garages, carports and condo storage with floors built for heat, humidity and salt air.',
    ],
    optionsIntro: 'Here\'s what fits the homes and condos in Pasadena best.',
    optionFit: {
      flake: 'Attached garages in Pasadena\'s ranch homes — the everyday favorite.',
      metallic: 'Florida rooms and enclosed porches turned living space.',
      solid: 'Condo storage rooms and laundry areas.',
      commercial: 'Shops and medical offices along Pasadena Avenue.',
      polyaspartic: 'Carports and open garages facing the afternoon sun.',
    },
    cost: 'Mid-century slabs often need crack repair; carports need a UV-stable topcoat.',
    pricing: [
      'Price depends on size, slab age and repair, moisture readings, the system and finishes like cove base.',
      'Many homes here have carports instead of garages, which means a sun-rated topcoat.',
    ],
    why: { title: 'Why Pasadena floors face sun and salt', paras: [
      'Carports and open garages here take direct sun. Plain epoxy yellows; polyaspartic topcoats stay clear.',
      'Bay-side streets flooded in 2024. Moisture testing and the right primer keep a new coating from lifting.',
    ] },
    processNote: 'Carport jobs get a UV-stable topcoat as standard.',
    compareNote: 'Under the Florida sun, the topcoat is the difference between clear and yellow.',
    neighborhoods: ['Pasadena', 'South Pasadena', 'Pasadena Golf Club area', 'Boca Ciega Bay shoreline', 'Bear Creek'],
    faqs: [
      { q: 'Can you coat an open carport?', a: 'Yes, with a UV-stable polyaspartic topcoat and texture for grip in the rain.' },
      { q: 'Can you coat an enclosed Florida room?', a: 'Yes. Metallic or solid color works well once the slab tests dry.' },
      { q: 'Do condos allow it?', a: 'Many do with board approval. We can share product info for your association.' },
      { q: 'My garage flooded. Can it be coated?', a: 'Usually, after drying and a moisture test. We choose the primer based on readings.' },
      { q: 'Do you serve Pasadena businesses?', a: 'Yes, including offices and shops on Pasadena Avenue.' },
    ],
    cta: 'Get a sun- and salt-ready floor for your Pasadena home.',
  }),

  'tierra-verde-isla-del-sol': build('Tierra Verde & Isla del Sol', {
    intro: [
      'Tierra Verde and Isla del Sol are island communities at the mouth of Tampa Bay, ZIP 33715, with large waterfront homes and boat garages.',
      'We coat garages, ground-floor storage under elevated homes and boat-gear areas with floors built for salt and storms.',
    ],
    optionsIntro: 'Island homes need floors that handle salt, sand and water. These fit best.',
    optionFit: {
      flake: 'Large garages and under-home parking — hides sand and rinses clean.',
      metallic: 'Ground-level game rooms and entries in raised homes.',
      solid: 'Storage and mechanical rooms under elevated homes.',
      commercial: 'Marina and service areas that need chemical resistance.',
      polyaspartic: 'Under-home parking and open garages exposed to sun and salt.',
    },
    cost: 'Island garages are often larger, and storm-exposed slabs may need extra prep.',
    pricing: [
      'Size, slab condition after storm exposure, moisture readings and the system chosen drive the price.',
      'Ground floors under elevated homes often need texture and a UV-stable topcoat.',
    ],
    why: { title: 'Why island floors need salt and storm protection', paras: [
      'Tierra Verde took surge in 2024. Concrete that sat in salt water needs thorough grinding and moisture testing before coating.',
      'Boat gear, fishing tackle and wet sand come straight into the garage. A seamless, textured floor rinses clean and won\'t stain.',
    ] },
    processNote: 'Storm-exposed slabs are dried, tested and cleaned of salt before any primer goes down.',
    compareNote: 'Salt is the fastest way to ruin paint; a sealed system holds up.',
    neighborhoods: ['Tierra Verde', 'Isla del Sol', 'Grand Island', 'Pine Key', 'Fort De Soto area'],
    faqs: [
      { q: 'Can you coat parking under an elevated home?', a: 'Yes. We use a textured, UV-stable system that handles sun, salt and rinse-downs.' },
      { q: 'Does salt water ruin a coated floor?', a: 'A sealed floor resists it far better than bare concrete. Rinse after storms or boat use.' },
      { q: 'Is a big garage a problem?', a: 'No. Larger floors just take a little longer to prep.' },
      { q: 'Will it be slippery with wet sand?', a: 'We add texture or anti-slip additive so it grips when wet.' },
      { q: 'Do you serve marinas?', a: 'Yes — service and storage areas that need tough, chemical-resistant floors.' },
    ],
    cta: 'Get an island-ready floor for your Tierra Verde or Isla del Sol home.',
  }),

  'treasure-island': build('Treasure Island', {
    intro: [
      'Treasure Island, ZIP 33706, is a beach town of rebuilt homes, vacation rentals and small businesses along Gulf Boulevard.',
      'We coat garages, rental entries and ground floors with seamless floors that rinse clean between guests and after storms.',
    ],
    optionsIntro: 'Rentals and rebuilds lead the way on Treasure Island. Here\'s what fits.',
    optionFit: {
      flake: 'Rental garages and ground floors — hides sand and wear between guests.',
      metallic: 'Upgraded living levels in rebuilt homes.',
      solid: 'Storage, laundry and pool-equipment rooms.',
      commercial: 'Beach shops, restaurants and motels along Gulf Boulevard.',
      polyaspartic: 'Breezeways, carports and entries in direct sun.',
    },
    cost: 'Rebuild and rental jobs vary most by slab condition and how fast the space must reopen.',
    pricing: [
      'Price depends on size, storm damage and repair, moisture readings, the system and turnaround time for rentals.',
      'Fast-cure polyaspartic helps rentals get back on the calendar sooner.',
    ],
    why: { title: 'Why Treasure Island floors need fast, tough coatings', paras: [
      'Much of Treasure Island flooded in 2024. Rebuilt ground floors need a floor that tolerates moisture and cleans up fast.',
      'Rentals see heavy, sandy traffic. A textured flake floor hides wear and turns over quickly between guests.',
    ] },
    processNote: 'For rentals we schedule around bookings and use fast-cure systems where they fit.',
    compareNote: 'Between guests and storms, a real coating pays back faster than repainting.',
    neighborhoods: ['Sunset Beach', 'Isle of Capri', 'Isle of Palms', 'Sunshine Beach', 'Gulf Boulevard corridor'],
    faqs: [
      { q: 'Can you work between rental bookings?', a: 'Yes. We plan around your calendar and use fast-cure systems when timing is tight.' },
      { q: 'Is it good for rebuilt ground floors?', a: 'Yes, after drying and moisture testing. Seamless floors rinse clean if water returns.' },
      { q: 'Will sand scratch it?', a: 'Flake hides light scratches, and a hard topcoat resists wear.' },
      { q: 'Do you coat breezeways and entries?', a: 'Yes, with a textured, UV-stable topcoat for grip and sun.' },
      { q: 'Do you serve beach businesses?', a: 'Yes — shops, restaurants and motels on Gulf Boulevard.' },
    ],
    cta: 'Get a fast, beach-tough floor for your Treasure Island home or rental.',
  }),

  'madeira-beach': build('Madeira Beach', {
    intro: [
      'Madeira Beach, ZIP 33708, is home to John\'s Pass, fishing fleets, waterfront homes and condos.',
      'We coat garages, fish-cleaning areas and commercial floors with tough, slip-resistant systems.',
    ],
    optionsIntro: 'Madeira Beach floors deal with fish, bait, salt and sand. Here\'s what works.',
    optionFit: {
      flake: 'Home garages full of rods, coolers and boat gear.',
      metallic: 'Condo entries and living levels in renovated homes.',
      solid: 'Storage and utility rooms that need a bright, easy-clean floor.',
      commercial: 'Restaurants, bait shops and kitchens around John\'s Pass.',
      polyaspartic: 'Open garages and outdoor-facing entries in direct sun.',
    },
    cost: 'Commercial kitchens and marine areas need heavier systems; home garages vary by size and repair.',
    pricing: [
      'Price depends on size, slab repair, moisture readings, chemical and slip needs and the system chosen.',
      'Restaurants near John\'s Pass often add cove base and anti-slip texture.',
    ],
    why: { title: 'Why Madeira Beach floors need slip and odor resistance', paras: [
      'Fish, bait and salt water soak into bare concrete and smell. A sealed floor cleans completely.',
      'Wet, slick floors are a hazard in kitchens and gear rooms. Textured systems give grip even when wet.',
    ] },
    processNote: 'For restaurants we schedule around service and add cove base for sanitation.',
    compareNote: 'Where fish and salt meet the floor, sealed beats bare every time.',
    neighborhoods: ['John\'s Pass Village', 'Crystal Island', 'Boca Ciega Isle', 'Snug Harbor', 'Gulf Boulevard corridor'],
    faqs: [
      { q: 'Will it handle fish and bait spills?', a: 'Yes. A sealed topcoat won\'t absorb odors and cleans with a hose and soap.' },
      { q: 'Is it good for restaurant kitchens?', a: 'Yes, with anti-slip texture, cove base and a chemical-resistant topcoat.' },
      { q: 'Will it be slippery?', a: 'We add texture so it grips when wet.' },
      { q: 'Do you coat condo garages?', a: 'Yes, with association approval.' },
      { q: 'Did 2024 flooding change anything?', a: 'Storm-exposed slabs get extra drying, moisture testing and salt removal first.' },
    ],
    cta: 'Get a tough, easy-clean floor for your Madeira Beach home or business.',
  }),

  'gulfport': build('Gulfport', {
    intro: [
      'Gulfport, ZIP 33707, is a colorful waterfront town of cottages, galleries and the Beach Boulevard shops.',
      'We coat garages, studios and small businesses with floors that can be as bold or as simple as you like.',
    ],
    optionsIntro: 'Gulfport loves color. Here\'s how each finish fits.',
    optionFit: {
      flake: 'Cottage garages and workshops — pick a bold blend or keep it neutral.',
      metallic: 'Galleries, salons and studios that want a one-of-a-kind floor.',
      solid: 'Bright solid colors for sheds, studios and storage.',
      commercial: 'Restaurants and shops on Beach Boulevard and in the Waterfront District.',
      polyaspartic: 'Carports and porches in full sun.',
    },
    cost: 'Gulfport cottages often have small, older slabs, so repair matters more than size.',
    pricing: [
      'Price depends on size, slab age and repair, moisture readings and the finish chosen.',
      'Custom colors and metallic designs take more labor than standard flake.',
    ],
    why: { title: 'Why Gulfport floors need moisture and sun planning', paras: [
      'Low streets near Boca Ciega Bay flooded in 2024. Moisture testing keeps new coatings from bubbling.',
      'Carports and porches here take strong sun. A UV-stable topcoat keeps colors from fading or yellowing.',
    ] },
    processNote: 'We bring color samples so you can see blends in your own light.',
    compareNote: 'Bold colors fade fast in paint; a topcoated system keeps them vivid.',
    neighborhoods: ['Gulfport Waterfront District', 'Beach Boulevard', 'Stetson area', 'Town Shores', 'Pasadena Yacht & CC area'],
    faqs: [
      { q: 'Can I get a custom color?', a: 'Yes. Flake blends, solid colors and metallics come in a wide range. We bring samples.' },
      { q: 'Is metallic good for a gallery?', a: 'Yes. It\'s seamless, reflective and easy to clean.' },
      { q: 'Can you coat a cottage porch?', a: 'Covered porches, yes, with a textured UV-stable topcoat.' },
      { q: 'Will colors fade?', a: 'A UV-stable topcoat protects color in sunny spots.' },
      { q: 'Do you work with local businesses?', a: 'Yes — restaurants, shops and studios across Gulfport.' },
    ],
    cta: 'Get a Gulfport floor with as much personality as the town.',
  }),

  'seminole': build('Seminole', {
    intro: [
      'Seminole, ZIP 33772, 33776 and 33777, is a family town of ranch homes, Lake Seminole neighborhoods and busy shopping corridors.',
      'We coat family garages, home gyms and local businesses with durable, easy-clean floors.',
    ],
    optionsIntro: 'Seminole garages are workhorses. Here\'s what fits.',
    optionFit: {
      flake: 'Two-car family garages with bikes, tools and daily parking.',
      metallic: 'Home gyms, game rooms and man caves.',
      solid: 'Laundry rooms and storage.',
      commercial: 'Shops, offices and auto service along Seminole Boulevard and Park Boulevard.',
      polyaspartic: 'Garages that stay open and get afternoon sun.',
    },
    cost: 'Most Seminole garages are standard two-car sizes; crack repair and finish choice drive the rest.',
    pricing: [
      'Price depends on square footage, crack and spall repair, moisture readings and the system you choose.',
      'Adding cove base or anti-slip texture adds a little more.',
    ],
    why: { title: 'Why Seminole garages benefit from a coated floor', paras: [
      'Family garages take oil drips, hot tires and dropped tools. A flake system resists all three.',
      'Garage gyms need a floor that handles dropped weights and sweat. Thicker systems with texture hold up.',
    ] },
    processNote: 'We schedule around school and work so you\'re not without a garage for long.',
    compareNote: 'Hot tires lift DIY paint; a ground and primed system stays bonded.',
    neighborhoods: ['Lake Seminole', 'Seminole Lake Country Club', 'Bay Pines', 'Oakhurst', 'Park Boulevard corridor'],
    faqs: [
      { q: 'Will hot tires lift the coating?', a: 'Not on a properly ground and primed system. Hot-tire lift is a paint and DIY-kit problem.' },
      { q: 'Is it good for a garage gym?', a: 'Yes. A thicker system with texture handles weights and sweat. Use mats under heavy drops.' },
      { q: 'Can kids and pets use it?', a: 'Yes, once fully cured. It\'s easy to clean and doesn\'t hold dirt.' },
      { q: 'Do you fix cracks?', a: 'Yes. Cracks and spalls are filled and ground flush before coating.' },
      { q: 'Do you coat auto shops?', a: 'Yes — chemical-resistant systems for service bays.' },
    ],
    cta: 'Get a Seminole garage floor that keeps up with your family.',
  }),

  'pinellas-park': build('Pinellas Park', {
    intro: [
      'Pinellas Park, ZIP 33781 and 33782, is central Pinellas\' working hub — auto shops, warehouses and solid block homes.',
      'We install heavy-duty commercial floors and durable garage floors across the city.',
    ],
    optionsIntro: 'Pinellas Park has more shops and warehouses than most cities its size. Here\'s what fits.',
    optionFit: {
      flake: 'Home garages and workshops in established neighborhoods.',
      metallic: 'Showrooms and customer-facing offices.',
      solid: 'Warehouse floors, storage and light manufacturing.',
      commercial: 'Auto repair bays, fabrication shops and warehouses with forklift traffic.',
      polyaspartic: 'Loading areas and open bays that need a fast return to service.',
    },
    cost: 'Commercial floors vary by size, chemical exposure and downtime; home garages by size and repair.',
    pricing: [
      'Price depends on square footage, existing coatings, oil contamination, required thickness and line striping.',
      'Fast-cure systems cost more but reduce downtime for busy shops.',
    ],
    why: { title: 'Why Pinellas Park shops need tough floors', paras: [
      'Auto bays and fabrication shops deal with oil, brake fluid and dropped steel. Thicker, chemical-resistant systems handle it.',
      'Oil-soaked slabs must be degreased and ground deeply, or coatings will lift. Prep is where most failed shop floors went wrong.',
    ] },
    processNote: 'Shop floors get deep degreasing and grinding to remove oil before coating.',
    compareNote: 'Under forklifts and chemicals, paint lasts months; industrial systems last years.',
    neighborhoods: ['Park Boulevard corridor', 'US-19 industrial area', 'Mainlands', 'Bonnie Bay', 'Pinellas Park Downtown'],
    faqs: [
      { q: 'Can you coat an oil-soaked shop floor?', a: 'Yes. We degrease and grind deep. Heavily soaked areas may need extra treatment.' },
      { q: 'Do you add safety lines?', a: 'Yes — line striping and marked zones for walkways and work areas.' },
      { q: 'Will it handle forklifts?', a: 'Yes, with a thicker industrial system built for wheel loads.' },
      { q: 'Can you work in phases?', a: 'Yes. We section the floor so you keep working.' },
      { q: 'Do you coat home garages too?', a: 'Yes, across all Pinellas Park neighborhoods.' },
    ],
    cta: 'Get a Pinellas Park shop or garage floor that handles real work.',
  }),

  'largo': build('Largo', {
    intro: [
      'Largo, ZIP 33770, 33771 and 33774, spans family neighborhoods, mobile-home communities, medical offices and light industry.',
      'We coat garages, utility rooms and commercial spaces with floors built for Florida heat and humidity.',
    ],
    optionsIntro: 'Largo has a little of everything. Here\'s how we match the floor.',
    optionFit: {
      flake: 'Garages across Largo\'s established neighborhoods.',
      metallic: 'Finished rooms, salons and showrooms.',
      solid: 'Utility rooms, carports and workshops.',
      commercial: 'Medical offices, clinics and light-industrial units along Ulmerton and Starkey.',
      polyaspartic: 'Carports and open garages in full sun.',
    },
    cost: 'Largo projects range from small carports to large clinics; size and use drive the price.',
    pricing: [
      'Price depends on square footage, slab repair, moisture readings and the system chosen.',
      'Clinics and offices may need seamless cove base for cleaning standards.',
    ],
    why: { title: 'Why Largo floors need humidity-ready prep', paras: [
      'Inland Pinellas slabs still deal with high groundwater and summer humidity. Moisture testing guides the primer.',
      'Medical and office spaces need floors that clean easily and look professional. Seamless systems have no grout to trap dirt.',
    ] },
    processNote: 'For clinics and offices we schedule around patients and staff.',
    compareNote: 'Humid slabs make paint peel; a moisture-tested system stays bonded.',
    neighborhoods: ['Downtown Largo', 'Ridgecrest', 'Bardmoor', 'Harbor Bluffs', 'Ulmerton corridor'],
    faqs: [
      { q: 'Is epoxy good for medical offices?', a: 'Yes. Seamless floors with cove base clean easily and look professional.' },
      { q: 'Can you coat a carport?', a: 'Yes, with a UV-stable polyaspartic topcoat.' },
      { q: 'Why does humidity matter?', a: 'Moisture moving through the slab can push coatings off. Testing tells us which primer to use.' },
      { q: 'Do you fix cracks?', a: 'Yes, before coating, so they don\'t show through.' },
      { q: 'Do you serve light-industrial units?', a: 'Yes, along Ulmerton, Starkey and nearby business parks.' },
    ],
    cta: 'Get a humidity-ready floor for your Largo home or business.',
  }),

  'feather-sound': build('Feather Sound', {
    intro: [
      'Feather Sound, ZIP 33762, is a planned community of upscale homes, golf-course condos and corporate offices near the Howard Frankland.',
      'We coat garages, office spaces and amenity areas with polished, professional finishes.',
    ],
    optionsIntro: 'Feather Sound owners want floors that look premium. Here\'s what fits.',
    optionFit: {
      flake: 'Clean, modern garages in Feather Sound\'s single-family homes.',
      metallic: 'Executive offices, lobbies and home studios.',
      solid: 'Condo storage and maintenance rooms.',
      commercial: 'Corporate offices, server rooms and amenity spaces in the business parks.',
      polyaspartic: 'Garages and parking areas that need fast return to use.',
    },
    cost: 'Residential garages vary by size and finish; offices by area and schedule.',
    pricing: [
      'Price depends on square footage, slab condition, the finish chosen and after-hours scheduling.',
      'HOA or property-manager requirements can also affect timing.',
    ],
    why: { title: 'Why Feather Sound spaces choose premium coatings', paras: [
      'Homes here often have HOA standards. A clean, seamless garage floor fits the neighborhood look.',
      'Corporate spaces need floors that stay professional and are installed without disrupting work.',
    ] },
    processNote: 'We coordinate with HOAs and property managers before work starts.',
    compareNote: 'For a premium look, a topcoated system beats paint and bare concrete.',
    neighborhoods: ['Feather Sound', 'Feather Sound Country Club', 'Bayside Bridge area', 'Carillon edge', 'Ulmerton Road corridor'],
    faqs: [
      { q: 'Do you work with HOAs?', a: 'Yes. We can provide product details and schedule around rules.' },
      { q: 'Can offices stay open?', a: 'We work after hours or in phases.' },
      { q: 'Is metallic too flashy for an office?', a: 'Not with muted tones — grays and charcoals look sleek and modern.' },
      { q: 'Do you coat condo garages?', a: 'Yes, with association approval.' },
      { q: 'How do I keep it looking new?', a: 'Sweep often and mop with a mild cleaner. Avoid harsh acids.' },
    ],
    cta: 'Get a premium floor for your Feather Sound home or office.',
  }),
};
