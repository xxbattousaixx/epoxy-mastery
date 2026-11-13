export interface LocationArea { name: string; text: string }
export interface LocationFaq { q: string; a: string }
export interface Location {
  slug: string;
  name: string;
  zips: string;
  intro: string;
  homes: string;
  challenge: { title: string; body: string };
  areas: LocationArea[];
  focus: string[]; // service keys, most requested first
  faqs: LocationFaq[];
  nearby: string[];
  guides: string[];
}

export const locationPath = (slug: string) => `/epoxy-flooring-${slug}-fl`;

export const LOCATIONS: Location[] = [
  {
    slug: 'st-petersburg', name: 'St. Petersburg', zips: '33701, 33704, 33705, 33710, 33713',
    intro: 'Epoxy floors across St. Pete — from Old Northeast and Snell Isle bungalows to Kenwood, Crescent Lake, the Grand Central District and the condos and lofts around downtown and the EDGE District.',
    homes: '1920s–1950s bungalows with detached garages, mid-century block homes, and downtown retail and brewery spaces.',
    challenge: { title: 'Old slabs, salt air and a high water table', body: 'Many St. Pete slabs are 70+ years old, uneven and never sealed. Close to Tampa Bay, moisture pushes up through concrete and can blister a coating that skips testing. We moisture-test every slab and use a moisture-tolerant primer when readings call for it.' },
    areas: [
      { name: 'Old Northeast & Snell Isle', text: 'Detached garages and carriage houses. Flake systems and cove base turn them into clean workshops and gyms.' },
      { name: 'Downtown, EDGE & Grand Central', text: 'Breweries, salons and boutiques want metallic or quartz floors that handle foot traffic and spills.' },
      { name: 'Kenwood, Crescent Lake & Disston Heights', text: 'Craftsman and block homes with cracked, patched slabs. Crack repair and grinding come first.' },
    ],
    focus: ['garage', 'metallic', 'commercial', 'quartz'],
    faqs: [
      { q: 'Can you coat a 1920s garage slab in St. Petersburg?', a: 'Usually, yes. We grind, repair cracks and spalls, test moisture, then pick the right primer before any color goes down.' },
      { q: 'Do you work in downtown St. Pete businesses?', a: 'Yes. We schedule restaurant, retail and brewery floors around your hours to limit downtime.' },
      { q: 'Will salt air hurt my epoxy floor?', a: 'Not with a UV-stable top coat, which we apply on every job. It resists salt, chemicals and yellowing.' },
    ],
    nearby: ['gulfport', 'pinellas-park', 'st-pete-beach', 'treasure-island', 'seminole'],
    guides: ['epoxy-floor-cost-factors', 'epoxy-vs-polyaspartic', 'epoxy-florida-humidity-moisture'],
  },
  {
    slug: 'clearwater', name: 'Clearwater', zips: '33755, 33756, 33759, 33761, 33764, 33767',
    intro: 'Epoxy flooring from downtown Clearwater and Cleveland Street to Countryside, Morningside, Island Estates and the condos along Gulf Boulevard on Clearwater Beach.',
    homes: 'Ranch homes with attached two-car garages, Countryside subdivisions, and beach condos with ground-level storage and lobbies.',
    challenge: { title: 'Beach sand, salt and heavy foot traffic', body: 'Near the beach, sand grinds down soft finishes and salt spray hits garage floors daily. A flake or quartz broadcast with a tough top coat gives grip and hides abrasion far better than paint.' },
    areas: [
      { name: 'Clearwater Beach & Island Estates', text: 'Condo lobbies, parking areas and storage rooms. Slip-resistant quartz is the top pick.' },
      { name: 'Countryside & Northeast Clearwater', text: 'Attached garages in 1980s–90s subdivisions. Full-flake floors with cove base are most requested.' },
      { name: 'Downtown & Cleveland Street', text: 'Offices, studios and restaurants needing seamless, easy-clean floors.' },
    ],
    focus: ['garage', 'quartz', 'commercial', 'metallic'],
    faqs: [
      { q: 'Do you coat condo common areas on Clearwater Beach?', a: 'Yes. We work with HOAs and managers on lobbies, stairwells, storage and parking areas.' },
      { q: 'Is an epoxy floor slippery when wet?', a: 'It doesn\'t have to be. We add quartz, flake or an anti-slip additive to the top coat for grip.' },
      { q: 'How long until I can park in my Clearwater garage?', a: 'Light foot traffic in about 24 hours; vehicles typically after several days, depending on the system.' },
    ],
    nearby: ['dunedin', 'largo', 'safety-harbor', 'belleair', 'indian-rocks-beach'],
    guides: ['is-epoxy-flooring-slippery', 'flake-vs-solid-color-epoxy', 'epoxy-garage-floor-lifespan'],
  },
  {
    slug: 'largo', name: 'Largo', zips: '33770, 33771, 33773, 33774, 33778',
    intro: 'Epoxy floors throughout Largo — around Largo Central Park, West and East Bay Drive, Ulmerton Road, Highland Avenue, Ridgecrest and the communities off Starkey Road.',
    homes: '1960s–70s block homes, villas, 55+ and manufactured-home communities, and light-industrial shops near Ulmerton.',
    challenge: { title: 'Garages turned into laundry rooms and workshops', body: 'Largo garages often double as laundry, storage and hobby space. Oil, detergent and dropped tools wreck bare concrete. A chemical-resistant system with cove base makes the space easy to hose and wipe clean.' },
    areas: [
      { name: 'Central Largo & Largo Mall area', text: 'Block homes with converted garages and patched slabs that need crack repair.' },
      { name: 'Ulmerton Road corridor', text: 'Auto shops, warehouses and light industry needing heavy-duty, chemical-resistant floors.' },
      { name: 'Ridgecrest, Anona & Oakhurst', text: 'Villas and 55+ communities wanting slip-resistant garage and lanai floors.' },
    ],
    focus: ['industrial', 'garage', 'solid', 'quartz'],
    faqs: [
      { q: 'Can you coat a garage that has my washer and dryer in it?', a: 'Yes. We move what we can, coat in sections if needed, and run cove base so water can\'t reach the walls.' },
      { q: 'Do you do auto shop floors in Largo?', a: 'Yes. We install thick, chemical-resistant systems rated for oil, brake fluid and rolling jacks.' },
      { q: 'Can epoxy go on a lanai or screened porch?', a: 'Yes, with a UV-stable top coat. We check drainage and slope before installing.' },
    ],
    nearby: ['seminole', 'pinellas-park', 'clearwater', 'belleair', 'indian-rocks-beach'],
    guides: ['epoxy-over-cracked-concrete', 'commercial-epoxy-flooring-guide', 'how-to-clean-epoxy-floors'],
  },
  {
    slug: 'pinellas-park', name: 'Pinellas Park', zips: '33781, 33782',
    intro: 'Epoxy and resin flooring for Pinellas Park homes and businesses along Park Boulevard, 49th Street, US-19 and the Gateway industrial area.',
    homes: 'Compact block homes with single-car garages, mobile-home parks, and the county\'s densest stretch of warehouses and fabrication shops.',
    challenge: { title: 'Industrial wear in the Gateway corridor', body: 'Forklifts, pallet jacks and chemical spills destroy plain concrete fast. We grind to an open profile and install thick solid-color or quartz systems with line striping and safety zones.' },
    areas: [
      { name: 'Gateway & Mid-County industrial', text: 'Warehouses and distribution floors with heavy-load, high-build epoxy.' },
      { name: 'Park Boulevard & 49th Street', text: 'Retail, salons and showrooms needing a bright, seamless finish.' },
      { name: 'Residential neighborhoods', text: 'Single-car garages upgraded with flake floors for storage and hobbies.' },
    ],
    focus: ['industrial', 'commercial', 'solid', 'garage'],
    faqs: [
      { q: 'Can you add safety lines to a warehouse floor?', a: 'Yes. We add aisle striping, walkways and hazard zones as part of the coating.' },
      { q: 'Can you work on weekends to avoid shutting down?', a: 'We plan phased or off-hours installs for commercial clients whenever possible.' },
      { q: 'What makes industrial epoxy different?', a: 'Thicker build, higher-solids resin and chemical-resistant top coats designed for loads and spills.' },
    ],
    nearby: ['st-petersburg', 'largo', 'seminole', 'gulfport', 'clearwater'],
    guides: ['commercial-epoxy-flooring-guide', 'epoxy-vs-polyaspartic', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'seminole', name: 'Seminole', zips: '33772, 33776, 33777',
    intro: 'Epoxy floors in Seminole — around Seminole City Center, Park Boulevard, Bay Pines, Lake Seminole and the neighborhoods off Seminole Boulevard and 113th Street.',
    homes: 'Family homes with attached garages, lakefront properties and 55+ communities.',
    challenge: { title: 'Lake humidity and older slab cracks', body: 'Homes around Lake Seminole see high humidity, and many 1970s slabs have settlement cracks. We repair cracks with flexible fillers and test moisture before primer goes down.' },
    areas: [
      { name: 'Lake Seminole area', text: 'Lakefront homes wanting metallic interiors and moisture-safe garage floors.' },
      { name: 'Seminole City Center & Park Blvd', text: 'Shops, offices and restaurants needing durable, attractive floors.' },
      { name: 'Bay Pines & 55+ communities', text: 'Slip-resistant garage, lanai and entry floors for safer footing.' },
    ],
    focus: ['garage', 'metallic', 'quartz', 'commercial'],
    faqs: [
      { q: 'Do you offer slip-resistant floors for seniors?', a: 'Yes. Quartz and flake systems with a textured top coat add grip without feeling rough.' },
      { q: 'Can metallic epoxy go inside a living room?', a: 'Yes. Metallic epoxy works over interior slabs once tile or carpet is removed and the slab is ground.' },
      { q: 'How do you handle cracks in my Seminole garage?', a: 'We route and fill cracks, then grind them flush so they don\'t telegraph through the coating.' },
    ],
    nearby: ['largo', 'pinellas-park', 'madeira-beach', 'treasure-island', 'st-petersburg'],
    guides: ['epoxy-over-cracked-concrete', 'metallic-epoxy-floor-guide', 'is-epoxy-flooring-slippery'],
  },
  {
    slug: 'dunedin', name: 'Dunedin', zips: '34698',
    intro: 'Epoxy flooring for Dunedin — downtown Main Street, the Dunedin Causeway, Fenway, Spanish Trails and homes near Honeymoon Island.',
    homes: 'Older cottages, waterfront homes and a lively downtown of breweries, cafés and shops.',
    challenge: { title: 'Brewery and restaurant floors', body: 'Dunedin\'s craft brewery scene means floors face hot water, sugars and constant washdowns. Seamless urethane-ready systems with integral cove base keep floors sanitary and drain-friendly.' },
    areas: [
      { name: 'Downtown Main Street', text: 'Breweries, taprooms and cafés needing washdown-ready, slip-resistant floors.' },
      { name: 'Causeway & waterfront', text: 'Coastal homes wanting salt-resistant garage floors.' },
      { name: 'Fenway & Spanish Trails', text: 'Established neighborhoods upgrading garages and workshops.' },
    ],
    focus: ['commercial', 'quartz', 'garage', 'metallic'],
    faqs: [
      { q: 'Do you install brewery floors?', a: 'Yes. We use systems built for hot water, sanitizers and drains, with cove base along walls.' },
      { q: 'Will the floor meet health-inspection needs?', a: 'Seamless, non-porous epoxy with cove base is easy to sanitize, which inspectors like.' },
      { q: 'Can you coat a small cottage garage?', a: 'Yes. Size doesn\'t matter; prep and moisture testing are the same on every job.' },
    ],
    nearby: ['clearwater', 'palm-harbor', 'safety-harbor', 'tarpon-springs', 'oldsmar'],
    guides: ['commercial-epoxy-flooring-guide', 'is-epoxy-flooring-slippery', 'how-to-clean-epoxy-floors'],
  },
  {
    slug: 'palm-harbor', name: 'Palm Harbor', zips: '34683, 34684, 34685',
    intro: 'Epoxy floors throughout Palm Harbor — Lansbrook, Innisbrook, Crystal Beach, Ozona, East Lake and the homes along Alt-19 and US-19.',
    homes: 'Larger homes with two- and three-car garages, golf communities and newer construction.',
    challenge: { title: 'Showroom garages for larger homes', body: 'Palm Harbor homeowners often want a garage that matches the house. Metallic and full-flake systems with polished finish and cove base create a true showroom look.' },
    areas: [
      { name: 'Lansbrook & East Lake', text: 'Three-car garages finished in full flake or metallic.' },
      { name: 'Innisbrook & golf communities', text: 'Golf-cart garages and storage rooms needing tough, cleanable floors.' },
      { name: 'Crystal Beach & Ozona', text: 'Coastal cottages wanting salt-resistant coatings.' },
    ],
    focus: ['metallic', 'garage', '3d', 'solid'],
    faqs: [
      { q: 'Can you match my garage floor to my home\'s colors?', a: 'Yes. Flake blends and metallic pigments come in many colors; we bring samples.' },
      { q: 'Do you do 3D epoxy floors?', a: 'Yes. 3D designs are custom and quoted after we see the space.' },
      { q: 'Is new construction concrete ready for epoxy?', a: 'New slabs need time to cure. We test moisture to confirm when it\'s safe to coat.' },
    ],
    nearby: ['dunedin', 'tarpon-springs', 'oldsmar', 'safety-harbor', 'clearwater'],
    guides: ['metallic-epoxy-floor-guide', 'flake-vs-solid-color-epoxy', 'epoxy-garage-floor-lifespan'],
  },
  {
    slug: 'tarpon-springs', name: 'Tarpon Springs', zips: '34688, 34689',
    intro: 'Epoxy and resin floors in Tarpon Springs — the Sponge Docks, downtown Tarpon Avenue, Lake Tarpon and homes along the Anclote River.',
    homes: 'Historic downtown buildings, riverfront homes and larger lots with workshops and boat storage.',
    challenge: { title: 'Boat storage and marine workshops', body: 'Fuel, resin and saltwater drip onto Tarpon Springs workshop floors. Chemical-resistant epoxy with a slip-resistant broadcast protects the slab and is easy to clean.' },
    areas: [
      { name: 'Sponge Docks & downtown', text: 'Shops, restaurants and galleries in older buildings with uneven floors.' },
      { name: 'Anclote River & waterfront', text: 'Boat garages and marine workshops with chemical-resistant floors.' },
      { name: 'Lake Tarpon', text: 'Lakeside homes upgrading garages and interiors.' },
    ],
    focus: ['industrial', 'garage', 'commercial', 'quartz'],
    faqs: [
      { q: 'Can epoxy handle boat fuel and resin spills?', a: 'Yes, with the right chemical-resistant top coat. Wipe spills promptly for best results.' },
      { q: 'Can you level an old, uneven downtown floor?', a: 'We grind and patch to improve flatness, then use a high-build base coat.' },
      { q: 'Do you coat pole barns or detached workshops?', a: 'Yes, as long as there is a concrete slab to bond to.' },
    ],
    nearby: ['palm-harbor', 'oldsmar', 'dunedin', 'safety-harbor', 'clearwater'],
    guides: ['commercial-epoxy-flooring-guide', 'epoxy-over-cracked-concrete', 'diy-epoxy-kit-vs-professional'],
  },
  {
    slug: 'safety-harbor', name: 'Safety Harbor', zips: '34695',
    intro: 'Epoxy flooring in Safety Harbor — Main Street, the Safety Harbor Spa area, Philippe Park, Harbor Woods and homes along McMullen-Booth Road.',
    homes: 'Charming older homes, Old Tampa Bay waterfront properties and newer subdivisions off McMullen-Booth.',
    challenge: { title: 'Bayfront moisture', body: 'Properties near Old Tampa Bay sit on damp soil. Without testing, moisture can push epoxy off the slab. We test first and use moisture-tolerant primers when needed.' },
    areas: [
      { name: 'Main Street', text: 'Boutiques, cafés and wellness studios wanting artistic metallic floors.' },
      { name: 'Philippe Park & bayfront', text: 'Waterfront homes needing moisture-safe garage coatings.' },
      { name: 'McMullen-Booth subdivisions', text: 'Two-car garages finished in flake with cove base.' },
    ],
    focus: ['garage', 'metallic', 'commercial', 'glitter'],
    faqs: [
      { q: 'What is moisture testing and why does it matter?', a: 'We measure moisture coming up through the slab. High readings mean a special primer to prevent peeling.' },
      { q: 'Do you offer glitter or sparkle floors?', a: 'Yes. Glitter can be added to clear or colored systems for a subtle shimmer.' },
      { q: 'Can you coat a studio floor without strong fumes?', a: 'We offer low-odor options and ventilate during install.' },
    ],
    nearby: ['oldsmar', 'clearwater', 'dunedin', 'palm-harbor', 'largo'],
    guides: ['epoxy-florida-humidity-moisture', 'metallic-epoxy-floor-guide', 'how-long-does-epoxy-take-to-cure'],
  },
  {
    slug: 'oldsmar', name: 'Oldsmar', zips: '34677',
    intro: 'Epoxy floors for Oldsmar — East Lake Woodlands, Bayside Meadows, Tampa Road, Forest Lakes and the industrial parks near State Road 580.',
    homes: 'Gated communities, newer homes and one of north Pinellas\' busiest light-industrial zones.',
    challenge: { title: 'Food, manufacturing and labs', body: 'Oldsmar\'s industrial parks host food production, labs and manufacturing. These need seamless, sanitary floors that resist chemicals and allow frequent cleaning.' },
    areas: [
      { name: 'SR-580 & Tampa Road industrial', text: 'Manufacturing, labs and warehouses with chemical-resistant systems.' },
      { name: 'East Lake Woodlands', text: 'Gated-community garages finished in flake or metallic.' },
      { name: 'Bayside Meadows & Forest Lakes', text: 'Family garages that double as gyms and storage.' },
    ],
    focus: ['industrial', 'commercial', 'garage', 'solid'],
    faqs: [
      { q: 'Do you install floors for food facilities?', a: 'Yes. Seamless, non-porous systems with cove base suit washdown areas.' },
      { q: 'Can I turn my garage into a home gym?', a: 'Yes. A flake or solid-color floor handles weights; add rubber mats where you drop heavy loads.' },
      { q: 'Do you need my HOA\'s approval?', a: 'Garage floors rarely need it, but we can provide product details if your HOA asks.' },
    ],
    nearby: ['safety-harbor', 'palm-harbor', 'tarpon-springs', 'clearwater', 'dunedin'],
    guides: ['commercial-epoxy-flooring-guide', 'epoxy-vs-polyaspartic', 'flake-vs-solid-color-epoxy'],
  },
  {
    slug: 'gulfport', name: 'Gulfport', zips: '33707, 33711',
    intro: 'Epoxy flooring in Gulfport — Beach Boulevard, the Waterfront District, Boca Ciega Bay and the cottages off Shore Boulevard.',
    homes: 'Artsy cottages, small bungalows, galleries and waterfront homes.',
    challenge: { title: 'Artistic floors in small spaces', body: 'Gulfport loves color. Metallic, glitter and 3D epoxy turn small studios, galleries and cottages into one-of-a-kind spaces — on a well-prepped, moisture-tested slab.' },
    areas: [
      { name: 'Waterfront District & Beach Blvd', text: 'Galleries, bars and shops wanting eye-catching metallic floors.' },
      { name: 'Boca Ciega Bay', text: 'Waterfront homes in flood zones needing water-resistant floors.' },
      { name: 'Cottage neighborhoods', text: 'Small garages turned into studios and workshops.' },
    ],
    focus: ['metallic', '3d', 'glitter', 'garage'],
    faqs: [
      { q: 'Is epoxy good for flood-prone homes?', a: 'Epoxy is waterproof on top and cleans up well after water intrusion, though no floor stops a flood.' },
      { q: 'Can you create a custom design or logo?', a: 'Yes. Metallic swirls, color blends and 3D designs can be customized.' },
      { q: 'Do you coat gallery or bar floors?', a: 'Yes, with a durable top coat and slip-resistant options for bars.' },
    ],
    nearby: ['st-petersburg', 'st-pete-beach', 'treasure-island', 'pinellas-park', 'seminole'],
    guides: ['metallic-epoxy-floor-guide', 'epoxy-flooring-hurricane-flood', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'st-pete-beach', name: 'St. Pete Beach', zips: '33706',
    intro: 'Epoxy floors on St. Pete Beach — Pass-a-Grille, Corey Avenue, Gulf Boulevard resorts and the canal homes of Vina del Mar and Belle Vista.',
    homes: 'Elevated canal homes with ground-level garages, resorts, rentals and beach shops.',
    challenge: { title: 'Elevated homes and ground-level garages', body: 'Many beach homes are raised, leaving the ground level as garage and storage that sees sand, salt and occasional water. A slip-resistant, UV-stable system holds up and rinses clean.' },
    areas: [
      { name: 'Pass-a-Grille', text: 'Historic cottages and rentals wanting clean, coastal-style floors.' },
      { name: 'Gulf Boulevard resorts', text: 'Pool decks, lobbies and service areas needing slip resistance.' },
      { name: 'Vina del Mar & Belle Vista', text: 'Under-house garages coated for sand, salt and boat gear.' },
    ],
    focus: ['quartz', 'garage', 'commercial', 'solid'],
    faqs: [
      { q: 'Can you coat the ground floor under my elevated home?', a: 'Yes. We coat under-house garages and storage with slip-resistant, salt-resistant systems.' },
      { q: 'Do you work on resort and rental properties?', a: 'Yes. We schedule around bookings and guest traffic.' },
      { q: 'Will the sun yellow my floor?', a: 'Our UV-stable top coat, applied on every job, resists yellowing.' },
    ],
    nearby: ['treasure-island', 'gulfport', 'st-petersburg', 'madeira-beach', 'seminole'],
    guides: ['epoxy-flooring-hurricane-flood', 'is-epoxy-flooring-slippery', 'epoxy-vs-polyaspartic'],
  },
  {
    slug: 'treasure-island', name: 'Treasure Island', zips: '33706',
    intro: 'Epoxy and resin flooring on Treasure Island — Sunset Beach, Isle of Capri, Paradise Island and the condos along Gulf Boulevard.',
    homes: 'Canal-front homes, condos, motels and beach businesses.',
    challenge: { title: 'Rebuilding after storms', body: 'After recent storms, many Treasure Island owners are rebuilding ground floors. Epoxy over properly prepped concrete gives a waterproof surface that is quick to clean if water returns.' },
    areas: [
      { name: 'Sunset Beach', text: 'Beach homes with garages that see sand and salt every day.' },
      { name: 'Isle of Capri & Paradise Island', text: 'Canal homes rebuilding ground floors and garages.' },
      { name: 'Gulf Boulevard condos & motels', text: 'Common areas and service floors that need slip resistance.' },
    ],
    focus: ['garage', 'quartz', 'solid', 'commercial'],
    faqs: [
      { q: 'Can you coat a slab that flooded?', a: 'Often, yes, once it is dry. We moisture-test and clean out salt before priming.' },
      { q: 'Is epoxy better than tile for a ground floor?', a: 'Epoxy is seamless, so there are no grout lines to trap water, sand or mold.' },
      { q: 'Do you serve condo associations?', a: 'Yes. We coat common areas, stairwells and parking for associations.' },
    ],
    nearby: ['st-pete-beach', 'madeira-beach', 'gulfport', 'seminole', 'st-petersburg'],
    guides: ['epoxy-flooring-hurricane-flood', 'epoxy-florida-humidity-moisture', 'how-to-clean-epoxy-floors'],
  },
  {
    slug: 'madeira-beach', name: 'Madeira Beach', zips: '33708',
    intro: 'Epoxy floors in Madeira Beach — John\'s Pass Village, the Boardwalk, Crystal Island and homes along 150th Avenue and Gulf Boulevard.',
    homes: 'Waterfront homes with docks, condos and the shops and restaurants of John\'s Pass.',
    challenge: { title: 'Fish, salt and foot traffic at John\'s Pass', body: 'Restaurant and retail floors near John\'s Pass handle wet shoes, fish and constant traffic. A quartz broadcast system offers grip and cleans fast.' },
    areas: [
      { name: 'John\'s Pass Village', text: 'Restaurants, bait shops and retail needing slip-resistant floors.' },
      { name: 'Crystal Island', text: 'Canal homes with boat gear and garages coated for salt.' },
      { name: 'Gulf Boulevard condos', text: 'Lobbies and storage areas with durable, low-upkeep floors.' },
    ],
    focus: ['quartz', 'commercial', 'garage', 'solid'],
    faqs: [
      { q: 'Can you install a floor in a busy restaurant?', a: 'Yes. We plan installs overnight or on closed days where possible.' },
      { q: 'What is a quartz floor?', a: 'Colored quartz sand broadcast into epoxy, then sealed. It is very durable and slip-resistant.' },
      { q: 'Do you coat dock-side storage rooms?', a: 'Yes, if there is a concrete slab. We use salt-resistant top coats.' },
    ],
    nearby: ['treasure-island', 'seminole', 'indian-rocks-beach', 'st-pete-beach', 'largo'],
    guides: ['is-epoxy-flooring-slippery', 'commercial-epoxy-flooring-guide', 'epoxy-flooring-hurricane-flood'],
  },
  {
    slug: 'indian-rocks-beach', name: 'Indian Rocks Beach', zips: '33785',
    intro: 'Epoxy flooring in Indian Rocks Beach and Indian Shores — Gulf Boulevard, the Narrows, Walsingham Road and homes along the Intracoastal.',
    homes: 'Beach cottages, Intracoastal homes, vacation rentals and small beach businesses.',
    challenge: { title: 'Vacation rentals that need tough floors', body: 'Rental garages and ground floors take a beating from guests, sand and beach gear. Flake systems hide dirt, resist wear and are quick to clean between bookings.' },
    areas: [
      { name: 'Gulf Boulevard', text: 'Rentals and cottages wanting easy-care floors.' },
      { name: 'Intracoastal & the Narrows', text: 'Waterfront homes with garages and storage near the water.' },
      { name: 'Walsingham Road', text: 'Families upgrading garages into gyms and play areas.' },
    ],
    focus: ['garage', 'quartz', 'solid', 'metallic'],
    faqs: [
      { q: 'Are flake floors good for vacation rentals?', a: 'Yes. Flake hides sand and dirt between cleanings and stands up to heavy use.' },
      { q: 'How long will my rental be offline?', a: 'Most garages take a few days; we schedule between bookings.' },
      { q: 'Do you serve Indian Shores too?', a: 'Yes, along with Belleair Beach and Redington.' },
    ],
    nearby: ['madeira-beach', 'largo', 'belleair', 'seminole', 'clearwater'],
    guides: ['flake-vs-solid-color-epoxy', 'epoxy-garage-floor-lifespan', 'how-to-clean-epoxy-floors'],
  },
  {
    slug: 'belleair', name: 'Belleair', zips: '33756',
    intro: 'Epoxy floors in Belleair, Belleair Bluffs and Belleair Beach — around Indian Rocks Road, the Belleview Inn, Pelican Golf Club and West Bay Drive.',
    homes: 'Upscale estates, golf homes and waterfront properties with multi-car garages.',
    challenge: { title: 'High-end garages and wine rooms', body: 'Belleair homeowners want floors that match a luxury home. Metallic and 3D epoxy, crisp cove base and premium color choices deliver a polished, custom look.' },
    areas: [
      { name: 'Belleair & Pelican Golf Club', text: 'Estate garages and golf-cart rooms finished in metallic or flake.' },
      { name: 'Belleair Bluffs & West Bay Drive', text: 'Boutiques and offices wanting elegant, seamless floors.' },
      { name: 'Belleair Beach', text: 'Waterfront garages built to resist salt and moisture.' },
    ],
    focus: ['metallic', '3d', 'garage', 'glitter'],
    faqs: [
      { q: 'Can epoxy go in a wine room or home bar?', a: 'Yes. Metallic and solid systems are popular for bars, wine rooms and basements.' },
      { q: 'How do you protect my home during install?', a: 'We mask walls and doors, contain grinding dust and keep the work area clean.' },
      { q: 'Can I see color samples first?', a: 'Yes. We bring samples and help you choose before work begins.' },
    ],
    nearby: ['clearwater', 'largo', 'indian-rocks-beach', 'seminole', 'safety-harbor'],
    guides: ['metallic-epoxy-floor-guide', 'diy-epoxy-kit-vs-professional', 'epoxy-vs-polyaspartic'],
  },
];

export const getLocation = (slug: string) => LOCATIONS.find(l => l.slug === slug);
