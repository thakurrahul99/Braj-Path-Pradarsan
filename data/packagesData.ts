export interface DayPlan {
    day: number;
    title: string;
    activities: string[];
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
}

export const packages: Package[] = [
    {
        slug: "vrindavan-parikrama",
        title: "Vrindavan Parikrama",
        tagline: "Walk in Krishna's footsteps through the city of 5,000 temples",
        description:
            "Experience the divine beauty of Vrindavan on this 2-day immersive spiritual tour. From the ancient ghats of Yamuna to the awe-inspiring Prem Mandir, every corner tells a story of eternal love between Radha and Krishna.",
        duration: "2 Days / 1 Night",
        price: 2500,
        groupSize: "2–20 People",
        locations: ["Vrindavan", "Raman Reti"],
        image: "/gallarypic/prem%20mandir.webp",
        gallery: [
            "/gallarypic/prem%20mandir.webp",
            "/vrindavan.jpg",
            "/gallarypic/Nidhivan.png",
        ],
        category: "Spiritual Tour",
        meetingPoint: "ISKCON Vrindavan Gate, NH-2, Vrindavan",
        highlights: [
            "Evening Sandhya Aarti at Keshi Ghat on the Yamuna",
            "Night darshan at the mysterious Nidhivan",
            "ISKCON Vrindavan's grandeur and philosophy",
            "Prem Mandir's stunning light show at night",
            "Banke Bihari Temple — the divine reclusive deity",
            "Seva Kunj and Radha Damodar Temple",
            "Parikrama of Vrindavan (sacred forest walk)",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Sacred Temples",
                activities: [
                    "Morning pick-up from Mathura / Vrindavan junction",
                    "Check-in at hotel and freshen up",
                    "Visit Banke Bihari Temple (darshan before the crowd)",
                    "Prem Mandir tour — marvel at the marble architecture",
                    "Lunch at a local satvik restaurant (optional)",
                    "ISKCON Vrindavan — attend evening program",
                    "Keshi Ghat: Yamuna Aarti at sunset",
                    "Return to hotel, optional Braj bhajan session",
                ],
            },
            {
                day: 2,
                title: "Nidhivan, Parikrama & Departure",
                activities: [
                    "Early morning visit to Seva Kunj and Radha Damodar",
                    "Nidhivan darshan (mystery of the sacred grove)",
                    "Vrindavan Parikrama — guided walk through the sacred forest",
                    "Visit Govind Dev Temple and Rangji Temple",
                    "Farewell prasadam (blessed food) meal",
                    "Drop-off at Mathura / Vrindavan junction",
                ],
            },
        ],
        inclusions: [
            "AC vehicle for all transfers",
            "Hotel stay for 1 night (twin sharing)",
            "Expert Brajwasi local guide",
            "Prem Mandir entry and light show",
            "Morning tea/coffee",
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
                a: "Yes, absolutely. The pace is gentle and we customise based on the group's comfort. A wheelchair can be arranged on request.",
            },
        ],
    },
    {
        slug: "mathura-janmabhoomi",
        title: "Mathura Janmabhoomi",
        tagline: "Walk the sacred birthplace of Lord Krishna",
        description:
            "Discover Mathura, the eternal city where Lord Krishna was born. This one-day immersive tour covers the Krishna Janmasthan, the majestic Dwarkadhish Temple, and the sacred banks of Yamuna at Vishram Ghat.",
        duration: "1 Day",
        price: 1200,
        groupSize: "2–30 People",
        locations: ["Mathura"],
        image: "/gallarypic/shri-krishna-janamsthan-1.jpg",
        gallery: [
            "/gallarypic/shri-krishna-janamsthan-1.jpg",
            "/gallarypic/barsanaradharani.jpg",
        ],
        category: "Day Tour",
        meetingPoint: "Mathura Junction Railway Station, Platform 1",
        highlights: [
            "Shri Krishna Janmabhoomi — the exact prison cell where Krishna was born",
            "Keshav Dev Temple complex",
            "Vishram Ghat — the most sacred ghat in Mathura",
            "Dwarkadhish Temple and its Rajasthani architecture",
            "Evening boat ride on River Yamuna",
            "Local mathura pedas (sweets) tasting",
        ],
        itinerary: [
            {
                day: 1,
                title: "Full Day Mathura Darshan",
                activities: [
                    "Pick-up from Mathura Junction at 7:00 AM",
                    "Krishna Janmabhoomi darshan and guided tour",
                    "Visit Keshav Dev Temple",
                    "Vishram Ghat — history and sacred dip (optional)",
                    "Dwarkadhish Temple darshan",
                    "Traditional Mathura lunch (own expense, guide recommends)",
                    "Potara Kund and Rangeshwar Mahadev",
                    "Evening Yamuna boat ride",
                    "Drop back at Mathura Junction by 6:30 PM",
                ],
            },
        ],
        inclusions: [
            "AC vehicle for all transfers",
            "Expert local guide",
            "Janmabhoomi entry coordination",
            "Evening boat ride (shared)",
            "Morning breakfast (included)",
        ],
        exclusions: [
            "Lunch and dinner",
            "Personal donations at temples",
            "Camera fees",
        ],
        faqs: [
            {
                q: "How far is Mathura from Vrindavan?",
                a: "About 12 km — approximately 25 minutes by road.",
            },
            {
                q: "Is the Janmabhoomi complex free to visit?",
                a: "Entry is free but there are some paid sections. Our guide handles everything.",
            },
        ],
    },
    {
        slug: "barsana-nandgaon",
        title: "Barsana & Nandgaon",
        tagline: "The playful lands of Radha Rani and Nand Baba",
        description:
            "Explore the enchanting hills of Barsana — home of Shri Radha Rani — and Nandgaon, where Lord Krishna grew up under the care of Nand Baba. Witness the most unique Lathmar Holi traditions and visit the mystical Prem Sarovar.",
        duration: "1 Day",
        price: 1500,
        groupSize: "2–20 People",
        locations: ["Barsana", "Nandgaon"],
        image: "/Barsana.jpg",
        gallery: ["/Barsana.jpg", "/gallarypic/barsanaradharani.jpg"],
        category: "Day Tour",
        meetingPoint: "Mathura Junction Railway Station or Vrindavan Bus Stand",
        highlights: [
            "Radha Rani Temple (Shriji Temple) on Barsana hilltop",
            "Prem Sarovar — the lake of divine love",
            "Nand Bhavan — where Krishna grew up",
            "Nandishwar Hill and ancient Shiva Temple",
            "Vivid folk culture and Braj traditions",
            "Scenic hill views of the Braj region",
        ],
        itinerary: [
            {
                day: 1,
                title: "Barsana & Nandgaon Exploration",
                activities: [
                    "Pick-up at 7:00 AM from Mathura / Vrindavan",
                    "Drive to Barsana (approx. 40 km)",
                    "Climb to Shriji Temple for Radha Rani darshan",
                    "Visit Prem Sarovar and Bhojan Thali",
                    "Drive to Nandgaon (10 km from Barsana)",
                    "Nand Bhavan darshan and guided history session",
                    "Nandishwar Hill parikrama",
                    "Lunch at local dhaba (own expense)",
                    "Return to Mathura / Vrindavan by 5:30 PM",
                ],
            },
        ],
        inclusions: [
            "AC vehicle for transfers",
            "Local Brajwasi guide",
            "Shriji Temple entry assistance",
            "Morning breakfast",
        ],
        exclusions: [
            "Lunch / dinner",
            "Donations at temples",
            "Personal expenses",
        ],
        faqs: [
            {
                q: "Is the Barsana temple climb difficult?",
                a: "There are 200+ steps to the Shriji Temple. It's manageable for most, and a doli (palanquin) can be arranged for elderly visitors.",
            },
            {
                q: "What is Lathmar Holi?",
                a: "It is a unique Holi festival where women of Barsana playfully beat men from Nandgaon with sticks. It happens a week before regular Holi.",
            },
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
    },
    {
        slug: "complete-braj-yatra",
        title: "Complete Braj Yatra",
        tagline: "The ultimate 3-day pilgrimage across all leela-bhoomi of Braj",
        description:
            "The most comprehensive spiritual journey through Braj — covering Mathura, Vrindavan, Govardhan, Barsana, Nandgaon, Gokul, and the hidden forests of the 12 Vans (sacred groves). This 3-day itinerary is designed for the true seeker who wants to experience every divine pastime ground of Sri Krishna.",
        duration: "3 Days / 2 Nights",
        price: 5500,
        groupSize: "2–15 People",
        locations: ["Mathura", "Vrindavan", "Govardhan", "Barsana", "Nandgaon", "Gokul"],
        image: "/Vrajamandala.jpg",
        gallery: [
            "/Vrajamandala.jpg",
            "/gallarypic/prem%20mandir.webp",
            "/gallarypic/shri-krishna-janamsthan-1.jpg",
        ],
        category: "Premium Tour",
        meetingPoint: "Mathura Junction Railway Station",
        highlights: [
            "Mathura Janmabhoomi, Vishram Ghat, Dwarkadhish",
            "Vrindavan full tour: Banke Bihari, ISKCON, Prem Mandir, Nidhivan",
            "Govardhan Parikrama + Kusum Sarovar + Radha Kund",
            "Barsana Shriji Temple + Prem Sarovar",
            "Nandgaon: Nand Bhavan darshan",
            "Gokul: Raman Reti — roll in the holy sands",
            "12 Vans — sacred forest exploration",
            "Yamuna Aarti at Keshi Ghat",
        ],
        itinerary: [
            {
                day: 1,
                title: "Mathura — The Birthplace",
                activities: [
                    "Arrival & check-in at hotel in Vrindavan",
                    "Drive to Mathura Janmabhoomi for afternoon darshan",
                    "Keshav Dev Temple complex",
                    "Vishram Ghat and evening boat ride",
                    "Dwarkadhish Temple evening aarti",
                    "Dinner and overnight in Vrindavan",
                ],
            },
            {
                day: 2,
                title: "Vrindavan & Govardhan",
                activities: [
                    "Early morning: Banke Bihari darshan (before rush)",
                    "Seva Kunj, Nidhivan, Radha Damodar Temple",
                    "ISKCON Vrindavan program",
                    "After lunch: Govardhan Parikrama (partial or full)",
                    "Radha Kund dip",
                    "Kusum Sarovar visit",
                    "Return for evening Prem Mandir light show",
                    "Overnight in Vrindavan",
                ],
            },
            {
                day: 3,
                title: "Barsana, Nandgaon & Gokul",
                activities: [
                    "Morning drive to Barsana (45 km)",
                    "Shriji Temple, Prem Sarovar",
                    "Drive to Nandgaon (10 km) — Nand Bhavan",
                    "Drive to Gokul (25 km) — Raman Reti sacred sands",
                    "Govind Ghat and Brahmaand Ghat",
                    "Return to Mathura Junction for departure",
                ],
            },
        ],
        inclusions: [
            "AC vehicle for all 3 days",
            "2 nights hotel stay (twin sharing, Vrindavan)",
            "Daily breakfast",
            "Expert senior Brajwasi guide for full tour",
            "All entry coordination and darshan passes",
            "Govardhan Parikrama vehicle support",
        ],
        exclusions: [
            "Lunch and dinner (local restaurants, guide recommends)",
            "Air/train fare to Mathura",
            "Personal shopping and donations",
            "Travel insurance",
        ],
        faqs: [
            {
                q: "What is the best time to do this yatra?",
                a: "October to March is ideal — pleasant weather, major festivals like Govardhan Puja and Sharad Purnima fall in this window.",
            },
            {
                q: "Can I customise the itinerary?",
                a: "Absolutely. We can add or remove stops, adjust pace, and accommodate specific darshan timings on request.",
            },
            {
                q: "Is this suitable for children?",
                a: "Yes. The tour is family-friendly. We adjust the pace and vehicle stops to keep children comfortable.",
            },
        ],
    },
    {
        slug: "mystery-of-nidhivan",
        title: "Mystery of Nidhivan",
        tagline: "Unravel the divine secrets of Krishna's midnight Raas Leela grove",
        description:
            "Nidhivan is one of the most mystical places on Earth — a grove where the trees are believed to be Gopis, and where Lord Krishna is said to perform Raas Leela every night. Join this special half-day tour to explore its sacred trees, the Rang Mahal, and hear its miraculous legends from our local Brajwasi guide.",
        duration: "Half Day",
        price: 800,
        groupSize: "2–25 People",
        locations: ["Vrindavan"],
        image: "/gallarypic/Nidhivan.png",
        gallery: ["/gallarypic/Nidhivan.png", "/vrindavan.jpg"],
        category: "Mystery Tour",
        meetingPoint: "Nidhivan Gate, Vrindavan",
        highlights: [
            "Deep guided tour of the sacred Nidhivan grove",
            "Rang Mahal — where Krishna rests with the Gopis",
            "The miraculous tulsi trees that bow inward",
            "Swami Haridas Samadhi",
            "Stories of miraculous sightings and devotee experiences",
            "Visit to Banke Bihari Temple (adjacent)",
        ],
        itinerary: [
            {
                day: 1,
                title: "Nidhivan Mystery Half-Day Tour",
                activities: [
                    "Assemble at Nidhivan Gate at 9:00 AM or 3:00 PM slot",
                    "Brief introduction to the mysteries of Nidhivan",
                    "Guided walk through the sacred grove",
                    "Rang Mahal darshan and storytelling",
                    "Swami Haridas Samadhi visit",
                    "Adjacent Banke Bihari darshan",
                    "Q&A and prasadam distribution",
                    "Tour concludes by noon or 6:00 PM",
                ],
            },
        ],
        inclusions: [
            "Local knowledgeable guide",
            "Nidhivan entry coordination",
            "Prasadam at end of tour",
        ],
        exclusions: [
            "Vehicle / transport (self-arrange or add-on)",
            "Banke Bihari temple donations",
            "Personal expenses",
        ],
        faqs: [
            {
                q: "Is Nidhivan open at night?",
                a: "No — Nidhivan is closed after sunset as the divine energy takes over. Our tour is conducted during daytime only.",
            },
            {
                q: "Who is Swami Haridas?",
                a: "Swami Haridas was a great saint and the guru of the legendary musician Tansen. He discovered Banke Bihari deity in Nidhivan.",
            },
        ],
    },
];

export function getPackageBySlug(slug: string): Package | undefined {
    return packages.find((p) => p.slug === slug);
}
