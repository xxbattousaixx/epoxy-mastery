export interface GuideSection { h: string; p: string[]; list?: string[] }
export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: 'Costs & Planning' | 'Systems & Finishes' | 'Florida Floors' | 'Care & Maintenance';
  readMins: number;
  updated: string;
  answer: string; // quick answer shown at top (featured-snippet target)
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const U = '2026-11-13';

export const GUIDES: Guide[] = [
  {
    slug: 'epoxy-floor-cost-factors', title: 'What Affects the Cost of an Epoxy Floor?', metaTitle: 'Epoxy Floor Cost: 7 Factors That Set the Price',
    description: 'What drives epoxy flooring cost: slab condition, prep, system type, size, cove base and top coat. Know what you\'re paying for.',
    category: 'Costs & Planning', readMins: 6, updated: U,
    answer: 'Epoxy floor cost depends mostly on slab condition and prep, the resin system you choose (solid, flake, quartz, metallic, 3D), the size and shape of the space, and add-ons like crack repair and cove base. Every quote should include a top coat.',
    sections: [
      { h: '1. Slab condition', p: ['Old, cracked, oil-soaked or previously painted concrete takes more grinding and repair. Prep is the biggest variable — and the step cheap jobs skip.'] },
      { h: '2. Surface preparation', p: ['Professional floors are diamond-ground to open the concrete so primer can bond. Acid etching or a quick sweep is why many floors peel within a year.'] },
      { h: '3. Moisture', p: ['A moisture test tells us if the slab needs a moisture-tolerant primer. That primer costs more but prevents blistering — common in Florida.'] },
      { h: '4. Resin system', p: ['Systems differ in material and labor:'], list: ['Solid color — simplest, very durable', 'Flake — hides dirt, most popular for garages', 'Quartz — highest grip and wear resistance', 'Glitter — added shimmer', 'Metallic — hand-worked, artistic', '3D — custom design, most labor'] },
      { h: '5. Size and layout', p: ['Larger floors spread setup over more area. Small rooms, closets, stairs and many corners add labor.'] },
      { h: '6. Cove base and edges', p: ['Cove base runs the coating up the wall a few inches. It adds cost but seals the joint where water and dirt collect.'] },
      { h: '7. Top coat', p: ['A quality top coat protects the floor from UV, chemicals and wear. We apply one on every job — be wary of quotes that leave it out.'] },
      { h: 'How to compare quotes', p: ['Ask each contractor how they prep, whether they test moisture, which primer they use, how thick the system is and what top coat is included. Same words, very different floors.'] },
    ],
    faqs: [
      { q: 'Why do epoxy quotes vary so much?', a: 'Mostly prep, thickness and top coat. Low quotes often skip grinding, moisture testing or the top coat.' },
      { q: 'Is a garage cheaper than an interior floor?', a: 'Not always. Interiors may need tile or glue removal first, which adds prep.' },
      { q: 'How do I get an exact price?', a: 'A free on-site visit lets us check the slab, test moisture and measure.' },
    ],
    related: ['diy-epoxy-kit-vs-professional', 'flake-vs-solid-color-epoxy', 'epoxy-vs-polyaspartic'],
  },
  {
    slug: 'epoxy-vs-polyaspartic', title: 'Epoxy vs Polyaspartic: Which Floor Coating Is Better?', metaTitle: 'Epoxy vs Polyaspartic Floor Coating: Honest Comparison',
    description: 'Epoxy vs polyaspartic: cure time, UV resistance, durability and best uses. Why the best floors often use both.',
    category: 'Systems & Finishes', readMins: 5, updated: U,
    answer: 'Epoxy builds thick, bonds strongly and is ideal as a base coat. Polyaspartic cures fast and resists UV yellowing, making it a great top coat. Many top-quality floors use an epoxy base with a UV-stable top coat.',
    sections: [
      { h: 'What epoxy does best', p: ['Epoxy penetrates and bonds to ground concrete, builds thickness and fills minor imperfections. It is the backbone of flake, quartz and metallic systems.'] },
      { h: 'What polyaspartic does best', p: ['Polyaspartic is a fast-curing polyurea. It resists UV, stays flexible and handles hot tires well — perfect for sunny Florida garages.'] },
      { h: 'Side by side', p: [], list: ['Bond strength: epoxy excels', 'Thickness per coat: epoxy builds more', 'UV resistance: polyaspartic wins', 'Cure speed: polyaspartic is faster', 'Working time: epoxy allows more time for metallic artistry'] },
      { h: 'The hybrid approach', p: ['We often use epoxy for primer and body coats, then a UV-stable top coat. You get strong adhesion and a finish that won\'t yellow in the sun.'] },
      { h: 'Watch out for "one-day" claims', p: ['Fast systems are great, but prep still takes time. A floor is only as good as the grinding and moisture testing underneath.'] },
    ],
    faqs: [
      { q: 'Does epoxy yellow in the sun?', a: 'Plain epoxy can. A UV-stable top coat prevents it.' },
      { q: 'Is polyaspartic more expensive?', a: 'The material usually costs more, but it can save labor time.' },
      { q: 'Which is better for a Florida garage?', a: 'An epoxy base with a UV-stable top coat handles heat, sun and hot tires well.' },
    ],
    related: ['epoxy-garage-floor-lifespan', 'how-long-does-epoxy-take-to-cure', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'epoxy-florida-humidity-moisture', title: 'Epoxy Flooring in Florida: Humidity, Moisture and Peeling', metaTitle: 'Epoxy Flooring in Florida: Beating Humidity & Moisture',
    description: 'Why epoxy peels in Florida and how moisture testing and the right primer prevent it. A guide for Florida homeowners.',
    category: 'Florida Floors', readMins: 6, updated: U,
    answer: 'Florida\'s high water table and humidity push moisture up through concrete. If it isn\'t tested and managed with a moisture-tolerant primer, epoxy can blister and peel. Testing before coating is the key.',
    sections: [
      { h: 'Why Florida slabs are different', p: ['Many Florida slabs sit close to groundwater, and older homes often lack a vapor barrier. Moisture rises through the concrete all year.'] },
      { h: 'Signs of a moisture problem', p: [], list: ['White powder (efflorescence) on bare concrete', 'Dark damp patches after rain', 'Bubbles or blisters in an old coating', 'Peeling that starts in the middle of the floor'] },
      { h: 'How we test', p: ['We take moisture readings on the slab before quoting a system. Results decide which primer we use.'] },
      { h: 'Primer choices', p: ['Primers vary: penetrating primers for dense concrete, moisture-tolerant primers for damp slabs, high-build primers for rough surfaces, and bonding primers for tricky substrates.'] },
      { h: 'Humidity during install', p: ['High humidity affects cure and can cause blush on the surface. We monitor conditions and adjust products and timing.'] },
      { h: 'Coastal homes', p: ['Near the Gulf, salt air adds another layer of attack. A chemical- and UV-resistant top coat protects the finish.'] },
    ],
    faqs: [
      { q: 'Can epoxy be installed in the Florida summer?', a: 'Yes, with the right products and timing for heat and humidity.' },
      { q: 'Is a moisture barrier primer always needed?', a: 'No. Testing tells us when it is needed.' },
      { q: 'Why did my DIY epoxy peel?', a: 'Usually poor prep or moisture coming through the slab.' },
    ],
    related: ['epoxy-over-cracked-concrete', 'diy-epoxy-kit-vs-professional', 'epoxy-flooring-hurricane-flood'],
  },
  {
    slug: 'is-epoxy-flooring-slippery', title: 'Is Epoxy Flooring Slippery? How to Make It Safe', metaTitle: 'Is Epoxy Flooring Slippery? Anti-Slip Options Explained',
    description: 'Epoxy can be slippery when wet — unless it has texture. Compare flake, quartz and anti-slip additives for safer floors.',
    category: 'Systems & Finishes', readMins: 4, updated: U,
    answer: 'Smooth, glossy epoxy can be slippery when wet. Adding flake, quartz or an anti-slip additive to the top coat gives grip while keeping the floor easy to clean.',
    sections: [
      { h: 'Why glossy floors slip', p: ['A perfectly smooth surface plus water, oil or sand reduces traction. Texture fixes it.'] },
      { h: 'Ways to add grip', p: [], list: ['Anti-slip grit mixed into the top coat', 'Flake broadcast for light texture', 'Quartz broadcast for maximum grip', 'Satin or matte finish to reduce shine'] },
      { h: 'Best choices by space', p: ['Garages: flake with grit. Pool areas and lanais: quartz. Kitchens and breweries: quartz or textured solid color. Living spaces: metallic with light grit.'] },
      { h: 'Balancing grip and cleaning', p: ['More texture means more grip but slightly more effort to clean. We help you choose the right balance.'] },
    ],
    faqs: [
      { q: 'Are metallic floors slippery?', a: 'They can be when wet; we can add a fine anti-slip additive.' },
      { q: 'Is epoxy safe for seniors?', a: 'Yes, with a textured top coat chosen for grip.' },
      { q: 'Does anti-slip change the look?', a: 'Slightly reduces gloss, but color and pattern stay the same.' },
    ],
    related: ['flake-vs-solid-color-epoxy', 'commercial-epoxy-flooring-guide', 'how-to-clean-epoxy-floors'],
  },
  {
    slug: 'flake-vs-solid-color-epoxy', title: 'Flake vs Solid Color vs Quartz Epoxy: Which Should You Choose?', metaTitle: 'Flake vs Solid vs Quartz Epoxy Floors: How to Choose',
    description: 'Compare flake, solid color, quartz, glitter, metallic and 3D epoxy systems. Find the right look and durability for your space.',
    category: 'Systems & Finishes', readMins: 6, updated: U,
    answer: 'Flake is the most popular garage choice because it hides dirt and adds texture. Solid color is clean and simple. Quartz is the toughest and grippiest. Metallic, glitter and 3D are decorative choices for interiors and showrooms.',
    sections: [
      { h: 'Flake', p: ['Colored vinyl chips broadcast into epoxy. Hides dust, tire marks and small imperfections. Great for garages and laundry rooms.'] },
      { h: 'Solid color', p: ['A uniform color, often gray or tan. Clean, bright and ideal for workshops, warehouses and line striping.'] },
      { h: 'Quartz', p: ['Colored quartz sand broadcast into resin. Extremely durable and slip-resistant — ideal for commercial kitchens, breweries and pool areas.'] },
      { h: 'Silica', p: ['Silica sand adds texture and build to a system for heavy-duty industrial use.'] },
      { h: 'Glitter', p: ['Fine glitter adds sparkle to clear or colored coats. Popular in salons, boutiques and kids\' spaces.'] },
      { h: 'Metallic', p: ['Metallic pigments are hand-worked to create flowing, marble-like movement. No two floors look the same.'] },
      { h: '3D', p: ['A printed image under clear epoxy creates depth. Custom, eye-catching and best for feature spaces.'] },
      { h: 'Quick picks', p: [], list: ['Busy garage: flake', 'Workshop or warehouse: solid color', 'Wet or commercial areas: quartz', 'Living spaces and showrooms: metallic', 'Statement rooms: 3D or glitter'] },
    ],
    faqs: [
      { q: 'Which epoxy finish lasts longest?', a: 'Quartz and full-flake systems are typically the most wear-resistant.' },
      { q: 'Can I combine systems?', a: 'Yes, for example flake in the garage bays and solid color at the workbench.' },
      { q: 'Do all systems get a top coat?', a: 'Yes. We apply a top coat on every job.' },
    ],
    related: ['metallic-epoxy-floor-guide', 'is-epoxy-flooring-slippery', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'epoxy-garage-floor-lifespan', title: 'How Long Does an Epoxy Garage Floor Last?', metaTitle: 'How Long Does Epoxy Garage Floor Last? (And Why Some Fail)',
    description: 'How long epoxy garage floors last, what shortens their life and how prep, thickness and top coat make the difference.',
    category: 'Costs & Planning', readMins: 5, updated: U,
    answer: 'A professionally installed epoxy garage floor can last many years. Lifespan depends on prep, system thickness, the top coat and how the floor is used. DIY kits typically wear out much sooner.',
    sections: [
      { h: 'What makes floors last', p: [], list: ['Diamond grinding for a real bond', 'Crack and spall repair before coating', 'Moisture testing and the right primer', 'Multiple coats with proper thickness', 'A durable, UV-stable top coat'] },
      { h: 'What shortens lifespan', p: ['Skipped prep, moisture under the slab, hot-tire pickup on thin coatings, dragging heavy equipment and harsh chemicals left sitting.'] },
      { h: 'Hot tire pickup', p: ['In Florida heat, hot tires can lift thin coatings. Proper prep and a strong top coat prevent it.'] },
      { h: 'Refreshing the floor', p: ['Over time, a worn top coat can be lightly abraded and recoated, restoring shine without redoing the whole system.'] },
    ],
    faqs: [
      { q: 'Why did my previous coating peel?', a: 'Most often poor prep, moisture or a thin, single-coat product.' },
      { q: 'Can you coat over an old failing coating?', a: 'We grind off the failing coating first, then rebuild the system.' },
      { q: 'How do I make my floor last longer?', a: 'Sweep grit, clean spills promptly and use mats under kickstands and jack stands.' },
    ],
    related: ['epoxy-vs-polyaspartic', 'how-to-clean-epoxy-floors', 'diy-epoxy-kit-vs-professional'],
  },
  {
    slug: 'epoxy-over-cracked-concrete', title: 'Can You Put Epoxy Over Cracked Concrete?', metaTitle: 'Epoxy Over Cracked Concrete: Crack Repair Done Right',
    description: 'How cracks, spalls and pitting are repaired before epoxy, and why skipping crack repair leads to failure.',
    category: 'Florida Floors', readMins: 5, updated: U,
    answer: 'Yes — once cracks are properly repaired. Cracks are cleaned, routed if needed, filled with a repair compound and ground flush before primer. Moving cracks may need flexible fillers.',
    sections: [
      { h: 'Types of cracks', p: [], list: ['Hairline shrinkage cracks', 'Settlement cracks from soil movement', 'Control joints cut on purpose', 'Spalls and pitting from wear or salt'] },
      { h: 'Our crack repair process', p: ['We clean out debris, chase wider cracks, fill with a rigid or flexible repair material, and grind smooth so the floor looks seamless.'] },
      { h: 'Control joints', p: ['Joints can be filled and coated over or honored, depending on the slab and your preference.'] },
      { h: 'Will cracks come back?', p: ['If the slab keeps moving, a hairline may reappear. Flexible fillers reduce that risk on active cracks.'] },
    ],
    faqs: [
      { q: 'Do you fix pitted concrete too?', a: 'Yes. Pitting and spalls are patched during prep.' },
      { q: 'Can epoxy level a very uneven floor?', a: 'It improves small dips; major unevenness needs a leveling compound first.' },
      { q: 'Is crack repair included?', a: 'We note needed repairs during the free on-site visit.' },
    ],
    related: ['epoxy-florida-humidity-moisture', 'epoxy-garage-floor-lifespan', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'commercial-epoxy-flooring-guide', title: 'Commercial Epoxy Flooring: Restaurants, Warehouses and Retail', metaTitle: 'Commercial Epoxy Flooring Guide for Florida Businesses',
    description: 'Commercial and industrial epoxy flooring for restaurants, breweries, warehouses and retail. Systems, cove base and downtime planning.',
    category: 'Systems & Finishes', readMins: 6, updated: U,
    answer: 'Commercial epoxy floors are thicker, chemical-resistant and seamless. Restaurants and breweries need quartz with cove base; warehouses need high-build solid color with striping; retail often chooses metallic or flake.',
    sections: [
      { h: 'Restaurants and breweries', p: ['Seamless quartz systems with integral cove base resist hot water, grease and sanitizers, and help with health inspections.'] },
      { h: 'Warehouses and industry', p: ['High-build solid color epoxy handles forklifts and pallet jacks. Add aisle striping and safety zones.'] },
      { h: 'Retail, salons and showrooms', p: ['Metallic, glitter or flake floors create a brand look that is easy to keep clean.'] },
      { h: 'Why cove base matters', p: ['Cove base curves the floor up the wall, removing the crack where water and bacteria hide.'] },
      { h: 'Planning downtime', p: ['We phase installs, work nights or weekends and choose fast-cure products where possible to keep your business running.'] },
    ],
    faqs: [
      { q: 'Can you work after business hours?', a: 'Yes, we schedule around your operations whenever possible.' },
      { q: 'Do you install line striping?', a: 'Yes, as part of warehouse and shop floors.' },
      { q: 'Is epoxy good for kitchens?', a: 'Yes, quartz epoxy with cove base is a popular commercial kitchen floor.' },
    ],
    related: ['is-epoxy-flooring-slippery', 'flake-vs-solid-color-epoxy', 'how-to-clean-epoxy-floors'],
  },
  {
    slug: 'how-to-clean-epoxy-floors', title: 'How to Clean and Maintain Epoxy Floors', metaTitle: 'How to Clean Epoxy Floors (Without Dulling Them)',
    description: 'Simple daily and deep-cleaning steps for epoxy floors, plus products to avoid so your floor stays glossy.',
    category: 'Care & Maintenance', readMins: 4, updated: U,
    answer: 'Sweep or dust-mop often, and mop with warm water and a pH-neutral cleaner. Avoid vinegar, citrus and soap-based cleaners that leave film or dull the finish.',
    sections: [
      { h: 'Daily and weekly', p: [], list: ['Sweep or dust-mop grit and sand', 'Wipe spills promptly', 'Use mats at entries'] },
      { h: 'Deep cleaning', p: ['Mop with warm water and a pH-neutral cleaner. A soft-bristle deck brush works for textured flake or quartz floors.'] },
      { h: 'What to avoid', p: [], list: ['Vinegar and citrus cleaners', 'Soap-based cleaners that leave film', 'Steel wool and harsh pads', 'Leaving chemicals to sit'] },
      { h: 'Garage tips', p: ['Rinse off road salt and sand, place pads under kickstands and jack stands, and clean oil drips quickly.'] },
    ],
    faqs: [
      { q: 'Can I pressure-wash epoxy?', a: 'Low pressure is fine on most systems; avoid aiming close to edges.' },
      { q: 'How do I restore shine?', a: 'Clean thoroughly first; a worn top coat can be professionally recoated.' },
      { q: 'Will tire marks come off?', a: 'Usually, with a pH-neutral cleaner and a soft brush.' },
    ],
    related: ['epoxy-garage-floor-lifespan', 'is-epoxy-flooring-slippery', 'flake-vs-solid-color-epoxy'],
  },
  {
    slug: 'metallic-epoxy-floor-guide', title: 'Metallic Epoxy Floors: Looks, Uses and What to Expect', metaTitle: 'Metallic Epoxy Floors: Complete Homeowner Guide',
    description: 'How metallic epoxy floors are made, where they work best, color options and what to expect during installation.',
    category: 'Systems & Finishes', readMins: 5, updated: U,
    answer: 'Metallic epoxy uses reflective pigments worked by hand to create flowing, marble-like patterns. It suits living spaces, showrooms and bars, and every floor is unique.',
    sections: [
      { h: 'How it\'s made', p: ['After grinding and priming, a base coat goes down. Metallic resin is poured and manipulated with rollers, sprayers and tools to create movement. A clear top coat seals it.'] },
      { h: 'Where it works best', p: ['Living rooms, kitchens, basements, home bars, salons, offices and showrooms.'] },
      { h: 'Colors and styles', p: ['Gold, copper, silver, pearl, charcoal, ocean blues and multi-color blends. Styles range from subtle marble to bold lava-flow.'] },
      { h: 'What to expect', p: ['Plan for several days including prep and cure. Each floor is one of a kind — samples show the palette, not an exact copy.'] },
      { h: 'Care', p: ['Gloss shows dust more than flake does. Regular dust-mopping keeps it looking its best.'] },
    ],
    faqs: [
      { q: 'Can metallic epoxy go over tile?', a: 'Tile is usually removed so we can bond directly to concrete.' },
      { q: 'Is metallic epoxy durable?', a: 'Yes, with a quality top coat it stands up to everyday home and retail use.' },
      { q: 'Can it go in a garage?', a: 'Yes, though flake hides wear better in heavy-use garages.' },
    ],
    related: ['flake-vs-solid-color-epoxy', 'is-epoxy-flooring-slippery', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'how-long-does-epoxy-take-to-cure', title: 'How Long Does Epoxy Flooring Take to Cure?', metaTitle: 'How Long Does Epoxy Floor Take to Cure? Walk, Park, Move In',
    description: 'Epoxy cure times explained: when you can walk on it, move furniture back and park your car — and what affects timing.',
    category: 'Costs & Planning', readMins: 4, updated: U,
    answer: 'Light foot traffic is usually OK after about 24 hours, furniture after a couple of days, and vehicles after several days. Full chemical cure takes longer. Temperature, humidity and the system all affect timing.',
    sections: [
      { h: 'Typical timeline', p: [], list: ['Day 1: prep, repair, primer', 'Day 2: base and broadcast or metallic coats', 'Day 3: top coat', 'About 24 hours after top coat: light foot traffic', 'Several days: vehicles and heavy items'] },
      { h: 'What speeds or slows cure', p: ['Warm temperatures speed cure; cold slows it. Very high humidity can affect the surface. Fast-cure top coats shorten wait times.'] },
      { h: 'Tips while curing', p: ['Keep pets and kids off, don\'t drag items, and avoid placing rubber mats or tires until fully cured.'] },
    ],
    faqs: [
      { q: 'Is there a strong smell?', a: 'Some products have odor during install; we ventilate and offer low-odor options.' },
      { q: 'Can I stay home during install?', a: 'Usually yes for garages; interior floors may need you to avoid those rooms.' },
      { q: 'Can it be done in one day?', a: 'Some fast systems can, but prep and moisture testing still come first.' },
    ],
    related: ['epoxy-vs-polyaspartic', 'epoxy-florida-humidity-moisture', 'epoxy-garage-floor-lifespan'],
  },
  {
    slug: 'diy-epoxy-kit-vs-professional', title: 'DIY Epoxy Kit vs Professional Installation', metaTitle: 'DIY Epoxy Garage Kit vs Professional: What You Really Get',
    description: 'Honest look at DIY epoxy kits vs professional epoxy floors: prep, thickness, durability and when DIY makes sense.',
    category: 'Costs & Planning', readMins: 5, updated: U,
    answer: 'DIY kits are thin, often water-based coatings applied after acid etching. Professional systems use diamond grinding, moisture testing, high-solids resin and a durable top coat — and last much longer.',
    sections: [
      { h: 'The prep gap', p: ['Kits rely on etching or degreasing. Pros diamond-grind the slab so the coating bonds mechanically. This single step explains most DIY failures.'] },
      { h: 'Material differences', p: ['Kits are usually thin and low in solids. Professional systems are multi-layer and much thicker.'] },
      { h: 'Moisture and Florida slabs', p: ['Kits don\'t include moisture testing or moisture-tolerant primers, so they often peel on Florida slabs.'] },
      { h: 'When DIY makes sense', p: ['A small, low-traffic area where appearance matters less and you accept a shorter life.'] },
      { h: 'Fixing a failed kit', p: ['We grind off the failed coating and install a full system with proper prep and top coat.'] },
    ],
    faqs: [
      { q: 'Can you coat over my DIY kit?', a: 'We remove it first so the new system bonds to bare concrete.' },
      { q: 'Why does DIY epoxy peel under tires?', a: 'Thin coatings and weak bonds can lift from hot tires.' },
      { q: 'Is professional install worth it?', a: 'For most garages and interiors, the longer life and finish quality are worth it.' },
    ],
    related: ['epoxy-garage-floor-lifespan', 'epoxy-florida-humidity-moisture', 'epoxy-floor-cost-factors'],
  },
  {
    slug: 'epoxy-flooring-hurricane-flood', title: 'Epoxy Floors for Hurricane and Flood-Prone Florida Homes', metaTitle: 'Epoxy Floors After Hurricanes & Floods in Florida',
    description: 'Why epoxy is popular for Florida ground floors in flood zones, how it handles water and what to do after a storm.',
    category: 'Florida Floors', readMins: 5, updated: U,
    answer: 'Epoxy is seamless and waterproof on top, so it doesn\'t trap water, mold or sand like carpet, wood or grout. It cleans up quickly after water intrusion, making it popular for Florida ground floors and garages.',
    sections: [
      { h: 'Why epoxy suits flood zones', p: ['No seams, no grout and no organic material for mold. After water recedes, floors can be rinsed and disinfected.'] },
      { h: 'Rebuilding after a storm', p: ['Many coastal owners replace damaged tile or carpet with epoxy on ground floors. The slab must be fully dried, cleaned of salt and moisture-tested first.'] },
      { h: 'Under-house garages', p: ['Elevated homes use ground level for parking and storage. Slip-resistant, salt-resistant systems are ideal.'] },
      { h: 'Realistic expectations', p: ['No floor stops a flood. Epoxy helps the floor survive and clean up faster; it doesn\'t replace flood protection.'] },
    ],
    faqs: [
      { q: 'How soon after a flood can you coat?', a: 'Once the slab dries and passes moisture testing.' },
      { q: 'Does saltwater damage epoxy?', a: 'A chemical-resistant top coat protects it; rinse salt residue after exposure.' },
      { q: 'Is epoxy better than tile for ground floors?', a: 'For flood-prone areas, many owners prefer it because there\'s no grout to trap water.' },
    ],
    related: ['epoxy-florida-humidity-moisture', 'how-to-clean-epoxy-floors', 'is-epoxy-flooring-slippery'],
  },
];

export const getGuide = (slug: string) => GUIDES.find(g => g.slug === slug);
