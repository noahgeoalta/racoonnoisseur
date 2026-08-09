/* Racoonnoisseur — house menu data
   Transcribed directly from the restaurant's wine pairing sheet and
   staff menu-knowledge training binder. Keep this file as the
   single source of truth — app.js only reads from it.
   Dish/drink names and ingredients are kept exactly as printed on the
   real menu (accuracy matters more than anonymity here) — only the
   restaurant's own name has been scrubbed from the surrounding app text. */

const WINES = [
  {
    id: 'wine-sette-roche',
    name: "Sette Roche Vino Spumante Extra Dry",
    category: 'wine', subcategory: 'sparkling',
    varietal: 'Glera & Italian white blend',
    region: 'Veneto, Italy',
    blurb: 'Light, crisp, refreshing. Green apple, pear, citrus with soft bubbles and an off-dry finish.',
    pairings: 'Charcuterie, fried shared plates, popcorn, seafood, light cheeses.',
    tags: ['sparkling', 'crisp', 'citrus', 'apple-pear', 'light']
  },
  {
    id: 'wine-cantina-soliera',
    name: 'Cantina di Soliera Lambrusco Salamino',
    category: 'wine', subcategory: 'sparkling',
    varietal: 'Lambrusco, Salamino (Semi-Dry)',
    region: 'Emilia-Romagna, Italy',
    blurb: 'Light-bodied, light bubbles. Blackberry, cherry, raspberry with gentle sweetness & bright acidity.',
    pairings: 'Burgers, cured meats, barbecue, spicy dishes, charcuterie.',
    tags: ['sparkling', 'berry', 'sweet', 'bbq']
  },
  {
    id: 'wine-muralhas-rose',
    name: 'Muralhas de Monção "Muralhas Rosé"',
    category: 'wine', subcategory: 'rose',
    varietal: 'Alvarelhão & Pedral',
    region: 'Vinho Verde, Portugal',
    blurb: 'Fresh, vibrant strawberry, raspberry, watermelon, citrus with crisp acidity. Very popular, "summer vibes."',
    pairings: 'Salads, seafood, goat cheese, patio sipping.',
    tags: ['rose', 'berry', 'citrus', 'light', 'crisp']
  },
  {
    id: 'wine-sandro-de-bruno',
    name: 'Sandro De Bruno Pinot Grigio "Grigio Ramato"',
    category: 'wine', subcategory: 'white',
    varietal: 'Pinot Grigio (skin-contact / orange wine)',
    region: 'Veneto, Italy',
    blurb: 'Peach, apricot, orange peel, wild herbs — more texture than a traditional Pinot Grigio because the skin stays on the grape longer (gives it the pink/"ramato" color).',
    pairings: 'Burrata, roasted vegetables, grilled chicken, pork, salmon, linguini.',
    tags: ['stone-fruit', 'orange-wine', 'herbal', 'textured']
  },
  {
    id: 'wine-cantina-levorato',
    name: 'Cantina Levorato Pinot Grigio',
    category: 'wine', subcategory: 'white',
    varietal: 'Pinot Grigio',
    region: 'Veneto, Italy',
    blurb: 'Clean, crisp and dry. Lemon, green apple, pear with refreshing minerality.',
    pairings: 'Chicken, soft cheeses, white fish, salads, light pasta.',
    tags: ['crisp', 'citrus', 'apple-pear', 'light']
  },
  {
    id: 'wine-nuestro-verdejo',
    name: 'Nuestro Verdejo',
    category: 'wine', subcategory: 'white',
    varietal: 'Verdejo',
    region: 'Rueda, Spain',
    blurb: 'Bright, aromatic. Lime, grapefruit, green melon, herbs with refreshing acidity.',
    pairings: 'Seafood, tacos, grilled vegetables, chicken.',
    tags: ['citrus', 'herbal', 'crisp', 'tropical']
  },
  {
    id: 'wine-jackson-estate',
    name: 'Jackson Estate "Stitch" Sauvignon Blanc',
    category: 'wine', subcategory: 'white',
    varietal: 'Sauvignon Blanc',
    region: 'Marlborough, New Zealand',
    blurb: 'Passionfruit, grapefruit, lime, gooseberry and fresh-cut herbs with lively acidity. Crisp and accessible — think Oyster Bay/Kim Crawford style.',
    pairings: 'Seafood, shellfish, goat cheese, salads, asparagus, fish tacos, herb-forward dishes.',
    tags: ['tropical', 'citrus', 'herbal', 'crisp', 'seafood']
  },
  {
    id: 'wine-lafazanis-geometria',
    name: 'Lafazanis "Geometria" Sauvignon Blanc',
    category: 'wine', subcategory: 'white',
    varietal: 'Sauvignon Blanc',
    region: 'Peloponnese, Greece',
    blurb: 'Floral and aromatic. Rose petals, citrus blossom, peach, lemon zest with a crisp, delicate finish. Unique/attitude pick — a good change-of-pace pour.',
    pairings: 'Grilled vegetables, hummus, feta, seafood, salads, chicken.',
    tags: ['floral', 'stone-fruit', 'citrus', 'crisp']
  },
  {
    id: 'wine-featherstone-riesling',
    name: 'Featherstone Estate "Black Sheep" Riesling',
    category: 'wine', subcategory: 'white',
    varietal: 'Riesling',
    region: 'Niagara Peninsula, Ontario',
    blurb: 'Dry with bright acidity. Lime, green apple, peach and minerality. Refreshing and food-friendly.',
    pairings: 'Asian cuisine, pork, seafood, smoked salmon, fresh salads.',
    tags: ['citrus', 'stone-fruit', 'apple-pear', 'crisp']
  },
  {
    id: 'wine-novellum-chardonnay',
    name: 'Novellum Chardonnay',
    category: 'wine', subcategory: 'white',
    varietal: 'Chardonnay',
    region: 'Languedoc-Roussillon, France',
    blurb: 'Medium-bodied. Peach, pear, citrus and subtle vanilla with light oak influence and balanced acidity.',
    pairings: 'Roast chicken, creamy pasta, pork, smoked salmon, fresh salads.',
    tags: ['stone-fruit', 'oak', 'vanilla', 'medium-body']
  },
  {
    id: 'wine-saint-preignan',
    name: 'Saint Preignan Pinot Noir',
    category: 'wine', subcategory: 'red',
    varietal: 'Pinot Noir',
    region: "Pays d'Oc, Languedoc, France",
    blurb: 'Light-bodied with bright cherry, raspberry, cranberry, subtle earthy notes. Silky tannins and refreshing acidity.',
    pairings: 'Duck, salmon, roasted chicken, mushroom dishes, charcuterie board.',
    tags: ['berry', 'earthy', 'light', 'silky-tannins']
  },
  {
    id: 'wine-cusumano-merlot',
    name: 'Cusumano Merlot',
    category: 'wine', subcategory: 'red',
    varietal: 'Merlot',
    region: 'Sicily, Italy',
    blurb: 'Medium-bodied with plum, blackberry, black cherry, cocoa and soft spice. Smooth tannins and approachable finish.',
    pairings: 'Burgers, pork, roasted vegetables, charcuterie board.',
    tags: ['plum', 'berry', 'chocolate-coffee', 'smooth-tannins']
  },
  {
    id: 'wine-foris-fly-over',
    name: 'Foris Vineyard "Fly Over" Red Blend',
    category: 'wine', subcategory: 'red',
    varietal: 'Red Blend (Cabernet Sauvignon, Syrah, Tempranillo & others)',
    region: 'Rogue Valley, Oregon, USA',
    blurb: 'Medium to full-bodied. Blackberry, dark cherry, blueberry, baking spice and mocha with balanced acidity.',
    pairings: 'Steak, barbecue, lamb, hearty pasta dishes.',
    tags: ['berry', 'chocolate-coffee', 'spice', 'bold-tannic', 'bbq']
  },
  {
    id: 'wine-domaine-garriguettes',
    name: 'Domaine des Garriguettes "Fleur de Lune" Rouge',
    category: 'wine', subcategory: 'red',
    varietal: 'Grenache, Syrah, Carignan Blend',
    region: 'Southern Rhône, France',
    blurb: 'Ripe raspberry, blackberry, herbs, pepper and subtle earthy notes. Medium-bodied with smooth tannins.',
    pairings: 'Lamb, grilled meats, charcuterie, roasted vegetables, pasta dishes.',
    tags: ['berry', 'herbal', 'spice', 'earthy', 'smooth-tannins']
  },
  {
    id: 'wine-spier-block-5',
    name: 'Spier "Creative Block 5"',
    category: 'wine', subcategory: 'red',
    varietal: 'Cabernet Sauvignon-based Bordeaux Blend',
    region: 'Stellenbosch, South Africa',
    blurb: 'Full-bodied. Blackcurrant, cassis, cedar, dark chocolate and firm structure. Elegant and age-worthy.',
    pairings: 'Ribeye, aged cheddar.',
    tags: ['cassis', 'chocolate-coffee', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-conejo-malbec',
    name: 'Conejo Verde Malbec',
    category: 'wine', subcategory: 'red',
    varietal: 'Malbec',
    region: 'Mendoza, Argentina',
    blurb: 'Full-bodied with blackberry, plum, blueberry, cocoa and violet. Smooth finish with moderate tannins.',
    pairings: 'Steak, chimichurri, burgers, barbecue, blue cheese.',
    tags: ['berry', 'plum', 'chocolate-coffee', 'floral', 'bbq']
  },
  {
    id: 'wine-amulet-cabernet',
    name: 'Amulet Estate "75 Wine Company" Cabernet Sauvignon',
    category: 'wine', subcategory: 'red',
    varietal: 'Cabernet Sauvignon',
    region: 'California, USA',
    blurb: 'Full-bodied with blackberry, plum, black pepper, vanilla, cedar and baking spice with structured tannins.',
    pairings: 'Ribeye, New York strip, pork chops, aged cheeses.',
    tags: ['berry', 'plum', 'spice', 'vanilla', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-cavallo-syrah',
    name: 'Cavallo Syrah',
    category: 'wine', subcategory: 'red',
    varietal: 'Syrah',
    region: 'Western Cape, South Africa',
    blurb: 'Full-bodied with blackberry, plum, black pepper, smoked meat and dark chocolate. Rich with savoury complexity.',
    pairings: 'Lamb, grilled steak, smoked meats, barbecue.',
    tags: ['berry', 'smoky', 'chocolate-coffee', 'savory-umami', 'bbq']
  },
  {
    id: 'wine-gate22-navigator',
    name: 'Gate 22 "The Navigator" Cabernet Sauvignon',
    category: 'wine', subcategory: 'red',
    varietal: 'Cabernet Sauvignon',
    region: 'British Columbia, Canada',
    blurb: 'Rich black cherry, cassis, blackberry, cedar and firm but balanced tannins.',
    pairings: 'Steak, mushrooms, hard cheeses.',
    tags: ['cassis', 'berry', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-mary-taylor-bordeaux',
    name: 'Mary Taylor Bordeaux Rouge',
    category: 'wine', subcategory: 'red',
    varietal: 'Merlot & Cabernet Sauvignon Blend',
    region: 'Bordeaux, France',
    blurb: 'Medium-bodied. Black cherry, plum, cedar, tobacco and earthy minerality with refreshing acidity.',
    pairings: 'Red meat, mushroom dishes, charcuterie.',
    tags: ['plum', 'earthy', 'savory-umami', 'medium-body']
  },
  {
    id: 'wine-tenuta-fanti',
    name: 'Tenuta Fanti "Poggio Torto" IGT ("Baby Super Tuscan")',
    category: 'wine', subcategory: 'red',
    varietal: 'Sangiovese, Merlot & Cabernet Blend',
    region: 'Tuscany, Italy',
    blurb: 'Medium to full-bodied. Cherry, blackberry, herbs, leather, tobacco and balanced oak. Lively acidity.',
    pairings: 'Red meat, charcuterie.',
    tags: ['berry', 'earthy', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-corral-de-campanas',
    name: 'Corral de Campanas Tinta de Toro',
    category: 'wine', subcategory: 'red',
    varietal: 'Tempranillo (Tinta de Toro)',
    region: 'Toro, Spain',
    blurb: 'Full-bodied. Blackberry, black plum, espresso, dark chocolate and spice with bold tannins. Powerful and concentrated.',
    pairings: 'Ribeye, charcuterie, hearty pasta.',
    tags: ['berry', 'chocolate-coffee', 'spice', 'bold-tannic']
  },
  {
    id: 'wine-castello-di-radda',
    name: 'Castello di Radda Chianti Classico',
    category: 'wine', subcategory: 'red',
    varietal: 'Sangiovese',
    region: 'Tuscany, Italy',
    blurb: 'Medium-bodied. Sour cherry, cranberry, dried herbs, leather and earthy minerality with vibrant acidity.',
    pairings: 'Pork, grilled chicken, aged Parmesan.',
    tags: ['berry', 'herbal', 'earthy', 'medium-body']
  }
];

const COCKTAILS = [
  {
    id: 'cocktail-nonnas-bellini',
    name: "Not Your Nonna's Bellini",
    category: 'cocktail', subcategory: 'sangria-sparkling',
    blurb: "Back to the roots — a traditional bellini with our own house take: black pepper & plum with our favourite Spumante. NOT a slush drink.",
    composition: 'Black pepper & plum wine syrup, plum brandy, Spumante.',
    allergens: 'Tannins',
    preset: "Served in a coupe glass, garnished with baby's breath & a mini clothespin.",
    tags: ['sparkling', 'plum', 'spice']
  },
  {
    id: 'cocktail-strawberry-watermelon-sangria',
    name: 'Strawberry Watermelon Rosé Sangria',
    category: 'cocktail', subcategory: 'sangria',
    blurb: 'Fruit forward, touch of sweet, rosé sangria — a splash of summer.',
    composition: 'Rosé wine, white cran & lemon juice, strawberry & watermelon syrup, strawberry liqueur & rose bitters.',
    allergens: 'N/A',
    preset: 'Served in a wine glass with fruit, garnished with a watermelon slice.',
    tags: ['berry', 'sweet', 'light', 'floral']
  },
  {
    id: 'cocktail-cherry-berry-sangria',
    name: 'Cherry Berry Red Sangria',
    category: 'cocktail', subcategory: 'sangria',
    blurb: "You'll never ask for a standard red sangria again — bittersweet, stonefruit forward, not your typical red sangria.",
    composition: 'Red wine, cranberry, cherry, and lemon juice, strawberry syrup, strawberry liqueur.',
    allergens: 'N/A',
    preset: 'Served in a wine glass with fruit, garnished with a fresh cherry.',
    tags: ['berry', 'stone-fruit', 'bittersweet']
  },
  {
    id: 'cocktail-kiwinichiwa-mojito',
    name: "Kiwi'nichiwa Mojito",
    category: 'cocktail', subcategory: 'mojito',
    blurb: "You'll never ask for a standard mojito again — after this one, you'll feel refreshed all summer long.",
    composition: 'Secret Barrel White Rum, sake, kiwi syrup, muddled kiwi, lime juice, mint, soda.',
    allergens: 'N/A',
    preset: 'Served in a collins glass, garnished with a mint sprig and dehydrated lime wheel.',
    tags: ['tropical', 'herbal', 'light', 'crisp']
  },
  {
    id: 'cocktail-berry-smooth-operator',
    name: 'Berry Smooth Operator',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'Refreshing, smooth, well balanced. Pineapple & lemon for brightness, silky egg-white foam — if you like a tequila sour, you\'ll enjoy this.',
    composition: 'Cimmaron Blanco Tequila, blueberry syrup, pineapple & lemon juice, egg whites.',
    allergens: 'Egg',
    preset: 'Served in a dbl rocks glass over a king cube, garnished with bitters, dehydrated lime and a blueberry.',
    tags: ['tropical', 'citrus', 'berry', 'silky-egg-white']
  },
  {
    id: 'cocktail-overboard',
    name: 'Overboard',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'A bold mango margarita, topped with a bubble-bath salt foam that rounds out the balance of fruit, salt and tequila.',
    composition: 'Cimmaron Reposado Tequila, Montenegro, mango syrup, lime juice.',
    allergens: 'Soy',
    preset: 'Served in a collins glass with a Tajín rim, garnished with salt foam.',
    tags: ['tropical', 'sweet-savory', 'spicy']
  },
  {
    id: 'cocktail-barbaretta-caesar',
    name: 'Barbaretta Caesar',
    category: 'cocktail', subcategory: 'signature',
    blurb: "Partnering with all things local — here's the next best caesar. Snack on top, spice rack vodka, and don't forget the horseradish.",
    composition: 'House-made bbq sauce, tabasco, horseradish, Spice Rack Vodka, Clamato, Spice CO dust rim, pickle, jerky.',
    allergens: 'Fish, jerky, dairy, soy, garlic',
    preset: 'Served in a dbl rocks glass, Spice CO dust rim, skewered snack, lime wedge, and an 8" straw.',
    tags: ['savory-umami', 'spicy', 'seafood']
  },
  {
    id: 'cocktail-totally-wired',
    name: 'Totally Wired',
    category: 'cocktail', subcategory: 'signature',
    blurb: "Doing what we do best — challenging the norm for espresso martinis. Packed with flavour, not just a caffeine kick.",
    composition: 'Espresso-infused Cimmaron Blanco tequila, Alma Tepec, Black Diamond Coffee Liqueur, Grand Marnier, espresso, simple syrup, dash of black pepper tincture.',
    allergens: 'Caffeine',
    preset: 'Served in a martini glass, garnished with an espresso salt brush.',
    tags: ['chocolate-coffee', 'spice', 'bold']
  },
  {
    id: 'cocktail-hubba-hubba',
    name: 'Hubba Hubba',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'Feeling nostalgic — cheers to your childhood love of Hubba Bubba.',
    composition: 'Hubba Bubba-infused vodka, Galliano, white cranberry, lemon and lime juice, strawberry & simple syrup.',
    allergens: 'N/A',
    preset: 'Served in a coupe glass, garnished with a sour ribbon.',
    tags: ['sweet', 'berry', 'citrus', 'nostalgic']
  },
  {
    id: 'cocktail-london-london-bridge',
    name: 'London London Bridge',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'London fog, meet cocktail — our own whiskey/gin creation.',
    composition: 'Empress Indigo gin, amaretto, earl grey syrup, lavender syrup, lemon juice, egg whites.',
    allergens: 'Egg',
    preset: 'Served in a dbl rocks glass, garnished with lavender buds.',
    tags: ['floral', 'tea', 'silky-egg-white']
  },
  {
    id: 'cocktail-playing-with-fire',
    name: 'Playing with Fire',
    category: 'cocktail', subcategory: 'whiskey',
    blurb: 'A classic with a twist — enjoy a great old fashioned with a smoky flavour.',
    composition: 'Woodford Reserve, sugar cube, aromatic Middleton bitters, dark cherry, and orange.',
    allergens: 'N/A',
    preset: 'Served in a dbl rocks glass over a round cube, garnished with a smoked orange twist and skewered dark cherry.',
    tags: ['smoky', 'bold-tannic', 'stone-fruit']
  },
  {
    id: 'cocktail-black-velvet',
    name: 'Black Velvet (if you please)',
    category: 'cocktail', subcategory: 'whiskey',
    blurb: 'Our signature cocktail-and-wine-list meet — consider this an entry-level step into the smoky and bold section.',
    composition: 'Elijah Craig Bourbon, cabernet sauvignon, blackberry syrup, lime juice.',
    allergens: 'Tannins',
    preset: 'Served in a dbl rocks glass over a round cube, garnished with two skewered blackberries.',
    tags: ['smoky', 'berry', 'bold-tannic']
  },
  {
    id: 'cocktail-honey-old-fashioned',
    name: "Honey, I'm Old Fashioned",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: 'The flavour profile of a warm spiced old fashioned, with the refreshing mouthfeel of a whiskey sour.',
    composition: 'Brothers Bond Bourbon, spiced honey syrup, lemon juice, aromatic Middleton bitters, star anise, orange, rosemary.',
    allergens: 'Honey — flag for customers with a honey/bee-product sensitivity',
    preset: 'Served in a dbl rocks glass over a king cube, garnished with star anise, rosemary sprig, and lemon zest.',
    tags: ['spice', 'citrus', 'sweet', 'herbal']
  },
  {
    id: 'cocktail-cherry-bomb',
    name: 'Cherry Bomb',
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "House-made cherry soda and bourbon — it'll have you singing \"cha cha cherry bomb.\"",
    composition: 'Elijah Craig Bourbon, cabernet sauvignon, cherry juice, chocolate & cherry syrup, chocolate Middleton bitters, cherry soda.',
    allergens: 'Tannins',
    preset: 'Served in a dbl rocks glass over a king cube, garnished with a single skewered dark cherry.',
    tags: ['chocolate-coffee', 'stone-fruit', 'bold-tannic']
  },
  {
    id: 'cocktail-golden-cobbler',
    name: 'Golden Cobbler',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'A white port spritzer — fruity, fresh, and inviting.',
    composition: 'Quevado white port, Galliano, Grand Marnier, simple syrup, spiced honey, orange slice.',
    allergens: 'N/A',
    preset: 'Served in a collins glass, garnished with a mint sprig and skewered blackberry.',
    tags: ['sparkling', 'citrus', 'sweet', 'floral']
  },
  {
    id: 'cocktail-spill-the-tea',
    name: 'Spill the Tea',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'Blueberry tea and iced teas loved since childhood.',
    composition: 'Bergamotto Fantastico, Toastee Amaretto, orange vanilla syrup, lemon juice, orange pekoe tea, blueberry syrup, popping boba, dehydrated orange.',
    allergens: 'N/A',
    preset: 'Served in a collins glass with fruit, garnished with dehydrated orange.',
    tags: ['tea', 'berry', 'citrus', 'sweet']
  },
  {
    id: 'cocktail-cold-morning-pick',
    name: 'Cold Morning Pick',
    category: 'cocktail', subcategory: 'shot',
    blurb: 'A blueberry shot — herbal & sweet.',
    composition: 'Cimmaron Blanco Tequila, Salvia & Limone, blueberry syrup, grapefruit juice, sage leaf.',
    allergens: 'N/A',
    preset: 'Served in a shot glass, presented on a side plate with a cocktail napkin.',
    tags: ['herbal', 'berry', 'citrus']
  },
  {
    id: 'cocktail-pick-me-up',
    name: 'Pick Me Up',
    category: 'cocktail', subcategory: 'shot',
    blurb: 'A raspberry shot — bittersweet.',
    composition: 'Elderflower Rose Gin, Salvia & Limone, raspberry syrup.',
    allergens: 'N/A',
    preset: 'Served in a shot glass, presented on a side plate with a cocktail napkin.',
    tags: ['berry', 'floral', 'bittersweet']
  },
  {
    id: 'cocktail-last-pick',
    name: 'Last Pick',
    category: 'cocktail', subcategory: 'shot',
    blurb: 'A strawberry shot — savoury & sweet.',
    composition: 'Secret Barrel White Rum, strawberry liqueur, lemon juice, balsamic vinegar, black pepper tincture.',
    allergens: 'N/A',
    preset: 'Served in a shot glass, presented on a side plate with a cocktail napkin.',
    tags: ['berry', 'sweet-savory', 'spice']
  },
  {
    id: 'mocktail-cloud-nine',
    name: 'Cloud Nine',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'A blood orange amaretto sour — but make it non-alcoholic.',
    composition: 'Noa Amaretto (non-alc), blood orange syrup, lemon juice, egg whites, orange-cranberry bitters.',
    allergens: 'Egg',
    preset: 'Served in a coupe glass, garnished with blood orange.',
    tags: ['citrus', 'silky-egg-white', 'non-alcoholic']
  },
  {
    id: 'mocktail-mystic-magic',
    name: 'Mystic Magic',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'A silky mouthfeel, balanced between almond and floral flavours.',
    composition: 'Pea flower-infused Seedlip Garden (non-alc), almond milk, lemon juice, almond orgeat syrup.',
    allergens: 'Nut',
    preset: 'Served in a dbl rocks glass over a pea flower.',
    tags: ['nutty', 'floral', 'non-alcoholic']
  },
  {
    id: 'mocktail-cucumber-spritz',
    name: 'Cucumber Spritz',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'A hugo-spritz-style, tea-inspired mocktail — very refreshing.',
    composition: 'Cucumber, chamomile & elderflower syrup, lime juice, soda.',
    allergens: 'N/A',
    preset: 'Served in a wine glass, garnished with elderflower buds and a cucumber ribbon.',
    tags: ['herbal', 'floral', 'crisp', 'non-alcoholic']
  },
  {
    id: 'mocktail-pina-not-a-colada',
    name: 'Pina Not a Colada',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'An orange creamsicle margarita — but make it non-alcoholic.',
    composition: 'Juniper agave, vanilla coconut syrup, orange and lime juice.',
    allergens: 'N/A',
    preset: 'Served in a dbl rocks glass with an orange sugar rim, garnished with a dehydrated orange.',
    tags: ['tropical', 'citrus', 'sweet', 'non-alcoholic']
  }
];

const WELL_LIQUORS = [
  { spirit: 'Vodka', brand: 'Easy Vodka / Snake Lake' },
  { spirit: 'Rum', brand: 'Diplomatico White Rum' },
  { spirit: 'Gin', brand: 'Anohka' },
  { spirit: 'Tequila', brand: 'Cimmaron Blanco (premium upgrade: Cimmaron Reposado)' },
  { spirit: 'Rye/Whiskey', brand: 'Reifel Rye' }
];

const FOOD = [
  {
    id: 'food-crispy-brussel-sprouts',
    name: 'Crispy Brussel Sprouts',
    category: 'food', subcategory: 'starter',
    blurb: 'Your new favourite way to eat brussels — hot honey glaze, creamy citrus aioli, with a crunch.',
    composition: 'Citrus aioli, toasted almonds, pickled shallot, hot honey glaze, brussels sprouts, pickled fresno.',
    allergens: 'Nuts, nightshade, gluten cross-contamination',
    preset: 'N/A',
    tags: ['sweet-savory', 'crunchy', 'nutty']
  },
  {
    id: 'food-bacon-and-eggs',
    name: 'Bacon & Eggs',
    category: 'food', subcategory: 'starter',
    blurb: 'Gluten aware — ask and you shall receive, just like Barbacoa. Can sub GF.',
    composition: 'Bacon marmalade, grainy mustard aioli, pickled jalapeño, maple gastrique, bacon lardon.',
    allergens: 'Egg, pork, nightshade',
    preset: 'N/A',
    tags: ['savory-umami', 'smoky', 'sweet-savory']
  },
  {
    id: 'food-dip-trio',
    name: 'Dip Trio',
    category: 'food', subcategory: 'starter',
    blurb: 'Whipped ricotta & truffle honey, charred corn & bacon, and dill pickle dip — not GF.',
    composition: 'Barbaretta ricotta, truffle oil, honey, bacon marmalade, charred corn, cream cheese, sour cream, mayo, fresh dill, house pickles, buttermilk, micro greens.',
    allergens: 'Dairy, pork, gluten, egg, garlic',
    preset: 'N/A',
    tags: ['creamy', 'savory-umami', 'earthy']
  },
  {
    id: 'food-sui-mai',
    name: 'Sui Mai',
    category: 'food', subcategory: 'starter',
    blurb: 'Juicy pork and shrimp dumpling, cradled in a steamed wonton wrapper — guest favourite since day one. Comes in 3, can add one.',
    composition: 'Grove City ground pork & prawn dumpling, wonton wrapper, pickled fresno, truffle aioli, chili crunch, cilantro, crispy shallots.',
    allergens: 'Shellfish, pork, gluten, nightshade, soy, sesame, garlic, cilantro',
    preset: 'N/A',
    tags: ['savory-umami', 'spicy', 'seafood']
  },
  {
    id: 'food-burrata',
    name: 'Burrata',
    category: 'food', subcategory: 'starter',
    blurb: 'No need to decide between GF crackers or sourdough — we give you it all. Creamy burrata.',
    composition: 'Burrata, heirloom tomato, charred tomato vinaigrette, pistachio crumble, pomegranate seeds, basil oil, basil, Maldon salt, sourdough.',
    allergens: 'Dairy, gluten, nuts, nightshade, garlic',
    preset: 'Cheese knife.',
    tags: ['creamy', 'nutty', 'fresh']
  },
  {
    id: 'food-smoked-wings',
    name: 'Smoked Wings',
    category: 'food', subcategory: 'starter',
    blurb: "No need to decide between wing or flat — we give you it all.",
    composition: 'Sweet chili + ginger glaze, blue cheese/ranch dressing.',
    allergens: 'Dairy, soy, gluten cross-contamination, garlic',
    preset: 'Side plate for bones, finger bowl and sweater/napkin offered.',
    tags: ['smoky', 'spicy', 'sweet-savory']
  },
  {
    id: 'food-goat-cheese-croquettes',
    name: 'Goat Cheese Croquettes',
    category: 'food', subcategory: 'starter',
    blurb: 'Warm cheese with a little spice and a refreshing twist.',
    composition: 'Fried goat cheese, pistachio crumb, hot honey glaze, pickled strawberries.',
    allergens: 'Dairy, gluten, nuts, nightshade',
    preset: 'N/A',
    tags: ['creamy', 'sweet-savory', 'nutty']
  },
  {
    id: 'food-barbaretta-board',
    name: 'Barbaretta Board',
    category: 'food', subcategory: 'starter',
    blurb: 'A mix of made-in-house and local — featuring cheeses from Barbaretta and Lakeside, accompanied with meats from Brickhouse. Cheese stays, meat rotates.',
    composition: 'Lakeside alpine, chaga, and Barbaretta ricotta; rotating Brickhouse jerky, sausage and pepperoni; pickled veg, house jam, grainy mustard, olives, and a Barbaretta cracker.',
    allergens: 'Dairy, gluten, rotating allergens (ask about current meat selection)',
    preset: 'Served on plate with gold spoons and a cheese knife.',
    tags: ['savory-umami', 'creamy', 'shareable']
  },
  {
    id: 'food-carpaccio',
    name: 'Carpaccio',
    category: 'food', subcategory: 'salad',
    blurb: 'Spiced Asian-inspired carpaccio.',
    composition: 'North Country beef tenderloin, pickled pear, gochujang sesame vinaigrette, pickled carrots, goat cheese, green goddess dressing, wonton crackers.',
    allergens: 'Gluten, nightshade, sesame, garlic',
    preset: 'N/A',
    tags: ['savory-umami', 'spicy', 'fresh']
  },
  {
    id: 'food-market-bowl',
    name: 'Market Bowl',
    category: 'food', subcategory: 'salad',
    blurb: 'A summer salad, with a choice of grilled chicken breast or garlic prawns.',
    composition: 'Fresh greens, arugula, pickled golden beets, quinoa, pickled carrots, goat cheese, green goddess dressing, avocado.',
    allergens: 'Avocado, dairy, garlic',
    preset: 'N/A',
    tags: ['fresh', 'creamy', 'light']
  },
  {
    id: 'food-crispy-chicken-salad',
    name: 'Crispy Chicken Salad',
    category: 'food', subcategory: 'salad',
    blurb: 'Crispy fried chicken over a bed of baby greens, charred corn, and chaga cheddar, herbed ranch for a balance of crunch, fresh, and creamy.',
    composition: 'KFC chicken thigh, baby greens, shaved radish, pickled shallots, charred corn, toasted pecans, lakeside chaga cheddar, buttermilk herb ranch, hickory sticks.',
    allergens: 'Dairy, gluten, nuts, garlic',
    preset: 'N/A',
    tags: ['crunchy', 'creamy', 'savory-umami']
  },
  {
    id: 'food-bulgogi-blue-steak-salad',
    name: 'Bulgogi Blue Steak Salad',
    category: 'food', subcategory: 'salad',
    blurb: 'Sweet and savoury Korean-style flavours, baby greens, grilled vegetables, tangy blue cheese dressing.',
    composition: 'Bulgogi-marinated North Country sirloin, baby greens, arugula, pickled fresno, grilled bell peppers, pickled pears, charred scallions, buttermilk blue cheese dressing, crispy wontons.',
    allergens: 'Dairy, gluten, nightshade, soy, garlic',
    preset: 'Steak knife.',
    tags: ['savory-umami', 'sweet-savory', 'smoky']
  },
  {
    id: 'food-kfc',
    name: 'KFC',
    category: 'food', subcategory: 'main',
    blurb: "Messy but worth it — we'll bring you extra napkins.",
    composition: 'KFC chicken thigh, gochujang maple glaze, togarashi aioli, cucumber pickled salad, brioche bun.',
    allergens: 'Gluten, nightshade, sesame, garlic, egg, dairy',
    preset: 'Extra napkins.',
    tags: ['sweet-savory', 'spicy', 'crunchy']
  },
  {
    id: 'food-truffle-mushroom-burger',
    name: 'Truffle Mushroom Lux Burger',
    category: 'food', subcategory: 'main',
    blurb: 'Go big or go home — swapping out the smash for a step up featuring a thick and gooey mornay sauce.',
    composition: 'Truffle gruyère mornay, sautéed mushrooms, grilled onions, baby greens, grainy mustard aioli, 6oz AAA Grove City ground beef patty on a brioche bun.',
    allergens: 'Gluten, dairy, egg, garlic, soy',
    preset: 'N/A',
    tags: ['savory-umami', 'creamy', 'earthy']
  },
  {
    id: 'food-halibut',
    name: 'Halibut',
    category: 'food', subcategory: 'main',
    blurb: 'Pistachio-crusted halibut (very juicy, white fish) served with a rhubarb beurre blanc (white wine butter sauce).',
    composition: 'Pistachio-crusted halibut, rhubarb beurre blanc, grilled asparagus, pickled shallots, strawberry vinaigrette.',
    allergens: 'Dairy, gluten, seafood, nut, garlic',
    preset: 'N/A',
    tags: ['seafood', 'nutty', 'creamy', 'fruit-forward']
  },
  {
    id: 'food-chicken-risotto',
    name: 'Chicken & Risotto',
    category: 'food', subcategory: 'main',
    blurb: 'Creamy risotto, fresh veggies, lemon gremolata, accompanied with herb/lemon chicken supreme.',
    composition: 'Lemon-herbed chicken supreme, peas, asparagus, risotto, smoked gouda, lemon gremolata.',
    allergens: 'Dairy, gluten, garlic',
    preset: 'N/A',
    tags: ['creamy', 'citrus', 'comfort']
  },
  {
    id: 'food-north-country-steak',
    name: 'North Country Steak',
    category: 'food', subcategory: 'main',
    blurb: 'Traditional composed steak dinner, with options for house butters, prawns, and mushrooms.',
    composition: '12oz ribeye or 10oz striploin, warm potato salad (corn, celery, bacon marmalade, egg), grilled vegetable.',
    allergens: 'Dairy, egg, pork',
    preset: 'Steak knife.',
    tags: ['meaty-beef', 'savory-umami', 'smoky']
  },
  {
    id: 'food-pork-chop',
    name: 'Pork Chop',
    category: 'food', subcategory: 'main',
    blurb: 'Pork chop cooked to the chef\'s recommendation of medium.',
    composition: 'Maple chili-glazed pork chop, roasted fingerling potatoes, grilled corn & jalapeño salsa, cilantro, hickory sticks.',
    allergens: 'Pork, nightshade, garlic, soy, gluten cross-contamination, cilantro',
    preset: 'Steak knife.',
    tags: ['sweet-savory', 'spicy', 'smoky']
  },
  {
    id: 'food-linguini',
    name: 'Linguini',
    category: 'food', subcategory: 'main',
    blurb: 'Creamy basil pesto, heirloom tomatoes, burrata, basil gremolata.',
    composition: 'Pesto, burrata, heirloom tomatoes, choice of grilled chicken breast, halibut, or garlic prawns.',
    allergens: 'Dairy, gluten, nightshade, garlic',
    preset: 'Soup spoon.',
    tags: ['creamy', 'herbal', 'fresh']
  },
  {
    id: 'food-taco',
    name: 'Taco',
    category: 'food', subcategory: 'main',
    blurb: 'Two refreshing tacos with your choice of tempura fried halibut, or blackened chicken.',
    composition: 'Grilled flour tortilla, corn & jalapeño salsa, pickled shallots, jalapeño chipotle crema, crispy fried brussel sprouts, cilantro, citrus aioli cabbage.',
    allergens: 'Gluten, dairy, nightshade, garlic, cilantro',
    preset: 'N/A',
    tags: ['spicy', 'fresh', 'crunchy']
  },
  {
    id: 'food-white-chocolate-cheesecake',
    name: 'White Chocolate Cheesecake',
    category: 'food', subcategory: 'dessert',
    blurb: 'Jarred and sous vide cheesecake — creating a perfect consistency, texture, and overall cook.',
    composition: 'Sous vide cheesecake, rhubarb & strawberry jam, dehydrated strawberries, graham crumb.',
    allergens: 'Dairy, gluten, egg',
    preset: 'Dessert spoon.',
    tags: ['creamy', 'sweet', 'chocolate-coffee', 'fruit-forward']
  },
  {
    id: 'food-sticky-toffee-pudding',
    name: 'Sticky Toffee Pudding',
    category: 'food', subcategory: 'dessert',
    blurb: "Staff favourite — rich, cozy, indulgent. Brought out first.",
    composition: 'Spongy date cake, toffee sauce, vanilla ice cream.',
    allergens: 'Eggs, gluten, dairy',
    preset: 'Dessert spoon.',
    tags: ['sweet', 'creamy', 'comfort']
  },
  {
    id: 'food-chimichurri-butter',
    name: 'Chimichurri Butter',
    category: 'food', subcategory: 'sauce',
    blurb: 'House-made compound butter, infused with parsley, oregano, and chillies.',
    composition: 'Fresno chillies, parsley, oregano, butter, garlic.',
    allergens: 'Dairy, garlic, nightshade',
    preset: 'N/A',
    tags: ['herbal', 'spicy', 'savory-umami']
  },
  {
    id: 'food-cowboy-butter',
    name: 'Cowboy Butter',
    category: 'food', subcategory: 'sauce',
    blurb: 'Think BBQ smokey flavour — our house-made cajun spice, used throughout the menu.',
    composition: 'Butter, house-made cajun spice.',
    allergens: 'Dairy, garlic',
    preset: 'N/A',
    tags: ['bbq', 'smoky', 'savory-umami']
  },
  {
    id: 'food-blue-cheese-butter',
    name: 'Blue Cheese Butter',
    category: 'food', subcategory: 'sauce',
    blurb: 'House-made compound butter with tangy blue cheese.',
    composition: 'Butter, Castello blue cheese.',
    allergens: 'Dairy',
    preset: 'N/A',
    tags: ['creamy', 'savory-umami']
  },
  {
    id: 'food-garlic-mushrooms',
    name: 'Garlic Mushrooms',
    category: 'food', subcategory: 'sauce',
    blurb: 'Garlic butter, wild mushroom mix — thyme, tamari, white wine, kosher salt, black pepper, shallots.',
    composition: 'Garlic butter, wild mushroom mix, thyme, tamari, white wine, kosher salt, black pepper, shallots.',
    allergens: 'Garlic, soy',
    preset: 'N/A',
    tags: ['earthy', 'savory-umami']
  },
  {
    id: 'food-garlic-prawns',
    name: 'Garlic Prawns',
    category: 'food', subcategory: 'sauce',
    blurb: 'Garlic butter, 31-40 count prawns, no tail.',
    composition: 'Garlic butter, prawns (31-40 count, no tail).',
    allergens: 'Garlic, shellfish',
    preset: 'N/A',
    tags: ['seafood', 'savory-umami']
  },
  {
    id: 'food-add-on-chicken-breast',
    name: 'Add-On Chicken Breast',
    category: 'food', subcategory: 'sauce',
    blurb: 'A simple protein add-on for any dish.',
    composition: 'Chicken breast, house rub.',
    allergens: 'Garlic',
    preset: 'N/A',
    tags: ['savory-umami']
  }
];

const ALL_ITEMS = [...WINES, ...COCKTAILS, ...FOOD];
