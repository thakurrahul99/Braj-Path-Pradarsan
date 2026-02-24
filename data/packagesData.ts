export interface DayPlan {
    day: number;
    title: string;
    activities: string[];
}

export interface PricingTier {
    persons: string;
    vehicle: string;
    pricePerPerson: number;
}

export interface Package {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    duration: string;
    price: number;
    groupSize: string;
    locations: string[];
    image: string;
    gallery: string[];
    highlights: string[];
    itinerary: DayPlan[];
    inclusions: string[];
    exclusions: string[];
    faqs: { q: string; a: string }[];
    meetingPoint: string;
    category: string;
    pricingTiers: PricingTier[];
}

export const packages: Package[] = [
  {
    slug: "mathura-vrindavan-1-day-tour",
    title: "Mathura Vrindavan 1 Day Tour",
    tagline:
      "The ultimate single-day pilgrimage through Krishna's birthplace and divine playground",
    description:
      "Experience the best of both sacred cities in one action-packed day. Begin at Mathura's Krishna Janmabhoomi — the very prison cell where Lord Krishna was born — then journey to Vrindavan to visit the magnificent Prem Mandir, the divine Banke Bihari Temple, ISKCON, and witness the enchanting Yamuna Aarti at Keshi Ghat as the sun sets over the Braj land.",
    duration: "1 Day",
    price: 999,
    groupSize: "2–20 People",
    locations: ["Mathura", "Vrindavan"],
    image: "/gallarypic/prem%20mandir.webp",
    gallery: [
      "/gallarypic/prem%20mandir.webp",
      "/gallarypic/shri-krishna-janamsthan-1.jpg",
      "/vrindavan.jpg",
    ],
    category: "Day Tour",
    meetingPoint: "Mathura Junction Railway Station, Platform 1",
    highlights: [
      "Krishna Janmabhoomi — the sacred prison cell where Krishna was born",
      "Vishram Ghat — the holiest ghat on the banks of Yamuna",
      "Dwarkadhish Temple and its stunning Rajasthani architecture",
      "Prem Mandir — awe-inspiring white marble temple in Vrindavan",
      "Banke Bihari Temple — darshan of the most beloved deity",
      "ISKCON Vrindavan — grandeur and spiritual philosophy",
      "Keshi Ghat Yamuna Aarti at sunset",
    ],
    itinerary: [
      {
        day: 1,
        title: "Mathura & Vrindavan Full Day Darshan",
        activities: [
          "Pick-up from Mathura Junction at 7:00 AM",
          "Krishna Janmabhoomi darshan and guided history tour",
          "Visit Keshav Dev Temple complex",
          "Vishram Ghat — sacred dip (optional) and boat ride",
          "Dwarkadhish Temple morning darshan",
          "Drive to Vrindavan (12 km, ~25 min)",
          "Banke Bihari Temple darshan",
          "Prem Mandir — marvel at the white marble architecture",
          "ISKCON Vrindavan — evening program",
          "Keshi Ghat: Yamuna Aarti at sunset",
          "Drop back at Mathura Junction by 7:30 PM",
        ],
      },
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "Expert Brajwasi local guide",
      "Janmabhoomi entry coordination",
      "Evening Yamuna boat ride (shared)",
      "Morning breakfast",
      "All temple entry and darshan coordination",
    ],
    exclusions: [
      "Lunch and dinner (at your own cost)",
      "Personal shopping or donations",
      "Camera fees inside temples",
      "Travel insurance",
    ],
    faqs: [
      {
        q: "What should I wear?",
        a: "Wear comfortable, modest clothing. Shorts are not allowed inside temples. Women must cover their heads with a dupatta.",
      },
      {
        q: "Is photography allowed?",
        a: "Photography is allowed in most places except inside certain temples like Banke Bihari. Our guide will advise.",
      },
      {
        q: "Can elderly people join?",
        a: "Yes, absolutely. The pace is comfortable with AC vehicle support throughout the day. A wheelchair can be arranged on request.",
      },
      {
        q: "How far is Mathura from Vrindavan?",
        a: "About 12 km — approximately 25 minutes by road. We cover both cities seamlessly in one day.",
      },
    ],
    pricingTiers: [
      {
        persons: "1 (Private)",
        vehicle: "Sedan / Swift Dzire",
        pricePerPerson: 3199,
      },
      { persons: "2,3", vehicle: "Sedan / Swift Dzire", pricePerPerson: 2199 },
      { persons: "4+", vehicle: "Innova Crysta", pricePerPerson: 1199 },
      { persons: "6+", vehicle: "Tempo Traveller", pricePerPerson: 999 },
    ],
  },

  {
    slug: "giriraj-braj-yatra",
    title: "Giriraj Braj Yatra — Govardhan Parikrama, Barsana & Nandgaon",
    tagline:
      "Walk the sacred hill Krishna lifted, ascend Radha Rani's throne, and visit the village of Nand Baba",
    description:
      "A deeply moving one-day pilgrimage that begins at the break of dawn with Govardhan Parikrama — the 21 km circumambulation of the sacred hill Lord Krishna lifted on his little finger to shelter the people of Braj. After completing the parikrama, ascend the Barsana hilltop to seek blessings at the legendary Shriji Temple of Radha Rani, then journey to Nandgaon to visit Nand Bhavan — the home where baby Krishna grew up under the loving care of his foster father Nand Baba.",
    duration: "1 Day",
    price: 2000,
    groupSize: "2–20 People",
    locations: ["Govardhan", "Barsana", "Nandgaon"],
    image: "/goverdhan-parikrama.jpg",
    gallery: [
      "/goverdhan-parikrama.jpg",
      "/Barsana.jpg",
      "/gallarypic/barsanaradharani.jpg",
    ],
    category: "Day Tour",
    meetingPoint:
      "Jatipura, Govardhan (Main Temple Gate) — or pick-up from Mathura / Vrindavan",
    highlights: [
      "Govardhan Parikrama — 21 km sacred circumambulation of Giriraj Ji",
      "Mukharwind — the 'face' of Giriraj, rolling in his sacred dust",
      "Kusum Sarovar — the magnificent step-well where Radha picked flowers",
      "Radha Kund & Shyam Kund — holiest kundas in all of Braj",
      "Mansi Ganga — the sacred lake on top of Govardhan hill",
      "Daan Ghati Temple — where Krishna playfully taxed the gopis",
      "Radha Rani Temple (Shriji Temple) on Barsana hilltop",
      "Prem Sarovar — the mystical lake of divine love at Barsana",
      "Nand Bhavan — where Lord Krishna spent his childhood in Nandgaon",
      "Nandishwar Hill parikrama and ancient Shiva Temple",
    ],
    itinerary: [
      {
        day: 1,
        title: "Govardhan Parikrama → Barsana → Nandgaon",
        activities: [
          "Early morning pick-up at 5:30 AM from Mathura / Vrindavan",
          "Reach Jatipura, Govardhan — auspicious start of Govardhan Parikrama",
          "Mukharwind darshan — touch the feet of Giriraj Ji, roll in sacred dust",
          "Govardhan Parikrama begins (vehicle support available for elders)",
          "Midway stop at Radha Kund — take a holy dip in the sacred kund",
          "Visit Kusum Sarovar — marvel at the ornate step-well and samadhi gardens",
          "Mansi Ganga darshan — sacred lake atop Govardhan",
          "Daan Ghati Temple darshan — where Krishna collected his 'tax' from gopis",
          "Complete parikrama — receive blessings of Giriraj Ji",
          "Light breakfast at Govardhan (own expense)",
          "Drive to Barsana (approx. 30 km)",
          "Climb to Shriji Temple — Radha Rani darshan on the sacred hilltop",
          "Visit Prem Sarovar — walk around the divine lake of love",
          "Bhojan Thali and Maan Garh viewpoint at Barsana",
          "Drive to Nandgaon (10 km from Barsana)",
          "Nand Bhavan darshan — where baby Krishna grew up",
          "Nandishwar Hill parikrama and ancient Shiva Temple visit",
          "Return to Mathura / Vrindavan by 6:30 PM",
        ],
      },
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "Expert local Brajwasi guide",
      "Govardhan Parikrama vehicle support",
      "Shriji Temple entry assistance",
      "Morning breakfast",
    ],
    exclusions: [
      "Lunch / dinner (at your own cost)",
      "Donations at temples",
      "Radha Kund dip towel and change of clothes (bring your own)",
      "Personal expenses",
    ],
    faqs: [
      {
        q: "Why does this tour start so early at 5:30 AM?",
        a: "Govardhan Parikrama is best completed in the cool morning hours before the sun gets strong. Starting early ensures a comfortable walk and still leaves plenty of time for Barsana and Nandgaon.",
      },
      {
        q: "Is the Govardhan Parikrama 21 km? Can I do it by vehicle?",
        a: "Yes, the full parikrama is approximately 21 km on foot. We provide a vehicle that follows the parikrama route so elderly or less mobile pilgrims can rest and rejoin at key stops.",
      },
      {
        q: "Is the Barsana temple climb difficult?",
        a: "There are 200+ steps to the Shriji Temple. It's manageable for most people, and a doli (palanquin) can be arranged for elderly visitors on request.",
      },
      {
        q: "What is Lathmar Holi at Barsana?",
        a: "It is a unique Holi festival where women of Barsana playfully beat men from Nandgaon with sticks, recreating Krishna's playful visits. It happens a week before regular Holi and attracts huge crowds from across India.",
      },
    ],
    pricingTiers: [
      {
        persons: "1 (Private)",
        vehicle: "Sedan / Swift Dzire",
        pricePerPerson: 3200,
      },
      { persons: "2-3", vehicle: "Sedan / Swift Dzire", pricePerPerson: 2000 },
      { persons: "4-6", vehicle: "Innova Crysta", pricePerPerson: 1400 },
      { persons: "6+", vehicle: "Tempo Traveller", pricePerPerson: 1000 },
    ],
  },
  {
    slug: "govardhan-parikrama",
    title: "Govardhan Parikrama",
    tagline: "Circumambulate the sacred hill that Krishna lifted",
    description:
      "Govardhan is the sacred hill that Lord Krishna lifted on his little finger to protect the people of Vrindavan from Indra's wrath. This tour takes you on the holy 21km circumambulation (parikrama), visiting Kusum Sarovar, Radha Kund, Mansi Ganga, and the ancient Mukharwind.",
    duration: "1 Day",
    price: 1800,
    groupSize: "2–30 People",
    locations: ["Govardhan", "Radha Kund"],
    image: "/goverdhan-parikrama.jpg",
    gallery: ["/goverdhan-parikrama.jpg", "/kusumsarovar.jpg"],
    category: "Parikrama Tour",
    meetingPoint: "Jatipura, Govardhan (Main Temple Gate)",
    highlights: [
      "Govardhan Parikrama (21 km sacred circumambulation)",
      "Kusum Sarovar — the exquisite step-well and samadhi",
      "Radha Kund and Shyam Kund (holiest kundas in Braj)",
      "Mansi Ganga — a sacred lake atop Govardhan",
      "Mukharwind — the 'face' of Giriraj Ji",
      "Danghati Temple at the start of the parikrama",
    ],
    itinerary: [
      {
        day: 1,
        title: "Govardhan Parikrama & Sacred Sites",
        activities: [
          "Early morning pick-up at 5:30 AM",
          "Reach Jatipura — start of Govardhan Parikrama",
          "Mukharwind darshan — rolling in the sacred dust",
          "Govardhan Parikrama begins (vehicle support available for elders)",
          "Midway stop at Radha Kund — dip in holy kund",
          "Visit Kusum Sarovar — photography, history",
          "Mansi Ganga and Govind Kund",
          "Daan Ghati Temple darshan",
          "Lunch at Govardhan dhaba (own expense)",
          "Return to Mathura / Vrindavan by 5:00 PM",
        ],
      },
    ],
    inclusions: [
      "AC vehicle for transfers",
      "Expert guide for full parikrama",
      "Vehicle support during parikrama for rest",
      "Morning prasadam (light breakfast)",
    ],
    exclusions: [
      "Full lunch / dinner",
      "Temple donations",
      "Kund dip towel and change of clothes (bring your own)",
    ],
    faqs: [
      {
        q: "Can I do the parikrama by vehicle?",
        a: "Yes, we provide a vehicle option for those who cannot walk. The vehicle follows the parikrama route.",
      },
      {
        q: "What should I bring?",
        a: "Comfortable walking shoes, a change of clothes for Radha Kund dip, water bottle, sunscreen, and a light snack.",
      },
    ],
    pricingTiers: [
      {
        persons: "1 (Private)",
        vehicle: "Sedan / Swift Dzire",
        pricePerPerson: 2800,
      },
      { persons: "2", vehicle: "Sedan / Swift Dzire", pricePerPerson: 1800 },
      { persons: "4+", vehicle: "Innova Crysta", pricePerPerson: 1200 },
      { persons: "6+", vehicle: "Tempo Traveller", pricePerPerson: 900 },
    ],
  },
  {
    slug: "barsana-nandgaon-kokilavan-kaman",
    title:
      "Braj Panchkosi Yatra — Barsana, Nandgaon, Kokilavan & Kaman Char Dham",
    tagline:
      "Uncover Braj's hidden gems — from Radha Rani's hilltop throne to the divine Kaman Char Dham",
    description:
      "This extraordinary day pilgrimage takes you through the lesser-known yet profoundly sacred sites of the outer Braj circle. Begin at Barsana's Shriji Temple, travel to Nandgaon for a glimpse of Krishna's childhood, walk the mystical Kokilavan forest, and culminate at Kaman (Kaamvan) — a small town of immense spiritual significance that houses its own Char Dham (four dhams): Charana Pahadi, Kameshwar Mahadev, Brahma Kund, and the ancient Kama Kund. Kaman is believed to be the place where Kamadeva (the god of love) was reborn after being reduced to ashes by Lord Shiva, and where the divine Raas Leela of Radha-Krishna is eternally alive.",
    duration: "1 Day",
    price: 2400,
    groupSize: "2–20 People",
    locations: ["Barsana", "Nandgaon", "Kokilavan", "Kaman"],
    image: "/Barsana.jpg",
    gallery: [
      "/Barsana.jpg",
      "/gallarypic/barsanaradharani.jpg",
      "/goverdhan-parikrama.jpg",
    ],
    category: "Day Tour",
    meetingPoint: "Mathura Junction Railway Station or Vrindavan Bus Stand",
    highlights: [
      "Radha Rani Temple (Shriji Temple) on Barsana hilltop — Radha's divine throne",
      "Prem Sarovar — the sacred lake where Radha and Krishna would meet",
      "Nand Bhavan, Nandgaon — where baby Krishna was raised by Nand Baba",
      "Nandishwar Hill and ancient Shiva Temple at Nandgaon",
      "Kokilavan — enchanted forest of the divine Kokila bird",
      "Kokileshwar Mahadev Temple (Shiva's sacred abode in Kokilavan)",
      "Kaman Char Dham — four sacred dhams in one ancient town",
      "Charana Pahadi — the hill bearing divine footprints of Radha-Krishna",
      "Kameshwar Mahadev Temple — where Kamadeva was reborn",
      "Brahma Kund & Kama Kund — sacred water bodies in Kaman",
    ],
    itinerary: [
      {
        day: 1,
        title: "Barsana → Nandgaon → Kokilavan → Kaman Char Dham",
        activities: [
          "Pick-up at 6:30 AM from Mathura / Vrindavan",
          "Drive to Barsana (approx. 40 km)",
          "Climb to Shriji Temple — Radha Rani darshan on the sacred hilltop",
          "Visit Prem Sarovar — walk around the divine lake of love",
          "Bhojan Thali and Maan Garh viewpoint at Barsana",
          "Drive to Nandgaon (10 km from Barsana)",
          "Nand Bhavan darshan — relive Krishna's childhood pastimes",
          "Nandishwar Hill parikrama and ancient Shiva Temple",
          "Drive to Kokilavan (approx. 20 km)",
          "Peaceful walk through the ancient Kokilavan forest",
          "Kokileshwar Mahadev Temple darshan",
          "Light lunch / prasadam at Kokilavan dhaba (own expense)",
          "Drive to Kaman / Kaamvan (approx. 15 km)",
          "Charana Pahadi — climb to see the divine footprints of Radha-Krishna",
          "Kameshwar Mahadev Temple — the sacred Shiva linga where Kamadeva regained life",
          "Brahma Kund — sacred tank created by Lord Brahma himself",
          "Kama Kund — the kund associated with Kamadeva's penance",
          "Kaman village walk — experience untouched Braj folk culture",
          "Return to Mathura / Vrindavan by 7:30 PM",
        ],
      },
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "Expert Brajwasi guide for all sites",
      "Shriji Temple entry assistance",
      "Kaman Char Dham guided tour",
      "Morning breakfast",
    ],
    exclusions: [
      "Lunch / dinner (at your own cost)",
      "Donations at temples",
      "Personal expenses",
    ],
    faqs: [
      {
        q: "What is Kaman / Kaamvan?",
        a: "Kaman (also spelled Kaamvan or Kaamwan) is an ancient town in the Braj region of Rajasthan, near Bharatpur. It is believed to be the forest where Kamadeva (the god of love) performed penance and was reborn after being reduced to ashes by Lord Shiva's third eye. The town has four sacred sites collectively called Kaman Char Dham: Charana Pahadi, Kameshwar Mahadev Temple, Brahma Kund, and Kama Kund.",
      },
      {
        q: "What are the Kaman Char Dham?",
        a: "The four sacred sites of Kaman are: (1) Charana Pahadi — a hill with the divine footprints of Radha and Krishna; (2) Kameshwar Mahadev Temple — a Shiva temple marking where Kamadeva was reborn; (3) Brahma Kund — a sacred tank created by Lord Brahma; and (4) Kama Kund — the water body associated with Kamadeva's penance. Visiting all four in a single circuit is called the Kaman Char Dham Yatra.",
      },
      {
        q: "Is the Barsana temple climb difficult?",
        a: "There are 200+ steps to the Shriji Temple. It's manageable for most, and a doli (palanquin) can be arranged for elderly visitors.",
      },
      {
        q: "Is Kaman far from Barsana?",
        a: "Kaman is approximately 25–30 km from Barsana by road, roughly 40 minutes. It falls just across the Rajasthan border from the Braj region of UP.",
      },
      {
        q: "What is Kokilavan?",
        a: "Kokilavan is a serene sacred forest in Braj where Lord Krishna is said to have disguised himself as a Kokila (cuckoo bird) and sung sweetly to enchant Radha Rani. It is home to the ancient Kokileshwar Mahadev Temple and is known for its meditative stillness.",
      },
    ],
    pricingTiers: [
      {
        persons: "1 (Private)",
        vehicle: "Sedan / Swift Dzire",
        pricePerPerson: 3600,
      },
      { persons: "2", vehicle: "Sedan / Swift Dzire", pricePerPerson: 2400 },
      { persons: "4+", vehicle: "Innova Crysta", pricePerPerson: 1600 },
      { persons: "6+", vehicle: "Tempo Traveller", pricePerPerson: 1100 },
    ],
  },
  {
    slug: "sampurna-braj-mandal-yatra",
    title: "Sampurna Braj Mandal Yatra — The Complete Braj Pilgrimage",
    tagline:
      "The ultimate 4-day journey through every sacred leela-bhoomi of the Braj Mandal",
    description:
      "The most comprehensive spiritual odyssey through the entire Braj Mandal — covering all 10 sacred destinations across 4 days. This extraordinary yatra begins at Kaman with its Braj Char Dham (including the Braj Kedarnath and Braj Badrinath), then moves through Govardhan Parikrama, Barsana, Nandgaon, Kokilavan, Mathura Janmabhoomi, Vrindavan's divine temples, the Chatikara Char Dham, and concludes at Mahawan and Gokul — where Lord Krishna's very first childhood leelas unfolded. Designed for the true seeker who wishes to experience every pastime ground of Lord Sri Krishna in one sacred circuit.",
    duration: "4 Days / 3 Nights",
    price: 9500,
    groupSize: "2–15 People",
    locations: [
      "Kaman",
      "Govardhan",
      "Barsana",
      "Nandgaon",
      "Kokilavan",
      "Mathura",
      "Vrindavan",
      "Chatikara",
      "Mahawan",
      "Gokul",
    ],
    image: "/Vrajamandala.jpg",
    gallery: [
      "/Vrajamandala.jpg",
      "/gallarypic/prem%20mandir.webp",
      "/gallarypic/shri-krishna-janamsthan-1.jpg",
    ],
    category: "Premium Tour",
    meetingPoint: "Mathura Junction Railway Station",
    highlights: [
      "Kaman Char Dham — Braj Kedarnath, Braj Badrinath, Brahma Kund & Kama Kund",
      "Charana Pahadi, Kaman — divine footprints of Radha-Krishna",
      "Govardhan Parikrama — full 21 km sacred circumambulation of Giriraj Ji",
      "Radha Kund & Shyam Kund — the holiest kundas in all of Braj",
      "Kusum Sarovar — the magnificent step-well at Govardhan",
      "Barsana Shriji Temple — Radha Rani darshan on the sacred hilltop",
      "Prem Sarovar and Maan Garh at Barsana",
      "Nand Bhavan, Nandgaon — where baby Krishna grew up",
      "Kokilavan — sacred forest walk and Kokileshwar Mahadev Temple",
      "Mathura Janmabhoomi — the sacred prison cell of Krishna's birth",
      "Vishram Ghat & Dwarkadhish Temple, Mathura",
      "Banke Bihari, Prem Mandir, ISKCON & Nidhivan, Vrindavan",
      "Keshi Ghat Yamuna Aarti at sunset",
      "Chatikara Char Dham — four dhams on the banks of the Braj forest",
      "Mahawan — site of Putana Vadh and earliest Krishna leelas",
      "Gokul: Brahmand Ghat & Raman Reti sacred sands",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kaman Char Dham & Govardhan Parikrama",
        activities: [
          "Early morning departure at 5:00 AM from Mathura",
          "Drive to Kaman / Kaamvan (approx. 60 km via Mathura–Bharatpur highway)",
          "Charana Pahadi — climb to see divine footprints of Radha and Krishna",
          "Kameshwar Mahadev Temple — Braj Kedarnath darshan",
          "Charkula Sthal — associated with Braj Badrinath tradition",
          "Brahma Kund — sacred tank created by Lord Brahma",
          "Kama Kund — penance site of Kamadeva",
          "Kaman village walk and Kokilavan (brief stop)",
          "Drive to Govardhan (approx. 35 km)",
          "Mukharwind darshan — touch the feet of Giriraj Ji",
          "Govardhan Parikrama begins (vehicle support for elders)",
          "Radha Kund & Shyam Kund — take a holy dip",
          "Kusum Sarovar and Mansi Ganga",
          "Daan Ghati Temple darshan",
          "Check-in at hotel in Vrindavan",
          "Dinner and overnight stay in Vrindavan",
        ],
      },
      {
        day: 2,
        title: "Barsana, Nandgaon & Kokilavan",
        activities: [
          "Early morning pick-up at 6:30 AM",
          "Drive to Barsana (approx. 40 km)",
          "Climb to Shriji Temple — Radha Rani darshan on the sacred hilltop",
          "Prem Sarovar — walk around the divine lake of love",
          "Bhojan Thali and Maan Garh viewpoint at Barsana",
          "Drive to Nandgaon (10 km from Barsana)",
          "Nand Bhavan darshan — where baby Krishna grew up",
          "Nandishwar Hill parikrama and ancient Shiva Temple",
          "Drive to Kokilavan (approx. 20 km)",
          "Peaceful walk through the sacred Kokilavan forest",
          "Kokileshwar Mahadev Temple darshan",
          "Return to hotel in Vrindavan",
          "Evening at leisure — Prem Mandir light show (optional)",
          "Dinner and overnight in Vrindavan",
        ],
      },
      {
        day: 3,
        title: "Mathura Janmabhoomi & Vrindavan Darshan",
        activities: [
          "Morning darshan at Banke Bihari Temple (before the rush)",
          "Seva Kunj, Nidhivan and Radha Damodar Temple, Vrindavan",
          "ISKCON Vrindavan — Vedic cultural experience",
          "Keshi Ghat — sacred Yamuna darshan",
          "Drive to Mathura (12 km)",
          "Krishna Janmabhoomi — the sacred prison cell of Krishna's birth",
          "Keshav Dev Temple complex",
          "Vishram Ghat — where Krishna rested after slaying Kansa",
          "Evening Yamuna boat ride",
          "Dwarkadhish Temple evening aarti",
          "Return to Vrindavan",
          "Chatikara Char Dham — evening visit to four dhams at Chatikara",
          "Dinner and overnight in Vrindavan",
        ],
      },
      {
        day: 4,
        title: "Mahawan & Gokul — Krishna's First Steps",
        activities: [
          "Morning pick-up at 7:00 AM",
          "Drive to Mahawan / Maha Van (approx. 20 km from Mathura)",
          "Dauji Temple — elder brother Balram's sacred abode",
          "Putana Sthal — where Krishna liberated the demoness Putana",
          "Chintaharan Mahadev Temple at Mahawan",
          "Drive to Gokul (5 km from Mahawan)",
          "Brahmand Ghat — the site of the universe-in-mouth leela",
          "Raman Reti — roll in the sacred golden sands where Krishna played",
          "Thakurji Temple and Nand Bhavan at Gokul",
          "Govind Ghat darshan",
          "Final prasadam meal and blessings",
          "Drop at Mathura Junction by 4:00 PM",
        ],
      },
    ],
    inclusions: [
      "AC vehicle for all 4 days",
      "3 nights hotel stay (twin sharing, Vrindavan)",
      "Daily breakfast",
      "Expert senior Brajwasi guide for full tour",
      "All temple entry and darshan coordination",
      "Govardhan Parikrama vehicle support",
      "Kaman Char Dham guided tour",
      "Chatikara Char Dham guided visit",
      "Evening Yamuna boat ride (Day 3)",
    ],
    exclusions: [
      "Lunch and dinner (local restaurants, guide recommends)",
      "Air/train fare to Mathura",
      "Personal shopping and donations",
      "Radha Kund dip towel and change of clothes (bring your own)",
      "Travel insurance",
    ],
    faqs: [
      {
        q: "What is the best time to do this yatra?",
        a: "October to March is ideal — pleasant weather, and major festivals like Govardhan Puja, Sharad Purnima, and Lathmar Holi fall in this window.",
      },
      {
        q: "What are the Kaman Char Dham?",
        a: "The four sacred sites at Kaman are: (1) Kameshwar Mahadev (Braj Kedarnath) — a Shiva temple where Kamadeva was reborn; (2) associated Braj Badrinath tradition site; (3) Brahma Kund — created by Lord Brahma; and (4) Kama Kund — the penance ground of Kamadeva. Visiting all four is called the Kaman Char Dham Yatra.",
      },
      {
        q: "What is the Chatikara Char Dham?",
        a: "Chatikara, near Vrindavan, is home to a cluster of four sacred dhams. These are considered the Braj equivalents of the four main pilgrimage sites and are visited as a circuit. Our guide provides full details at the site.",
      },
      {
        q: "Can I customise the 4-day itinerary?",
        a: "Absolutely. We can adjust the day-wise sequence, add or remove specific stops, and accommodate darshan timings for festivals on request.",
      },
      {
        q: "Is this tour suitable for elderly pilgrims?",
        a: "Yes. Vehicle support is available throughout including for Govardhan Parikrama. The pace is adjusted as per the group. A wheelchair can be arranged on request.",
      },
      {
        q: "Is this suitable for children?",
        a: "Yes. The tour is family-friendly. We adjust the pace and vehicle stops to keep all family members comfortable.",
      },
    ],
    pricingTiers: [
      {
        persons: "1 (Private)",
        vehicle: "Innova Crysta",
        pricePerPerson: 14000,
      },
      { persons: "2", vehicle: "Innova Crysta", pricePerPerson: 9500 },
      { persons: "4+", vehicle: "Innova Crysta", pricePerPerson: 7500 },
      { persons: "6+", vehicle: "Tempo Traveller", pricePerPerson: 5500 },
    ],
  },
  {
    slug: "vrindavan-mathura-mahawan-gokul",
    title: "Divya Braj Darshan — Vrindavan, Mathura, Mahawan & Gokul",
    tagline:
      "One sacred day through four divine cities — the complete heart of Braj",
    description:
      "This comprehensive one-day pilgrimage takes you through four of the most sacred cities in the Braj Mandal. Begin in Vrindavan with darshan at Banke Bihari, Prem Mandir and ISKCON, then cross to Mathura for the Krishna Janmabhoomi and Vishram Ghat. Continue to Mahawan — the site of Krishna's early childhood where Putana was slain — and finally reach Gokul, where Lord Krishna was secretly brought by Vasudeva on the night of his birth. Walk the sacred Raman Reti sands and experience the Brahmand Ghat where tiny Krishna revealed the entire universe inside his mouth to Mother Yashoda.",
    duration: "1 Day",
    price: 2200,
    groupSize: "2–20 People",
    locations: ["Vrindavan", "Mathura", "Mahawan", "Gokul"],
    image: "/gallarypic/prem%20mandir.webp",
    gallery: [
      "/gallarypic/prem%20mandir.webp",
      "/gallarypic/shri-krishna-janamsthan-1.jpg",
      "/vrindavan.jpg",
    ],
    category: "Day Tour",
    meetingPoint: "ISKCON Vrindavan Gate, NH-2, Vrindavan",
    highlights: [
      "Banke Bihari Temple — darshan of Vrindavan's most beloved deity",
      "Prem Mandir — stunning white marble temple with night light show",
      "ISKCON Vrindavan — grand temple and Vedic cultural experience",
      "Krishna Janmabhoomi, Mathura — the sacred prison cell of Krishna's birth",
      "Vishram Ghat — holiest ghat on the Yamuna where Krishna rested after slaying Kansa",
      "Dwarkadhish Temple — exquisite Rajasthani architecture in Mathura",
      "Mahawan — site of Putana Vadh and Krishna's earliest leelas",
      "Gokul Nandgaon — where Vasudeva brought newborn Krishna",
      "Brahmand Ghat — where baby Krishna revealed the universe in his mouth",
      "Raman Reti — the golden sands where Krishna and Balram played",
    ],
    itinerary: [
      {
        day: 1,
        title: "Vrindavan → Mathura → Mahawan → Gokul",
        activities: [
          "Pick-up at 6:30 AM from Mathura / Vrindavan",
          "Banke Bihari Temple darshan (early, before the crowd)",
          "Prem Mandir — tour the white marble wonder",
          "ISKCON Vrindavan — morning aarti and guided tour",
          "Keshi Ghat — brief stop at the sacred Yamuna ghat",
          "Drive to Mathura (12 km)",
          "Krishna Janmabhoomi darshan and guided history tour",
          "Vishram Ghat — where Krishna rested after slaying Kansa",
          "Dwarkadhish Temple darshan",
          "Quick stop for Mathura ke pede (local sweets)",
          "Drive to Mahawan (15 km from Mathura)",
          "Dauji Temple (Balram Temple) — elder brother of Krishna",
          "Putana Sthal — site where Krishna liberated the demoness Putana",
          "Chintaharan Mahadev Temple at Mahawan",
          "Drive to Gokul (5 km from Mahawan)",
          "Brahmand Ghat — walk the Yamuna banks, hear the legend of the universe in Krishna's mouth",
          "Raman Reti — roll in the sacred golden sands where Krishna and Balram played",
          "Thakurji Temple and Nand Bhavan at Gokul",
          "Return to Vrindavan / Mathura by 7:00 PM",
        ],
      },
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "Expert Brajwasi local guide",
      "All temple entry and darshan coordination",
      "Morning breakfast",
    ],
    exclusions: [
      "Lunch / dinner (at your own cost)",
      "Personal shopping or donations",
      "Camera fees inside temples",
      "Travel insurance",
    ],
    faqs: [
      {
        q: "What is Mahawan?",
        a: "Mahawan (also called Maha Van) is an ancient town near Mathura. It is the site of some of Lord Krishna's earliest childhood leelas — including the liberation of Putana (the demoness who tried to poison baby Krishna) and the visit of Akrura. It is one of the 12 sacred Van (forests) of Braj.",
      },
      {
        q: "What is the significance of Brahmand Ghat in Gokul?",
        a: "Brahmand Ghat is the spot on the banks of Yamuna in Gokul where baby Krishna swallowed mud playfully. When Mother Yashoda asked him to open his mouth, she saw the entire universe — the Brahmaand — inside. It is one of the most celebrated leelas of Krishna's childhood.",
      },
      {
        q: "What is Raman Reti?",
        a: "Raman Reti is a stretch of fine golden sand near Gokul where Lord Krishna and Balram are believed to have played as children. Rolling in the sacred sands (reti) of Raman Reti is considered highly auspicious for devotees.",
      },
      {
        q: "Can elderly people join this tour?",
        a: "Yes. All sites are accessible with vehicle support. The pace is relaxed and we adjust stops based on the group's comfort. A wheelchair can be arranged on request.",
      },
    ],
    pricingTiers: [
      {
        persons: "1 (Private)",
        vehicle: "Sedan / Swift Dzire",
        pricePerPerson: 3400,
      },
      { persons: "2", vehicle: "Sedan / Swift Dzire", pricePerPerson: 2200 },
      { persons: "4+", vehicle: "Innova Crysta", pricePerPerson: 1500 },
      { persons: "6+", vehicle: "Tempo Traveller", pricePerPerson: 1050 },
    ],
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
    return packages.find((p) => p.slug === slug);
}

