/* card_7.cjs
   ──────────
   收集 card_1 到 card_6 所有卡片的合併版本
   將各卡片的單字整合至此檔案 */

const CARDS = [
  // From card_1.cjs
  {
    word: "grainy",
    definition:
      "If an image, film, or photograph is grainy, it is not smooth or clear because the small particles that make it up are visible.",
    example: "The low-light photo looked grainy because I set the ISO too high.",
    synonyms: "rocky, gritty",
    notes: "Root: grain (wheat is a grain that is grown in Kansas)",
  },
  {
    word: "anecdotal",
    definition: "Based on personal accounts rather than on reliable research or statistics.",
    example: "Anecdotal evidence suggested that the new app was helping students focus better.",
    synonyms: "unreliable, informal",
    notes: "",
  },
  {
    word: "translucent",
    definition: "Almost transparent; allowing some light to pass through in a soft, diffused way.",
    example: "We installed translucent curtains that let in a gentle morning glow.",
    synonyms: "semi-transparent",
    notes: "Contrast: transparent (lets all light through) vs. opaque (lets no light through).",
  },
  {
    word: "opaque",
    definition: "Not able to be seen through; not letting light pass through.",
    example: "The bathroom window is made of opaque glass for privacy.",
    synonyms: "non-transparent, cloudy, impenetrable",
    notes: "",
  },
  {
    word: "stationary",
    definition: "Not moving; staying in one place or position.",
    example: "Keep the tripod stationary while you take the long-exposure shot.",
    synonyms: "immobile, static",
    notes: "⚠️ Do not confuse with **stationery** (writing materials).",
  },
  {
    word: "abstract",
    definition: "Existing as an idea, feeling, or quality rather than as a tangible object.",
    example: "Justice is an abstract concept that can be hard to define.",
    synonyms: "conceptual, theoretical",
    notes: "",
  },
  {
    word: "conventional",
    definition: "Based on or in accordance with what is generally done or believed; traditional.",
    example: "He chose a conventional black suit for the interview.",
    synonyms: "traditional, customary, regular",
    notes: "Root: convent (修道院).",
  },
  {
    word: "venture",
    definition:
      "1) A new activity or business that involves risk or uncertainty. 2) To go somewhere or do something risky or daring.",
    example: "Their latest venture involves setting up a solar-energy start-up in Africa.",
    synonyms: "undertaking, enterprise",
    notes: "Venture = goal-oriented; Adventure = no specific goal.",
  },
  {
    word: "inception",
    definition: "The beginning or start of something, especially an organization or activity.",
    example: "The charity has grown significantly since its inception in 2015.",
    synonyms: "start, outset, origin",
    notes: "",
  },
  {
    word: "immersive",
    definition: "Seeming to surround a person so that they feel completely involved.",
    example: "The VR headset delivers an incredibly immersive gaming experience.",
    synonyms: "engaging, enveloping",
    notes: "",
  },
  {
    word: "ambition",
    definition: "A strong desire to achieve something.",
    example: "Her ambition is to become a leading neuroscientist.",
    synonyms: "aspiration, dream, goal",
    notes: "",
  },
  {
    word: "surveillance",
    definition: "Close observation, especially of a suspected person or place.",
    example: "The warehouse has been under constant surveillance since the robbery.",
    synonyms: "monitoring, observation",
    notes: "Verb form: <b>surveil</b>; Warrants often allow agents to surveil electronic communications.",
  },
  {
    word: "ponder",
    definition: "To think about something carefully for a considerable time.",
    example: "He paused to ponder the implications of the new proposal.",
    synonyms: "contemplate, consider, deliberate",
    notes: "",
  },
  {
    word: "acne",
    definition: "A common skin condition that causes spots or pimples, especially on the face.",
    example: "Many teenagers struggle with acne during puberty.",
    synonyms: "pimples, spots",
    notes: "",
  },
  {
    word: "puberty",
    definition:
      "The physical stage of development during which a child's body matures into an adult body capable of reproduction.",
    example: "Her voice deepened when she reached puberty.",
    synonyms: "adolescence",
    notes: "",
  },
  {
    word: "emotionally vulnerable",
    definition: "Easily hurt or affected emotionally; sensitive to criticism or rejection.",
    example: "After the breakup he felt emotionally vulnerable and avoided social events.",
    synonyms: "sensitive, fragile",
    notes: "",
  },
  {
    word: "trivialise",
    definition: "To make something seem less important or serious than it really is.",
    example: "I don't want to trivialise the issue, but there are bigger problems to solve.",
    synonyms: "downplay, minimise",
    notes: "",
  },
  {
    word: "over the counter",
    definition: "Describes medicines that can be bought without a prescription.",
    example: "You can buy many pain relievers over the counter.",
    synonyms: "non-prescription",
    notes: "See also: prescription drugs. 相關維基百科連結已提供。",
  },
  {
    word: "obsessed",
    definition: "Unable to stop thinking about something; too interested in or worried about it.",
    example: "He is completely obsessed with vintage cars.",
    synonyms: "fixated, preoccupied",
    notes: "",
  },
  {
    word: "pursuit",
    definition:
      "1) The act of trying to achieve something over a long period. 2) The act of following to catch. 3) An activity done regularly for enjoyment.",
    example: "She moved abroad in pursuit of a career in international law.",
    synonyms: "quest, chase, hobby",
    notes: "",
  },
  {
    word: "testosterone",
    definition: "A male hormone that stimulates growth of male secondary sexual characteristics.",
    example: "Testosterone levels typically rise sharply during adolescence.",
    synonyms: "androgen, male hormone",
    notes: "",
  },
  {
    word: "pore",
    definition: "A very small opening in the skin through which sweat can pass.",
    example: "Sweat escapes through the pores and cools the body.",
    synonyms: "opening, hole",
    notes: "",
  },
  {
    word: "dermatologist",
    definition: "A doctor who specializes in treating skin disorders.",
    example: "The dermatologist prescribed a cream for my eczema.",
    synonyms: "skin doctor",
    notes: "",
  },
  {
    word: "bane",
    definition: "A cause of great distress, annoyance, or ruin.",
    example: "Mosquitoes are the bane of my summer evenings.",
    synonyms: "curse, scourge, torment",
    notes: 'Common phrase: "bane of my life".',
  },
  {
    word: "idiom",
    definition:
      "A phrase whose meaning is different from the meanings of the individual words; also, a characteristic style of expression.",
    example: '"Break the ice" is an English idiom meaning to make people feel more comfortable.',
    synonyms: "expression, phrase",
    notes: "",
  },
  {
    word: "testament",
    definition: "Proof or evidence of something; also, a person's will.",
    example: "The award is a testament to her years of dedication.",
    synonyms: "proof, evidence, will",
    notes: "",
  },
  {
    word: "ophthalmology",
    definition:
      "The branch of medicine concerned with the study and treatment of disorders and diseases of the eye.",
    example: "He is completing his residency in ophthalmology.",
    synonyms: "eye medicine",
    notes: "",
  },
  {
    word: "simultaneously",
    definition: "At the same time.",
    example: "The concert was broadcast simultaneously on radio and television.",
    synonyms: "concurrently, at once",
    notes: "",
  },
  {
    word: "revelation",
    definition: "The act of making something known that was secret; a surprising fact that is made known.",
    example: "The memoir was full of startling revelations about her past.",
    synonyms: "disclosure, unveiling",
    notes: "",
  },
  {
    word: "revel",
    definition: "To enjoy oneself in a lively and noisy way, especially with drinking and dancing.",
    example: "Fans reveled in their team's unexpected victory.",
    synonyms: "celebrate, carouse, rejoice",
    notes: "",
  },
  {
    word: "speculation",
    definition: "Ideas or guesses about something that is not known for certain.",
    example: "There has been widespread speculation about the company's next product launch.",
    synonyms: "conjecture, guesswork",
    notes: "",
  },
  {
    word: "sensational",
    definition: "Causing great public interest and excitement; extremely good or impressive.",
    example: "The tabloid is known for its sensational headlines.",
    synonyms: "dramatic, shocking, spectacular",
    notes: "",
  },
  {
    word: "massive",
    definition: "Exceptionally large, heavy, or extensive.",
    example: "A massive earthquake struck the region last night.",
    synonyms: "huge, enormous, colossal",
    notes: "",
  },
  {
    word: "cohost",
    definition: "To jointly present or host a program, event, or show.",
    example: "She cohosts a popular tech podcast every week.",
    synonyms: "joint host",
    notes: "",
  },
  {
    word: "recalibrate",
    definition:
      "To adjust or correct the settings of a device, instrument, or process; to reassess and make small changes.",
    example: "After replacing the sensor, engineers had to recalibrate the entire system.",
    synonyms: "readjust, fine-tune",
    notes: "",
  },
  {
    word: "cellist",
    definition: "A musician who plays the cello.",
    example: "The cellist performed a moving solo during the concert.",
    synonyms: "cello player",
    notes: "Instrument: cello 大提琴",
  },
  {
    word: "transcend",
    definition: "To rise above or go beyond the limits of something.",
    example: "Great art can transcend cultural boundaries.",
    synonyms: "surpass, exceed, rise above",
    notes: "",
  },
  {
    word: "erosion",
    definition: "The gradual wearing away of soil, rock, or land by natural forces such as wind or water.",
    example: "Coastal erosion has reduced the width of the beach over the past decade.",
    synonyms: "wearing away, abrasion",
    notes: "Refers especially to natural phenomena.",
  },

  // From card_2.cjs
  {
    word: "canteen",
    definition:
      "1) A cafeteria or small restaurant (often in a school, military base, or workplace). 2) A portable container for carrying drinking water.",
    example:
      "We grabbed lunch at the company canteen before heading back to our desks.",
    synonyms: "cafeteria, mess hall; (container) water bottle, flask",
    notes:
      "⚠️ 英式英文中可指『飯盒』；此處著重於『公共食堂』與『水壺』兩義。"
  },
  {
    word: "converge",
    definition:
      "To move toward the same point and eventually meet or come together.",
    example:
      "Rivers from the surrounding hills converge in the valley before flowing to the sea.",
    synonyms: "meet, intersect, unite",
    notes: ""
  },
  {
    word: "plates",
    definition:
      "In geology, the large, rigid pieces of Earth's lithosphere that move and interact at their boundaries.",
    example:
      "The movement of tectonic plates is responsible for earthquakes and mountain formation.",
    synonyms: "tectonic plates, slabs",
    notes: "單數作 *plate*；地質學常稱 *tectonic plates*。"
  },
  {
    word: "collide",
    definition:
      "To crash into or strike something or each other with force.",
    example:
      "Two cars collided at the intersection during the heavy rain.",
    synonyms: "crash, smash, hit",
    notes: ""
  },
  {
    word: "head on",
    definition:
      "With the front or face first; in a direct or frontal manner (often describing collisions or approaches).",
    example:
      "Instead of avoiding the issue, she decided to tackle the problem head on.",
    synonyms: "directly, frontally",
    notes: ""
  },
  {
    word: "convergent boundaries",
    definition:
      "Tectonic plate margins where two plates move toward each other, often causing subduction or continental collision.",
    example:
      "The Himalayas formed at a convergent boundary where the Indian and Eurasian plates collide.",
    synonyms: "collisional margins, destructive boundaries",
    notes:
      "三類板塊邊界之一（另有 *divergent*、*transform*）。"
  },
  {
    word: "profusion",
    definition:
      "An extremely large quantity or abundance of something.",
    example:
      "Spring brought a profusion of wildflowers to the meadow.",
    synonyms: "abundance, plethora, cornucopia",
    notes: ""
  },
  {
    word: "geologic",
    definition:
      "Relating to the science of geology or the structure of the Earth's crust.",
    example:
      "Geologic evidence shows that the region experienced volcanic activity millions of years ago.",
    synonyms: "geological (BrE variant)",
    notes: "形容詞；名詞為 *geology*。"
  },
  {
    word: "collision",
    definition:
      "The act of colliding; a violent impact or crash between two or more bodies.",
    example:
      "The collision of the two continental plates uplifted the mountain range.",
    synonyms: "impact, crash, smash",
    notes: ""
  },
  {
    word: "subduction",
    definition:
      "The process in plate tectonics where one tectonic plate moves under another and sinks into the mantle.",
    example:
      "Deep ocean trenches mark zones of active subduction.",
    synonyms: "underthrusting (technical)",
    notes: "通常發生於 *oceanic–continental* 或 *oceanic–oceanic* 交界。"
  },

  // From card_3.cjs
  {
    word: "stunning",
    definition: "Extremely impressive or attractive; causing astonishment or admiration",
    example: "The view from the mountain top was absolutely stunning.",
    synonyms: "breathtaking, spectacular, remarkable, dazzling",
    notes: "",
  },
  {
    word: "trim",
    definition: "To make neat or tidy by cutting away irregular or unwanted parts; to reduce in size",
    example: "She decided to trim her hair before the wedding.",
    synonyms: "cut, clip, prune, pare",
    notes: "",
  },
  {
    word: "asthenosphere",
    definition:
      "The upper layer of the earth's mantle, below the lithosphere, in which there is relatively low resistance to plastic flow",
    example: "The asthenosphere allows tectonic plates to move across the Earth's surface.",
    synonyms: "",
    notes: "地質學術語：軟流圈",
  },
  {
    word: "crumpled",
    definition: "Crushed or pressed into irregular folds or wrinkles",
    example: "He found a crumpled piece of paper in his pocket.",
    synonyms: "wrinkled, creased, rumpled, crushed",
    notes: "",
  },
  {
    word: "uplifted",
    definition: "Raised to a higher position or level; elevated physically or emotionally",
    example: "The mountain range was uplifted by tectonic forces millions of years ago.",
    synonyms: "elevated, raised, lifted, hoisted",
    notes: "Note: 原文為 'uplisted' 可能是拼寫錯誤",
  },
  {
    word: "trench",
    definition: "A long, narrow ditch or depression in the ground",
    example: "The Mariana Trench is the deepest part of the world's oceans.",
    synonyms: "ditch, channel, furrow, excavation",
    notes: "",
  },
  {
    word: "enormous",
    definition: "Very large in size, quantity, or extent; huge",
    example: "The enormous whale breached the surface of the ocean.",
    synonyms: "huge, immense, vast, gigantic",
    notes: "",
  },
  {
    word: "scraped off",
    definition: "Removed by rubbing or scraping against a surface",
    example: "The old paint was scraped off before applying a new coat.",
    synonyms: "removed, peeled off, stripped away",
    notes: "Note: 原文為 'scrapted off' 應為 'scraped off'",
  },
  {
    word: "slab",
    definition: "A thick, flat piece of stone, concrete, or other hard material",
    example: "The patio was made from large concrete slabs.",
    synonyms: "block, plate, sheet, chunk",
    notes: "",
  },
  {
    word: "adjacent",
    definition: "Next to or adjoining something else; neighboring",
    example: "The hotel is adjacent to the beach.",
    synonyms: "neighboring, adjoining, next to, bordering",
    notes: "Note: 原文為 'adjacenttangled' 可能是兩個詞誤連",
  },
  {
    word: "mantle",
    definition: "The layer of the Earth between the crust and the core; a cloak or covering",
    example: "The Earth's mantle makes up about 84% of the planet's volume.",
    synonyms: "covering, cloak, layer",
    notes: "",
  },
  {
    word: "erupt",
    definition: "To burst forth or break out suddenly and violently",
    example: "The volcano could erupt at any moment.",
    synonyms: "explode, burst, blow up, discharge",
    notes: "",
  },
  {
    word: "divergent",
    definition: "Tending to be different or develop in different directions; diverging",
    example: "The two scientists had divergent opinions on the theory.",
    synonyms: "differing, varying, contrasting, conflicting",
    notes: "",
  },
  {
    word: "crust",
    definition: "The outermost solid shell of a planet; a hard outer layer",
    example: "The Earth's crust is divided into several tectonic plates.",
    synonyms: "outer layer, shell, surface, coating",
    notes: "",
  },
  {
    word: "continental",
    definition: "Relating to or characteristic of a continent",
    example: "Continental drift explains how continents move over time.",
    synonyms: "mainland, terrestrial",
    notes: "",
  },
  {
    word: "reservoirs",
    definition: "Large natural or artificial lakes used as sources of water supply",
    example: "The city's water comes from several reservoirs in the mountains.",
    synonyms: "lakes, pools, tanks, basins",
    notes: "",
  },
  {
    word: "crustal",
    definition: "Relating to the crust of the Earth",
    example: "Crustal movements can cause earthquakes.",
    synonyms: "",
    notes: "Note: 原文為 'custal' 應為 'crustal'",
  },
  {
    word: "impermeable",
    definition: "Not allowing fluid to pass through; waterproof",
    example: "The impermeable rock layer prevented water from seeping through.",
    synonyms: "waterproof, watertight, impervious, sealed",
    notes: "",
  },
  {
    word: "decaying",
    definition: "Rotting or decomposing; declining in quality, power, or vigor",
    example: "The decaying leaves enriched the soil.",
    synonyms: "rotting, decomposing, deteriorating, declining",
    notes: "",
  },
  {
    word: "proven",
    definition: "Demonstrated to be true or existing by evidence or argument",
    example: "The theory has been proven through extensive research.",
    synonyms: "established, verified, confirmed, demonstrated",
    notes: "",
  },
  {
    word: "hasten",
    definition: "To cause something to happen sooner or more quickly; to hurry",
    example: "We must hasten our preparations for the storm.",
    synonyms: "accelerate, speed up, quicken, expedite",
    notes: "",
  },
  {
    word: "asthmatics",
    definition: "People who suffer from asthma, a respiratory condition",
    example: "Asthmatics should always carry their inhalers.",
    synonyms: "",
    notes: "醫學術語：氣喘患者",
  },
  {
    word: "funeral",
    definition: "A ceremony honoring a dead person, typically involving burial or cremation",
    example: "The funeral was attended by hundreds of mourners.",
    synonyms: "burial, memorial service, obsequies",
    notes: "",
  },
  {
    word: "rheumatoid arthritis",
    definition: "A chronic progressive disease causing inflammation in the joints",
    example: "Rheumatoid arthritis can cause severe joint pain and stiffness.",
    synonyms: "",
    notes: "醫學術語：類風濕性關節炎",
  },
  {
    word: "obesity",
    definition: "The condition of being very overweight or having excessive body fat",
    example: "Obesity increases the risk of various health problems.",
    synonyms: "overweight, corpulence, fatness",
    notes: "",
  },
  {
    word: "merely",
    definition: "Just; only; nothing more than",
    example: "It was merely a suggestion, not an order.",
    synonyms: "simply, just, only, purely",
    notes: "",
  },
  {
    word: "disguise",
    definition: "To give a different appearance to conceal one's identity; a costume or outfit worn to hide identity",
    example: "She wore a disguise to avoid being recognized.",
    synonyms: "mask, camouflage, conceal, hide",
    notes: "",
  },
  {
    word: "specter",
    definition: "A ghost or phantom; something widely feared as a possible unpleasant occurrence",
    example: "The specter of war loomed over the region.",
    synonyms: "ghost, phantom, apparition, spirit",
    notes: "Note: 原文為 'spector' 應為 'specter'",
  },
  {
    word: "starvation",
    definition: "Suffering or death caused by lack of food",
    example: "The drought led to widespread starvation in the region.",
    synonyms: "hunger, famine, malnutrition",
    notes: "",
  },
  {
    word: "stalks",
    definition: "The main stems of plants; to pursue or approach stealthily",
    example: "The corn stalks grew tall in the summer heat.",
    synonyms: "stems, shoots, trunks",
    notes: "",
  },
  {
    word: "muscular sac",
    definition: "A pouch-like organ made of muscle tissue",
    example: "The heart is essentially a muscular sac that pumps blood.",
    synonyms: "",
    notes: "解剖學術語：肌肉囊",
  },
  {
    word: "endured",
    definition: "Suffered patiently; remained in existence; lasted",
    example: "She endured years of hardship before achieving success.",
    synonyms: "withstood, tolerated, survived, persevered",
    notes: "",
  },
  {
    word: "laboratory",
    definition: "A room or building equipped for scientific experiments, research, or teaching",
    example: "The scientists conducted experiments in the laboratory.",
    synonyms: "lab, research facility, testing center",
    notes: "",
  },
  {
    word: "swell",
    definition: "To become larger or rounder in size, typically as a result of accumulation of fluid",
    example: "Her ankle began to swell after the injury.",
    synonyms: "expand, enlarge, inflate, bulge",
    notes: "",
  },
  {
    word: "irresistible",
    definition: "Too attractive and tempting to be resisted; overwhelming",
    example: "The chocolate cake looked irresistible.",
    synonyms: "compelling, overwhelming, tempting, alluring",
    notes: "",
  },
  {
    word: "urge",
    definition: "A strong desire or impulse; to encourage or persuade strongly",
    example: "He felt a sudden urge to travel the world.",
    synonyms: "impulse, desire, compulsion, drive",
    notes: "",
  },
  {
    word: "appetite",
    definition: "A natural desire to satisfy a bodily need, especially for food",
    example: "The long hike gave us a healthy appetite.",
    synonyms: "hunger, craving, desire, taste",
    notes: "",
  },
  {
    word: "encompasses",
    definition: "Includes comprehensively; surrounds and has or holds within",
    example: "The course encompasses all aspects of digital marketing.",
    synonyms: "includes, comprises, contains, covers",
    notes: "",
  },
  {
    word: "rehabilitation",
    definition: "The action of restoring someone to health or normal life through training and therapy",
    example: "After the accident, she underwent months of rehabilitation.",
    synonyms: "recovery, restoration, therapy, treatment",
    notes: "",
  },
  {
    word: "cardiac",
    definition: "Relating to the heart",
    example: "He was admitted to the cardiac unit of the hospital.",
    synonyms: "heart-related, cardiovascular",
    notes: "",
  },
  {
    word: "practitioners",
    definition: "People actively engaged in an art, discipline, or profession",
    example: "Medical practitioners must keep up with the latest research.",
    synonyms: "professionals, specialists, experts",
    notes: "",
  },
  {
    word: "manufacturers",
    definition: "Companies or people that make goods in factories",
    example: "Car manufacturers are investing heavily in electric vehicles.",
    synonyms: "producers, makers, fabricators",
    notes: "Note: 原文為 'manufaturers' 應為 'manufacturers'",
  },
  {
    word: "friction",
    definition: "The resistance that one surface or object encounters when moving over another",
    example: "Oil reduces friction between moving parts.",
    synonyms: "resistance, rubbing, abrasion",
    notes: "",
  },
  {
    word: "impair",
    definition: "To weaken or damage something, especially a faculty or function",
    example: "Alcohol can impair your ability to drive safely.",
    synonyms: "damage, harm, weaken, diminish",
    notes: "",
  },
  {
    word: "carbohydrate",
    definition: "Any of a large group of organic compounds including sugars, starch, and cellulose",
    example: "Athletes often load up on carbohydrates before a race.",
    synonyms: "carbs, starches, sugars",
    notes: "",
  },
  {
    word: "fluid intake",
    definition: "The amount of liquid consumed",
    example: "Doctors recommend increasing fluid intake when you have a fever.",
    synonyms: "liquid consumption, hydration",
    notes: "",
  },
  {
    word: "amphetamines",
    definition: "Synthetic stimulant drugs used to treat certain medical conditions",
    example: "Amphetamines are sometimes prescribed for ADHD.",
    synonyms: "stimulants, uppers",
    notes: "藥物名稱：安非他命",
  },
  {
    word: "anabolic",
    definition: "Relating to or promoting anabolism, the synthesis of complex molecules in living organisms",
    example: "Anabolic processes build up organs and tissues.",
    synonyms: "constructive, building",
    notes: "",
  },
  {
    word: "steroids",
    definition: "Organic compounds including many hormones, alkaloids, and vitamins",
    example: "Some athletes illegally use steroids to enhance performance.",
    synonyms: "",
    notes: "類固醇",
  },
  {
    word: "paddle",
    definition: "A short pole with a broad blade at one or both ends, used to propel a boat",
    example: "She used the paddle to steer the canoe down the river.",
    synonyms: "oar, blade",
    notes: "",
  },
  {
    word: "barrel",
    definition: "A cylindrical container bulging out in the middle; the tube of a gun",
    example: "The wine was aged in oak barrels.",
    synonyms: "cask, keg, drum, cylinder",
    notes: "",
  },
  {
    word: "converted back and forth",
    definition: "Changed repeatedly from one form or function to another and vice versa",
    example: "The energy is converted back and forth between kinetic and potential forms.",
    synonyms: "transformed alternately, switched repeatedly",
    notes: "",
  },
  {
    word: "conservation",
    definition: "The action of conserving something; preservation or restoration of the natural environment",
    example: "Wildlife conservation is crucial for protecting endangered species.",
    synonyms: "preservation, protection, maintenance",
    notes: "",
  },
  {
    word: "cornerstone",
    definition: "An important quality or feature on which a particular thing depends; a foundation",
    example: "Trust is the cornerstone of any successful relationship.",
    synonyms: "foundation, basis, keystone, fundamental",
    notes: "",
  },
  {
    word: "autos",
    definition: "Automobiles; cars",
    example: "The factory produces thousands of autos each year.",
    synonyms: "cars, vehicles, automobiles",
    notes: "",
  },
  {
    word: "offset",
    definition: "To counterbalance or compensate for something",
    example: "The gains in the stock market offset the losses in bonds.",
    synonyms: "counterbalance, compensate, neutralize",
    notes: "",
  },
  {
    word: "bequeathed",
    definition: "Left or gave (personal property) to someone in a will",
    example: "She bequeathed her entire art collection to the museum.",
    synonyms: "left, willed, handed down, inherited",
    notes: "",
  },
  {
    word: "consolidation",
    definition: "The action or process of combining things into a single more effective whole",
    example: "The consolidation of the two companies created a market leader.",
    synonyms: "merger, unification, combination, integration",
    notes: "",
  },
  {
    word: "equation",
    definition: "A mathematical statement that two expressions are equal; a situation or problem with several factors",
    example: "Solving this equation requires advanced algebra skills.",
    synonyms: "formula, expression, calculation",
    notes: "",
  },
  {
    word: "geometry",
    definition:
      "The branch of mathematics concerned with properties and relations of points, lines, surfaces, and solids",
    example: "Students learn basic geometry in middle school.",
    synonyms: "",
    notes: "幾何學",
  },
  {
    word: "rigid",
    definition: "Unable to bend or be forced out of shape; not flexible",
    example: "The rigid steel frame provided excellent support.",
    synonyms: "stiff, inflexible, firm, unyielding",
    notes: "",
  },
  {
    word: "elastic",
    definition: "Able to resume normal shape after being stretched or compressed; flexible",
    example: "The elastic band snapped back into place.",
    synonyms: "stretchy, flexible, pliable, springy",
    notes: "",
  },
  {
    word: "discourse",
    definition: "Written or spoken communication or debate; a formal discussion of a topic",
    example: "The professor engaged in academic discourse about climate change.",
    synonyms: "discussion, conversation, dialogue, debate",
    notes: "",
  },
  {
    word: "disciplinary",
    definition: "Relating to discipline or a particular field of study; concerning punishment",
    example: "The student faced disciplinary action for cheating.",
    synonyms: "punitive, corrective, regulatory",
    notes: "",
  },

  // From card_4.cjs
  {
    word: "spectacular",
    definition: "Beautiful in a dramatic and eye-catching way; impressively large or impressive",
    example: "The fireworks display was absolutely spectacular, lighting up the entire night sky.",
    synonyms: "magnificent, breathtaking, stunning, remarkable, dazzling",
    notes: "",
  },
  {
    word: "melting pot",
    definition:
      "A place where different peoples, styles, theories, or cultures are mixed together; a situation in which many different types of people blend together as a unified society",
    example: "New York City is often described as a melting pot of cultures from around the world.",
    synonyms: "cultural blend, fusion, mixture, amalgamation",
    notes: "常用於描述多元文化社會",
  },
  {
    word: "widespread",
    definition:
      "Found or distributed over a large area or number of people; prevalent over a large area or among many people",
    example: "The widespread use of smartphones has changed how people communicate.",
    synonyms: "extensive, prevalent, common, universal, pervasive",
    notes: "",
  },
  {
    word: "kindergartens",
    definition:
      "Schools or classes for young children, usually between the ages of four and six, to prepare them for primary school",
    example: "Many kindergartens now incorporate technology into their teaching methods.",
    synonyms: "nursery schools, pre-schools, early learning centers",
    notes: "複數形式；單數為 kindergarten",
  },
  {
    word: "commerce",
    definition: "The activity of buying and selling, especially on a large scale; trade",
    example: "E-commerce has revolutionized the way people conduct commerce globally.",
    synonyms: "trade, business, trading, buying and selling, mercantilism",
    notes: "",
  },
  {
    word: "among",
    definition:
      "Situated more or less centrally in relation to several things; being a member or members of a larger set",
    example: "She distributed the candy equally among all the children.",
    synonyms: "amidst, between, in the midst of, surrounded by",
    notes: "among 用於三個或以上;between 用於兩個",
  },
  {
    word: "contestant",
    definition: "A person who takes part in a contest or competition",
    example: "Each contestant had three minutes to present their business idea to the judges.",
    synonyms: "competitor, participant, contender, player, candidate",
    notes: "/kənˈtes.t̬ənt/",
  },

  // From card_6.cjs
  {
    word: "majestic",
    definition: "Having or showing impressive beauty or dignity; grand and impressive",
    example: "The majestic mountains towered above the valley, their peaks covered in snow.",
    synonyms: "grand, magnificent, splendid, noble, stately",
    notes: "adj. 雄偉的、莊嚴的",
  },
  {
    word: "herbs",
    definition: "Plants with leaves, seeds, or flowers used for flavoring food, medicine, or perfume",
    example: "She grows various herbs in her garden, including basil, thyme, and rosemary.",
    synonyms: "seasonings, spices, plants, botanicals",
    notes: "n. 草本植物、香草（複數形式；單數為 herb）",
  },
  {
    word: "nectar",
    definition: "A sweet liquid produced by flowers to attract pollinating insects and birds; any delicious drink",
    example: "Bees collect nectar from flowers to make honey.",
    synonyms: "flower juice, sweet liquid, ambrosia",
    notes: "n. 花蜜、甘露",
  },
  {
    word: "insect",
    definition: "A small arthropod animal that has six legs and generally one or two pairs of wings",
    example: "The garden was full of insects, including butterflies, bees, and beetles.",
    synonyms: "bug, arthropod, creepy-crawly",
    notes: "n. 昆蟲",
  },
  {
    word: "carnivorous",
    definition: "Feeding on meat; (of a plant) able to trap and digest insects and other small animals",
    example: "Lions are carnivorous animals that hunt zebras and antelopes.",
    synonyms: "meat-eating, flesh-eating, predatory",
    notes: "adj. 肉食性的、食肉的",
  },
  {
    word: "carrion",
    definition: "The decaying flesh of dead animals",
    example: "Vultures feed on carrion, playing an important role in the ecosystem.",
    synonyms: "dead flesh, carcass, remains",
    notes: "n. 腐肉、動物屍體",
  },
  {
    word: "terminology",
    definition:
      "The body of terms used with a particular technical application in a subject of study, profession, etc.",
    example: "Medical students must learn the complex terminology used in anatomy.",
    synonyms: "nomenclature, vocabulary, jargon, terms",
    notes: "n. 術語、專門用語",
  },
  {
    word: "prey",
    definition:
      "An animal that is hunted and killed by another for food; a person or thing that is harmed or affected by someone or something",
    example: "The owl silently swooped down on its prey in the darkness.",
    synonyms: "victim, quarry, target, game",
    notes: "n. 獵物、犧牲品；v. 捕食、掠奪 (prey on/upon)",
  },
];

module.exports = CARDS; // 匯出合併後的陣列